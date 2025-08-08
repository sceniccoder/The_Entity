// Global state management
let currentPage = 'landing';
let currentDashboardSection = 'code-editor';
let currentUser = {
    name: 'Alex Developer',
    age: 25,
    email: '',
    gender: 'male',
    preference: 'female',
    ide: 'VS Code',
    experience: 'Senior',
    bio: 'Passionate developer who believes that clean code is like a love letter to the next developer. I debug with patience and refactor with precision. Looking for someone who appreciates well-documented code and meaningful variable names! 💻❤️',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    languages: ['JavaScript', 'Python', 'TypeScript'],
    personalities: ['Syntax Perfectionist', 'Clean Code Advocate']
};

let matches = [
    {
        id: 1,
        name: 'Sarah',
        age: 26,
        gender: 'female',
        ide: 'VS Code Enthusiast',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        compatibility: 92,
        errors: ['Off-by-one Expert', 'Null Pointer Ninja', 'Async/Await Lover'],
        pickupLine: "Are you a promise? Because I'd await you forever! 💖",
        pickupLineMalayalam: "Nee oru promise aano? Njaan ninne forever await cheyyum! 💖",
        experience: 'Intermediate',
        languages: ['JavaScript', 'React', 'Node.js']
    },
    {
        id: 2,
        name: 'Mike',
        age: 29,
        gender: 'male',
        ide: 'IntelliJ IDEA Fan',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        compatibility: 87,
        errors: ['Stack Overflow Surfer', 'Infinite Loop Creator', 'Memory Leak Hunter'],
        pickupLine: "You must be a recursive function, because I can't stop calling you! 🔄❤️",
        pickupLineMalayalam: "Nee oru recursive function aayirikkum, because njaan ninne call cheyyunna stop cheyyan kazhiyunilla! 🔄❤️",
        experience: 'Senior',
        languages: ['Java', 'Spring', 'Kotlin']
    },
    {
        id: 3,
        name: 'Emma',
        age: 24,
        gender: 'female',
        ide: 'Sublime Text Lover',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        compatibility: 89,
        errors: ['CSS Float Fighter', 'JavaScript Hoisting Hero', 'Callback Hell Survivor'],
        pickupLine: "Are you CSS? Because you make everything look perfect! 🎨💕",
        pickupLineMalayalam: "Nee CSS aano? Because nee ellam perfect aakki mathram kaanikkunnath! 🎨💕",
        experience: 'Intermediate',
        languages: ['CSS', 'JavaScript', 'Vue.js']
    },
    {
        id: 4,
        name: 'David',
        age: 31,
        gender: 'male',
        ide: 'WebStorm Master',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        compatibility: 94,
        errors: ['TypeScript Perfectionist', 'Test-Driven Developer', 'Refactoring Enthusiast'],
        pickupLine: "Are you TypeScript? Because you add meaning to my JavaScript heart! 💙",
        pickupLineMalayalam: "Nee TypeScript aano? Because nee ente JavaScript heart inu meaning kodukkunnath! 💙",
        experience: 'Expert',
        languages: ['TypeScript', 'Angular', 'Node.js']
    },
    {
        id: 5,
        name: 'Priya',
        age: 27,
        gender: 'female',
        ide: 'PyCharm Devotee',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
        compatibility: 91,
        errors: ['Pythonic Coder', 'Data Science Wizard', 'ML Model Trainer'],
        pickupLine: "Are you a Python decorator? Because you make everything more beautiful! 🐍✨",
        pickupLineMalayalam: "Nee oru Python decorator aano? Because nee ellathine kooduthal sundaramaakki maattunnath! 🐍✨",
        experience: 'Senior',
        languages: ['Python', 'TensorFlow', 'Pandas']
    },
    {
        id: 6,
        name: 'Alex',
        age: 28,
        gender: 'non-binary',
        ide: 'Vim Virtuoso',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
        compatibility: 85,
        errors: ['Command Line Ninja', 'Git Master', 'Linux Lover'],
        pickupLine: "Are you Vim? Because once I start with you, I never want to quit! :wq💕",
        pickupLineMalayalam: "Nee Vim aano? Because njaan ninne start cheythaal pinne quit cheyyaan agrahikkilla! :wq💕",
        experience: 'Expert',
        languages: ['C++', 'Rust', 'Go']
    },
    {
        id: 7,
        name: 'Lisa',
        age: 25,
        gender: 'female',
        ide: 'Atom Advocate',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
        compatibility: 88,
        errors: ['Frontend Fanatic', 'CSS Grid Guru', 'Animation Expert'],
        pickupLine: "Are you a CSS animation? Because you make my heart skip frames! 💗",
        pickupLineMalayalam: "Nee oru CSS animation aano? Because nee ente heart skip frames aakkunnath! 💗",
        experience: 'Intermediate',
        languages: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
        id: 8,
        name: 'Ryan',
        age: 30,
        gender: 'male',
        ide: 'Eclipse Expert',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
        compatibility: 86,
        errors: ['Enterprise Developer', 'Spring Framework Specialist', 'Microservices Architect'],
        pickupLine: "Are you a microservice? Because you're perfectly designed and highly scalable! 🚀",
        pickupLineMalayalam: "Nee oru microservice aano? Because nee perfectly designed um highly scalable um aayittullath! 🚀",
        experience: 'Expert',
        languages: ['Java', 'Spring Boot', 'Docker', 'Kubernetes']
    }
];

let currentMatchIndex = 0;
let isDarkMode = true;
let favoritePickupLines = [];

// Authentication functions
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const age = document.getElementById('signup-age').value;
    const email = document.getElementById('signup-email').value;
    const ide = document.getElementById('signup-ide').value;
    const experience = document.getElementById('signup-experience').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match! Even your code should be consistent! 😅');
        return;
    }
    
    // Update user profile
    currentUser = {
        ...currentUser,
        name,
        age: parseInt(age),
        email,
        ide,
        experience
    };
    
    updateUserDisplay();
    showPage('dashboard');
    
    // Show welcome message
    setTimeout(() => {
        alert(`Welcome to Tinderror, ${name}! Time to find someone who debugs your heart! 💻💕`);
    }, 1000);
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation (in a real app, this would be server-side)
    if (email && password) {
        currentUser.email = email;
        
        // Extract name from email
        const emailName = email.split('@')[0]; // Get part before @
        const formattedName = emailName
            .split(/[._-]/) // Split by dots, underscores, or hyphens
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) // Capitalize each part
            .join(' '); // Join with spaces
        
        currentUser.name = formattedName;
        
        updateUserDisplay();
        showPage('dashboard');
    } else {
        alert('Please enter both email and password! Your login credentials are required, unlike optional semicolons! 😄');
    }
}

function updateUserDisplay() {
    document.getElementById('user-display-name').textContent = currentUser.name;
    document.getElementById('user-display-title').textContent = `${currentUser.experience} Developer`;
    document.getElementById('user-avatar-img').src = currentUser.avatar;
    
    // Update profile page
    document.getElementById('profile-name-display').textContent = currentUser.name;
    document.getElementById('profile-age-display').textContent = `${currentUser.age} years old`;
    document.getElementById('profile-ide-display').textContent = currentUser.ide;
    document.getElementById('profile-experience-display').textContent = currentUser.experience;
    document.getElementById('profile-bio-display').textContent = currentUser.bio;
    document.getElementById('profile-avatar-display').src = currentUser.avatar;
    
    // Update language tags
    const languageContainer = document.getElementById('profile-languages-display');
    languageContainer.innerHTML = currentUser.languages.map(lang => 
        `<span class="lang-tag">${lang}</span>`
    ).join('');
    
    // Update personality tags
    const personalityContainer = document.getElementById('profile-personality-display');
    personalityContainer.innerHTML = currentUser.personalities.map(personality => 
        `<span class="personality-tag">${personality}</span>`
    ).join('');
}

// Page navigation functions
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
    }
    
    // Update dashboard section if navigating to dashboard
    if (pageName === 'dashboard') {
        showDashboardSection('code-editor');
    }
}

function showDashboardSection(sectionName) {
    // Hide all dashboard sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
        currentDashboardSection = sectionName;
    }
    
    // Update navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and activate the corresponding nav item
    const activeNavItem = document.querySelector(`.nav-item[onclick*="${sectionName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Load matches if switching to matches section
    if (sectionName === 'matches') {
        loadMatches();
    }
    
    // Update pickup generator if switching to it
    if (sectionName === 'pickup-generator') {
        updateFavoritesList();
    }
    
    // Update profile display if switching to profile
    if (sectionName === 'profile') {
        updateUserDisplay();
    }
}

// Code editor functionality
function updateLanguageHighlighting() {
    const language = document.getElementById('language-select').value;
    const textarea = document.getElementById('code-input');
    
    // Update placeholder based on language
    const placeholders = {
        javascript: `// Write your JavaScript code here...
function findLove() {
    if (bugs.length > 0) {
        return 'Perfect match found!';
    }
    return 'Keep debugging...';
}`,
        python: `# Write your Python code here...
def find_love():
    if len(bugs) > 0:
        return 'Perfect match found!'
    return 'Keep debugging...'`,
        java: `// Write your Java code here...
public class LoveFinder {
    public String findLove() {
        if (bugs.size() > 0) {
            return "Perfect match found!";
        }
        return "Keep debugging...";
    }
}`,
        cpp: `// Write your C++ code here...
#include <iostream>
#include <vector>

std::string findLove() {
    if (!bugs.empty()) {
        return "Perfect match found!";
    }
    return "Keep debugging...";
}`,
        typescript: `// Write your TypeScript code here...
interface Love {
    compatibility: number;
    bugs: string[];
}

function findLove(): string {
    if (bugs.length > 0) {
        return 'Perfect match found!';
    }
    return 'Keep debugging...';
}`,
        go: `// Write your Go code here...
package main

import "fmt"

func findLove() string {
    if len(bugs) > 0 {
        return "Perfect match found!"
    }
    return "Keep debugging..."
}`
    };
    
    textarea.placeholder = placeholders[language] || placeholders.javascript;
}

function runCode() {
    const codeInput = document.getElementById('code-input').value;
    const languageSelect = document.getElementById('language-select').value;
    
    if (!codeInput.trim()) {
        alert('Please write some code first! Even love needs code to compile! 💻💕');
        return;
    }
    
    // Simulate code analysis
    setTimeout(() => {
        analyzeCode(codeInput, languageSelect);
        generatePickupLine();
        
        // Add some visual feedback for round button
        const runBtn = document.querySelector('.run-btn');
        const originalIcon = runBtn.innerHTML;
        runBtn.innerHTML = '<i class="fas fa-check"></i>';
        runBtn.style.background = 'linear-gradient(45deg, #00FF00, #00CC00)';
        runBtn.title = 'Analysis Complete!';
        
        setTimeout(() => {
            runBtn.innerHTML = originalIcon;
            runBtn.style.background = 'linear-gradient(45deg, #00FFCC, #00D4AA)';
            runBtn.title = 'Run Code Analysis';
        }, 2000);
        
    }, 1500);
    
    // Show loading state for round button
    const runBtn = document.querySelector('.run-btn');
    runBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    runBtn.title = 'Analyzing...';
}

function analyzeCodeAdvanced() {
    const codeInput = document.getElementById('code-input').value;
    const languageSelect = document.getElementById('language-select').value;
    
    if (!codeInput.trim()) {
        alert('Please write some code first! Advanced analysis needs actual code! 🔍');
        return;
    }
    
    // Show loading state
    const analyzeBtn = document.querySelector('.analyze-btn');
    const originalText = analyzeBtn.innerHTML;
    analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deep Analyzing...';
    
    setTimeout(() => {
        const analysis = performAdvancedAnalysis(codeInput, languageSelect);
        displayAdvancedAnalysis(analysis);
        
        // Reset button
        analyzeBtn.innerHTML = originalText;
        analyzeBtn.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
    }, 2500);
}

function performAdvancedAnalysis(code, language) {
    const analysis = {
        codeQuality: Math.floor(Math.random() * 40) + 60, // 60-100%
        personality: [],
        suggestions: [],
        compatibility: Math.floor(Math.random() * 30) + 70, // 70-100%
        loveLanguage: ''
    };
    
    // Analyze code patterns
    if (code.includes('//') || code.includes('#') || code.includes('/*')) {
        analysis.personality.push('Comment Writer - Clear Communicator');
    }
    
    if (code.includes('try') || code.includes('catch') || code.includes('except')) {
        analysis.personality.push('Error Handler - Always Prepared');
    }
    
    if (code.includes('async') || code.includes('await') || code.includes('Promise')) {
        analysis.personality.push('Patient Programmer - Good Things Take Time');
    }
    
    if (code.includes('===') || code.includes('!==')) {
        analysis.personality.push('Precision Lover - Exact in Everything');
    }
    
    if (code.split('\n').length > 20) {
        analysis.personality.push('Detail Oriented - Thorough in Relationships');
    }
    
    if (code.includes('function') || code.includes('def ') || code.includes('class ')) {
        analysis.personality.push('Organizer - Structures Life Well');
    }
    
    // Generate love language based on code style
    const loveLanguages = [
        'Quality Time - Pair Programming Sessions',
        'Words of Affirmation - Code Reviews with Positive Feedback',
        'Acts of Service - Debugging Each Other\'s Code',
        'Physical Touch - High-Fives for Successful Deployments',
        'Gifts - Sharing Useful Code Snippets'
    ];
    
    analysis.loveLanguage = loveLanguages[Math.floor(Math.random() * loveLanguages.length)];
    
    // Generate suggestions
    if (!code.includes('//') && !code.includes('#')) {
        analysis.suggestions.push('Add more comments - Communication is key in relationships!');
    }
    
    if (code.includes('var ')) {
        analysis.suggestions.push('Consider using let/const - Show commitment to modern practices!');
    }
    
    if (analysis.personality.length === 0) {
        analysis.personality.push('Clean Coder - Simple and Elegant');
    }
    
    return analysis;
}

function displayAdvancedAnalysis(analysis) {
    const errorAnalysis = document.getElementById('error-analysis');
    
    const analysisContent = `
        <h3><i class="fas fa-microscope"></i> Deep Code Analysis Results</h3>
        <div class="analysis-content">
            <!-- Overall Scores Section -->
            <div class="overall-scores">
                <div class="score-grid">
                    <div class="score-item primary">
                        <div class="score-circle">
                            <span class="score-number">${analysis.codeQuality}</span>
                            <span class="score-percent">%</span>
                        </div>
                        <span class="score-label">Code Quality</span>
                    </div>
                    <div class="score-item secondary">
                        <div class="score-circle">
                            <span class="score-number">${analysis.compatibility}</span>
                            <span class="score-percent">%</span>
                        </div>
                        <span class="score-label">Dating Compatibility</span>
                    </div>
                </div>
            </div>
            
            <!-- Technical Metrics Section -->
            <div class="technical-metrics">
                <h4><i class="fas fa-chart-bar"></i> Technical Metrics</h4>
                <div class="metrics-grid">
                    <div class="metric-bar">
                        <div class="metric-header">
                            <span class="metric-name">Complexity</span>
                            <span class="metric-value">${analysis.technicalMetrics.complexity}%</span>
                        </div>
                        <div class="progress-bar-metric">
                            <div class="progress-fill-metric complexity" style="width: ${analysis.technicalMetrics.complexity}%"></div>
                        </div>
                    </div>
                    
                    <div class="metric-bar">
                        <div class="metric-header">
                            <span class="metric-name">Maintainability</span>
                            <span class="metric-value">${analysis.technicalMetrics.maintainability}%</span>
                        </div>
                        <div class="progress-bar-metric">
                            <div class="progress-fill-metric maintainability" style="width: ${analysis.technicalMetrics.maintainability}%"></div>
                        </div>
                    </div>
                    
                    <div class="metric-bar">
                        <div class="metric-header">
                            <span class="metric-name">Readability</span>
                            <span class="metric-value">${analysis.technicalMetrics.readability}%</span>
                        </div>
                        <div class="progress-bar-metric">
                            <div class="progress-fill-metric readability" style="width: ${analysis.technicalMetrics.readability}%"></div>
                        </div>
                    </div>
                    
                    <div class="metric-bar">
                        <div class="metric-header">
                            <span class="metric-name">Efficiency</span>
                            <span class="metric-value">${analysis.technicalMetrics.efficiency}%</span>
                        </div>
                        <div class="progress-bar-metric">
                            <div class="progress-fill-metric efficiency" style="width: ${analysis.technicalMetrics.efficiency}%"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Relationship Metrics Section -->
            <div class="relationship-metrics">
                <h4><i class="fas fa-heart"></i> Relationship Analysis</h4>
                <div class="relationship-grid">
                    <div class="relationship-item">
                        <div class="relationship-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="relationship-details">
                            <span class="relationship-score">${analysis.teamCompatibility}%</span>
                            <span class="relationship-label">Team Compatibility</span>
                        </div>
                    </div>
                    
                    <div class="relationship-item">
                        <div class="relationship-icon">
                            <i class="fas fa-bug"></i>
                        </div>
                        <div class="relationship-details">
                            <span class="relationship-score">${analysis.errorProneness}%</span>
                            <span class="relationship-label">Error Proneness</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Personality Analysis Section -->
            <div class="personality-analysis">
                <h4><i class="fas fa-brain"></i> Coding Personality Traits</h4>
                <div class="personality-tags">
                    ${analysis.personality.map(trait => `<span class="personality-tag">${trait}</span>`).join('')}
                </div>
            </div>
            
            <!-- Love & Coding Style Section -->
            <div class="love-style-section">
                <div class="style-grid">
                    <div class="style-card">
                        <h5><i class="fas fa-code"></i> Coding Style</h5>
                        <p class="style-description">${analysis.codingStyle}</p>
                    </div>
                    
                    <div class="style-card">
                        <h5><i class="fas fa-heart"></i> Love Language</h5>
                        <p class="style-description">${analysis.loveLanguage}</p>
                    </div>
                    
                    <div class="style-card full-width">
                        <h5><i class="fas fa-handshake"></i> Relationship Type</h5>
                        <p class="style-description">${analysis.relationshipType}</p>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Insights Section -->
            ${analysis.detailedInsights.length > 0 ? `
                <div class="detailed-insights">
                    <h4><i class="fas fa-lightbulb"></i> Detailed Insights</h4>
                    <div class="insights-list">
                        ${analysis.detailedInsights.map(insight => `
                            <div class="insight-item">
                                <i class="fas fa-star"></i>
                                <span>${insight}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- Suggestions Section -->
            ${analysis.suggestions.length > 0 ? `
                <div class="suggestions">
                    <h4><i class="fas fa-magic"></i> Relationship Enhancement Tips</h4>
                    <div class="suggestions-list">
                        ${analysis.suggestions.map(suggestion => `
                            <div class="suggestion-item">
                                <i class="fas fa-arrow-right"></i>
                                <span>${suggestion}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- Compatibility Summary -->
            <div class="compatibility-summary">
                <div class="summary-content">
                    <h4><i class="fas fa-certificate"></i> Compatibility Summary</h4>
                    <p class="summary-text">
                        ${analysis.compatibility > 90 ? 
                            '🌟 <strong>Exceptional Match!</strong> Your coding style shows you\'re relationship material! Any developer would be lucky to collaborate with you.' :
                        analysis.compatibility > 75 ?
                            '💫 <strong>High Compatibility!</strong> You have great coding habits that translate to strong relationships. You\'re definitely swipe-right material!' :
                        analysis.compatibility > 60 ?
                            '⭐ <strong>Good Potential!</strong> You show promise in both coding and relationships. A few improvements and you\'ll be irresistible!' :
                            '💪 <strong>Growing Strong!</strong> Everyone starts somewhere! Your willingness to improve makes you attractive to fellow learners!'
                        }
                    </p>
                </div>
            </div>
        </div>
    `;
    
    errorAnalysis.innerHTML = analysisContent;
}

function analyzeCode(code, language) {
    const errorAnalysis = document.getElementById('error-analysis');
    
    // Simple error detection simulation
    let errorType = 'Syntax Error';
    let errorMessage = 'Missing semicolon detected - You\'re the type who lives dangerously!';
    let compatibility = Math.floor(Math.random() * 20) + 80; // 80-100%
    let personality = 'Syntax Rebel';
    let insight = 'Your coding style shows a fearless approach to programming!';
    
    if (code.includes('null') || code.includes('undefined')) {
        errorType = 'Null Pointer Exception';
        errorMessage = 'Null reference found - You\'re the caring type who checks if someone exists before calling them!';
        personality = 'Caring Debugger';
        insight = 'You show empathy even in your code - very attractive quality!';
    } else if (code.includes('while') || code.includes('for')) {
        errorType = 'Infinite Loop Potential';
        errorMessage = 'Loop detected - When you love someone, it\'s forever!';
        personality = 'Eternal Lover';
        insight = 'Your commitment shows in your loops - dedication is sexy!';
    } else if (code.includes('function') && !code.includes('return')) {
        errorType = 'Missing Return Statement';
        errorMessage = 'Function without return - You give without expecting anything back!';
        personality = 'Generous Giver';
        insight = 'Your selfless coding style makes you relationship material!';
    } else if (code.includes('async') || code.includes('await')) {
        errorType = 'Async/Await Master';
        errorMessage = 'Async code detected - You understand that good things take time!';
        personality = 'Patient Programmer';
        insight = 'Your patience with asynchronous operations shows relationship wisdom!';
    } else if (code.includes('class') || code.includes('interface')) {
        errorType = 'Object-Oriented Thinker';
        errorMessage = 'OOP detected - You believe in structured relationships!';
        personality = 'Organized Partner';
        insight = 'Your structured approach to code shows you plan for the future!';
    }
    
    const analysisContent = `
        <h3><i class="fas fa-search"></i> Quick Code Analysis</h3>
        <div class="analysis-content">
            <div class="quick-analysis-grid">
                <div class="analysis-card primary">
                    <div class="analysis-header">
                        <i class="fas fa-bug"></i>
                        <h4>Error Pattern Detected</h4>
                    </div>
                    <div class="error-badge-large ${errorType.toLowerCase().replace(/\s+/g, '-')}">${errorType}</div>
                    <p class="error-description">${errorMessage}</p>
                </div>
                
                <div class="analysis-card secondary">
                    <div class="analysis-header">
                        <i class="fas fa-heart"></i>
                        <h4>Compatibility Score</h4>
                    </div>
                    <div class="compatibility-score-large">
                        <span class="score">${compatibility}%</span>
                        <span class="score-label">Match Potential</span>
                    </div>
                    <p class="compatibility-description">Compatible with other ${personality.toLowerCase()}s</p>
                </div>
            </div>
            
            <div class="personality-insight">
                <div class="insight-header">
                    <i class="fas fa-star"></i>
                    <h4>Personality Insight</h4>
                </div>
                <div class="personality-badge-large">${personality}</div>
                <p class="insight-description">${insight}</p>
            </div>
            
            <div class="analysis-tip">
                <i class="fas fa-lightbulb"></i>
                <span>Tip: Click "Deep Analysis" for comprehensive relationship compatibility insights!</span>
            </div>
        </div>
    `;
    
    errorAnalysis.innerHTML = analysisContent;
}

function generatePickupLine() {
    const pickupLines = [
        {
            english: "Are you a semicolon? Because you complete all my statements! 💕",
            malayalam: "Nee oru semicolon aano? Ente ella statements um complete cheyyunnath! 💕"
        },
        {
            english: "You must be a compiler, because you make my heart race with no errors! 🏃‍♂️❤️",
            malayalam: "Nee oru compiler aayirikkum, because nee ente heart race akkunnath errors illaathe! 🏃‍♂️❤️"
        },
        {
            english: "Are you a debugger? Because you found the bug in my heart! 🐛💖",
            malayalam: "Nee oru debugger aano? Because nee ente heart ile bug kandethiyath! 🐛💖"
        },
        {
            english: "You must be an API, because I want to connect with you! 🔗💕",
            malayalam: "Nee oru API aayirikkum, because njaan ninne connect cheyyaan agrahikkunnath! 🔗💕"
        },
        {
            english: "Are you CSS? Because you make everything look perfect! 🎨💕",
            malayalam: "Nee CSS aano? Because nee ellam perfect aakki kaanikkunnath! 🎨💕"
        }
    ];
    
    const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    
    const pickupCard = document.getElementById('pickup-line');
    pickupCard.innerHTML = `
        <h3>Generated Pickup Line</h3>
        <div class="pickup-content">
            <p class="pickup-text">"${randomLine.english}"</p>
            <p class="pickup-translation">Malayalam: "${randomLine.malayalam}"</p>
        </div>
    `;
}

// Match card functionality
function loadMatches() {
    if (currentMatchIndex >= matches.length) {
        // No more matches
        const container = document.querySelector('.match-cards-container');
        container.innerHTML = `
            <div class="no-matches">
                <h3>No more matches for now! 💔</h3>
                <p>Submit more code to find new connections!</p>
                <button class="cta-primary" onclick="showDashboardSection('code-editor')">
                    <i class="fas fa-code"></i>
                    Write More Code
                </button>
            </div>
        `;
        return;
    }
    
    const container = document.querySelector('.match-cards-container');
    const match = matches[currentMatchIndex];
    
    container.innerHTML = `
        <div class="match-card" id="match-card-${match.id}">
            <div class="match-header">
                <img src="${match.image}" alt="${match.name}">
                <div class="match-info">
                    <h3>${match.name}, ${match.age}</h3>
                    <p><i class="fas fa-laptop-code"></i> ${match.ide}</p>
                    <div class="experience-badge">
                        <span>${match.experience} Developer</span>
                    </div>
                    <div class="compatibility-badge">
                        <span>${match.compatibility}% Match</span>
                    </div>
                </div>
            </div>
            
            <div class="match-languages">
                <h4>Languages:</h4>
                <div class="language-tags">
                    ${match.languages.map(lang => `<span class="lang-tag">${lang}</span>`).join('')}
                </div>
            </div>
            
            <div class="error-personalities">
                ${match.errors.map(error => `<span class="error-tag">${error}</span>`).join('')}
            </div>
            
            <div class="pickup-line-card">
                <p>"${match.pickupLine}"</p>
                <small>Malayalam: "${match.pickupLineMalayalam}"</small>
            </div>
            
            <div class="match-actions">
                <button class="swipe-btn reject" onclick="swipeCard('match-card-${match.id}', 'left')">
                    <i class="fas fa-times"></i>
                </button>
                <button class="swipe-btn like" onclick="swipeCard('match-card-${match.id}', 'right')">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

function swipeCard(cardId, direction) {
    const card = document.getElementById(cardId);
    const match = matches[currentMatchIndex];
    
    // Animate card swipe
    if (direction === 'left') {
        card.style.transform = 'translateX(-100%) rotate(-30deg)';
        card.style.opacity = '0';
    } else {
        card.style.transform = 'translateX(100%) rotate(30deg)';
        card.style.opacity = '0';
        
        // Show match modal for right swipe
        setTimeout(() => {
            showMatchModal(match.name);
        }, 300);
    }
    
    // Load next match after animation
    setTimeout(() => {
        currentMatchIndex++;
        loadMatches();
    }, 500);
}

function showMatchModal(matchName) {
    const modal = document.getElementById('match-modal');
    const nameSpan = document.getElementById('match-name');
    nameSpan.textContent = matchName;
    modal.style.display = 'block';
    
    // Add celebration animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.animation = 'celebrate 0.6s ease-out';
    }, 100);
}

function closeMatchModal() {
    const modal = document.getElementById('match-modal');
    modal.style.display = 'none';
}

// Profile management functions
function changeAvatar() {
    const avatars = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face'
    ];
    
    const currentIndex = avatars.indexOf(currentUser.avatar);
    const nextIndex = (currentIndex + 1) % avatars.length;
    currentUser.avatar = avatars[nextIndex];
    
    updateUserDisplay();
    
    // Show feedback
    const btn = document.querySelector('.avatar-change-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        btn.innerHTML = original;
    }, 1000);
}

function openProfileEditor() {
    // Populate form with current data
    document.getElementById('edit-name').value = currentUser.name || '';
    document.getElementById('edit-age').value = currentUser.age || '';
    document.getElementById('edit-gender').value = currentUser.gender || '';
    document.getElementById('edit-preference').value = currentUser.preference || '';
    document.getElementById('edit-ide').value = currentUser.ide || '';
    document.getElementById('edit-experience').value = currentUser.experience || '';
    document.getElementById('edit-bio').value = currentUser.bio || '';
    
    document.getElementById('profile-editor-modal').style.display = 'block';
}

function closeProfileEditor() {
    document.getElementById('profile-editor-modal').style.display = 'none';
}

function saveProfile(event) {
    event.preventDefault();
    
    // Update user data
    currentUser.name = document.getElementById('edit-name').value;
    currentUser.age = parseInt(document.getElementById('edit-age').value);
    currentUser.gender = document.getElementById('edit-gender').value;
    currentUser.preference = document.getElementById('edit-preference').value;
    currentUser.ide = document.getElementById('edit-ide').value;
    currentUser.experience = document.getElementById('edit-experience').value;
    currentUser.bio = document.getElementById('edit-bio').value;
    
    updateUserDisplay();
    generateGenderBasedMatches();
    closeProfileEditor();
    
    // Show success message
    showNotification('Profile updated successfully! Your improved profile will attract even better matches! 💻✨', 'success');
}

// Pickup line generator functions
function generateNewPickupLine() {
    const language = document.getElementById('pickup-language-select').value;
    const style = document.getElementById('pickup-style-select').value;
    const includeMalayalam = document.getElementById('malayalam-toggle').checked;
    
    // Show loading state
    const generateBtn = document.querySelector('.generate-btn');
    const originalText = generateBtn.innerHTML;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    
    setTimeout(() => {
        const pickupLine = getAdvancedPickupLine(language, style);
        
        document.getElementById('generated-pickup-english').textContent = `"${pickupLine.english}"`;
        
        if (includeMalayalam) {
            document.getElementById('generated-pickup-malayalam').textContent = `Malayalam: "${pickupLine.malayalam}"`;
            document.getElementById('generated-pickup-malayalam').style.display = 'block';
        } else {
            document.getElementById('generated-pickup-malayalam').style.display = 'none';
        }
        
        // Reset button
        generateBtn.innerHTML = originalText;
    }, 1500);
}

function getAdvancedPickupLine(language, style) {
    const pickupLines = {
        javascript: {
            romantic: [
                { english: "Are you a Promise? Because I'd await you forever! 💖", malayalam: "Nee oru Promise aano? Njaan ninne forever await cheyyum! 💖" },
                { english: "You must be a callback function, because you complete me! 💕", malayalam: "Nee oru callback function aayirikkum, because nee enne complete cheyyunnath! 💕" },
                { english: "Are you an arrow function? Because you make my syntax so much cleaner! ➡️💖", malayalam: "Nee oru arrow function aano? Because nee ente syntax ithrem clean aakkunnath! ➡️💖" }
            ],
            funny: [
                { english: "Are you undefined? Because I can't function without you! 😂💕", malayalam: "Nee undefined aano? Because njaan ninne illaathe function cheyyaan kazhiyilla! 😂💕" },
                { english: "You must be NaN, because you're not a number... you're perfect! 🤪❤️", malayalam: "Nee NaN aayirikkum, because nee oru number alla... nee perfect aane! 🤪❤️" },
                { english: "Are you a semicolon? Because you're optional but I want you anyway! 😜💖", malayalam: "Nee oru semicolon aano? Because nee optional aane but njaan ninne venam! 😜💖" }
            ],
            nerdy: [
                { english: "Are you a closure? Because you have access to all my private variables! 🤓💕", malayalam: "Nee oru closure aano? Because ninnakku ente ella private variables nte access unde! 🤓💕" },
                { english: "You must be hoisted, because you're always on top of my mind! 🧠💖", malayalam: "Nee hoisted aayirikkum, because nee eppozhum ente manassinte top ile! 🧠💖" },
                { english: "Are you ES6? Because you bring so many new features to my life! 🚀💕", malayalam: "Nee ES6 aano? Because nee ente jeevithathil ithrem new features konduvannath! 🚀💕" }
            ],
            smooth: [
                { english: "You're like perfect code - elegant, efficient, and impossible to improve! 😎💖", malayalam: "Nee perfect code pole aane - elegant, efficient, improve cheyyaan kazhiyaatha! 😎💖" },
                { english: "Are you a framework? Because you provide structure to my chaotic life! 💼💕", malayalam: "Nee oru framework aano? Because nee ente chaotic life nu structure kodukkunnath! 💼💕" },
                { english: "You must be an API, because you connect perfectly with my heart! 🔗❤️", malayalam: "Nee oru API aayirikkum, because nee ente heart odumayi perfectly connect cheyyunnath! 🔗❤️" }
            ],
            debugging: [
                { english: "Are you a debugger? Because you found the bug in my heart! 🐛💖", malayalam: "Nee oru debugger aano? Because nee ente heart ile bug kandethiyath! 🐛💖" },
                { english: "You must be a try-catch block, because you handle all my exceptions! 💪💕", malayalam: "Nee oru try-catch block aayirikkum, because nee ente ella exceptions um handle cheyyunnath! 💪💕" },
                { english: "Are you console.log? Because you help me understand what's going on! 🖥️❤️", malayalam: "Nee console.log aano? Because nee enthaan nadakkunnathennu manasilaakkan sahayikkunnath! 🖥️❤️" }
            ]
        },
        python: {
            romantic: [
                { english: "Are you a Python list? Because I want to append myself to you! 🐍💕", malayalam: "Nee oru Python list aano? Njaan ninne append cheyyaan agrahikkunnath! 🐍💕" },
                { english: "You must be a decorator, because you make everything more beautiful! ✨💖", malayalam: "Nee oru decorator aayirikkum, because nee ellathine kooduthal sundaramaakkunnath! ✨💖" },
                { english: "Are you a generator? Because you yield infinite happiness! 🔄❤️", malayalam: "Nee oru generator aano? Because nee infinite happiness yield cheyyunnath! 🔄❤️" }
            ],
            funny: [
                { english: "Are you indentation? Because without you, nothing makes sense! 😅💕", malayalam: "Nee indentation aano? Because ninne illaathe onnum sense aakilla! 😅💕" },
                { english: "You must be import this, because you're the zen of my Python! 🧘💖", malayalam: "Nee 'import this' aayirikkum, because nee ente Python inte zen aane! 🧘💖" },
                { english: "Are you pip? Because you install happiness in my life! 📦❤️", malayalam: "Nee pip aano? Because nee ente jeevithathil happiness install cheyyunnath! 📦❤️" }
            ]
        }
        // Add more languages and styles as needed
    };
    
    const lines = pickupLines[language]?.[style] || pickupLines.javascript.romantic;
    return lines[Math.floor(Math.random() * lines.length)];
}

function copyPickupLine() {
    const englishLine = document.getElementById('generated-pickup-english').textContent;
    const malayalamLine = document.getElementById('generated-pickup-malayalam').textContent;
    const includeMalayalam = document.getElementById('malayalam-toggle').checked;
    
    const textToCopy = includeMalayalam ? `${englishLine}\n${malayalamLine}` : englishLine;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const btn = document.querySelector('.copy-btn');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.background = 'linear-gradient(45deg, #00FF00, #00CC00)';
        
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = 'linear-gradient(45deg, #00FFCC, #00D4AA)';
        }, 2000);
    }).catch(() => {
        alert('Failed to copy pickup line! But you can still use it manually! 😄');
    });
}

function favoritePickupLine() {
    const englishLine = document.getElementById('generated-pickup-english').textContent;
    const language = document.getElementById('pickup-language-select').value;
    const style = document.getElementById('pickup-style-select').value;
    
    const favorite = {
        line: englishLine.replace(/"/g, ''),
        language: language.charAt(0).toUpperCase() + language.slice(1),
        style: style.charAt(0).toUpperCase() + style.slice(1)
    };
    
    favoritePickupLines.unshift(favorite);
    
    // Keep only last 5 favorites
    if (favoritePickupLines.length > 5) {
        favoritePickupLines = favoritePickupLines.slice(0, 5);
    }
    
    updateFavoritesList();
    
    // Show feedback
    const btn = document.querySelector('.favorite-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-heart"></i> Added!';
    
    setTimeout(() => {
        btn.innerHTML = original;
    }, 2000);
}

function updateFavoritesList() {
    const container = document.getElementById('favorite-pickup-lines');
    
    if (favoritePickupLines.length === 0) {
        container.innerHTML = '<p style="color: #B0B0B0; text-align: center;">No favorites yet! Generate some pickup lines! 💫</p>';
        return;
    }
    
    container.innerHTML = favoritePickupLines.map(favorite => `
        <div class="favorite-item">
            <p>"${favorite.line}"</p>
            <small>${favorite.language} • ${favorite.style}</small>
        </div>
    `).join('');
}

function sharePickupLine() {
    const englishLine = document.getElementById('generated-pickup-english').textContent;
    const malayalamLine = document.getElementById('generated-pickup-malayalam').textContent;
    const includeMalayalam = document.getElementById('malayalam-toggle').checked;
    
    const shareText = includeMalayalam 
        ? `Check out this programming pickup line from Tinderror!\n\n${englishLine}\n${malayalamLine}\n\n💻💕 #Tinderror #ProgrammingLove`
        : `Check out this programming pickup line from Tinderror!\n\n${englishLine}\n\n💻💕 #Tinderror #ProgrammingLove`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Programming Pickup Line from Tinderror',
            text: shareText
        });
    } else {
        // Fallback to copying
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Pickup line copied to clipboard! Share it with your coding crush! 💕');
        }).catch(() => {
            alert('Share failed, but you can copy it manually! 😄');
        });
    }
}
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.style.background = '#1E1E1E';
        document.body.style.color = '#FFFFFF';
    } else {
        document.body.style.background = '#FFFFFF';
        document.body.style.color = '#1E1E1E';
    }
    
    // You can add more theme switching logic here
    console.log('Dark mode:', isDarkMode);
}

function resetHeartCache() {
    if (confirm('Are you sure you want to reset your heart cache? This will clear all your matches and you\'ll start fresh!')) {
        // Reset matches
        currentMatchIndex = 0;
        
        // Clear any stored data (in a real app, this would clear localStorage/sessionStorage)
        console.log('Heart cache reset!');
        
        // Show success message
        alert('Heart cache cleared! Time for a fresh start in your debugging love life! 💔➡️💕');
        
        // Redirect to code editor
        showDashboardSection('code-editor');
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    showPage('landing');
    updateUserDisplay();
    
    // Add click outside modal to close
    document.getElementById('match-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeMatchModal();
        }
    });
    
    // Add click outside profile editor to close
    document.getElementById('profile-editor-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProfileEditor();
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentPage === 'dashboard' && currentDashboardSection === 'matches') {
            if (e.key === 'ArrowLeft') {
                // Simulate left swipe
                const currentCard = document.querySelector('.match-card');
                if (currentCard) {
                    swipeCard(currentCard.id, 'left');
                }
            } else if (e.key === 'ArrowRight') {
                // Simulate right swipe
                const currentCard = document.querySelector('.match-card');
                if (currentCard) {
                    swipeCard(currentCard.id, 'right');
                }
            }
        }
        
        // Close modals with Escape key
        if (e.key === 'Escape') {
            closeMatchModal();
            closeProfileEditor();
        }
        
        // Generate new pickup line with Space key in pickup generator
        if (currentPage === 'dashboard' && currentDashboardSection === 'pickup-generator' && e.key === ' ') {
            e.preventDefault();
            generateNewPickupLine();
        }
    });
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add input focus effects
    const inputs = document.querySelectorAll('.input-group input, .input-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Initialize language highlighting
    updateLanguageHighlighting();
    
    // Initialize favorites list
    updateFavoritesList();
});

// Code editor enhancements
function addCodeEditorFeatures() {
    const textarea = document.getElementById('code-input');
    if (!textarea) return;
    
    // Add syntax highlighting simulation
    textarea.addEventListener('input', function() {
        // Simple keyword highlighting (visual feedback only)
        const keywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return'];
        const value = this.value;
        
        // In a real implementation, you'd use a proper syntax highlighter like CodeMirror or Monaco Editor
        console.log('Code updated:', value.substring(0, 50) + '...');
    });
    
    // Add auto-indentation
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            
            this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 4;
        }
        
        if (e.key === 'Enter') {
            // Auto-indent on new line
            const start = this.selectionStart;
            const lines = this.value.substring(0, start).split('\n');
            const currentLine = lines[lines.length - 1];
            const indent = currentLine.match(/^\s*/)[0];
            
            setTimeout(() => {
                const newStart = this.selectionStart;
                this.value = this.value.substring(0, newStart) + indent + this.value.substring(newStart);
                this.selectionStart = this.selectionEnd = newStart + indent.length;
            }, 0);
        }
    });
}

// Initialize code editor features when page loads
document.addEventListener('DOMContentLoaded', addCodeEditorFeatures);

// Animation helpers
function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💘', '💝', '💞'];
    
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.animation = 'floatUp 4s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 4000);
        }
    }, 1000);
}

// Add floating hearts animation
const floatUpKeyframes = `
@keyframes floatUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = floatUpKeyframes;
document.head.appendChild(style);

// Start floating hearts on dashboard
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createFloatingHearts, 5000); // Start after 5 seconds
});

// Error personality generator
const errorPersonalities = {
    'SyntaxError': {
        personality: 'Syntax Rebel',
        description: 'Lives dangerously without semicolons',
        compatibility: ['Runtime Ninja', 'Logic Master', 'Performance Guru']
    },
    'TypeError': {
        personality: 'Type Flexible',
        description: 'Believes love transcends data types',
        compatibility: ['Syntax Rebel', 'Runtime Ninja', 'Memory Manager']
    },
    'ReferenceError': {
        personality: 'Reference Romantic',
        description: 'Always looking for that special variable',
        compatibility: ['Logic Master', 'Performance Guru', 'Async Awaiter']
    },
    'RangeError': {
        personality: 'Boundary Pusher',
        description: 'Knows no limits in code and love',
        compatibility: ['Syntax Rebel', 'Type Flexible', 'Memory Manager']
    }
};

function getErrorPersonality(errorType) {
    return errorPersonalities[errorType] || errorPersonalities['SyntaxError'];
}

// Language-specific pickup lines
const languagePickupLines = {
    javascript: [
        "Are you a Promise? Because I'd await you forever!",
        "You must be undefined, because I can't function without you!",
        "Are you a closure? Because you have access to all my private variables!"
    ],
    python: [
        "Are you a Python list? Because I want to append myself to you!",
        "You must be a dictionary, because you're the key to my heart!",
        "Are you a for loop? Because I want to iterate through life with you!"
    ],
    java: [
        "Are you a Java class? Because you're definitely my type!",
        "You must be a constructor, because you create new instances of happiness in my life!",
        "Are you thread-safe? Because I want to access you from multiple threads of my heart!"
    ],
    cpp: [
        "Are you a pointer? Because you point to everything I need!",
        "You must be a smart pointer, because you automatically manage my heart!",
        "Are you a template? Because you work with any type of love I give you!"
    ],
    typescript: [
        "Are you TypeScript? Because you add meaning to my JavaScript heart!",
        "You must be a generic, because you work with any type of relationship!",
        "Are you strongly typed? Because I know exactly what I'm getting with you!"
    ],
    go: [
        "Are you a goroutine? Because you make my heart run concurrently!",
        "You must be a channel, because you're the perfect way to communicate love!",
        "Are you garbage collected? Because you clean up all the mess in my life!"
    ]
};

function getLanguageSpecificPickupLine(language) {
    const lines = languagePickupLines[language] || languagePickupLines.javascript;
    return lines[Math.floor(Math.random() * lines.length)];
}

// Enhanced code analysis
function enhancedCodeAnalysis(code, language) {
    const issues = [];
    
    // Check for common patterns
    if (code.includes('===') || code.includes('!==')) {
        issues.push('Strict Equality Lover - You believe in precise comparisons in code and relationships!');
    }
    
    if (code.includes('async') && code.includes('await')) {
        issues.push('Patient Programmer - You understand that good things take time!');
    }
    
    if (code.includes('try') && code.includes('catch')) {
        issues.push('Error Handler - You\'re prepared for anything life throws at you!');
    }
    
    if (code.split('\n').length > 20) {
        issues.push('Detailed Coder - You believe in thorough communication!');
    }
    
    if (code.includes('// ') || code.includes('/* ')) {
        issues.push('Comment Writer - You believe in clear communication!');
    }
    
    return issues.length > 0 ? issues : ['Clean Coder - You write beautiful, bug-free code!'];
}

// Performance optimization for mobile
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduce animation intensity on mobile
        const animations = document.querySelectorAll('[style*="animation"]');
        animations.forEach(el => {
            el.style.animationDuration = '1s'; // Faster animations
        });
        
        // Lazy load images
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize mobile optimizations
document.addEventListener('DOMContentLoaded', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Profile action functions
function shareProfile() {
    // Create a shareable profile link
    const profileData = {
        name: document.getElementById('profile-name-display').textContent,
        ide: document.getElementById('profile-ide-display').textContent,
        experience: document.getElementById('profile-experience-display').textContent,
        languages: Array.from(document.querySelectorAll('#profile-languages-display .lang-tag')).map(tag => tag.textContent),
        bio: document.getElementById('profile-bio-display').textContent
    };
    
    // Create shareable text
    const shareText = `Check out my Tinderror profile! 💻❤️\n\n` +
                     `${profileData.name} - ${profileData.experience}\n` +
                     `Coding with: ${profileData.languages.join(', ')}\n` +
                     `Favorite IDE: ${profileData.ide}\n\n` +
                     `"${profileData.bio}"\n\n` +
                     `Join me on Tinderror - Where bugs become features and developers find love! 🐛💕`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'My Tinderror Profile',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Profile link copied to clipboard!', 'success');
        }).catch(() => {
            // Ultimate fallback: show modal with text to copy
            showShareModal(shareText);
        });
    }
}

function viewSettings() {
    showNotification('Settings panel coming soon! 🛠️', 'info');
    
    // Placeholder for future settings modal
    console.log('Settings would include:');
    console.log('- Notification preferences');
    console.log('- Privacy settings');
    console.log('- Match criteria');
    console.log('- Account management');
}

function showShareModal(text) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h3>Share Your Profile</h3>
                <button onclick="this.closest('.modal').remove()" class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="padding: 1.5rem;">
                <p style="margin-bottom: 1rem; color: #B0B0B0;">
                    Copy this text to share your profile:
                </p>
                <textarea readonly style="width: 100%; height: 200px; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: white; font-family: inherit; resize: vertical;">${text}</textarea>
                <button onclick="navigator.clipboard.writeText('${text.replace(/'/g, "\\'")}').then(() => { showNotification('Copied!', 'success'); this.closest('.modal').remove(); })" 
                        style="width: 100%; margin-top: 1rem; padding: 0.8rem; background: linear-gradient(45deg, #00FFCC, #00D4AA); border: none; border-radius: 8px; color: #1E1E1E; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-copy"></i> Copy to Clipboard
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
                max-width: 350px;
                word-wrap: break-word;
            }
            .notification.success { background: linear-gradient(45deg, #00FFCC, #00D4AA); color: #1E1E1E; }
            .notification.error { background: linear-gradient(45deg, #FF3366, #FF6B35); }
            .notification.info { background: linear-gradient(45deg, #FFD700, #FFA500); color: #1E1E1E; }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                to { opacity: 0; transform: translateX(100%); }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Gender-based matching function
function generateGenderBasedMatches() {
    if (!currentUser.preference || currentUser.preference === 'all') {
        // Show all matches if no preference set
        displayMatches();
        return;
    }
    
    // Filter matches based on user preference
    const filteredMatches = matches.filter(match => {
        if (currentUser.preference === 'male') return match.gender === 'male';
        if (currentUser.preference === 'female') return match.gender === 'female';
        if (currentUser.preference === 'non-binary') return match.gender === 'non-binary';
        return true;
    });
    
    // If no matches found for preference, show a message and fall back to all
    if (filteredMatches.length === 0) {
        showNotification(`No ${currentUser.preference} developers found. Showing all available matches! 💝`, 'info');
        displayMatches();
        return;
    }
    
    // Update global matches array temporarily for display
    const originalMatches = [...matches];
    matches.splice(0, matches.length, ...filteredMatches);
    
    displayMatches();
    
    // Restore original matches after a short delay
    setTimeout(() => {
        matches.splice(0, matches.length, ...originalMatches);
    }, 100);
    
    showNotification(`Found ${filteredMatches.length} ${currentUser.preference} developers for you! 💻💕`, 'success');
}

// Update user display after profile changes
function updateUserDisplay() {
    document.getElementById('profile-name-display').textContent = currentUser.name;
    document.getElementById('profile-age-display').textContent = `${currentUser.age} years old`;
    document.getElementById('profile-ide-display').textContent = currentUser.ide;
    document.getElementById('profile-experience-display').textContent = currentUser.experience;
    document.getElementById('profile-bio-display').textContent = currentUser.bio;
}

// Chat functionality
let currentChatUser = null;

function openChatWindow() {
    const matchName = document.getElementById('match-name').textContent;
    const match = matches.find(m => m.name === matchName);
    
    if (match) {
        currentChatUser = match;
        
        // Update chat window with user info
        document.getElementById('chat-user-name').textContent = match.name;
        document.getElementById('chat-user-avatar').src = match.image;
        
        // Show chat modal
        document.getElementById('chat-modal').style.display = 'block';
        
        // Close match modal
        closeMatchModal();
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('chat-input').focus();
        }, 100);
    }
}

function closeChatWindow() {
    document.getElementById('chat-modal').style.display = 'none';
    currentChatUser = null;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const messageText = input.value.trim();
    
    if (messageText && currentChatUser) {
        // Add user message
        addMessageToChat(messageText, true);
        input.value = '';
        
        // Simulate response from the matched user
        setTimeout(() => {
            const responses = [
                "That's so cool! I love your coding style! 💻",
                "Haha, you're funny! Are you debugging my heart? 💕",
                "I totally agree! Clean code is the best code! ✨",
                "You seem like an amazing developer! Want to pair program sometime? 👥",
                "Your pickup lines are as smooth as your code! 😄",
                "I'm impressed by your tech stack! We have so much in common! 🚀",
                "You're making my heart compile without errors! ❤️",
                "This conversation is better than any code review! 😊"
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessageToChat(randomResponse, false);
        }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    }
}

function addMessageToChat(message, isFromUser) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isFromUser ? 'sent' : 'received'}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <span class="message-time">${timeString}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Close chat window when clicking outside
document.getElementById('chat-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeChatWindow();
    }
});

// Close chat with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('chat-modal').style.display === 'block') {
            closeChatWindow();
        }
    }
});

console.log('🐛💕 Tinderror loaded successfully! Ready to debug your love life!');
