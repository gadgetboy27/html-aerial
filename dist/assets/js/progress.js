/**
 * LVV Certifier Training Platform - Progress Tracking
 * Handles user progress, achievements, and data persistence
 */

const LVVProgress = {
    STORAGE_KEY: 'lvv_training_progress',

    // Default progress structure
    defaultProgress: {
        version: 1,
        userId: null,
        userName: '',
        startDate: null,
        lastAccess: null,
        modules: {},
        sections: {},
        quizzes: {},
        documents: {
            viewed: [],
            bookmarked: []
        },
        achievements: [],
        totalStudyTime: 0,
        sessionStart: null
    },

    // Current progress data
    data: null,

    // Initialize progress tracking
    init() {
        this.load();
        this.startSession();
        this.setupAutoSave();
        return this;
    },

    // Load progress from localStorage
    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                this.data = JSON.parse(saved);
                // Migrate if needed
                if (this.data.version !== this.defaultProgress.version) {
                    this.migrate();
                }
            } else {
                this.data = { ...this.defaultProgress };
                this.data.startDate = new Date().toISOString();
                this.data.userId = this.generateUserId();
            }
        } catch (e) {
            console.error('Error loading progress:', e);
            this.data = { ...this.defaultProgress };
        }
        this.data.lastAccess = new Date().toISOString();
        this.save();
    },

    // Save progress to localStorage
    save() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.error('Error saving progress:', e);
        }
    },

    // Generate unique user ID
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    // Start a new session
    startSession() {
        this.data.sessionStart = Date.now();
    },

    // Setup auto-save every 30 seconds
    setupAutoSave() {
        setInterval(() => {
            this.updateStudyTime();
            this.save();
        }, 30000);

        // Save on page unload
        window.addEventListener('beforeunload', () => {
            this.updateStudyTime();
            this.save();
        });
    },

    // Update total study time
    updateStudyTime() {
        if (this.data.sessionStart) {
            const sessionTime = Date.now() - this.data.sessionStart;
            this.data.totalStudyTime += sessionTime;
            this.data.sessionStart = Date.now();
        }
    },

    // Migrate old data format
    migrate() {
        // Add migration logic as needed
        this.data.version = this.defaultProgress.version;
        this.save();
    },

    // Set user name
    setUserName(name) {
        this.data.userName = name;
        this.save();
    },

    // ==================== MODULE PROGRESS ====================

    // Mark section as started
    startSection(moduleId, sectionId) {
        if (!this.data.sections[sectionId]) {
            this.data.sections[sectionId] = {
                moduleId: moduleId,
                startedAt: new Date().toISOString(),
                completedAt: null,
                timeSpent: 0
            };
        }
        this.save();
    },

    // Mark section as complete
    completeSection(moduleId, sectionId) {
        if (!this.data.sections[sectionId]) {
            this.startSection(moduleId, sectionId);
        }
        this.data.sections[sectionId].completedAt = new Date().toISOString();
        this.save();

        // Check for module completion
        this.checkModuleCompletion(moduleId);

        // Check for achievements
        this.checkAchievements();
    },

    // Check if section is complete
    isSectionComplete(sectionId) {
        return this.data.sections[sectionId]?.completedAt != null;
    },

    // Get section progress
    getSectionProgress(sectionId) {
        return this.data.sections[sectionId] || null;
    },

    // Check and update module completion
    checkModuleCompletion(moduleId) {
        const module = LVVModules?.getById(moduleId);
        if (!module) return;

        const allSectionsComplete = module.sections.every(s =>
            this.isSectionComplete(s.id)
        );

        if (allSectionsComplete && !this.data.modules[moduleId]?.sectionsComplete) {
            if (!this.data.modules[moduleId]) {
                this.data.modules[moduleId] = {};
            }
            this.data.modules[moduleId].sectionsComplete = true;
            this.data.modules[moduleId].sectionsCompletedAt = new Date().toISOString();
            this.save();
        }
    },

    // ==================== QUIZ PROGRESS ====================

    // Record quiz attempt
    recordQuizAttempt(moduleId, score, totalQuestions, answers) {
        if (!this.data.quizzes[moduleId]) {
            this.data.quizzes[moduleId] = {
                attempts: [],
                bestScore: 0,
                passed: false
            };
        }

        const percentage = Math.round((score / totalQuestions) * 100);
        const attempt = {
            date: new Date().toISOString(),
            score: score,
            total: totalQuestions,
            percentage: percentage,
            answers: answers
        };

        this.data.quizzes[moduleId].attempts.push(attempt);

        if (percentage > this.data.quizzes[moduleId].bestScore) {
            this.data.quizzes[moduleId].bestScore = percentage;
        }

        // Check if passed (70% or module-specific threshold)
        const module = LVVModules?.getById(moduleId);
        const passingScore = module?.quiz?.passingScore || 70;

        if (percentage >= passingScore) {
            this.data.quizzes[moduleId].passed = true;

            // Mark module as complete
            if (!this.data.modules[moduleId]) {
                this.data.modules[moduleId] = {};
            }
            this.data.modules[moduleId].quizPassed = true;
            this.data.modules[moduleId].completedAt = new Date().toISOString();
        }

        this.save();
        this.checkAchievements();

        return {
            percentage,
            passed: percentage >= passingScore,
            bestScore: this.data.quizzes[moduleId].bestScore,
            attemptNumber: this.data.quizzes[moduleId].attempts.length
        };
    },

    // Get quiz stats for module
    getQuizStats(moduleId) {
        return this.data.quizzes[moduleId] || {
            attempts: [],
            bestScore: 0,
            passed: false
        };
    },

    // ==================== DOCUMENT TRACKING ====================

    // Mark document as viewed
    viewDocument(docId) {
        if (!this.data.documents.viewed.includes(docId)) {
            this.data.documents.viewed.push(docId);
            this.save();
            this.checkAchievements();
        }
    },

    // Toggle document bookmark
    toggleBookmark(docId) {
        const index = this.data.documents.bookmarked.indexOf(docId);
        if (index > -1) {
            this.data.documents.bookmarked.splice(index, 1);
        } else {
            this.data.documents.bookmarked.push(docId);
        }
        this.save();
        return this.isBookmarked(docId);
    },

    // Check if document is bookmarked
    isBookmarked(docId) {
        return this.data.documents.bookmarked.includes(docId);
    },

    // Check if document has been viewed
    hasViewed(docId) {
        return this.data.documents.viewed.includes(docId);
    },

    // ==================== ACHIEVEMENTS ====================

    achievements: [
        {
            id: 'first-steps',
            title: 'First Steps',
            description: 'Complete your first section',
            icon: '🎯',
            check: (data) => Object.values(data.sections).some(s => s.completedAt)
        },
        {
            id: 'module-master',
            title: 'Module Master',
            description: 'Complete all sections in a module',
            icon: '📚',
            check: (data) => Object.values(data.modules).some(m => m.sectionsComplete)
        },
        {
            id: 'quiz-ace',
            title: 'Quiz Ace',
            description: 'Score 100% on any quiz',
            icon: '🏆',
            check: (data) => Object.values(data.quizzes).some(q => q.bestScore === 100)
        },
        {
            id: 'persistent',
            title: 'Persistent Learner',
            description: 'Attempt a quiz 3 or more times',
            icon: '💪',
            check: (data) => Object.values(data.quizzes).some(q => q.attempts.length >= 3)
        },
        {
            id: 'document-explorer',
            title: 'Document Explorer',
            description: 'View 10 different documents',
            icon: '📄',
            check: (data) => data.documents.viewed.length >= 10
        },
        {
            id: 'bookworm',
            title: 'Bookworm',
            description: 'View 25 different documents',
            icon: '📖',
            check: (data) => data.documents.viewed.length >= 25
        },
        {
            id: 'five-modules',
            title: 'Half Way There',
            description: 'Complete 5 modules',
            icon: '🌟',
            check: (data) => Object.values(data.modules).filter(m => m.completedAt).length >= 5
        },
        {
            id: 'dedication',
            title: 'Dedicated Student',
            description: 'Study for more than 2 hours total',
            icon: '⏰',
            check: (data) => data.totalStudyTime >= 7200000
        },
        {
            id: 'ors-expert',
            title: 'ORS Expert',
            description: 'View all ORS chapter documents',
            icon: '📋',
            check: (data) => {
                const orsIds = ['ors-main', 'ors-ch1', 'ors-ch2', 'ors-ch3', 'ors-ch4', 'ors-ch5', 'ors-ch6', 'ors-ch7', 'ors-ch8', 'ors-ch9', 'ors-ch10'];
                return orsIds.every(id => data.documents.viewed.includes(id));
            }
        },
        {
            id: 'collector',
            title: 'Bookmark Collector',
            description: 'Bookmark 5 documents',
            icon: '⭐',
            check: (data) => data.documents.bookmarked.length >= 5
        }
    ],

    // Check for new achievements
    checkAchievements() {
        let newAchievements = [];

        this.achievements.forEach(achievement => {
            if (!this.data.achievements.includes(achievement.id)) {
                if (achievement.check(this.data)) {
                    this.data.achievements.push(achievement.id);
                    newAchievements.push(achievement);
                }
            }
        });

        if (newAchievements.length > 0) {
            this.save();
        }

        return newAchievements;
    },

    // Get earned achievements
    getEarnedAchievements() {
        return this.achievements.filter(a => this.data.achievements.includes(a.id));
    },

    // Get available achievements
    getAvailableAchievements() {
        return this.achievements.filter(a => !this.data.achievements.includes(a.id));
    },

    // ==================== STATISTICS ====================

    // Get overall progress statistics
    getStats() {
        const totalModules = LVVModules?.getAll().length || 0;
        const completedModules = Object.values(this.data.modules).filter(m => m.completedAt).length;
        const totalSections = LVVModules?.getAll().reduce((sum, m) => sum + m.sections.length, 0) || 0;
        const completedSections = Object.values(this.data.sections).filter(s => s.completedAt).length;

        const quizzesPassed = Object.values(this.data.quizzes).filter(q => q.passed).length;
        const totalQuizAttempts = Object.values(this.data.quizzes).reduce((sum, q) => sum + q.attempts.length, 0);

        // Calculate average quiz score
        const allScores = Object.values(this.data.quizzes).flatMap(q => q.attempts.map(a => a.percentage));
        const avgScore = allScores.length > 0 ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0;

        // Format study time
        const hours = Math.floor(this.data.totalStudyTime / 3600000);
        const minutes = Math.floor((this.data.totalStudyTime % 3600000) / 60000);

        return {
            modules: {
                completed: completedModules,
                total: totalModules,
                percentage: totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
            },
            sections: {
                completed: completedSections,
                total: totalSections,
                percentage: totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0
            },
            quizzes: {
                passed: quizzesPassed,
                attempts: totalQuizAttempts,
                averageScore: avgScore
            },
            documents: {
                viewed: this.data.documents.viewed.length,
                bookmarked: this.data.documents.bookmarked.length
            },
            achievements: {
                earned: this.data.achievements.length,
                total: this.achievements.length
            },
            studyTime: {
                hours: hours,
                minutes: minutes,
                formatted: `${hours}h ${minutes}m`
            },
            startDate: this.data.startDate,
            daysSinceStart: this.data.startDate ?
                Math.floor((Date.now() - new Date(this.data.startDate).getTime()) / 86400000) : 0
        };
    },

    // Get module progress
    getModuleProgress(moduleId) {
        const module = LVVModules?.getById(moduleId);
        if (!module) return null;

        const sectionCount = module.sections.length;
        const completedCount = module.sections.filter(s => this.isSectionComplete(s.id)).length;

        return {
            moduleId: moduleId,
            sectionsTotal: sectionCount,
            sectionsCompleted: completedCount,
            sectionsPercentage: Math.round((completedCount / sectionCount) * 100),
            allSectionsComplete: completedCount === sectionCount,
            quizStats: this.getQuizStats(moduleId),
            isComplete: this.data.modules[moduleId]?.completedAt != null
        };
    },

    // ==================== DATA EXPORT/IMPORT ====================

    // Export progress data
    exportData() {
        this.updateStudyTime();
        return JSON.stringify(this.data, null, 2);
    },

    // Import progress data
    importData(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            // Validate basic structure
            if (imported.version && imported.modules && imported.sections) {
                this.data = imported;
                this.save();
                return { success: true };
            }
            return { success: false, error: 'Invalid data format' };
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    // Reset all progress
    reset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.data = { ...this.defaultProgress };
            this.data.startDate = new Date().toISOString();
            this.data.userId = this.generateUserId();
            this.save();
            return true;
        }
        return false;
    },

    // Download progress as file
    downloadProgress() {
        const data = this.exportData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `lvv-training-progress-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LVVProgress;
}
