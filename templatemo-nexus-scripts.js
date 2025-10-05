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

        // Matrix Rain Effect removed for better performance

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

        // Initialize background effects - Matrix rain removed
        generateParticles();
        generateDataStreams();

        // Window resize handler - Matrix rain regeneration removed
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Matrix rain regeneration removed for performance
            }, 250);
        });

        // Mouse effects removed for better performance

        // Cursor glow effect removed for better performance

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

        // Random cyber text effects removed for better performance

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
                    const moveUp = video2Progress * 100; // Move up by 100px
                    
                    video2Frame.style.transform = `translateX(-50%) translateY(-${moveUp}px)`;
                } else if (scrolled >= video2End) {
                    video2Frame.style.transform = 'translateX(-50%) translateY(-100px)';
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

        // Social Media Posts Integration
        function initializeSocialPosts() {
            // Facebook Post (using Facebook Graph API via proxy)
            loadFacebookPost();
            
            // Instagram Post (using Instagram Basic Display API via proxy)
            loadInstagramPost();
            
            // TikTok Post (using TikTok API via proxy)
            loadTikTokPost();
        }

        function loadFacebookPost() {
            const facebookPost = document.getElementById('facebookPost');
            if (!facebookPost) return;

            // Simuler une image de publication Facebook
            setTimeout(() => {
                facebookPost.innerHTML = `
                    <div class="post-content">
                        <a href="https://www.facebook.com/p/Roller-%C3%A0-Blagnac-61556133667304/" target="_blank">
                            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop&crop=center" 
                                 alt="Dernière publication Facebook" 
                                 class="post-image"
                                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTg3N0YyIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RmFjZWJvb2sgUG9zdDwvdGV4dD4KPC9zdmc+'">
                        </a>
                        <div class="post-date">Il y a 2 jours</div>
                    </div>
                `;
            }, 1500);
        }

        function loadInstagramPost() {
            const instagramPost = document.getElementById('instagramPost');
            if (!instagramPost) return;

            // Simuler une image de publication Instagram
            setTimeout(() => {
                instagramPost.innerHTML = `
                    <div class="post-content">
                        <a href="https://www.instagram.com/blagnac_roller_sporting_club/" target="_blank">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center" 
                                 alt="Dernière publication Instagram" 
                                 class="post-image"
                                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRTQ0MDVGIiAvPgo8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I0YwOTNGQiIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRjU1NzZDIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW5zdGFncmFtIFBvc3Q8L3RleHQ+Cjwvc3ZnPg=='">
                        </a>
                        <div class="post-date">Il y a 1 jour</div>
                    </div>
                `;
            }, 2000);
        }

        function loadTikTokPost() {
            const tiktokPost = document.getElementById('tiktokPost');
            if (!tiktokPost) return;

            // Simuler une image de publication TikTok
            setTimeout(() => {
                tiktokPost.innerHTML = `
                    <div class="post-content">
                        <a href="https://www.tiktok.com/@rollerblagnac/" target="_blank">
                            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop&crop=center" 
                                 alt="Dernière publication TikTok" 
                                 class="post-image"
                                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRkYwMDUwIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEYyRUEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZCkiLz4KPHRleHQgeD0iMTUwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UaWtUb2sgUG9zdDwvdGV4dD4KPC9zdmc+'">
                        </a>
                        <div class="post-date">Il y a 3 heures</div>
                    </div>
                `;
            }, 2500);
        }

        // Fonction pour récupérer de vraies publications (à implémenter avec les vraies APIs)
        async function fetchRealSocialPosts() {
            try {
                // Facebook API (nécessite un token d'accès)
                // const facebookResponse = await fetch('https://graph.facebook.com/v18.0/PAGE_ID/posts?access_token=YOUR_TOKEN');
                
                // Instagram API (nécessite un token d'accès)
                // const instagramResponse = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=YOUR_TOKEN');
                
                // TikTok API (nécessite une clé API)
                // const tiktokResponse = await fetch('https://open.tiktokapis.com/v2/research/video/query/?fields=id,title,create_time&access_token=YOUR_TOKEN');
                
                console.log('APIs des réseaux sociaux configurées pour de futures intégrations');
            } catch (error) {
                console.error('Erreur lors du chargement des publications:', error);
            }
        }

        // Initialize social posts when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeSocialPosts);
        } else {
            initializeSocialPosts();
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