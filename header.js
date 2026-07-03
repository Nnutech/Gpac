class GpacHeader extends HTMLElement {
    connectedCallback() {
        // Check which page is currently active via attribute
        const activePage = this.getAttribute('active') || '';

        this.innerHTML = `
            <nav class="navbar glass">
                <div class="navbar-container container">

                    <a href="index.html" class="navbar-brand">GPac</a>

                    <div class="navbar-menu" id="nav-menu">

                        <a class="navbar-link ${activePage === 'simulator' ? 'active' : ''}" href="simulator.html">
                            Simulator
                        </a>

                        <a class="navbar-link ${activePage === 'predictions' ? 'active' : ''}" href="predictions.html">
                            Predictions
                        </a>

                        <a class="navbar-link ${activePage === 'analytics' ? 'active' : ''}" href="analytics.html">
                            Analytics
                        </a>

                        <!-- Mobile CTA -->
                        <a href="download.html" class="mobile-download-btn btn btn-dark">
                            <span class="material-symbols-outlined">download</span>
                            Get GPac
                        </a>

                    </div>

                    <div class="navbar-actions">

                        <!-- Desktop CTA -->
                        <a href="download.html" class="desktop-download-btn">
                            <button class="btn btn-dark">
                                <span class="material-symbols-outlined">download</span>
                                Get App
                            </button>
                        </a>

                        <button class="menu-toggle" id="menu-toggle-btn">
                            <span class="material-symbols-outlined">menu</span>
                        </button>

                    </div>

                </div>
            </nav>`;

        this.setupMobileMenu();
        this.setupScrollShadow();
    }

    setupMobileMenu() {
        const toggleBtn = this.querySelector('#menu-toggle-btn');
        const menu = this.querySelector('#nav-menu');

        if (toggleBtn && menu) {
            toggleBtn.addEventListener('click', () => {
                menu.classList.toggle('show');
            });
        }
    }

    setupScrollShadow() {
        const nav = this.querySelector('.navbar');
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
        }
    }
}

customElements.define('gpac-header', GpacHeader);