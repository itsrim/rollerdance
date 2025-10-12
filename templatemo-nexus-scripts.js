/*

TemplateMo 594 nexus flow

https://templatemo.com/tm-594-nexus-flow

*/

// JavaScript Document

// Initialize mobile menu functionality
        function initializeMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
            const mobileMenuCta = document.querySelector('.mobile-menu-cta');
            const mobileMenuCtaButton = document.querySelector('.mobile-menu-cta a');
            const mobileMenuLogo = document.querySelector('.mobile-menu-logo');

            // Check if essential elements exist
            if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) {
                return;
            }

            function openMobileMenu() {
                mobileMenuBtn.classList.add('active');
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Reset and trigger animations for links
                mobileMenuLinks.forEach((link, index) => {
                    if (link) {
                        link.style.animation = 'none';
                        link.style.opacity = '0';
                        link.style.transform = 'translateX(20px)';
                        
                        // Apply animation with delay
                        setTimeout(() => {
                            if (link) {
                                link.style.animation = `slideInLeft 0.4s ease forwards`;
                            }
                        }, 250 + (index * 100));
                    }
                });
                
                // Animate CTA button
                if (mobileMenuCta) {
                    mobileMenuCta.style.animation = 'none';
                    mobileMenuCta.style.opacity = '0';
                    mobileMenuCta.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        if (mobileMenuCta) {
                            mobileMenuCta.style.animation = 'slideInUp 0.4s ease forwards';
                        }
                    }, 100);
                }
            }

            function closeMobileMenu() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });

            // Close mobile menu
            mobileMenuClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
            
            mobileMenuOverlay.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileMenu();
            });

            // Close menu when clicking on navigation links
            mobileMenuLinks.forEach(link => {
                if (link) {
                    link.addEventListener('click', () => {
                        closeMobileMenu();
                    });
                }
            });

            // Close menu when clicking on CTA button
            if (mobileMenuCtaButton) {
                mobileMenuCtaButton.addEventListener('click', (e) => {
                    if (mobileMenuCtaButton.getAttribute('href') === '#') {
                        e.preventDefault();
                    }
                    closeMobileMenu();
                });
            }

            // Close menu when clicking on logo
            if (mobileMenuLogo) {
                mobileMenuLogo.addEventListener('click', () => {
                    closeMobileMenu();
                });
            }

            // Close mobile menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            // Prevent body scroll when menu is open
            if (mobileMenu) {
                mobileMenu.addEventListener('touchmove', (e) => {
                    e.stopPropagation();
                });
            }
        }

        // Initialize mobile menu when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileMenu);
        } else {
            initializeMobileMenu();
        }

        // Generate Floating Particles - Reduced count for better performance
        function generateParticles() {
            const particlesContainer = document.getElementById('particlesContainer');
            const particleCount = 15; // Reduced from 50 to 15
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 20}s`;
                particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Generate Data Streams - Reduced count for better performance
        function generateDataStreams() {
            const dataStreams = document.getElementById('dataStreams');
            const streamCount = 3; // Reduced from 10 to 3
            
            for (let i = 0; i < streamCount; i++) {
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                stream.style.top = `${Math.random() * 100}%`;
                stream.style.left = `-300px`;
                stream.style.animationDelay = `${Math.random() * 5}s`;
                stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
                
                dataStreams.appendChild(stream);
            }
        }

        // Initialize background effects
        generateParticles();
        generateDataStreams();

        // Window resize handler
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Regenerate effects on resize if needed
            }, 250);
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Only prevent default and scroll if href is more than just '#'
                if (href && href.length > 1) {
                    e.preventDefault();
                    if (href === '#top') {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(15, 15, 35, 0.95)';
                nav.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.2)';
            } else {
                nav.style.background = 'rgba(15, 15, 35, 0.9)';
                nav.style.boxShadow = 'none';
            }
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        // Button effects
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });

        // Stats counter animation
        const animateStats = () => {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                let count = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        clearInterval(timer);
                        count = target;
                    }
                    const suffix = stat.textContent.replace(/[\d]/g, '');
                    stat.textContent = Math.floor(count) + suffix;
                }, 20);
            });
        };

        // Trigger stats animation when section is visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Glitch effect on hover for feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch1 0.3s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            });
        });


        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 0.7; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-50px); }
            }
        `;
        document.head.appendChild(style);

        // Hero Scroll Effect with Video2 Reveal
        function initializeHeroScrollEffect() {
            const heroSection = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-container');
            const video2Frame = document.querySelector('.video2-preview-frame');
            const videoSection = document.querySelector('.video-fullscreen-section');
            
            if (!heroSection || !heroContent || !video2Frame) {
                return;
            }

            let ticking = false;

            function updateScrollEffect() {
                const scrolled = window.pageYOffset;
                const heroHeight = heroSection.offsetHeight;
                const windowHeight = window.innerHeight;
                
                // Get initial transform based on screen size
                let initialTransform = 'translateY(-20vh)'; // Desktop default
                if (window.innerWidth <= 480) {
                    initialTransform = 'translateY(-15vh)'; // Mobile
                } else if (window.innerWidth <= 768) {
                    initialTransform = 'translateY(-18vh)'; // Tablet
                }
                
                // Hero content fade out effect when scrolling down - starts earlier
                const fadeStart = heroHeight * 0.05; // Start fading at 5% of hero height
                const fadeEnd = heroHeight * 0.3; // Complete fade at 30% of hero height
                
                if (scrolled > fadeStart && scrolled < fadeEnd) {
                    const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
                    const opacity = 1 - fadeProgress;
                    const scale = 1 - (fadeProgress * 0.4); // Scale from 1 to 0.6
                    
                    heroContent.style.opacity = opacity;
                    heroContent.style.transform = `${initialTransform} scale(${scale})`;
                } else if (scrolled >= fadeEnd) {
                    heroContent.style.opacity = 0;
                    heroContent.style.transform = `${initialTransform} scale(0.6)`;
                } else {
                    // Reset to initial state when scrolling back up
                    heroContent.style.opacity = 1;
                    heroContent.style.transform = `${initialTransform} scale(1)`;
                }
                
                // Video2 moves up to be fully visible - starts earlier to sync with text fade
                const video2Start = heroHeight * 0.05; // Start moving at 5% of hero height
                const video2End = heroHeight * 0.35; // Fully visible at 35% of hero height
                
                if (scrolled > video2Start && scrolled < video2End) {
                    const video2Progress = (scrolled - video2Start) / (video2End - video2Start);
                    const moveUp = video2Progress * 120; // Move up by 120px (reduced space compensation)
                    
                    video2Frame.style.transform = `translateX(-50%) translateY(-${moveUp}px)`;
                } else if (scrolled >= video2End) {
                    video2Frame.style.transform = 'translateX(-50%) translateY(-120px)'; // Compensate reduced space
                } else {
                    video2Frame.style.transform = 'translateX(-50%) translateY(0)';
                }
                
                // Video fullscreen entrance effect (for the main video section)
                if (videoSection) {
                    const videoSectionTop = videoSection.offsetTop;
                    const videoSectionHeight = videoSection.offsetHeight;
                    const videoProgress = (scrolled - videoSectionTop + windowHeight) / videoSectionHeight;
                    
                    if (videoProgress > 0 && videoProgress < 1) {
                        const videoOpacity = Math.min(1, videoProgress * 1.5);
                        
                        videoSection.style.opacity = videoOpacity;
                    } else if (videoProgress >= 1) {
                        videoSection.style.opacity = 1;
                    } else {
                        videoSection.style.opacity = 0;
                    }
                }
                
                ticking = false;
            }

            function requestTick() {
                if (!ticking) {
                    requestAnimationFrame(updateScrollEffect);
                    ticking = true;
                }
            }

            window.addEventListener('scroll', requestTick);
            window.addEventListener('resize', requestTick);
        }

        // Initialize hero scroll effect when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeHeroScrollEffect);
        } else {
            initializeHeroScrollEffect();
        }

        // Carousel functionality
        function initializeCarousel() {
            const carouselTrack = document.getElementById('carouselTrack');
            const carouselPrev = document.getElementById('carouselPrev');
            const carouselNext = document.getElementById('carouselNext');
            const carouselDots = document.getElementById('carouselDots');
            
            if (!carouselTrack || !carouselPrev || !carouselNext || !carouselDots) {
                return;
            }
            
            const slides = carouselTrack.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;
            let currentSlide = 0;
            
            // Create dots
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                carouselDots.appendChild(dot);
            }
            
            function updateCarousel() {
                const translateX = -currentSlide * 100;
                carouselTrack.style.transform = `translateX(${translateX}%)`;
                
                // Update dots
                const dots = carouselDots.querySelectorAll('.carousel-dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
            
            function goToSlide(slideIndex) {
                currentSlide = slideIndex;
                updateCarousel();
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            }
            
            function prevSlide() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel();
            }
            
            // Event listeners
            carouselNext.addEventListener('click', nextSlide);
            carouselPrev.addEventListener('click', prevSlide);
            
            // Auto-play carousel
            let autoPlayInterval = setInterval(nextSlide, 5000);
            
            // Pause auto-play on hover
            const carouselContainer = document.querySelector('.carousel-container');
            if (carouselContainer) {
                carouselContainer.addEventListener('mouseenter', () => {
                    clearInterval(autoPlayInterval);
                });
                
                carouselContainer.addEventListener('mouseleave', () => {
                    autoPlayInterval = setInterval(nextSlide, 5000);
                });
            }
            
            // Touch/swipe support for mobile
            let startX = 0;
            let endX = 0;
            
            carouselTrack.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            
            carouselTrack.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = startX - endX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            }
        }

        // Initialize carousel when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeCarousel);
        } else {
            initializeCarousel();
        }



        // Contact form submission
        document.querySelector('.btn-submit').addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Simulate form submission
                this.textContent = 'TRANSMITTING...';
                this.style.background = 'linear-gradient(135deg, var(--primary-cyan), var(--primary-pink))';
                
                setTimeout(() => {
                    this.textContent = 'TRANSMISSION COMPLETE';
                    this.style.background = 'var(--primary-cyan)';
                    
                    // Clear form
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        this.textContent = 'Transmit Message';
                        this.style.background = '';
                    }, 3000);
                }, 2000);
            }
        });

        // Translation System
        const translations = {
            fr: {
                // Navigation
                'nav-video': 'Video',
                'nav-courses': 'Cours',
                'nav-info': 'Informations',
                'nav-news': 'Actualités',
                'nav-contact': 'Contact',
                'join': 'Rejoindre',
                
                // Hero Section
                'hero-subtitle-1': 'Section Roller Dance du club <a href="https://bscroller.fr/">https://bscroller.fr/</a>',
                'hero-subtitle-2': 'Découvrez le roller dance à Toulouse. Une discipline qui allie style, grâce, technique, sport et passion depuis plusieurs décennies.',
                'hero-btn-discover': 'Découvrir les Techniques',
                'hero-btn-join': 'Nous Rejoindre',
                
                // Features Section
                'features-title': 'Cours de Roller Dance',
                'features-subtitle': 'Les bases essentielles du roller dance et du patinage artistique à Toulouse : équilibre, style et maîtrise technique',
                'feature-balance': 'Équilibre & Stabilité',
                'feature-balance-desc': 'Maîtrisez l\'art de l\'équilibre sur roulettes. Techniques de base pour développer votre stabilité et votre confiance sur les patins.',
                'feature-choreography': 'Chorégraphie',
                'feature-choreography-desc': 'Créez des enchaînements funs, fluides et gracieux. Apprenez à synchroniser vos mouvements avec la musique pour des performances époustouflantes.',
                'feature-spins': 'Pirouettes & Tours',
                'feature-spins-desc': 'Techniques avancées de rotation et de pivot. Développez votre capacité à exécuter des figures complexes avec précision.',
                'feature-artistic': 'Expression Artistique',
                'feature-artistic-desc': 'Libérez votre créativité et développez votre style personnel. L\'art du roller dance va bien au-delà de la technique pure.',
                'feature-technique': 'Technique',
                'feature-technique-desc': 'Des techniques de patinage fondamentales pour développer votre confiance et votre style. Tourner, freiner, sauter, accélérer, etc.',
                'feature-group': 'Danse en groupe',
                'feature-group-desc': 'Maîtrisez l\'art de la danse synchronisée. Techniques de guidage, coordination et harmonie entre partenaires, en groupe ou en couple.',
                
                // Pricing Section
                'pricing-title': 'Infos',
                'pricing-subtitle': 'Cours de roller dance à Toulouse-Blagnac. Lieu : Salle des fêtes des Ramiers, 31700 Blagnac (proche de Toulouse)',
                'plan-intermediate': 'Intermédiaire',
                'plan-price': '230 €',
                'plan-period': 'par an',
                'plan-feature-1': 'Techniques avancées',
                'plan-feature-2': 'Chorégraphies complètes',
                'plan-feature-3': '19h - 20h30 les jeudis : roller dance',
                'plan-feature-4': 'inclus : 19h - 20h30 les mercredis (cours de patinage)',
                'plan-feature-5': 'Coaching personnalisé',
                'plan-feature-6': 'Préparation physique',
                'plan-feature-7': 'Roller disco régulièrement',
                'plan-location': 'Lieu',
                
                // News Section
                'news-title': 'Actualités du club',
                'news-subtitle': 'Découvrez nos dernières actualités de roller dance à Toulouse et suivez-nous sur les réseaux sociaux',
                'social-facebook': 'Facebook',
                'social-facebook-desc': 'Suivez nos actualités et événements',
                'social-facebook-follow': 'Nous suivre',
                'social-instagram': 'Instagram',
                'social-instagram-desc': 'Photos et vidéos de nos cours',
                'social-instagram-follow': 'Nous suivre',
                'social-tiktok': 'TikTok',
                'social-tiktok-desc': 'Vidéos courtes et défis roller',
                'social-tiktok-follow': 'Nous suivre',
                
                // Contact Section
                'contact-title': 'Rejoignez Notre École de Roller Dance à Toulouse-Blagnac',
                'contact-subtitle': 'Contactez-nous pour commencer votre aventure dans le roller dance et le patinage artistique à Toulouse',
                'form-name': 'Nom & Prénom',
                'form-name-placeholder': 'Votre nom complet',
                'form-email': 'Adresse Email',
                'form-email-placeholder': 'votre.email@exemple.com',
                'form-message': 'Message',
                'form-message-placeholder': 'Parlez-nous de votre expérience en roller dance et de vos objectifs...',
                'form-submit': 'Envoyer le Message',
                
                // Footer
                'footer-parent-site': 'site parent :',
                'footer-support': 'Contact Support',
                'footer-rights': 'Tous droits réservés.',
                'footer-credit': 'Site créé avec passion pour la communauté roller dance à Toulouse et Blagnac',
                'footer-location': '📍 École de roller dance à Toulouse - Salle des fêtes des Ramiers, 31700 Blagnac (proche de Toulouse)'
            },
            en: {
                // Navigation
                'nav-video': 'Video',
                'nav-courses': 'Courses',
                'nav-info': 'Information',
                'nav-news': 'News',
                'nav-contact': 'Contact',
                'join': 'Join',
                
                // Hero Section
                'hero-subtitle-1': 'Roller Dance section of the club <a href="https://bscroller.fr/">https://bscroller.fr/</a>',
                'hero-subtitle-2': 'Discover roller dance in Toulouse and Blagnac. A discipline that combines style, grace, technique, sport and passion for several decades. Artistic skating courses in Toulouse.',
                'hero-btn-discover': 'Discover Techniques',
                'hero-btn-join': 'Join Us',
                
                // Features Section
                'features-title': 'Roller Dance Courses in Toulouse',
                'features-subtitle': 'The essential basics of roller dance and artistic skating in Toulouse: balance, style and technical mastery',
                'feature-balance': 'Balance & Stability',
                'feature-balance-desc': 'Master the art of balance on wheels. Basic techniques to develop your stability and confidence on skates.',
                'feature-choreography': 'Choreography',
                'feature-choreography-desc': 'Create fun, fluid and graceful sequences. Learn to synchronize your movements with music for stunning performances.',
                'feature-spins': 'Spins & Turns',
                'feature-spins-desc': 'Advanced rotation and pivot techniques. Develop your ability to execute complex figures with precision.',
                'feature-artistic': 'Artistic Expression',
                'feature-artistic-desc': 'Release your creativity and develop your personal style. The art of roller dance goes far beyond pure technique.',
                'feature-technique': 'Technique',
                'feature-technique-desc': 'Fundamental skating techniques to develop your confidence and style. Turn, brake, jump, accelerate, etc.',
                'feature-group': 'Group Dance',
                'feature-group-desc': 'Master the art of synchronized dance. Leading techniques, coordination and harmony between partners, in groups or couples.',
                
                // Pricing Section
                'pricing-title': 'Information - Roller Dance Toulouse',
                'pricing-subtitle': 'Roller dance courses in Toulouse and Blagnac. Location: Salle des fêtes des Ramiers, 31700 Blagnac (near Toulouse)',
                'plan-intermediate': 'Intermediate',
                'plan-price': '230 €',
                'plan-period': 'per year',
                'plan-feature-1': 'Advanced techniques',
                'plan-feature-2': 'Complete choreographies',
                'plan-feature-3': '7pm - 8:30pm Thursdays: roller dance',
                'plan-feature-4': 'included: 7pm - 8:30pm Wednesdays (skating lessons)',
                'plan-feature-5': 'Personalized coaching',
                'plan-feature-6': 'Physical preparation',
                'plan-feature-7': 'Regular roller disco',
                'plan-location': 'Location',
                
                // News Section
                'news-title': 'Roller Dance Club News',
                'news-subtitle': 'Discover our latest roller dance news in Toulouse-Blagnac and follow us on social networks',
                'social-facebook': 'Facebook',
                'social-facebook-desc': 'Follow our news and events',
                'social-facebook-follow': 'Follow Us',
                'social-instagram': 'Instagram',
                'social-instagram-desc': 'Photos and videos of our courses',
                'social-instagram-follow': 'Follow Us',
                'social-tiktok': 'TikTok',
                'social-tiktok-desc': 'Short videos and roller challenges',
                'social-tiktok-follow': 'Follow Us',
                
                // Contact Section
                'contact-title': 'Join Our Roller Dance School in Toulouse-Blagnac',
                'contact-subtitle': 'Contact us to start your adventure in roller dance and artistic skating in Toulouse',
                'form-name': 'Name & Surname',
                'form-name-placeholder': 'Your full name',
                'form-email': 'Email Address',
                'form-email-placeholder': 'your.email@example.com',
                'form-message': 'Message',
                'form-message-placeholder': 'Tell us about your roller dance experience and your goals...',
                'form-submit': 'Send Message',
                
                // Footer
                'footer-parent-site': 'parent site:',
                'footer-support': 'Contact Support',
                'footer-rights': 'All rights reserved.',
                'footer-credit': 'Site created with passion for the roller dance community in Toulouse and Blagnac',
                'footer-location': '📍 Roller dance school in Toulouse - Salle des fêtes des Ramiers, 31700 Blagnac (near Toulouse)'
            }
        };

        // Translation functions
        function setLanguage(lang) {
            // Update active language button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll(`[data-lang="${lang}"]`).forEach(btn => {
                btn.classList.add('active');
            });
            
            // Update all translatable elements
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    // Use innerHTML to preserve HTML tags like links
                    element.innerHTML = translations[lang][key];
                }
            });
            
            // Update placeholders
            document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
                const key = element.getAttribute('data-translate-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    element.placeholder = translations[lang][key];
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Store language preference
            localStorage.setItem('preferred-language', lang);
        }

        // Initialize language system
        function initializeLanguage() {
            // Get saved language or default to French
            const savedLang = localStorage.getItem('preferred-language') || 'fr';
            setLanguage(savedLang);
            
            // Add click listeners to language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    setLanguage(lang);
                });
            });
        }

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeLanguage);
        } else {
            initializeLanguage();
        }

        // Scroll animation for feature cards
        function initializeScrollAnimations() {
            const featureCards = document.querySelectorAll('.feature-card');

            function updateScrollAnimations() {
                featureCards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        // Carte visible - l'animer pour qu'elle arrive de l'extérieur
                        card.classList.add('animate-in');
                        card.classList.remove('animate-out');
                    }
                });
            }

            // Écouter les événements de scroll
            window.addEventListener('scroll', updateScrollAnimations);
            
            // Animation initiale au chargement
            setTimeout(() => {
                featureCards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        card.classList.add('animate-in');
                    }
                });
            }, 500);
        }

        // Initialize scroll animations when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeScrollAnimations);
        } else {
            initializeScrollAnimations();
        }