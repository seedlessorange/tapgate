        // ==========================================
        // TEXT SCRAMBLE EFFECT
        // ==========================================
        class TextScramble {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.originalText = el.getAttribute('data-text') || el.textContent;
                this.update = this.update.bind(this);
            }

            setText(newText) {
                const oldText = this.el.textContent;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];

                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }

                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }

            update() {
                let output = '';
                let complete = 0;

                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];

                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span style="color: var(--color-accent)">${char}</span>`;
                    } else {
                        output += from;
                    }
                }

                this.el.innerHTML = output;

                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }

            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        // Initialize scramble effect on all titles with intersection observer
        document.addEventListener('DOMContentLoaded', () => {
            const scrambleElements = document.querySelectorAll('.scramble-text');
            const scrambledSet = new Set(); // Track which elements have been scrambled

            const scrambleObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !scrambledSet.has(entry.target)) {
                        scrambledSet.add(entry.target);
                        const fx = new TextScramble(entry.target);
                        fx.setText(entry.target.getAttribute('data-text'));
                    }
                });
            }, { threshold: 0.5 });

            scrambleElements.forEach(el => {
                scrambleObserver.observe(el);
            });
        });

        // ==========================================
        // NAVIGATION
        // ==========================================
        const nav = document.getElementById('nav');
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateNav() {
            const scrollY = window.scrollY;

            // Add scrolled class
            if (scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Hide/show on scroll direction
            if (scrollY > lastScrollY && scrollY > 500) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNav);
                ticking = true;
            }
        });

        // ==========================================
        // SCROLL REVEAL ANIMATIONS
        // ==========================================
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal, .feature-card, .step-card, .testimonial-card, .pricing-card').forEach(el => {
            revealObserver.observe(el);
        });

        // ==========================================
        // TABS
        // ==========================================
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-tab');

                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Update active content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === targetId) {
                        content.classList.add('active');
                    }
                });
            });
        });

        // ==========================================
        // SMOOTH SCROLL
        // ==========================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ==========================================
        // STAGGER ANIMATIONS FOR CARDS
        // ==========================================
        const cards = document.querySelectorAll('.feature-card, .step-card, .testimonial-card, .pricing-card');
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });

        // ==========================================
        // INTERACTIVE GATE ANIMATION
        // ==========================================
        const gateAnimation = document.getElementById('gateAnimation');
        const gateStatus = gateAnimation?.querySelector('.gate-status');
        let gateOpen = false;
        const tapIndicator = gateAnimation?.querySelector('.tap-indicator');

        function toggleGate() {
            if (!gateAnimation) return;

            gateOpen = !gateOpen;

            if (gateOpen) {
                gateAnimation.classList.add('gate-open');
                if (gateStatus) gateStatus.textContent = 'Gate Open';
                if (tapIndicator) tapIndicator.textContent = 'Tap to close';
            } else {
                gateAnimation.classList.remove('gate-open');
                if (gateStatus) gateStatus.textContent = 'Gate Closed';
                if (tapIndicator) tapIndicator.textContent = 'Tap to open';
            }
        }

        // Click to toggle gate - specifically on phone/tap area
        if (gateAnimation) {
            const gatePhone = gateAnimation.querySelector('.gate-phone');

            // Make tap indicator clickable
            if (tapIndicator) {
                tapIndicator.style.cursor = 'pointer';
                tapIndicator.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleGate();
                });
            }

            // Make phone clickable
            if (gatePhone) {
                gatePhone.style.cursor = 'pointer';
                gatePhone.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleGate();
                });
            }

            // Make entire gate container clickable
            gateAnimation.style.cursor = 'pointer';
            gateAnimation.addEventListener('click', (e) => {
                toggleGate();
            });
        }

        // ==========================================
        // MOBILE GATE ANIMATION
        // ==========================================
        const mobileGate = document.getElementById('mobileGate');
        const mobileTapText = mobileGate?.querySelector('.mobile-gate-tap');
        let mobileGateOpen = false;

        function toggleMobileGate() {
            if (!mobileGate) return;

            mobileGateOpen = !mobileGateOpen;

            if (mobileGateOpen) {
                mobileGate.classList.add('gate-open');
                if (mobileTapText) mobileTapText.textContent = 'Tap to close';
            } else {
                mobileGate.classList.remove('gate-open');
                if (mobileTapText) mobileTapText.textContent = 'Tap to open';
            }
        }

        if (mobileGate) {
            mobileGate.style.cursor = 'pointer';
            mobileGate.addEventListener('click', toggleMobileGate);

            // Auto-demo on mobile after page loads
            setTimeout(() => {
                if (window.innerWidth <= 1200) {
                    toggleMobileGate();
                }
            }, 2500);
        }

        // ==========================================
        // INSTALLATION ANIMATION
        // ==========================================
        const installAnimation = document.getElementById('installAnimation');
        const installSteps = installAnimation?.querySelectorAll('.install-step');
        let currentInstallStep = 0;
        let installInterval = null;

        function setInstallStep(step) {
            if (!installAnimation) return;

            currentInstallStep = step;

            // Update step indicators
            installSteps?.forEach((stepEl, index) => {
                stepEl.classList.remove('active', 'completed');
                if (index < step) {
                    stepEl.classList.add('completed');
                } else if (index === step) {
                    stepEl.classList.add('active');
                }
            });

            // Update animation class
            installAnimation.classList.remove('step-0', 'step-1', 'step-2', 'step-3');
            installAnimation.classList.add(`step-${step}`);
        }

        function runInstallDemo() {
            setInstallStep(0);

            // Step 1 after 5s (show spinning TapGate box longer)
            setTimeout(() => setInstallStep(1), 5000);

            // Step 2 after 7.5s (time to see lid open)
            setTimeout(() => setInstallStep(2), 7500);

            // Step 3 after 10s (time to see connection)
            setTimeout(() => setInstallStep(3), 10000);

            // Restart after 14s (time to see phone tap)
            setTimeout(() => runInstallDemo(), 14000);
        }

        // Click handlers for steps
        installSteps?.forEach((stepEl, index) => {
            stepEl.addEventListener('click', () => {
                setInstallStep(index);
            });
        });

        // Auto-demo when scrolled into view
        const installObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => runInstallDemo(), 500);
                    installObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (installAnimation) {
            installObserver.observe(installAnimation);
        }

        // ==========================================
        // KEY SHARING ANIMATION
        // ==========================================
        const keyShareAnimation = document.getElementById('keyShareAnimation');
        const receiverPhones = keyShareAnimation?.querySelectorAll('.receiver-phone');

        function activateKeyShare() {
            if (!keyShareAnimation) return;

            keyShareAnimation.classList.add('active');

            // Sequentially activate receiver phones
            receiverPhones?.forEach((phone, index) => {
                const delay = parseInt(phone.dataset.delay) || index * 300;
                setTimeout(() => {
                    phone.classList.add('received');
                }, 800 + delay);
            });
        }

        function resetKeyShare() {
            if (!keyShareAnimation) return;

            keyShareAnimation.classList.remove('active');
            receiverPhones?.forEach(phone => {
                phone.classList.remove('received');
            });
        }

        function runKeyShareDemo() {
            resetKeyShare();
            setTimeout(() => activateKeyShare(), 100);

            // Loop the animation
            setTimeout(() => runKeyShareDemo(), 4000);
        }

        // Start animation when tab is clicked
        document.querySelectorAll('.tab').forEach(tabBtn => {
            tabBtn.addEventListener('click', () => {
                if (tabBtn.dataset.tab === 'visitors') {
                    setTimeout(() => runKeyShareDemo(), 300);
                }
            });
        });

        // Also start if visitors tab is visible
        const visitorsTab = document.getElementById('visitors');
        if (visitorsTab) {
            const keyShareObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => runKeyShareDemo(), 500);
                    }
                });
            }, { threshold: 0.3 });

            keyShareObserver.observe(visitorsTab);
        }
