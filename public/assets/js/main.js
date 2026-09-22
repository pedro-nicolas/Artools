        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
            }

            const header = document.getElementById('navbar');
            const heroContent = document.getElementById('hero-content');
            const textBackdrop = document.getElementById('text-backdrop');
            const hudTimecode = document.getElementById('hud-timecode');
            const hudRotation = document.getElementById('hud-rotation');
            const scrubFill = document.getElementById('scrub-fill');
            const stepDisplay = document.getElementById('step-display');
            const btnExplorar = document.getElementById('btn-explorar');
            const navNext = document.getElementById('nav-next');
            const navPrev = document.getElementById('nav-prev');

            // 1. Initial Header Reveal
            setTimeout(() => {
                if (header) header.classList.add('loaded');
            }, 100);

            // 2. Initialize Video Engine (Native Fast Scrubbing + ScrollyVideo GPU acceleration)
            let scrollyVideo = null;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const nativeVideo = document.getElementById('hero-native-video');

            // Preload & immediately display initial video frame
            if (nativeVideo) {
                nativeVideo.addEventListener('loadedmetadata', () => {
                    nativeVideo.currentTime = 0.001;
                });
                if (nativeVideo.readyState >= 1) {
                    nativeVideo.currentTime = 0.001;
                }
            }

            // Initialize ScrollyVideo (Hardware-accelerated when on HTTP/HTTPS, fallback for file://)
            const isFileProtocol = window.location.protocol === 'file:';
            if (typeof ScrollyVideo !== 'undefined') {
                try {
                    scrollyVideo = new ScrollyVideo({
                        scrollyVideoContainer: 'video-stage',
                        src: 'assets/videos/video2.mp4',
                        full: true,
                        cover: true,
                        sticky: false,
                        trackScroll: false,
                        useWebCodecs: !isFileProtocol, // Avoid CORS errors when opening directly via file://
                        transitionSpeed: 12,
                        frameThreshold: 0.05
                    });
                } catch (e) {
                    console.warn('ScrollyVideo init fallback:', e);
                }
            }

            // 3. GSAP ScrollTrigger with PINNING (Locked viewport during scroll)
            let scrollTriggerInstance = null;

            if (typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
                scrollTriggerInstance = ScrollTrigger.create({
                    trigger: '#hero-pin-container',
                    start: 'top top',
                    end: '+=250%', // 250vh runway where the hero stays 100% pinned
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                    onUpdate: (self) => {
                        const progress = self.progress;

                        // --- Progressive Fade Out of Foreground Text & Buttons ---
                        // Text disappears completely between progress 0 and 0.35
                        const fadeThreshold = 0.35;
                        const fadeRatio = Math.min(1, Math.max(0, progress / fadeThreshold));
                        const opacity = 1 - fadeRatio;
                        const translateY = -fadeRatio * 45;
                        const scale = 1 - fadeRatio * 0.04;
                        const blur = fadeRatio * 8;

                        if (heroContent) {
                            heroContent.style.opacity = opacity;
                            heroContent.style.transform = `translateY(${translateY}px) scale(${scale})`;
                            heroContent.style.filter = blur > 0.1 ? `blur(${blur}px)` : 'none';
                            heroContent.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto';
                        }

                        if (textBackdrop) {
                            textBackdrop.style.opacity = opacity;
                        }

                        // --- Synchronize Video Scrub (Native + ScrollyVideo) ---
                        if (scrollyVideo && typeof scrollyVideo.setTargetTimePercent === 'function') {
                            scrollyVideo.setTargetTimePercent(progress);
                        }
                        if (nativeVideo && nativeVideo.duration) {
                            nativeVideo.currentTime = progress * nativeVideo.duration;
                        }

                        // --- Telemetry & HUD Updates ---
                        if (hudRotation) {
                            const angle = Math.min(360, Math.round(progress * 360));
                            hudRotation.textContent = `${String(angle).padStart(3, '0')}°`;
                        }

                        if (scrubFill) {
                            scrubFill.style.height = `${(progress * 100).toFixed(1)}%`;
                        }

                        if (stepDisplay) {
                            if (progress < 0.33) {
                                stepDisplay.textContent = '01';
                            } else if (progress < 0.66) {
                                stepDisplay.textContent = '02';
                            } else {
                                stepDisplay.textContent = '03';
                            }
                        }

                        if (hudTimecode) {
                            const time = (progress * 8.0).toFixed(2);
                            hudTimecode.textContent = `${time}s`;
                        }
                    }
                });
            }

            // 4. Interactive Navigation Controls
            if (btnExplorar) {
                btnExplorar.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (scrollTriggerInstance) {
                        const targetScroll = scrollTriggerInstance.start + (scrollTriggerInstance.end - scrollTriggerInstance.start) * 0.5;
                        window.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth'
                        });
                    }
                });
            }

            if (navNext) {
                navNext.addEventListener('click', () => {
                    if (scrollTriggerInstance) {
                        const stepDelta = (scrollTriggerInstance.end - scrollTriggerInstance.start) * 0.33;
                        window.scrollTo({
                            top: Math.min(scrollTriggerInstance.end, window.scrollY + stepDelta),
                            behavior: 'smooth'
                        });
                    }
                });
            }

            if (navPrev) {
                navPrev.addEventListener('click', () => {
                    if (scrollTriggerInstance) {
                        const stepDelta = (scrollTriggerInstance.end - scrollTriggerInstance.start) * 0.33;
                        window.scrollTo({
                            top: Math.max(scrollTriggerInstance.start, window.scrollY - stepDelta),
                            behavior: 'smooth'
                        });
                    }
                });
            }

            // 5. Primary Button Glow Tracker (Micro-interação)
            const btnPrimary = document.getElementById('btn-comprar');
            if (btnPrimary) {
                btnPrimary.addEventListener('mousemove', (e) => {
                    const rect = btnPrimary.getBoundingClientRect();
                    btnPrimary.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    btnPrimary.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
            }

            // 6. Interactive Macro Lens Zoom & Coordinates Tracker
            const macroViewport = document.getElementById('macro-viewport');
            const macroLens = document.getElementById('macro-lens');
            const macroBaseImg = document.getElementById('macro-base-img');
            const macroCoords = document.getElementById('macro-coords');

            if (macroViewport && macroLens && macroBaseImg) {
                macroLens.style.backgroundImage = `url('${macroBaseImg.src}')`;
                const zoomFactor = 2.4;

                const updateLensPosition = (e) => {
                    const rect = macroViewport.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const clampedX = Math.max(0, Math.min(rect.width, x));
                    const clampedY = Math.max(0, Math.min(rect.height, y));

                    macroLens.style.left = `${clampedX}px`;
                    macroLens.style.top = `${clampedY}px`;

                    const bgWidth = rect.width * zoomFactor;
                    const bgHeight = rect.height * zoomFactor;
                    const bgX = (clampedX / rect.width) * bgWidth - (macroLens.offsetWidth / 2);
                    const bgY = (clampedY / rect.height) * bgHeight - (macroLens.offsetHeight / 2);

                    macroLens.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
                    macroLens.style.backgroundPosition = `-${bgX}px -${bgY}px`;

                    if (macroCoords) {
                        macroCoords.textContent = `X: ${Math.round(clampedX)} // Y: ${Math.round(clampedY)}`;
                    }
                };

                macroViewport.addEventListener('mousemove', updateLensPosition);
                macroViewport.addEventListener('mouseleave', () => {
                    if (macroCoords) {
                        macroCoords.textContent = 'STANDBY';
                    }
                });

                // Hide lens when hovering over hotspot pins so tooltips are readable
                const hotspots = macroViewport.querySelectorAll('.macro-hotspot');
                hotspots.forEach((hotspot) => {
                    hotspot.addEventListener('mouseenter', () => {
                        macroLens.classList.add('lens-hidden');
                    });
                    hotspot.addEventListener('mouseleave', () => {
                        macroLens.classList.remove('lens-hidden');
                    });
                });
            }

            // 7. Feature Cards Mouse Glow Tracker (Micro-interação)
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card) => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
            });

            // 8. GSAP ScrollTrigger Reveals for Section 2
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
                gsap.from('.features-header', {
                    scrollTrigger: {
                        trigger: '.features-section',
                        start: 'top 82%',
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });

                gsap.from('.macro-showcase-card', {
                    scrollTrigger: {
                        trigger: '.features-grid',
                        start: 'top 85%',
                    },
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    clearProps: 'transform'
                });

                gsap.from('.feature-card', {
                    scrollTrigger: {
                        trigger: '.features-grid',
                        start: 'top 85%',
                    },
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power2.out',
                    clearProps: 'transform'
                });
            }

            // ==========================================================================
            // 8. TERCEIRA DOBRA: EXPERIÊNCIA CINÉTICA (3D TILT, FLASHLIGHT & MÓDULOS)
            // ==========================================================================
            const hapticSection = document.getElementById('experiencia');
            if (hapticSection) {
                const tiltCards = hapticSection.querySelectorAll('.glass-tilt-card');
                tiltCards.forEach((card) => {
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        // Set Flashlight CSS Vars
                        card.style.setProperty('--card-x', `${x}px`);
                        card.style.setProperty('--card-y', `${y}px`);

                        // Calculate 3D tilt (-6deg to +6deg)
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotX = ((y - centerY) / centerY) * -5.5;
                        const rotY = ((x - centerX) / centerX) * 5.5;

                        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(6px)`;

                        // Dynamic interaction per card module
                        const cardType = card.getAttribute('data-tilt-card');
                        if (cardType === '1') {
                            const flowFill = document.getElementById('flow-bar-fill');
                            const flowRate = document.getElementById('flow-rate-readout');
                            const flowVisc = document.getElementById('flow-visc-readout');
                            const pct = Math.min(100, Math.max(70, Math.round((x / rect.width) * 30 + 72)));
                            if (flowFill) flowFill.style.width = `${pct}%`;
                            if (flowRate) flowRate.textContent = `${pct}% // REGULADO`;
                            if (flowVisc) flowVisc.textContent = `${(1.70 + (x / rect.width) * 0.24).toFixed(2)} cP`;
                        } else if (cardType === '2') {
                            const spectrumBars = card.querySelectorAll('.spectrum-bar');
                            spectrumBars.forEach((bar, i) => {
                                const factor = Math.sin((x / rect.width) * Math.PI + (i * 0.7)) * 0.45 + 0.45;
                                bar.style.setProperty('--bar-h', `${Math.max(15, Math.round(factor * 85))}%`);
                            });
                        } else if (cardType === '3') {
                            const bubble = document.getElementById('gyro-bubble');
                            const gyroTilt = document.getElementById('gyro-tilt-readout');
                            if (bubble) {
                                const offset = ((x - centerX) / centerX) * 22;
                                bubble.style.transform = `translateX(${offset.toFixed(1)}px)`;
                                if (gyroTilt) gyroTilt.textContent = `${Math.abs(offset * 0.08).toFixed(2)}° DESVIO`;
                            }
                        }
                    });

                    card.addEventListener('mouseleave', () => {
                        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                        const bubble = document.getElementById('gyro-bubble');
                        if (bubble) bubble.style.transform = 'translateX(0px)';
                        const gyroTilt = document.getElementById('gyro-tilt-readout');
                        if (gyroTilt) gyroTilt.textContent = '0.00° DESVIO';
                    });
                });

                // GSAP ScrollTrigger Entrance for Dobra 3
                if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
                    gsap.from('.haptic-header', {
                        scrollTrigger: {
                            trigger: '#experiencia',
                            start: 'top 75%',
                        },
                        y: 35,
                        opacity: 0,
                        duration: 0.9,
                        ease: 'power3.out'
                    });

                    gsap.from('.glass-tilt-card', {
                        scrollTrigger: {
                            trigger: '.haptic-cards-grid',
                            start: 'top 80%',
                        },
                        y: 45,
                        opacity: 0,
                        scale: 0.96,
                        duration: 0.85,
                        stagger: 0.15,
                        ease: 'power3.out'
                    });

                    gsap.from('.haptic-footer-bar', {
                        scrollTrigger: {
                            trigger: '.haptic-cards-grid',
                            start: 'bottom 90%',
                        },
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                }
            }

            // ==========================================================================
            // 9. QUARTA DOBRA: ARTOOLSPRO SIGNATURE SERIES (INTERAÇÕES & EFEITOS)
            // ==========================================================================
            const sigCard = document.getElementById('signature-card');
            const sigSection = document.getElementById('signature-fold');
            const btnGarantir = document.getElementById('btn-garantir');
            const toast = document.getElementById('signature-toast');

            if (sigCard && sigSection) {
                // 1. Dynamic 3D Tilt & Cursor Glow Follower
                sigCard.addEventListener('mousemove', (e) => {
                    const rect = sigCard.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    sigCard.style.setProperty('--mouse-x', `${x}px`);
                    sigCard.style.setProperty('--mouse-y', `${y}px`);

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotX = ((y - centerY) / centerY) * -6;
                    const rotY = ((x - centerX) / centerX) * 6;

                    sigCard.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px)`;
                });

                sigCard.addEventListener('mouseleave', () => {
                    sigCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                });

                // 2. CTA Click Interaction
                // btnGarantir navega naturalmente para /pagina

                // 3. GSAP ScrollTrigger Fade-in & Fade-out Animation
                if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
                    gsap.fromTo(sigCard, 
                        { 
                            opacity: 0, 
                            y: 55, 
                            scale: 0.94,
                            filter: 'blur(10px)'
                        }, 
                        {
                            opacity: 1, 
                            y: 0, 
                            scale: 1,
                            filter: 'blur(0px)',
                            duration: 1.1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '#signature-fold',
                                start: 'top 75%',
                                end: 'bottom 20%',
                                toggleActions: 'play reverse play reverse'
                            }
                        }
                    );

                    // Parallax & Subtle Zoom on the background video
                    const bgVideo = sigSection.querySelector('.signature-bg-video');
                    if (bgVideo) {
                        bgVideo.muted = true;
                        bgVideo.defaultMuted = true;
                        bgVideo.volume = 0;
                        gsap.fromTo(bgVideo,
                            { scale: 1.08, filter: 'brightness(0.92) contrast(1.04)' },
                            {
                                scale: 1.01,
                                filter: 'brightness(0.98) contrast(1.04)',
                                scrollTrigger: {
                                    trigger: '#signature-fold',
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: 1
                                }
                            }
                        );
                    }
                }
            }

        });
