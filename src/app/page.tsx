'use client'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, BookOpenIcon, BeakerIcon, UserCircleIcon, TrophyIcon } from '@heroicons/react/24/solid'

interface Document {
  id: string;
  title: string;
  url: string;
}

interface DocumentCategory {
  id: string;
  title: string;
  description: string;
  documents: Document[];
}

interface Module {
  id: string;
  title: string;
  content: string;
}

interface LearningModule {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface GlossaryTerm {
  term: string;
  definition: string;
}

interface QuickReferenceCard {
  title: string;
  content: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
}

export default function Home() {
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([]);
  const [learningModules, setLearningModules] = useState<LearningModule[]>([]);
  const [quizzes, setQuizzes] = useState<Record<string, QuizQuestion[]>>({});
  const [glossary, setGlossary] = useState<GlossaryTerm[]>([]);
  const [cards, setCards] = useState<QuickReferenceCard[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    fetch('./data/documents.json')
      .then((response) => response.json())
      .then((data) => setDocumentCategories(data));

    fetch('./data/modules.json')
      .then((response) => response.json())
      .then((data) => setLearningModules(data));

    fetch('./data/quizzes.json')
      .then((response) => response.json())
      .then((data) => setQuizzes(data));
      
    fetch('./data/glossary.json')
      .then((response) => response.json())
      .then((data) => setGlossary(data));

    fetch('./data/cards.json')
      .then((response) => response.json())
      .then((data) => setCards(data));

    fetch('./data/achievements.json')
      .then((response) => response.json())
      .then((data) => setAchievements(data));

    const completed = JSON.parse(localStorage.getItem('completedModules') || '[]');
    setCompletedModules(completed);

    const scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    setQuizScores(scores);

    const unlocked = JSON.parse(localStorage.getItem('unlockedAchievements') || '[]');
    setUnlockedAchievements(unlocked);
  }, []);

  const filteredCategories = documentCategories.filter((category) => {
    const categoryMatch = category.title.toLowerCase().includes(searchTerm.toLowerCase());
    const documentMatch = category.documents.some((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return categoryMatch || documentMatch;
  });

  const handleQuizSubmit = () => {
    if (!selectedQuiz) return;

    const quiz = quizzes[selectedQuiz];
    let score = 0;
    quiz.forEach((q, index) => {
      if (quizAnswers[index] === q.answer) {
        score++;
      }
    });
    const percentage = (score / quiz.length) * 100;
    setQuizScore(percentage);

    const newScores = { ...quizScores, [selectedQuiz]: percentage };
    setQuizScores(newScores);
    localStorage.setItem('quizScores', JSON.stringify(newScores));

    const newUnlockedAchievements = [...unlockedAchievements];
    if (percentage >= 80) {
      const newCompletedModules = [...completedModules, selectedQuiz];
      setCompletedModules(newCompletedModules);
      localStorage.setItem('completedModules', JSON.stringify(newCompletedModules));

      if (newCompletedModules.length === 1 && !newUnlockedAchievements.includes('first_quiz_passed')) {
        newUnlockedAchievements.push('first_quiz_passed');
      }

      if (newCompletedModules.length === learningModules.length && !newUnlockedAchievements.includes('all_modules_completed')) {
        newUnlockedAchievements.push('all_modules_completed');
      }
    }

    if (percentage === 100 && !newUnlockedAchievements.includes('perfect_score')) {
      newUnlockedAchievements.push('perfect_score');
    }

    setUnlockedAchievements(newUnlockedAchievements);
    localStorage.setItem('unlockedAchievements', JSON.stringify(newUnlockedAchievements));
  };
  
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningModules.map((module) => (
                <div key={module.id} className="bg-gray-800 rounded-lg p-6 relative shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
                  {completedModules.includes(module.id) && (
                    <span className="absolute top-4 right-4 text-green-400">
                      <CheckCircleIcon className="h-6 w-6" />
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                  <p className="text-gray-400 mb-4">{module.description}</p>
                  <ul>
                    {module.modules.map((subModule) => (
                      <li key={subModule.id} className="mb-2">
                        <button
                          className="text-cyan-400 hover:underline"
                          onClick={() => setSelectedModule(subModule)}
                        >
                          {subModule.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-300"
                    onClick={() => setSelectedQuiz(module.id)}
                  >
                    Take Quiz
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'documents':
        return (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Documents</h2>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div key={category.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <ul>
                    {category.documents.map((doc) => (
                      <li key={doc.id} className="mb-2">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline"
                        >
                          {doc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'study-aids':
        return (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Study Aids</h2>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Glossary</h3>
              <div className="space-y-4">
                {glossary.map((term, index) => (
                  <div key={index}>
                    <p className="font-bold text-cyan-400">{term.term}</p>
                    <p className="text-gray-400">{term.definition}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Reference Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-6">
                    <h4 className="font-bold text-cyan-400 mb-2">{card.title}</h4>
                    <p className="text-gray-300">{card.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Profile</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Progress</h3>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Completed Modules</h4>
                  <ul>
                    {completedModules.map((moduleId) => (
                      <li key={moduleId} className="flex items-center text-green-400">
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                        {learningModules.find(m => m.id === moduleId)?.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white mb-2">Quiz Scores</h4>
                  <ul>
                    {Object.entries(quizScores).map(([moduleId, score]) => (
                      <li key={moduleId} className="flex justify-between">
                        <span>{learningModules.find(m => m.id === moduleId)?.title}</span>
                        <span className={`${score >= 80 ? 'text-green-400' : 'text-red-400'}`}>{score.toFixed(2)}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Achievements</h3>
                <div className="space-y-4">
                  {achievements
                    .filter((ach) => unlockedAchievements.includes(ach.id))
                    .map((ach) => (
                      <div key={ach.id} className="flex items-center">
                        <TrophyIcon className="h-8 w-8 text-yellow-400 mr-4" />
                        <div>
                          <p className="font-bold text-white">{ach.title}</p>
                          <p className="text-gray-400">{ach.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex">
      <aside className="w-64 bg-gray-800 p-8">
        <h1 className="text-2xl font-bold text-white mb-8">LVV Certifier</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <button
                className={`flex items-center w-full text-left px-4 py-2 rounded-md ${activeSection === 'dashboard' ? 'bg-cyan-500 text-white' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveSection('dashboard')}
              >
                <BookOpenIcon className="h-5 w-5 mr-3" />
                Dashboard
              </button>
            </li>
            <li className="mb-4">
              <button
                className={`flex items-center w-full text-left px-4 py-2 rounded-md ${activeSection === 'documents' ? 'bg-cyan-500 text-white' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveSection('documents')}
              >
                <BeakerIcon className="h-5 w-5 mr-3" />
                Documents
              </button>
            </li>
            <li className="mb-4">
              <button
                className={`flex items-center w-full text-left px-4 py-2 rounded-md ${activeSection === 'study-aids' ? 'bg-cyan-500 text-white' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveSection('study-aids')}
              >
                <TrophyIcon className="h-5 w-5 mr-3" />
                Study Aids
              </button>
            </li>
            <li className="mb-4">
              <button
                className={`flex items-center w-full text-left px-4 py-2 rounded-md ${activeSection === 'profile' ? 'bg-cyan-500 text-white' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveSection('profile')}
              >
                <UserCircleIcon className="h-5 w-5 mr-3" />
                Profile
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {renderSection()}
      </main>

      {selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedModule.title}</h2>
            <div className="prose prose-invert text-gray-300" dangerouslySetInnerHTML={{ __html: selectedModule.content }} />
            <button
              className="mt-8 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-300"
              onClick={() => setSelectedModule(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {selectedQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">{learningModules.find(m => m.id === selectedQuiz)?.title} Quiz</h2>
            {quizScore === null ? (
              <div>
                {quizzes[selectedQuiz]?.map((q, index) => (
                  <div key={index} className="mb-6">
                    <p className="font-semibold text-white mb-2">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="radio"
                            id={option}
                            name={`question-${index}`}
                            value={option}
                            className="hidden peer"
                            onChange={() => setQuizAnswers({ ...quizAnswers, [index]: option })}
                          />
                          <label
                            htmlFor={option}
                            className="flex items-center justify-between w-full p-4 text-gray-400 bg-gray-700 border-2 border-gray-700 rounded-lg cursor-pointer peer-checked:border-cyan-500 peer-checked:text-cyan-400 hover:text-gray-300 hover:bg-gray-600"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  className="mt-8 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-300"
                  onClick={handleQuizSubmit}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Your Score: {quizScore.toFixed(2)}%</h3>
                {quizScore >= 80 ? (
                  <p className="text-green-400">Congratulations! You have passed the quiz.</p>
                ) : (
                  <p className="text-red-400">You did not pass the quiz. Please try again.</p>
                )}
                <button
                  className="mt-8 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-300"
                  onClick={() => {
                    setSelectedQuiz(null);
                    setQuizScore(null);
                    setQuizAnswers({});
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
