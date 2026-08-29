document.addEventListener('DOMContentLoaded', () => {
    // Add active state to current nav link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });

    // Simple scroll animation for header - ONLY on home page
    const header = document.querySelector('.header');
    if (currentPath === 'index.html' || currentPath === '') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                header.style.position = 'fixed';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
                header.style.position = 'absolute';
            }
        });
    } else {
        // For all other pages, ensure it sticks to the top if you want sticky behavior
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.position = 'fixed';
                header.style.width = '100%';
            } else {
                header.style.position = 'relative';
            }
        });
    }

    // Mobile Menu Implementation
    const headerContainer = document.querySelector('.header .container');
    if (headerContainer) {
        // Create button
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6H20M4 12H20M4 18H20"/></svg>';
        headerContainer.appendChild(mobileBtn);
        const cssLink = document.querySelector('link[href*="styles.css"]');
        const rp = cssLink ? cssLink.getAttribute('href').replace('styles.css', '') : '';
        
        // Create overlay
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu-overlay';
        mobileMenu.innerHTML = `
            <div class="mobile-menu-content">
                <nav class="mobile-nav-links">
                    <a href="${rp}index.html">Home</a>
                    <div class="mobile-dropdown">
                        <button class="mobile-dropdown-toggle" style="background:none; border:none; color:inherit; font:inherit; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem; width:100%;">
                            Programs 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="mobile-dropdown-menu" style="display: none; flex-direction: column; gap: 1rem; margin-top: 1.5rem; font-size: 1.05rem;">
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle" style="background:none; border:none; color:inherit; font:inherit; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem; width:100%;">
                                    CPL Ground Classes
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </button>
                                <div class="mobile-submenu-menu" style="display: none; flex-direction: column; gap: 0.8rem; margin-top: 1rem; font-size: 0.95rem; color: #64748b;">
                                    <a href="${rp}programs/cpl/cpl-air-navigation.html">Navigation & Flight Planning</a>
                                    <a href="${rp}programs/cpl/cpl-aviation-meteorology.html">Aviation Meteorology</a>
                                    <a href="${rp}programs/cpl/cpl-air-regulations.html">Air Law & Regulations</a>
                                    <a href="${rp}programs/cpl/cpl-tech-general.html">Aircraft Technical (General)</a>
                                    <a href="${rp}programs/cpl/cpl-tech-specific.html">Aircraft Technical (Specific)</a>
                                    <a href="${rp}programs/cpl/cpl-rtr-a.html">Radio Telephony (RTR-A)</a>
                                </div>
                            </div>
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle" style="background:none; border:none; color:inherit; font:inherit; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem; width:100%;">
                                    ATPL Ground Classes
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </button>
                                <div class="mobile-submenu-menu" style="display: none; flex-direction: column; gap: 0.8rem; margin-top: 1rem; font-size: 0.95rem; color: #64748b;">
                                    <a href="${rp}programs/atpl/atpl-general-navigation.html">General Navigation</a>
                                    <a href="${rp}programs/atpl/atpl-radio-aids.html">Radio Aids and Instruments</a>
                                    <a href="${rp}programs/atpl/atpl-meteorology.html">Air Meteorology</a>
                                    <a href="${rp}programs/atpl/atpl-viva.html">ATPL Viva</a>
                                </div>
                            </div>
                            <a href="${rp}programs/cadet-preparation.html">Airline Cadet Pilot Preparation</a>
                            <a href="${rp}programs/flight-training.html">Flight Training</a>
                            <a href="${rp}programs/type-rating/pre-type-rating.html">Pre Type Rating Preparation</a>
                            <a href="${rp}programs/type-rating/post-type-rating.html">Post Type Rating Preparation</a>
                            <a href="${rp}programs/type-rating/type-rating.html">Type Rating (A320 / B737 / ATR / Others)</a>
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle" style="background:none; border:none; color:inherit; font:inherit; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.5rem; width:100%;">
                                    Airline Selection Preparation
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </button>
                                <div class="mobile-submenu-menu" style="display: none; flex-direction: column; gap: 0.8rem; margin-top: 1rem; font-size: 0.95rem; color: #64748b;">
                                    <a href="${rp}programs/selection/selection-overview.html">Overview</a>
                                    <a href="${rp}programs/selection/selection-written-exam.html">Airline Written Exam Prep</a>
                                    <a href="${rp}programs/selection/selection-psychometric.html">Psychometric and Aptitude Assessment</a>
                                    <a href="${rp}programs/selection/selection-interview.html">Group Discussion and Personal Interview</a>
                                    <a href="${rp}programs/selection/selection-sim.html">Sim Assessment</a>
                                </div>
                            </div>
                            <a href="${rp}programs/simulator-assessment-prep.html">Simulator Assessment Prep</a>
                            <a href="${rp}programs/career-counseling.html">Career Counseling & Planning</a>
                        </div>
                    </div>
                    <a href="${rp}technology.html">Technology</a>
                    <a href="${rp}about.html">About</a>
                    <a href="${rp}careers.html">Careers</a>
                    <a href="${rp}contact.html">Contact</a>
                </nav>
                <div class="mobile-nav-actions">
                    <a href="${rp}contact.html" class="btn btn-primary" style="margin-bottom: 0.5rem; justify-content: center;">Enquire Now &rarr;</a>
                    
                </div>
            </div>
        `;
        document.body.appendChild(mobileMenu);
        
        // Mobile Accordion Logic
        const mobileDropdownToggle = mobileMenu.querySelector('.mobile-dropdown-toggle');
        const mobileDropdownMenu = mobileMenu.querySelector('.mobile-dropdown-menu');
        
        if (mobileDropdownToggle && mobileDropdownMenu) {
            mobileDropdownToggle.addEventListener('click', () => {
                const isExpanded = mobileDropdownMenu.style.display === 'flex';
                mobileDropdownMenu.style.display = isExpanded ? 'none' : 'flex';
                const svg = mobileDropdownToggle.querySelector('svg');
                if(svg) svg.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
                if(svg) svg.style.transition = 'transform 0.3s';
            });
        }

        const mobileSubmenuToggles = mobileMenu.querySelectorAll('.mobile-submenu-toggle');
        mobileSubmenuToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const submenu = toggle.nextElementSibling;
                if (submenu && submenu.classList.contains('mobile-submenu-menu')) {
                    const isExpanded = submenu.style.display === 'flex';
                    submenu.style.display = isExpanded ? 'none' : 'flex';
                    const svg = toggle.querySelector('svg');
                    if(svg) svg.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
                    if(svg) svg.style.transition = 'transform 0.3s';
                }
            });
        });
        
        // Toggle menu
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const mainHeader = document.querySelector('.header');
            if (mobileMenu.classList.contains('active')) {
                mobileBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                if (mainHeader) mainHeader.style.backgroundColor = 'var(--white)';
            } else {
                mobileBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6H20M4 12H20M4 18H20"/></svg>';
                document.body.style.overflow = '';
                if (mainHeader && window.scrollY <= 50) mainHeader.style.backgroundColor = 'transparent';
            }
        });

        // Close menu on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6H20M4 12H20M4 18H20"/></svg>';
                document.body.style.overflow = '';
                const mainHeader = document.querySelector('.header');
                if (mainHeader && window.scrollY <= 50) mainHeader.style.backgroundColor = 'transparent';
            }
        });
    }

    // Program Modal Logic
    const programModal = document.getElementById('programModal');
    if (programModal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const closeBtns = programModal.querySelectorAll('.close-modal, .close-modal-btn');
        const openBtns = document.querySelectorAll('.open-modal-btn');

        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.program-card');
                const title = card.querySelector('.card-title').textContent;
                const fullDescHTML = card.querySelector('.full-desc').innerHTML;

                modalTitle.textContent = title;
                modalBody.innerHTML = fullDescHTML;
                
                programModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        const closeModal = () => {
            programModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

        programModal.addEventListener('click', (e) => {
            if (e.target === programModal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && programModal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});

