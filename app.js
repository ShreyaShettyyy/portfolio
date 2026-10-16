/* ----------------------------------------------------
   ETHEREAL FOREST SANCTUARY INTERACTIVE ENGINE (app.js)
   ---------------------------------------------------- */

// Rich Project Database for Modal Details (Shreya's Projects)
const projectDatabase = {
    bank: {
        title: "Bank Management System",
        desc: "A robust, menu-driven console application engineered in C. Handles account record operations with modular file system structures to ensure persistent ledger logging and secure user validation.",
        tags: ["C Programming", "File Handling", "Algorithms", "Console Systems"],
        highlights: [
            "Engineered structured record data models to handle multi-attribute bank accounts",
            "Implemented persistent binary file handling routines for secure transaction logging",
            "Created responsive menu-driven CLI offering balances, deposits, and queries",
            "Optimized records updates using sequential scan and rewrite algorithms"
        ],
        icon: "fa-building-columns",
        gradient: "linear-gradient(135deg, #DFE6E2 0%, #CCD9D2 100%)",
        source: "https://github.com/ShreyaShettyyy/bank-management-system.git",
        live: "#"
    },
    foodify: {
        title: "Foodify",
        desc: "A gorgeous, responsive food ordering website showcasing a modern culinary digital menu. Integrated with frontend cart systems, interactive dish filters, and administrative management capabilities.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        highlights: [
            "Crafted a mobile-first responsive frontend layout with vanilla CSS grid/flex structures",
            "Programmed client-side interactive cart math adding, removing, and updating selections",
            "Developed dynamic animative search filters matching dishes dynamically",
            "Integrated administrative dashboard for managing menu items and tracking order states"
        ],
        icon: "fa-bowl-food",
        gradient: "linear-gradient(135deg, #F5EAE0 0%, #EADAC2 100%)",
        source: "https://github.com/ShreyaShettyyy/foodify.git",
        live: "#"
    },
    signbridge: {
        title: "SignBridge",
        desc: "An AI-powered sign language gesture detection application that uses webcam input and computer vision to translate hand gestures into text in real-time.",
        tags: ["Python", "Computer Vision", "Machine Learning", "MediaPipe", "OpenCV"],
        highlights: [
            "Constructed gesture recognition models matching joint land-marking coordinates",
            "Integrated real-time webcam video parsing using Python OpenCV pipelines",
            "Employed MediaPipe hand landmark tracking for lightweight, high-accuracy classification",
            "Built interactive translation visual display reflecting detected characters and gestures"
        ],
        icon: "fa-hands-asl-interpreting",
        gradient: "linear-gradient(135deg, #E2ECF5 0%, #C4D7E8 100%)",
        source: "https://github.com/ShreyaShettyyy/SignBridge.git",
        live: "#"
    },
    relate: {
        title: "Relate",
        desc: "A machine learning based recommendation system that discovers product relationships and generates personalized recommendations from customer purchase patterns.",
        tags: ["Python", "Machine Learning", "Scikit-learn", "Recommendation System", "Data Science"],
        highlights: [
            "Engineered recommendation algorithms analyzing complex customer transaction associations",
            "Discovered high-confidence item relationships and buying behaviors across user baskets",
            "Trained personalized prediction models to generate accurate, high-relevance product recommendations",
            "Constructed scalable data processing workflows optimized for rapid recommendation inference"
        ],
        icon: "fa-diagram-project",
        gradient: "linear-gradient(135deg, #EBE6F5 0%, #D2C4E8 100%)",
        source: "https://github.com/ShreyaShettyyy/Relate",
        live: "#"
    },
    alumniconnect: {
        title: "AlumniConnect",
        desc: "A comprehensive web platform designed to foster engagement and networking among alumni. Features an interactive alumni directory, a career board for job opportunities, mentorship programs, community feeds, and integrated chat, providing a robust ecosystem to keep the alumni community connected and thriving.",
        tags: ["HTML5", "CSS3", "JavaScript", "Full Stack", "Community Platform", "Networking"],
        highlights: [
            "Engineered interactive alumni directory with multi-attribute filtering and discovery",
            "Designed a dedicated career board enabling job postings, tracking, and direct application workflows",
            "Built community feeds, discussions, and event RSVP systems for active alumni engagement",
            "Integrated mentorship pairing workflows and real-time chat for alumni connection"
        ],
        icon: "fa-people-roof",
        gradient: "linear-gradient(135deg, #E0F2E9 0%, #C3E7D3 100%)",
        source: "https://github.com/ShreyaShettyyy/AlumniConnect",
        live: "#"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. RUN PRELOADER WITH TRANQUIL CHARACTER
    runForestPreloader(() => {
        // Callback: Runs after preloader concludes
        safeInit(initThemeToggle, "Theme Toggle");
        safeInit(initBackgroundMusic, "Background Music");
        safeInit(initLenisSmoothScroll, "Lenis Scroll");
        safeInit(initAdaptiveCursor, "Adaptive Cursor");
        safeInit(initCanvasParticles, "Canvas Particles");
        safeInit(initGsapAnimations, "GSAP Animations");
        safeInit(init3dTilt, "3D Tilt");
        safeInit(initMagneticHover, "Magnetic Hover");
        safeInit(initNavbarScroll, "Navbar Scroll");
        safeInit(initProjectFilters, "Project Filters");
        safeInit(initProjectModal, "Project Modal");
        safeInit(initClipboardCopy, "Clipboard Copy");
        safeInit(initContactForm, "Contact Form");
    });
});

function safeInit(fn, name) {
    try {
        fn();
    } catch (e) {
        console.warn(`Sanctuary warning: Failed to initialize ${name}. Library might be blocked or offline.`, e);
    }
}

/* =========================================================================
   1. FOREST PRELOADER
   ========================================================================= */
function runForestPreloader(onComplete) {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('loader-bar');
    const percentText = document.getElementById('loader-percent');
    const quoteText = document.getElementById('loader-quote');

    if (!loader || !bar || !percentText) {
        if (onComplete) onComplete();
        return;
    }

    // Peaceful Anime Fantasy Quotes
    const quotes = [
        { progress: 0, text: "Entering the magical forest..." },
        { progress: 20, text: "Watering the Ghibli moss... 🌿" },
        { progress: 50, text: "Summoning forest fireflies... ✨" },
        { progress: 75, text: "Channeling mountain streams... 🌊" },
        { progress: 95, text: "The sanctuary gate is open." }
    ];

    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            gsap.to(bar, {
                width: '100%',
                duration: 0.4,
                onComplete: () => {
                    const tl = gsap.timeline({
                        onComplete: () => {
                            loader.style.display = 'none';
                            if (onComplete) onComplete();
                        }
                    });

                    // Preloader slide up
                    tl.to(loader, {
                        y: '-100%',
                        duration: 1.2,
                        ease: 'power4.inOut'
                    });

                    tl.from('.main-content', {
                        scale: 0.97,
                        opacity: 0,
                        duration: 1.4,
                        ease: 'power3.out'
                    }, '-=1.0');
                }
            });
        }

        percentText.textContent = `${progress}%`;
        bar.style.width = `${progress}%`;

        // Update Quote as loading advances
        const matchingQuote = quotes.find(q => progress >= q.progress && progress < (quotes[quotes.indexOf(q) + 1]?.progress || 101));
        if (matchingQuote && quoteText.textContent !== matchingQuote.text) {
            gsap.to(quoteText, {
                opacity: 0,
                y: -5,
                duration: 0.2,
                onComplete: () => {
                    quoteText.textContent = matchingQuote.text;
                    gsap.to(quoteText, { opacity: 1, y: 0, duration: 0.2 });
                }
            });
        }
    }, 45);
}

/* =========================================================================
   2. SMOOTH THEME TOGGLE (Sun / Moon)
   ========================================================================= */
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    
    // Read cached preference or default to dark-theme (magical forest)
    const cachedTheme = localStorage.getItem('forest-theme') || 'dark-theme';
    document.body.className = `forest-theme ${cachedTheme}`;
    updateThemeIcon(btn, cachedTheme);
    
    btn.addEventListener('click', () => {
        let currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        let newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
        
        // Ethereal sunlight transition flash
        const flash = document.createElement('div');
        flash.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#EBFEEF;opacity:0;z-index:99999;pointer-events:none;transition:opacity 0.4s ease;';
        document.body.appendChild(flash);
        
        gsap.to(flash, {
            opacity: 0.2,
            duration: 0.35,
            onComplete: () => {
                document.body.classList.remove(currentTheme);
                document.body.classList.add(newTheme);
                localStorage.setItem('forest-theme', newTheme);
                updateThemeIcon(btn, newTheme);
                
                // Repaint leaf particle colors based on new theme
                window.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
                
                gsap.to(flash, {
                    opacity: 0,
                    duration: 0.55,
                    onComplete: () => flash.remove()
                });
            }
        });
    });
}

function updateThemeIcon(btn, theme) {
    const icon = btn.querySelector('i');
    if (!icon) return;
    if (theme === 'light-theme') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

/* =========================================================================
   2.5 BACKGROUND MUSIC CONTROLLER
   ========================================================================= */
function initBackgroundMusic() {
    const btn = document.getElementById('music-toggle-btn');
    const audio = document.getElementById('bg-music');
    if (!btn || !audio) return;

    let isPlaying = false;

    // Set volume to a gentle 35% so it's not loud initially
    audio.volume = 0.35;

    btn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            btn.querySelector('i').className = 'fa-solid fa-volume-xmark';
            btn.classList.remove('music-active');
            isPlaying = false;
        } else {
            audio.play().then(() => {
                btn.querySelector('i').className = 'fa-solid fa-volume-high';
                btn.classList.add('music-active');
                isPlaying = true;
            }).catch(err => {
                console.warn("Audio playback was blocked or failed:", err);
                btn.querySelector('i').className = 'fa-solid fa-volume-xmark';
                btn.classList.remove('music-active');
            });
        }
    });
}

/* =========================================================================
   3. LENIS SMOOTH SCROLLER
   ========================================================================= */
let lenisInstance = null;
function initLenisSmoothScroll() {
    if (window.innerWidth < 768) return;

    lenisInstance = new Lenis({
        duration: 1.3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
        infinite: false
    });

    function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenisInstance.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
}

/* =========================================================================
   4. ADAPTIVE CURSOR PHYSICS (Trail Leaves Observer)
   ========================================================================= */
function initAdaptiveCursor() {
    const leaf = document.getElementById('custom-cursor-leaf');
    
    if (!leaf) return;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let leafPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    const leafDelay = 0.12;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
        leafPos.x += (mouse.x - leafPos.x) * leafDelay;
        leafPos.y += (mouse.y - leafPos.y) * leafDelay;

        gsap.set(leaf, { x: leafPos.x, y: leafPos.y });
    });

    // Handle cursor class updates on standard link hoverings
    const interactives = 'a, button, .magnetic-target, input, textarea, .filter-btn, [data-tilt]';
    document.querySelectorAll(interactives).forEach(item => {
        item.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        item.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });
}

/* =========================================================================
   5. DUAL FLOW CANVAS BACKDROP (Background particles + Foreground drift + Wind)
   ========================================================================= */
function initCanvasParticles() {
    const bgCanvas = document.getElementById('bg-canvas');
    const fgCanvas = document.getElementById('fg-canvas');
    if (!bgCanvas || !fgCanvas) return;
    
    const bgCtx = bgCanvas.getContext('2d');
    const fgCtx = fgCanvas.getContext('2d');
    
    let bgLeaves = [];
    let fgLeaves = [];
    let fireflies = [];
    let waterfallParticles = [];
    let cursorTrails = []; // Breeze trail lines
    let leafTrails = []; // Tiny falling leaf cursor trails
    let windSweeps = []; // Cinematic ambient winds
    
    let leafColorRGB = '145, 184, 149'; // Default dark theme sage
    
    // Watch theme shifts
    window.addEventListener('themeChanged', (e) => {
        if (e.detail === 'light-theme') {
            leafColorRGB = '110, 138, 114'; // Light theme darker sage/olive
        } else {
            leafColorRGB = '145, 184, 149'; // Dark theme light sage
        }
    });
    
    // Initial color selection
    if (document.body.classList.contains('light-theme')) {
        leafColorRGB = '110, 138, 114';
    }

    let mouse = { x: null, y: null, px: null, py: null, radius: 130, speed: 0 };

    function resizeCanvases() {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
        fgCanvas.width = window.innerWidth;
        fgCanvas.height = window.innerHeight;
        
        setupParticles();
    }
    
    window.addEventListener('resize', resizeCanvases);
    
    window.addEventListener('mousemove', (e) => {
        if (mouse.x !== null && mouse.y !== null) {
            mouse.px = mouse.x;
            mouse.py = mouse.y;
            mouse.speed = Math.hypot(e.clientX - mouse.px, e.clientY - mouse.py);
        } else {
            mouse.px = e.clientX;
            mouse.py = e.clientY;
        }
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // If cursor moves rapidly, spawn breeze lines and trail leaves
        if (mouse.speed > 5) {
            // Spawn a white breeze trail segment
            cursorTrails.push(new BreezeTrailSegment(mouse.x, mouse.y, mouse.px, mouse.py, mouse.speed));
            
            // Randomly spawn a tiny leaf trail particle
            if (Math.random() < 0.4) {
                leafTrails.push(new MiniTrailLeaf(mouse.x, mouse.y));
            }
        }
    });
    
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Firefly Particle Object (Ambient background floating)
    class Firefly {
        constructor() {
            this.x = Math.random() * bgCanvas.width;
            this.y = Math.random() * bgCanvas.height;
            this.size = Math.random() * 2.5 + 1.2;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = -(Math.random() * 0.4 + 0.15); // Organically drift up
            this.angle = Math.random() * Math.PI * 2;
            this.wobbleSpeed = Math.random() * 0.04 + 0.01;
            this.wobbleRange = Math.random() * 1.2 + 0.4;
            this.alpha = Math.random() * 0.6 + 0.2;
            this.alphaDelta = Math.random() * 0.015 + 0.005;
        }

        update() {
            this.angle += this.wobbleSpeed;
            this.x += this.vx + Math.sin(this.angle) * this.wobbleRange * 0.35;
            this.y += this.vy;
            
            // Pulse opacity
            this.alpha += this.alphaDelta;
            if (this.alpha > 0.9 || this.alpha < 0.15) {
                this.alphaDelta = -this.alphaDelta;
            }

            if (this.y < -10) this.y = bgCanvas.height + 10;
            if (this.x < -10 || this.x > bgCanvas.width + 10) this.x = Math.random() * bgCanvas.width;
            
            // Soft repel from mouse
            if (mouse.x !== null && mouse.y !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let distance = Math.hypot(dx, dy);
                if (distance < mouse.radius * 0.6) {
                    let force = (mouse.radius * 0.6 - distance) / (mouse.radius * 0.6);
                    let pushAngle = Math.atan2(dy, dx);
                    this.x += Math.cos(pushAngle) * force * 1.5;
                    this.y += Math.sin(pushAngle) * force * 1.5;
                }
            }
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            // Ghibli Gold Firefly
            ctx.fillStyle = `rgba(232, 193, 127, ${this.alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(232, 193, 127, 0.45)";
            ctx.fill();
            ctx.shadowBlur = 0; // Restore context
        }
    }

    // Leaf Particle Object (Drift Down-Right organically with inertia repulsion)
    class LeafParticle {
        constructor(isForeground) {
            this.isForeground = isForeground;
            this.x = Math.random() * bgCanvas.width;
            // Let some spawn above viewport
            this.y = Math.random() * bgCanvas.height - bgCanvas.height;
            
            if (isForeground) {
                this.size = Math.random() * 10 + 12; // Foreground sizes: 12-22px
                this.baseVX = Math.random() * 0.6 + 0.45; // Faster drift
                this.baseVY = Math.random() * 0.8 + 0.6;
                this.alpha = Math.random() * 0.35 + 0.45; // More visible
            } else {
                this.size = Math.random() * 6 + 5; // Background sizes: 5-11px
                this.baseVX = Math.random() * 0.3 + 0.2; // Slower drift
                this.baseVY = Math.random() * 0.5 + 0.3;
                this.alpha = Math.random() * 0.2 + 0.2; // Ethereal / faint
            }
            
            this.vx = this.baseVX;
            this.vy = this.baseVY;
            
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.003; // Peaceful, slow rotation speed
            this.swaySpeed = Math.random() * 0.015 + 0.01;
            this.swayRange = Math.random() * 1.2 + 0.4;
            this.angle = Math.random() * Math.PI * 2;
        }

        update() {
            this.angle += this.swaySpeed;
            this.rotation += this.rotationSpeed;
            
            // Mouse repulsion calculations (spring vector physics - smooth gliding)
            if (mouse.x !== null && mouse.y !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let distance = Math.hypot(dx, dy);
                let checkRadius = this.isForeground ? mouse.radius * 0.95 : mouse.radius * 0.65;
                
                if (distance < checkRadius) {
                    let force = (checkRadius - distance) / checkRadius;
                    let pushAngle = Math.atan2(dy, dx);
                    
                    // Add gentle repulsion acceleration (leaves slide aside smoothly without spinning)
                    this.vx += Math.cos(pushAngle) * force * 0.15;
                    this.vy += Math.sin(pushAngle) * force * 0.15;
                }
            }
            
            // Friction damping back to normal wind velocity
            this.vx *= 0.96;
            this.vy *= 0.96;
            
            // Re-apply base velocities plus organic sways
            let targetVX = this.baseVX + Math.sin(this.angle) * this.swayRange * 0.4;
            let targetVY = this.baseVY;
            
            // Integrate ambient wind sweep forces if any are active
            windSweeps.forEach(sweep => {
                if (sweep.active && Math.abs(this.y - sweep.y) < 180) {
                    let sweepProximity = (180 - Math.abs(this.y - sweep.y)) / 180;
                    targetVX += sweep.vx * 0.35 * sweepProximity;
                }
            });
            
            this.vx += (targetVX - this.vx) * 0.04;
            this.vy += (targetVY - this.vy) * 0.04;
            
            this.x += this.vx;
            this.y += this.vy;

            // Loop offscreen particles
            if (this.y > bgCanvas.height + 25) {
                this.y = -25;
                this.x = Math.random() * bgCanvas.width - 50;
            }
            if (this.x > bgCanvas.width + 25) {
                this.x = -25;
                this.y = Math.random() * bgCanvas.height - 50;
            }
        }

        draw(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            
            // Render Ghibli hand-painted leaf shape
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.quadraticCurveTo(-this.size * 0.65, -this.size * 0.2, 0, this.size);
            ctx.quadraticCurveTo(this.size * 0.65, -this.size * 0.2, 0, -this.size);
            ctx.fillStyle = `rgba(${leafColorRGB}, ${this.alpha})`;
            ctx.fill();
            
            // Center leaf vein line
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(0, this.size);
            ctx.strokeStyle = `rgba(30, 42, 34, ${this.alpha * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            ctx.restore();
        }
    }

    // Cursor Breeze Trail Segment (fading air flows)
    class BreezeTrailSegment {
        constructor(x, y, px, py, speed) {
            this.x1 = px;
            this.y1 = py;
            this.x2 = x;
            this.y2 = y;
            this.alpha = 0.25;
            this.width = Math.min(speed * 0.15 + 1.2, 4.5);
            this.decay = 0.012;
        }

        update() {
            this.alpha -= this.decay;
        }

        draw(ctx) {
            if (this.alpha <= 0) return;
            ctx.beginPath();
            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.lineWidth = this.width;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    }

    // Mini Cursor Trail Leaf (tiny foliage trailing the mouse)
    class MiniTrailLeaf {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 3.5;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = Math.random() * 1.2 + 0.8; // Falls down
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.08;
            this.alpha = 0.75;
            this.decay = Math.random() * 0.02 + 0.015;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
            this.alpha -= this.decay;
        }

        draw(ctx) {
            if (this.alpha <= 0) return;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.quadraticCurveTo(-this.size * 0.6, -this.size * 0.2, 0, this.size);
            ctx.quadraticCurveTo(this.size * 0.6, -this.size * 0.2, 0, -this.size);
            ctx.fillStyle = `rgba(${leafColorRGB}, ${this.alpha})`;
            ctx.fill();
            ctx.restore();
        }
    }

    // Cinematic Wind Sweeps (periodic breezes sliding left-to-right)
    class WindSweepLine {
        constructor() {
            this.x = -150;
            this.y = Math.random() * fgCanvas.height;
            this.vx = Math.random() * 5 + 6;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.width = Math.random() * 2.2 + 1.2;
            this.alpha = 0.12;
            this.active = true;
            this.trail = [];
            this.length = Math.floor(Math.random() * 10) + 12;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            this.trail.push({x: this.x, y: this.y});
            if (this.trail.length > this.length) {
                this.trail.shift();
            }
            
            if (this.x > fgCanvas.width + 150) {
                this.active = false;
            }
        }

        draw(ctx) {
            if (!this.active || this.trail.length < 2) return;
            ctx.beginPath();
            ctx.moveTo(this.trail[0].x, this.trail[0].y);
            for (let i = 1; i < this.trail.length; i++) {
                ctx.lineTo(this.trail[i].x, this.trail[i].y);
            }
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.lineWidth = this.width;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    }

    function setupParticles() {
        bgLeaves = [];
        fgLeaves = [];
        fireflies = [];
        
        let bgLeafCount = window.innerWidth < 768 ? 20 : 45;
        let fgLeafCount = window.innerWidth < 768 ? 10 : 25;
        let fireflyCount = window.innerWidth < 768 ? 15 : 35;
        
        for (let i = 0; i < bgLeafCount; i++) {
            bgLeaves.push(new LeafParticle(false));
        }
        for (let i = 0; i < fgLeafCount; i++) {
            fgLeaves.push(new LeafParticle(true));
        }
        for (let i = 0; i < fireflyCount; i++) {
            fireflies.push(new Firefly());
        }
    }

    // Periodic check to spawn wind sweeps
    setInterval(() => {
        if (windSweeps.length < 3 && Math.random() < 0.45) {
            windSweeps.push(new WindSweepLine());
        }
    }, 4000);

    function animate() {
        // --- 1. RENDER BACKGROUND CANVAS ---
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        
        // Distant slow leaves
        bgLeaves.forEach(l => {
            l.update();
            l.draw(bgCtx);
        });

        // Ambient Fireflies
        fireflies.forEach(f => {
            f.update();
            f.draw(bgCtx);
        });



        // --- 2. RENDER FOREGROUND CANVAS ---
        fgCtx.clearRect(0, 0, fgCanvas.width, fgCanvas.height);
        
        // Wind sweep lines
        windSweeps = windSweeps.filter(sweep => {
            sweep.update();
            sweep.draw(fgCtx);
            return sweep.active;
        });

        // Cursor breeze trails
        cursorTrails = cursorTrails.filter(segment => {
            segment.update();
            segment.draw(fgCtx);
            return segment.alpha > 0;
        });

        // Cursor leaf trails
        leafTrails = leafTrails.filter(leaf => {
            leaf.update();
            leaf.draw(fgCtx);
            return leaf.alpha > 0;
        });

        // Large foreground leaves
        fgLeaves.forEach(l => {
            l.update();
            l.draw(fgCtx);
        });

        requestAnimationFrame(animate);
    }

    resizeCanvases();
    animate();
}

/* =========================================================================
   6. GSAP & SCROLLTRIGGER TIMELINE
   ========================================================================= */
function initGsapAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entry Animation Sequence
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-badge', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    });

    heroTl.from('.line-reveal', {
        y: 120,
        duration: 1.4,
        stagger: 0.15,
        ease: 'power4.out'
    }, '-=0.9');

    heroTl.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.9');

    heroTl.from('.hero-actions .btn', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

    heroTl.from('.scroll-indicator', {
        opacity: 0,
        y: -10,
        duration: 1
    }, '-=0.3');

    // Section Headers Reveal
    document.querySelectorAll('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 35,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
    });

    // About Bento Block Reveals
    gsap.from('.bento-card', {
        scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: 'power3.out'
    });

    // Projects Grid Reveal
    gsap.from('.projects-grid .project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out'
    });

    // Skills Columns Entry
    gsap.from('.skills-column', {
        scrollTrigger: {
            trigger: '.skills-grid-new',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out'
    });

    // Skill Bars Progress scale-ins
    document.querySelectorAll('.skills-column').forEach(col => {
        gsap.from(col.querySelectorAll('.skill-bar'), {
            scrollTrigger: {
                trigger: col,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            width: '0%',
            stagger: 0.1,
            duration: 1.2,
            ease: 'power3.out'
        });
    });

    // Experience Progress Line Draw
    gsap.to('.timeline-progress-fill', {
        scrollTrigger: {
            trigger: '.timeline-wrapper',
            start: 'top 40%',
            end: 'bottom 50%',
            scrub: true
        },
        height: '100%',
        ease: 'none'
    });

    // Timeline elements reveal
    document.querySelectorAll('.timeline-item').forEach(item => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Certifications grid reveal
    gsap.from('.certifications-grid .cert-card', {
        scrollTrigger: {
            trigger: '.certifications-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
    });
}

/* =========================================================================
   7. 3D CARD TILT PHYSICAL SENSORS
   ========================================================================= */
function init3dTilt() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    if (window.innerWidth < 768) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotX = -(y / (rect.height / 2)) * 6;
            const rotY = (x / (rect.width / 2)) * 6;

            gsap.to(card, {
                transformPerspective: 1000,
                rotateX: rotX,
                rotateY: rotY,
                scale: 1.015,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out',
                overwrite: 'auto'
            });
        });
    });
}

/* =========================================================================
   8. MAGNETIC TARGETS ELASTIC PULL
   ========================================================================= */
function initMagneticHover() {
    const targets = document.querySelectorAll('.magnetic-target');
    
    if (window.innerWidth < 768) return;

    targets.forEach(target => {
        target.addEventListener('mousemove', (e) => {
            const rect = target.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;

            gsap.to(target, {
                x: dx * 0.35,
                y: dy * 0.35,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });

        target.addEventListener('mouseleave', () => {
            gsap.to(target, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1.1, 0.4)',
                overwrite: 'auto'
            });
        });
    });
}

/* =========================================================================
   9. NAVIGATION HEADER SCROLL TRIGGERS & MOB MENU
   ========================================================================= */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('mobile-open');
            const icon = toggle.querySelector('i');
            if (icon) {
                if (menu.classList.contains('mobile-open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Auto-close menu on nav links clicked (mobile view)
        menu.querySelectorAll('a').forEach(l => {
            l.addEventListener('click', () => {
                menu.classList.remove('mobile-open');
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Close when clicking outside of menu
        document.addEventListener('click', (e) => {
            if (menu.classList.contains('mobile-open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('mobile-open');
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

/* =========================================================================
   10. PROJECTS GALLERY CATEGORIZATION FILTERS
   ========================================================================= */
function initProjectFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.projects-grid .project-card');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    gsap.to(card, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        clearProps: 'transformPerspective,rotateX,rotateY',
                        onStart: () => {
                            card.style.display = 'flex';
                        }
                    });
                } else {
                    gsap.to(card, {
                        scale: 0.82,
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power2.in',
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });

            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 600);
        });
    });
}

/* =========================================================================
   11. INTERACTIVE PREVIEW MODALS
   ========================================================================= */
function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const cards = document.querySelectorAll('.projects-grid .project-card');
    const closeBtn = document.getElementById('modal-close');

    if (!modal || !closeBtn) return;

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-links') || e.target.closest('a')) {
                return;
            }

            const projectKey = card.getAttribute('data-project');
            const data = projectDatabase[projectKey];

            if (!data) return;

            // Load Content
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-desc').textContent = data.desc;
            
            const bgPreview = document.getElementById('modal-preview-bg');
            bgPreview.style.background = data.gradient;
            
            const iconPreview = document.getElementById('modal-preview-icon');
            iconPreview.className = `fa-solid ${data.icon}`;

            // Build tags list
            const tagsBox = document.getElementById('modal-tags');
            tagsBox.innerHTML = '';
            data.tags.forEach(t => {
                const span = document.createElement('span');
                span.className = 'p-tag';
                span.textContent = t;
                tagsBox.appendChild(span);
            });

            // Build highlights bullets
            const list = document.getElementById('modal-highlights-list');
            list.innerHTML = '';
            data.highlights.forEach(h => {
                const li = document.createElement('li');
                li.textContent = h;
                list.appendChild(li);
            });

            // Connect links
            const sourceLink = document.getElementById('modal-source');
            if (sourceLink) {
                sourceLink.href = data.source;
            }
            const liveLink = document.getElementById('modal-live');
            if (liveLink) {
                liveLink.style.display = 'none';
            }

            // Trigger Overlay Open
            modal.classList.add('active');
            if (lenisInstance) lenisInstance.stop();
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        if (lenisInstance) lenisInstance.start();
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* =========================================================================
   12. ONE-TAP EMAIL TO CLIPBOARD HANDLER
   ========================================================================= */
function initClipboardCopy() {
    const btn = document.getElementById('copy-email-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const email = btn.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            btn.classList.add('success');
            const icon = btn.querySelector('i');
            icon.className = 'fa-solid fa-check';

            setTimeout(() => {
                btn.classList.remove('success');
                icon.className = 'fa-solid fa-copy';
            }, 2500);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    });
}

/* =========================================================================
   13. FORM SUBMIT LOADER FEEDBACK
   ========================================================================= */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Dispatching...';

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        })
        .then(async (response) => {
            let jsonResponse = await response.json();
            if (response.status == 200 && jsonResponse.success) {
                submitBtn.style.backgroundColor = '#6E8A72';
                submitBtn.style.color = '#FFFFFF';
                submitBtn.style.boxShadow = '0 4px 15px rgba(110, 138, 114, 0.25)';
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Dispatched!';
                
                form.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.style.boxShadow = '';
                    submitBtn.innerHTML = originalText;
                }, 4000);
            } else {
                throw new Error(jsonResponse.message || "Failed to submit form");
            }
        })
        .catch(error => {
            console.error('AJAX submit failed, falling back to direct post submission.', error);
            
            // Standard form post works on file:// protocol 100% and does not require AJAX CORS
            form.submit();
        });
    });
}
