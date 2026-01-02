// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    // Simulate loading process
    let progress = 0;
    const loadingMessages = [
        "Initializing CodePlay Editor...",
        "Loading HTML Editor...",
        "Setting up CSS Environment...",
        "Preparing JavaScript Engine...",
        "Creating Live Preview...",
        "Finalizing Setup...",
        "Ready to Code! 🚀"
    ];
    
    const loadingInterval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        
        // Update loading message
        if (progress <= 20) progressText.textContent = loadingMessages[0];
        else if (progress <= 30) progressText.textContent = loadingMessages[1];
        else if (progress <= 45) progressText.textContent = loadingMessages[2];
        else if (progress <= 60) progressText.textContent = loadingMessages[3];
        else if (progress <= 75) progressText.textContent = loadingMessages[4];
        else if (progress <= 90) progressText.textContent = loadingMessages[5];
        else progressText.textContent = loadingMessages[6];
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Add final animation
            progressBar.style.transition = 'width 0.5s ease';
            progressText.style.transition = 'opacity 0.5s ease';
            
            // Hide loading screen with delay
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                
                // Show welcome message
                setTimeout(() => {
                    showWelcomeMessage();
                }, 500);
                
                // Start background animations
                startBackgroundAnimations();
                
            }, 1000);
        }
    }, 200);
    
    // Create particles
    createParticles();
    
    // Set default code
    setDefaultCode();
    
    // Initialize line counters
    updateLineCounters();
    updateCharCount();
    startClock();
    
    // Load saved code
    loadSavedCode();
    startAutoSave();
});

// Set default code
function setDefaultCode() {
    document.getElementById('html-code').value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 500px;
            width: 100%;
        }
        h1 { 
            color: #333;
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
        p {
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        .btn {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-weight: 600;
        }
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .features {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        .feature {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            min-width: 120px;
        }
        .feature i {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        .html-feature { color: #e34c26; }
        .css-feature { color: #264de4; }
        .js-feature { color: #f0db4f; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to CodePlay! 🎉</h1>
        <p>This is a live code editor. Edit HTML, CSS, and JavaScript on the left to see instant changes here.</p>
        
        <div class="features">
            <div class="feature">
                <i class="fab fa-html5 html-feature"></i>
                <h3>HTML5</h3>
            </div>
            <div class="feature">
                <i class="fab fa-css3-alt css-feature"></i>
                <h3>CSS3</h3>
            </div>
            <div class="feature">
                <i class="fab fa-js-square js-feature"></i>
                <h3>JavaScript</h3>
            </div>
        </div>
        
        <button class="btn" onclick="showMessage()">Try Me!</button>
        <div id="message" style="margin-top: 1.5rem; font-weight: bold; color: #667eea;"></div>
    </div>
    <script>
        function showMessage() {
            const messages = [
                "Awesome! ✨",
                "Code is running smoothly! 🚀",
                "Great job! Keep coding! 💻",
                "You're doing amazing! 👍",
                "Welcome to web development! 🌐"
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            document.getElementById('message').innerHTML = \`
                <div style="animation: fadeIn 0.5s ease;">
                    <i class="fas fa-star" style="color: #ffd700;"></i>
                    \${randomMsg}
                </div>
            \`;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = \`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            \`;
            document.head.appendChild(style);
        }
        
        // Auto-run message after 3 seconds
        setTimeout(() => {
            showMessage();
        }, 3000);
    </script>
</body>
</html>`;

    document.getElementById('css-code').value = `/* Add your CSS styles here */
.container {
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: translateY(20px) scale(0.95); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0) scale(1); 
    }
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #764ba2, #667eea);
}

/* Responsive design */
@media (max-width: 600px) {
    .container {
        padding: 1.5rem;
        margin: 10px;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .features {
        flex-direction: column;
        align-items: center;
    }
    
    .feature {
        width: 100%;
        max-width: 200px;
    }
}

/* Add more styles below */`;

    document.getElementById('js-code').value = `// Add your JavaScript here
console.log("CodePlay Editor Loaded Successfully!");

// Example functions
function updateStatus(message) {
    document.getElementById('status').textContent = message;
    console.log("Status updated:", message);
}

// Random color generator
function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#e34c26', '#264de4', '#f0db4f', '#10b981'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Animate elements
function animateElements() {
    const elements = document.querySelectorAll('.feature');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transform = 'scale(1.1)';
            element.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 300);
        }, index * 200);
    });
}

// Call animation after page loads
setTimeout(animateElements, 1000);

// Add more JavaScript code below

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl + S to save
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        updateStatus('Auto-saved!');
        console.log('Manual save triggered');
    }
    
    // F1 to show help
    if (e.key === 'F1') {
        e.preventDefault();
        alert('CodePlay Editor Help:\\n\\n• F5: Run Code\\n• Ctrl+S: Save\\n• Double-click: Fullscreen\\n• ESC: Exit Fullscreen');
    }
});`;

    // Auto-run after 2 seconds
    setTimeout(run, 2000);
}

// Create particles effect
function createParticles() {
    const particles = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(102, 126, 234, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 5}s infinite linear;
        `;
        
        particles.appendChild(particle);
    }
}

// Show welcome message
function showWelcomeMessage() {
    const welcomeMsg = document.createElement('div');
    welcomeMsg.className = 'welcome-message';
    welcomeMsg.innerHTML = `
        <h2>Welcome to CodePlay! 🎉</h2>
        <p>Your professional web development playground is ready.</p>
        <p>Start coding in HTML, CSS, and JavaScript with live preview.</p>
        <button class="btn" onclick="closeWelcome()">Start Coding!</button>
    `;
    
    document.body.appendChild(welcomeMsg);
    
    // Show with animation
    setTimeout(() => {
        welcomeMsg.classList.add('show');
    }, 100);
}

// Close welcome message
function closeWelcome() {
    const welcomeMsg = document.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.classList.remove('show');
        setTimeout(() => {
            welcomeMsg.remove();
        }, 500);
    }
}

// Start background animations
function startBackgroundAnimations() {
    // Animate circles
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        circle.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Animate floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 2}s`;
    });
}

// Main run function
function run() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const output = document.getElementById('output');
    const loading = document.getElementById('loading');
    const status = document.getElementById('status');

    // Show loading
    loading.style.display = 'flex';
    status.textContent = 'Running...';
    status.style.background = 'var(--warning)';

    try {
        const doc = output.contentDocument || output.contentWindow.document;
        doc.open();
        doc.write(htmlCode);
        
        // Add CSS
        const style = doc.createElement('style');
        style.textContent = cssCode;
        doc.head.appendChild(style);
        
        // Execute JavaScript
        const script = doc.createElement('script');
        script.textContent = jsCode;
        doc.body.appendChild(script);
        
        doc.close();
        
        // Update status
        setTimeout(() => {
            loading.style.display = 'none';
            status.textContent = 'Success';
            status.style.background = 'var(--success)';
            showToast('Code executed successfully!');
            
            // Update last run time
            const now = new Date();
            document.getElementById('output-time').textContent = 
                `Last run: ${now.toLocaleTimeString()}`;
                
            // Update console count
            updateConsoleCount();
        }, 1000);

    } catch (error) {
        loading.style.display = 'none';
        status.textContent = 'Error';
        status.style.background = 'var(--danger)';
        showToast(`Error: ${error.message}`, 'error');
        console.error('Execution error:', error);
    }
}

// Helper functions
function clearCode() {
    if (confirm('Are you sure you want to clear all code?')) {
        document.getElementById('html-code').value = '';
        document.getElementById('css-code').value = '';
        document.getElementById('js-code').value = '';
        updateLineCounters();
        updateCharCount();
        showToast('All code cleared!');
    }
}

function copyCode(editorId) {
    const textarea = document.getElementById(editorId);
    textarea.select();
    document.execCommand('copy');
    showToast('Code copied to clipboard!');
}

function formatCode(editorId) {
    const textarea = document.getElementById(editorId);
    const code = textarea.value;
    
    // Simple formatting
    let formatted = code
        .replace(/\}\s*/g, '}\n\n')
        .replace(/\{\s*/g, '{\n')
        .replace(/;\s*/g, ';\n')
        .replace(/,\s*/g, ', ');
        
    textarea.value = formatted;
    showToast('Code formatted!');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const themeBtn = document.querySelector('.theme-btn i');
    if (document.body.classList.contains('light-mode')) {
        themeBtn.className = 'fas fa-sun';
        showToast('Light mode activated');
    } else {
        themeBtn.className = 'fas fa-moon';
        showToast('Dark mode activated');
    }
}

function refreshOutput() {
    run();
}

// Fullscreen functionality
let currentFullscreen = null;

function toggleFullscreen(editorId) {
    const editor = document.getElementById(editorId);
    const overlay = document.getElementById('fullscreen-overlay');
    
    if (!editor.classList.contains('fullscreen-mode')) {
        // Enter fullscreen
        enterFullscreen(editorId);
    } else {
        // Exit fullscreen
        exitFullscreen();
    }
}

function enterFullscreen(editorId) {
    const editor = document.getElementById(editorId);
    const overlay = document.getElementById('fullscreen-overlay');
    
    // Exit any existing fullscreen
    if (currentFullscreen && currentFullscreen !== editor) {
        currentFullscreen.classList.remove('fullscreen-mode');
    }
    
    // Enter new fullscreen
    editor.classList.add('fullscreen-mode');
    overlay.classList.add('active');
    document.body.classList.add('fullscreen-active');
    currentFullscreen = editor;
    
    // Update icon
    const icon = editor.querySelector('.fullscreen-toggle i');
    if (icon) {
        icon.className = 'fas fa-compress';
    }
    
    // Focus on content
    if (editor.classList.contains('html-editor') || 
        editor.classList.contains('css-editor') || 
        editor.classList.contains('js-editor')) {
        const textarea = editor.querySelector('textarea');
        if (textarea) {
            textarea.focus();
            textarea.style.fontSize = '18px';
        }
    }
    
    showToast('Fullscreen mode activated - Press ESC to exit');
}

function exitFullscreen() {
    if (currentFullscreen) {
        currentFullscreen.classList.remove('fullscreen-mode');
        
        // Update icon
        const icon = currentFullscreen.querySelector('.fullscreen-toggle i');
        if (icon) {
            icon.className = 'fas fa-expand';
        }
        
        // Reset font size
        if (currentFullscreen.classList.contains('html-editor') || 
            currentFullscreen.classList.contains('css-editor') || 
            currentFullscreen.classList.contains('js-editor')) {
            const textarea = currentFullscreen.querySelector('textarea');
            if (textarea) {
                textarea.style.fontSize = '';
            }
        }
        
        currentFullscreen = null;
    }
    
    const overlay = document.getElementById('fullscreen-overlay');
    overlay.classList.remove('active');
    document.body.classList.remove('fullscreen-active');
}

// ESC key to exit fullscreen
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && currentFullscreen) {
        exitFullscreen();
    }
});

// Click overlay to exit
document.getElementById('fullscreen-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        exitFullscreen();
    }
});

function showConsole() {
    const output = document.getElementById('output');
    const consoleWindow = output.contentWindow;
    
    if (consoleWindow && consoleWindow.console) {
        // Capture console logs from iframe
        const originalLog = consoleWindow.console.log;
        consoleWindow.console.log = function(...args) {
            originalLog.apply(this, args);
            // Display in our console tab
            const badge = document.getElementById('console-count');
            const current = parseInt(badge.textContent) || 0;
            badge.textContent = current + 1;
        };
    }
    showToast('Console activated - check browser console');
}

function updateConsoleCount() {
    const badge = document.getElementById('console-count');
    const current = parseInt(badge.textContent) || 0;
    badge.textContent = current + 1;
}

// Line counter update
function updateLineCounters() {
    const editors = ['html', 'css', 'js'];
    editors.forEach(editor => {
        const textarea = document.getElementById(`${editor}-code`);
        const lineSpan = document.getElementById(`${editor}-lines`);
        const lines = textarea.value.split('\n').length;
        lineSpan.textContent = lines;
        
        // Update on input
        textarea.addEventListener('input', () => {
            const lines = textarea.value.split('\n').length;
            lineSpan.textContent = lines;
            updateCharCount();
        });
    });
}

// Character counter
function updateCharCount() {
    const editors = ['html', 'css', 'js'];
    let totalChars = 0;
    
    editors.forEach(editor => {
        const textarea = document.getElementById(`${editor}-code`);
        totalChars += textarea.value.length;
    });
    
    document.getElementById('char-count').textContent = `Characters: ${totalChars}`;
}

// Real-time clock
function startClock() {
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('time').textContent = timeStr;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    
    if (type === 'error') {
        toast.style.background = 'var(--danger)';
    } else if (type === 'warning') {
        toast.style.background = 'var(--warning)';
    } else {
        toast.style.background = 'var(--success)';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Auto-save
let autoSaveTimer;
function startAutoSave() {
    if (autoSaveTimer) clearInterval(autoSaveTimer);
    
    autoSaveTimer = setInterval(() => {
        const html = document.getElementById('html-code').value;
        const css = document.getElementById('css-code').value;
        const js = document.getElementById('js-code').value;
        
        localStorage.setItem('codeplay_html', html);
        localStorage.setItem('codeplay_css', css);
        localStorage.setItem('codeplay_js', js);
        
        console.log('Auto-saved at:', new Date().toLocaleTimeString());
    }, 30000);
}

// Load saved code
function loadSavedCode() {
    const html = localStorage.getItem('codeplay_html');
    const css = localStorage.getItem('codeplay_css');
    const js = localStorage.getItem('codeplay_js');
    
    if (html) document.getElementById('html-code').value = html;
    if (css) document.getElementById('css-code').value = css;
    if (js) document.getElementById('js-code').value = js;
    
    updateLineCounters();
    updateCharCount();
}

// Add keyboard shortcut for loading screen (for testing)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F1') {
        e.preventDefault();
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '1';
        loadingScreen.style.visibility = 'visible';
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }, 2000);
    }
});

// Add event listeners for auto-run on typing
document.getElementById('html-code').addEventListener('input', function() {
    clearTimeout(this.timer);
    this.timer = setTimeout(run, 1000);
});

document.getElementById('css-code').addEventListener('input', function() {
    clearTimeout(this.timer);
    this.timer = setTimeout(run, 1000);
});

document.getElementById('js-code').addEventListener('input', function() {
    clearTimeout(this.timer);
    this.timer = setTimeout(run, 1000);
});