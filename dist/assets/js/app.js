/**
 * LVV Certifier Training Platform - Main Application
 * Handles UI, navigation, and user interactions
 */

const LVVApp = {
    currentView: 'home',
    currentModule: null,
    currentSection: null,

    // Initialize the application
    init() {
        console.log('LVV Training Platform initializing...');

        // Initialize progress tracking
        LVVProgress.init();

        // Setup navigation
        this.setupNavigation();

        // Setup search
        this.setupSearch();

        // Check for hash navigation
        this.handleHashChange();
        window.addEventListener('hashchange', () => this.handleHashChange());

        // Show welcome or resume prompt
        this.checkWelcome();

        console.log('LVV Training Platform ready');
    },

    // Setup navigation event handlers
    setupNavigation() {
        // Navigation links
        document.querySelectorAll('[data-nav]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const view = el.dataset.nav;
                this.navigate(view);
            });
        });
    },

    // Setup search functionality
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length >= 2) {
                    this.performSearch(query);
                } else {
                    this.clearSearchResults();
                }
            });

            searchInput.addEventListener('focus', () => {
                if (searchInput.value.length >= 2) {
                    searchResults?.classList.add('active');
                }
            });

            // Close search results when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-container')) {
                    this.clearSearchResults();
                }
            });
        }
    },

    // Perform search
    performSearch(query) {
        const results = LVVDatabase.search(query);
        this.displaySearchResults(results, query);
    },

    // Display search results
    displaySearchResults(results, query) {
        const container = document.getElementById('search-results');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<div class="search-no-results">No documents found</div>';
        } else {
            const html = results.slice(0, 10).map(doc => `
                <div class="search-result-item" onclick="LVVApp.openDocument('${doc.id}')">
                    <div class="search-result-category" style="background: ${LVVDatabase.categories[doc.category].color}">${doc.category}</div>
                    <div class="search-result-title">${this.highlightText(doc.title, query)}</div>
                    <div class="search-result-desc">${this.highlightText(doc.description.substring(0, 100), query)}...</div>
                </div>
            `).join('');
            container.innerHTML = html;
        }
        container.classList.add('active');
    },

    // Highlight search terms
    highlightText(text, query) {
        const terms = query.split(' ').filter(t => t.length > 0);
        let result = text;
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        });
        return result;
    },

    // Clear search results
    clearSearchResults() {
        const container = document.getElementById('search-results');
        if (container) {
            container.classList.remove('active');
            container.innerHTML = '';
        }
    },

    // Handle URL hash changes
    handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const parts = hash.split('/');
            this.navigate(parts[0], parts.slice(1));
        }
    },

    // Navigate to a view
    navigate(view, params = []) {
        this.currentView = view;
        window.location.hash = params.length > 0 ? `${view}/${params.join('/')}` : view;

        // Update active nav
        document.querySelectorAll('[data-nav]').forEach(el => {
            el.classList.toggle('active', el.dataset.nav === view);
        });

        // Render view
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        switch (view) {
            case 'home':
                this.renderHome();
                break;
            case 'modules':
                if (params[0]) {
                    this.renderModule(params[0], params[1]);
                } else {
                    this.renderModuleList();
                }
                break;
            case 'documents':
                this.renderDocuments(params[0]);
                break;
            case 'progress':
                this.renderProgress();
                break;
            case 'quiz':
                this.renderQuiz(params[0]);
                break;
            default:
                this.renderHome();
        }

        // Scroll to top
        window.scrollTo(0, 0);
    },

    // Check for welcome or resume
    checkWelcome() {
        const stats = LVVProgress.getStats();
        if (stats.sections.completed > 0) {
            // Show resume prompt
            const nextModule = LVVModules.getNextModule(
                Object.keys(LVVProgress.data.modules).filter(id => LVVProgress.data.modules[id].completedAt)
            );
            if (nextModule) {
                this.showNotification(`Welcome back! Continue with Module ${nextModule.number}: ${nextModule.title}`, 'info');
            }
        }
    },

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    },

    // ==================== VIEW RENDERS ====================

    // Render home view
    renderHome() {
        const stats = LVVProgress.getStats();
        const mainContent = document.getElementById('main-content');

        mainContent.innerHTML = `
            <div class="home-view">
                <section class="hero">
                    <h1>LVV Certifier Training Platform</h1>
                    <p class="hero-quote">"To become an LVV Certifier you will need to be technically skilled, vastly experienced, conscientious, independent, reliable, have good people skills, and a high level of integrity."</p>
                    <p class="hero-source">- LVVTA</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary btn-lg" onclick="LVVApp.navigate('modules')">
                            ${stats.sections.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                        </button>
                        <button class="btn btn-secondary btn-lg" onclick="LVVApp.navigate('documents')">
                            Browse Documents
                        </button>
                    </div>
                </section>

                ${stats.sections.completed > 0 ? this.renderProgressSummary(stats) : ''}

                <section class="quick-start">
                    <h2>Quick Start</h2>
                    <div class="card-grid">
                        <div class="card" onclick="LVVApp.navigate('modules', ['mod-1'])">
                            <div class="card-icon">📖</div>
                            <h3>Module 1</h3>
                            <p>Introduction to LVV Certification</p>
                        </div>
                        <div class="card" onclick="LVVApp.openDocument('ors-main')">
                            <div class="card-icon">📋</div>
                            <h3>ORS</h3>
                            <p>Operating Requirements Schedule</p>
                        </div>
                        <div class="card" onclick="LVVApp.openDocument('lvv-code')">
                            <div class="card-icon">⚖️</div>
                            <h3>LVV Code</h3>
                            <p>Legal Framework</p>
                        </div>
                        <div class="card" onclick="LVVApp.openDocument('cert-threshold')">
                            <div class="card-icon">📊</div>
                            <h3>Thresholds</h3>
                            <p>When Certification Required</p>
                        </div>
                    </div>
                </section>

                <section class="features">
                    <h2>Platform Features</h2>
                    <div class="feature-grid">
                        <div class="feature">
                            <h3>🔍 Searchable Documents</h3>
                            <p>Find any LVVTA document instantly with full-text search across all categories.</p>
                        </div>
                        <div class="feature">
                            <h3>📚 Structured Learning</h3>
                            <p>Progress through modules designed to build your knowledge systematically.</p>
                        </div>
                        <div class="feature">
                            <h3>✅ Self-Assessment</h3>
                            <p>Test your understanding with quizzes after each module.</p>
                        </div>
                        <div class="feature">
                            <h3>📈 Progress Tracking</h3>
                            <p>Your progress is saved automatically. Pick up where you left off.</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    },

    // Render progress summary for home
    renderProgressSummary(stats) {
        return `
            <section class="progress-summary">
                <h2>Your Progress</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">${stats.modules.percentage}%</div>
                        <div class="stat-label">Modules Complete</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${stats.modules.percentage}%"></div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${stats.quizzes.passed}</div>
                        <div class="stat-label">Quizzes Passed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${stats.documents.viewed}</div>
                        <div class="stat-label">Documents Viewed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${stats.studyTime.formatted}</div>
                        <div class="stat-label">Study Time</div>
                    </div>
                </div>
            </section>
        `;
    },

    // Render module list
    renderModuleList() {
        const modules = LVVModules.getAll();
        const mainContent = document.getElementById('main-content');

        const moduleCards = modules.map(module => {
            const progress = LVVProgress.getModuleProgress(module.id);
            const prereqsMet = LVVModules.checkPrerequisites(module.id,
                Object.keys(LVVProgress.data.modules).filter(id => LVVProgress.data.modules[id].completedAt)
            );

            return `
                <div class="module-card ${progress.isComplete ? 'complete' : ''} ${!prereqsMet ? 'locked' : ''}"
                     onclick="${prereqsMet ? `LVVApp.navigate('modules', ['${module.id}'])` : ''}">
                    <div class="module-number">Module ${module.number}</div>
                    <h3 class="module-title">${module.title}</h3>
                    <p class="module-desc">${module.description}</p>
                    <div class="module-meta">
                        <span class="module-difficulty ${module.difficulty}">${module.difficulty}</span>
                        <span class="module-time">${module.estimatedTime}</span>
                    </div>
                    <div class="module-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress.sectionsPercentage}%"></div>
                        </div>
                        <span>${progress.sectionsCompleted}/${progress.sectionsTotal} sections</span>
                    </div>
                    ${progress.isComplete ? '<div class="module-badge">✓ Complete</div>' : ''}
                    ${!prereqsMet ? '<div class="module-locked">🔒 Complete prerequisites first</div>' : ''}
                </div>
            `;
        }).join('');

        mainContent.innerHTML = `
            <div class="modules-view">
                <header class="view-header">
                    <h1>Learning Modules</h1>
                    <p>Work through these modules to build your LVV certification knowledge.</p>
                </header>
                <div class="module-grid">
                    ${moduleCards}
                </div>
            </div>
        `;
    },

    // Render single module
    renderModule(moduleId, sectionId = null) {
        const module = LVVModules.getById(moduleId);
        if (!module) {
            this.renderModuleList();
            return;
        }

        this.currentModule = module;
        const progress = LVVProgress.getModuleProgress(moduleId);

        // Find current section
        let currentSection = sectionId ?
            module.sections.find(s => s.id === sectionId) :
            module.sections[0];

        this.currentSection = currentSection;

        const mainContent = document.getElementById('main-content');

        // Section navigation
        const sectionNav = module.sections.map((section, index) => {
            const isComplete = LVVProgress.isSectionComplete(section.id);
            const isCurrent = section.id === currentSection.id;
            return `
                <div class="section-nav-item ${isCurrent ? 'current' : ''} ${isComplete ? 'complete' : ''}"
                     onclick="LVVApp.navigate('modules', ['${moduleId}', '${section.id}'])">
                    <span class="section-num">${index + 1}</span>
                    <span class="section-title">${section.title}</span>
                    ${isComplete ? '<span class="section-check">✓</span>' : ''}
                </div>
            `;
        }).join('');

        // Related documents
        const relatedDocs = module.relatedDocs.map(docId => {
            const doc = LVVDatabase.getById(docId);
            if (!doc) return '';
            return `
                <div class="related-doc" onclick="LVVApp.openDocument('${doc.id}')">
                    <span class="doc-category" style="background: ${LVVDatabase.categories[doc.category].color}">${doc.category}</span>
                    <span class="doc-title">${doc.title}</span>
                </div>
            `;
        }).join('');

        // Key points
        const keyPoints = currentSection.keyPoints ?
            currentSection.keyPoints.map(point => `<li>${point}</li>`).join('') : '';

        mainContent.innerHTML = `
            <div class="module-view">
                <header class="module-header">
                    <a href="#modules" class="back-link">&larr; All Modules</a>
                    <div class="module-title-row">
                        <span class="module-number">Module ${module.number}</span>
                        <h1>${module.title}</h1>
                    </div>
                    <div class="module-progress-bar">
                        <div class="progress-fill" style="width: ${progress.sectionsPercentage}%"></div>
                    </div>
                </header>

                <div class="module-layout">
                    <aside class="module-sidebar">
                        <nav class="section-nav">
                            <h3>Sections</h3>
                            ${sectionNav}
                        </nav>

                        ${module.relatedDocs.length > 0 ? `
                            <div class="related-documents">
                                <h3>Related Documents</h3>
                                ${relatedDocs}
                            </div>
                        ` : ''}

                        ${progress.allSectionsComplete ? `
                            <div class="quiz-prompt">
                                <h3>Ready for the Quiz?</h3>
                                <p>You've completed all sections!</p>
                                <button class="btn btn-primary" onclick="LVVApp.navigate('quiz', ['${moduleId}'])">
                                    Take Quiz
                                </button>
                            </div>
                        ` : ''}
                    </aside>

                    <main class="section-content">
                        <article class="section-article">
                            <h2>${currentSection.title}</h2>
                            <div class="content-body">
                                ${currentSection.content}
                            </div>

                            ${keyPoints ? `
                                <div class="key-points">
                                    <h3>Key Points to Remember</h3>
                                    <ul>${keyPoints}</ul>
                                </div>
                            ` : ''}
                        </article>

                        <div class="section-actions">
                            ${!LVVProgress.isSectionComplete(currentSection.id) ? `
                                <button class="btn btn-success" onclick="LVVApp.markSectionComplete('${moduleId}', '${currentSection.id}')">
                                    Mark as Complete ✓
                                </button>
                            ` : `
                                <span class="completed-badge">✓ Section Complete</span>
                            `}

                            ${this.getNextSectionButton(module, currentSection)}
                        </div>
                    </main>
                </div>
            </div>
        `;

        // Track section start
        LVVProgress.startSection(moduleId, currentSection.id);
    },

    // Get next section button
    getNextSectionButton(module, currentSection) {
        const currentIndex = module.sections.findIndex(s => s.id === currentSection.id);
        const nextSection = module.sections[currentIndex + 1];

        if (nextSection) {
            return `
                <button class="btn btn-primary" onclick="LVVApp.navigate('modules', ['${module.id}', '${nextSection.id}'])">
                    Next: ${nextSection.title} &rarr;
                </button>
            `;
        } else {
            return `
                <button class="btn btn-primary" onclick="LVVApp.navigate('quiz', ['${module.id}'])">
                    Take Module Quiz &rarr;
                </button>
            `;
        }
    },

    // Mark section as complete
    markSectionComplete(moduleId, sectionId) {
        LVVProgress.completeSection(moduleId, sectionId);

        // Check for achievements
        const newAchievements = LVVProgress.checkAchievements();
        newAchievements.forEach(a => {
            this.showNotification(`Achievement Unlocked: ${a.icon} ${a.title}`, 'success');
        });

        // Re-render module
        this.renderModule(moduleId, sectionId);
    },

    // Render documents view
    renderDocuments(categoryFilter = null) {
        const mainContent = document.getElementById('main-content');
        const categories = Object.entries(LVVDatabase.categories);

        // Category tabs
        const categoryTabs = `
            <div class="category-tabs">
                <button class="category-tab ${!categoryFilter ? 'active' : ''}"
                        onclick="LVVApp.navigate('documents')">All</button>
                ${categories.map(([key, cat]) => `
                    <button class="category-tab ${categoryFilter === key ? 'active' : ''}"
                            style="${categoryFilter === key ? `background: ${cat.color}` : ''}"
                            onclick="LVVApp.navigate('documents', ['${key}'])">${cat.name}</button>
                `).join('')}
            </div>
        `;

        // Get documents
        const documents = categoryFilter ?
            LVVDatabase.getByCategory(categoryFilter) :
            LVVDatabase.documents.sort((a, b) => a.priority - b.priority);

        // Document cards
        const docCards = documents.map(doc => {
            const isViewed = LVVProgress.hasViewed(doc.id);
            const isBookmarked = LVVProgress.isBookmarked(doc.id);

            return `
                <div class="document-card ${isViewed ? 'viewed' : ''}">
                    <div class="doc-header">
                        <span class="doc-category" style="background: ${LVVDatabase.categories[doc.category].color}">
                            ${doc.category}
                        </span>
                        <button class="bookmark-btn ${isBookmarked ? 'active' : ''}"
                                onclick="event.stopPropagation(); LVVApp.toggleBookmark('${doc.id}')">
                            ${isBookmarked ? '⭐' : '☆'}
                        </button>
                    </div>
                    <h3 class="doc-title">${doc.title}</h3>
                    <p class="doc-desc">${doc.description}</p>
                    ${doc.summary ? `<p class="doc-summary"><strong>Summary:</strong> ${doc.summary}</p>` : ''}
                    <div class="doc-meta">
                        <span class="doc-difficulty ${doc.difficulty}">${doc.difficulty}</span>
                        ${isViewed ? '<span class="viewed-badge">✓ Viewed</span>' : ''}
                    </div>
                    <div class="doc-actions">
                        <button class="btn btn-primary btn-sm" onclick="LVVApp.openDocument('${doc.id}')">
                            Open PDF
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        mainContent.innerHTML = `
            <div class="documents-view">
                <header class="view-header">
                    <h1>LVVTA Documents</h1>
                    <p>All official LVVTA documents for LVV certification. Click to open PDFs directly from lvvta.org.nz</p>
                </header>

                ${categoryTabs}

                <div class="document-grid">
                    ${docCards}
                </div>
            </div>
        `;
    },

    // Open document
    openDocument(docId) {
        const doc = LVVDatabase.getById(docId);
        if (!doc) return;

        LVVProgress.viewDocument(docId);
        window.open(LVVDatabase.getFullUrl(doc), '_blank');

        // Check achievements
        const newAchievements = LVVProgress.checkAchievements();
        newAchievements.forEach(a => {
            this.showNotification(`Achievement Unlocked: ${a.icon} ${a.title}`, 'success');
        });
    },

    // Toggle bookmark
    toggleBookmark(docId) {
        const isNowBookmarked = LVVProgress.toggleBookmark(docId);
        this.showNotification(
            isNowBookmarked ? 'Document bookmarked' : 'Bookmark removed',
            'info'
        );

        // Re-render if on documents page
        if (this.currentView === 'documents') {
            const hash = window.location.hash.slice(1);
            const parts = hash.split('/');
            this.renderDocuments(parts[1]);
        }
    },

    // Render quiz
    renderQuiz(moduleId) {
        const module = LVVModules.getById(moduleId);
        if (!module || !module.quiz) {
            this.navigate('modules');
            return;
        }

        const quizStats = LVVProgress.getQuizStats(moduleId);
        const mainContent = document.getElementById('main-content');

        // If already passed, show results
        if (quizStats.passed) {
            mainContent.innerHTML = `
                <div class="quiz-view">
                    <div class="quiz-complete">
                        <h1>🎉 Quiz Complete!</h1>
                        <p>You've already passed this quiz with a score of ${quizStats.bestScore}%</p>
                        <div class="quiz-stats">
                            <div class="stat">
                                <span class="stat-label">Best Score</span>
                                <span class="stat-value">${quizStats.bestScore}%</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Attempts</span>
                                <span class="stat-value">${quizStats.attempts.length}</span>
                            </div>
                        </div>
                        <div class="quiz-actions">
                            <button class="btn btn-secondary" onclick="LVVApp.startQuiz('${moduleId}')">
                                Retake Quiz
                            </button>
                            <button class="btn btn-primary" onclick="LVVApp.navigate('modules')">
                                Back to Modules
                            </button>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        // Show quiz intro
        mainContent.innerHTML = `
            <div class="quiz-view">
                <div class="quiz-intro">
                    <h1>Module ${module.number} Quiz</h1>
                    <h2>${module.title}</h2>
                    <div class="quiz-info">
                        <p><strong>${module.quiz.questions.length}</strong> questions</p>
                        <p>Passing score: <strong>${module.quiz.passingScore}%</strong></p>
                        ${quizStats.attempts.length > 0 ?
                            `<p>Previous attempts: ${quizStats.attempts.length} (Best: ${quizStats.bestScore}%)</p>` : ''}
                    </div>
                    <button class="btn btn-primary btn-lg" onclick="LVVApp.startQuiz('${moduleId}')">
                        Start Quiz
                    </button>
                </div>
            </div>
        `;
    },

    // Start quiz
    startQuiz(moduleId) {
        const module = LVVModules.getById(moduleId);
        if (!module || !module.quiz) return;

        this.quizState = {
            moduleId: moduleId,
            questions: [...module.quiz.questions],
            currentIndex: 0,
            answers: {},
            startTime: Date.now()
        };

        this.renderQuizQuestion();
    },

    // Render quiz question
    renderQuizQuestion() {
        const { questions, currentIndex, answers } = this.quizState;
        const question = questions[currentIndex];
        const mainContent = document.getElementById('main-content');

        const selectedAnswer = answers[question.id];

        mainContent.innerHTML = `
            <div class="quiz-view">
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((currentIndex + 1) / questions.length) * 100}%"></div>
                    </div>
                    <span>Question ${currentIndex + 1} of ${questions.length}</span>
                </div>

                <div class="quiz-question">
                    <h2>${question.question}</h2>

                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <label class="quiz-option ${selectedAnswer === index ? 'selected' : ''}">
                                <input type="radio" name="answer" value="${index}"
                                       ${selectedAnswer === index ? 'checked' : ''}
                                       onchange="LVVApp.selectAnswer(${index})">
                                <span class="option-text">${option}</span>
                            </label>
                        `).join('')}
                    </div>

                    <div class="quiz-nav">
                        ${currentIndex > 0 ? `
                            <button class="btn btn-secondary" onclick="LVVApp.prevQuestion()">
                                &larr; Previous
                            </button>
                        ` : '<div></div>'}

                        ${currentIndex < questions.length - 1 ? `
                            <button class="btn btn-primary" onclick="LVVApp.nextQuestion()"
                                    ${selectedAnswer === undefined ? 'disabled' : ''}>
                                Next &rarr;
                            </button>
                        ` : `
                            <button class="btn btn-success" onclick="LVVApp.submitQuiz()"
                                    ${selectedAnswer === undefined ? 'disabled' : ''}>
                                Submit Quiz
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    },

    // Select answer
    selectAnswer(index) {
        const question = this.quizState.questions[this.quizState.currentIndex];
        this.quizState.answers[question.id] = index;
        this.renderQuizQuestion();
    },

    // Previous question
    prevQuestion() {
        if (this.quizState.currentIndex > 0) {
            this.quizState.currentIndex--;
            this.renderQuizQuestion();
        }
    },

    // Next question
    nextQuestion() {
        if (this.quizState.currentIndex < this.quizState.questions.length - 1) {
            this.quizState.currentIndex++;
            this.renderQuizQuestion();
        }
    },

    // Submit quiz
    submitQuiz() {
        const { moduleId, questions, answers } = this.quizState;

        // Calculate score
        let correct = 0;
        const results = questions.map(q => {
            const isCorrect = answers[q.id] === q.correctAnswer;
            if (isCorrect) correct++;
            return {
                questionId: q.id,
                userAnswer: answers[q.id],
                correct: isCorrect
            };
        });

        // Record attempt
        const result = LVVProgress.recordQuizAttempt(moduleId, correct, questions.length, results);

        // Show results
        this.renderQuizResults(moduleId, questions, results, result);

        // Check achievements
        const newAchievements = LVVProgress.checkAchievements();
        newAchievements.forEach(a => {
            setTimeout(() => {
                this.showNotification(`Achievement Unlocked: ${a.icon} ${a.title}`, 'success');
            }, 1000);
        });
    },

    // Render quiz results
    renderQuizResults(moduleId, questions, results, result) {
        const module = LVVModules.getById(moduleId);
        const mainContent = document.getElementById('main-content');

        const questionReviews = questions.map((q, index) => {
            const r = results[index];
            return `
                <div class="result-question ${r.correct ? 'correct' : 'incorrect'}">
                    <div class="result-header">
                        <span class="result-icon">${r.correct ? '✓' : '✗'}</span>
                        <span class="result-num">Question ${index + 1}</span>
                    </div>
                    <p class="result-text">${q.question}</p>
                    <div class="result-answers">
                        <p><strong>Your answer:</strong> ${q.options[r.userAnswer]}</p>
                        ${!r.correct ? `<p><strong>Correct answer:</strong> ${q.options[q.correctAnswer]}</p>` : ''}
                    </div>
                    <p class="result-explanation">${q.explanation}</p>
                </div>
            `;
        }).join('');

        mainContent.innerHTML = `
            <div class="quiz-view">
                <div class="quiz-results">
                    <div class="results-header ${result.passed ? 'passed' : 'failed'}">
                        <h1>${result.passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}</h1>
                        <div class="score-circle">
                            <span class="score-value">${result.percentage}%</span>
                        </div>
                        <p>${result.passed ?
                            `You passed! You've demonstrated understanding of ${module.title}.` :
                            `You need ${module.quiz.passingScore}% to pass. Review the material and try again.`
                        }</p>
                    </div>

                    <div class="results-summary">
                        <div class="summary-stat">
                            <span class="stat-label">Correct</span>
                            <span class="stat-value">${results.filter(r => r.correct).length}/${questions.length}</span>
                        </div>
                        <div class="summary-stat">
                            <span class="stat-label">Attempt #</span>
                            <span class="stat-value">${result.attemptNumber}</span>
                        </div>
                        <div class="summary-stat">
                            <span class="stat-label">Best Score</span>
                            <span class="stat-value">${result.bestScore}%</span>
                        </div>
                    </div>

                    <h2>Question Review</h2>
                    <div class="results-review">
                        ${questionReviews}
                    </div>

                    <div class="results-actions">
                        ${!result.passed ? `
                            <button class="btn btn-primary" onclick="LVVApp.navigate('modules', ['${moduleId}'])">
                                Review Module
                            </button>
                            <button class="btn btn-secondary" onclick="LVVApp.startQuiz('${moduleId}')">
                                Try Again
                            </button>
                        ` : `
                            <button class="btn btn-primary" onclick="LVVApp.navigate('modules')">
                                Continue Learning
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    },

    // Render progress view
    renderProgress() {
        const stats = LVVProgress.getStats();
        const earnedAchievements = LVVProgress.getEarnedAchievements();
        const availableAchievements = LVVProgress.getAvailableAchievements();
        const mainContent = document.getElementById('main-content');

        // Module progress cards
        const moduleProgress = LVVModules.getAll().map(module => {
            const progress = LVVProgress.getModuleProgress(module.id);
            return `
                <div class="progress-module-card ${progress.isComplete ? 'complete' : ''}">
                    <div class="progress-module-header">
                        <span class="module-num">Module ${module.number}</span>
                        ${progress.isComplete ? '<span class="complete-badge">✓</span>' : ''}
                    </div>
                    <h3>${module.title}</h3>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress.sectionsPercentage}%"></div>
                    </div>
                    <div class="progress-details">
                        <span>Sections: ${progress.sectionsCompleted}/${progress.sectionsTotal}</span>
                        <span>Quiz: ${progress.quizStats.passed ? `Passed (${progress.quizStats.bestScore}%)` : 'Not passed'}</span>
                    </div>
                </div>
            `;
        }).join('');

        mainContent.innerHTML = `
            <div class="progress-view">
                <header class="view-header">
                    <h1>Your Progress</h1>
                    <p>Track your learning journey and achievements.</p>
                </header>

                <section class="overall-stats">
                    <div class="stat-card large">
                        <div class="stat-icon">📚</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.modules.percentage}%</div>
                            <div class="stat-label">Overall Progress</div>
                        </div>
                        <div class="progress-bar large">
                            <div class="progress-fill" style="width: ${stats.modules.percentage}%"></div>
                        </div>
                    </div>

                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value">${stats.modules.completed}/${stats.modules.total}</div>
                            <div class="stat-label">Modules Complete</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.sections.completed}</div>
                            <div class="stat-label">Sections Complete</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.quizzes.passed}</div>
                            <div class="stat-label">Quizzes Passed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.quizzes.averageScore}%</div>
                            <div class="stat-label">Average Quiz Score</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.documents.viewed}</div>
                            <div class="stat-label">Documents Viewed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${stats.studyTime.formatted}</div>
                            <div class="stat-label">Total Study Time</div>
                        </div>
                    </div>
                </section>

                <section class="achievements-section">
                    <h2>Achievements (${earnedAchievements.length}/${LVVProgress.achievements.length})</h2>
                    <div class="achievements-grid">
                        ${earnedAchievements.map(a => `
                            <div class="achievement earned">
                                <span class="achievement-icon">${a.icon}</span>
                                <div class="achievement-info">
                                    <strong>${a.title}</strong>
                                    <span>${a.description}</span>
                                </div>
                            </div>
                        `).join('')}
                        ${availableAchievements.map(a => `
                            <div class="achievement locked">
                                <span class="achievement-icon">🔒</span>
                                <div class="achievement-info">
                                    <strong>${a.title}</strong>
                                    <span>${a.description}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="module-progress-section">
                    <h2>Module Progress</h2>
                    <div class="module-progress-grid">
                        ${moduleProgress}
                    </div>
                </section>

                <section class="data-section">
                    <h2>Data Management</h2>
                    <div class="data-actions">
                        <button class="btn btn-secondary" onclick="LVVProgress.downloadProgress()">
                            Export Progress
                        </button>
                        <button class="btn btn-secondary" onclick="LVVApp.importProgress()">
                            Import Progress
                        </button>
                        <button class="btn btn-danger" onclick="LVVApp.resetProgress()">
                            Reset All Progress
                        </button>
                    </div>
                </section>
            </div>
        `;
    },

    // Import progress
    importProgress() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = LVVProgress.importData(event.target.result);
                if (result.success) {
                    this.showNotification('Progress imported successfully', 'success');
                    this.renderProgress();
                } else {
                    this.showNotification(`Import failed: ${result.error}`, 'error');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    },

    // Reset progress
    resetProgress() {
        if (LVVProgress.reset()) {
            this.showNotification('Progress has been reset', 'info');
            this.renderProgress();
        }
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    LVVApp.init();
});
