class GpacFooter extends HTMLElement {
    connectedCallback() {
        // Automatically fetches the current system year
        const currentYear = new Date().getFullYear();

        this.innerHTML = `
            <footer class="footer-basic">
                <div class="container footer-basic-container">
                    <a href="index.html" class="footer-basic-brand" style="text-decoration: none;">GPac</a>
                    
                    <nav class="footer-basic-links">
                        <a href="index.html">Home</a>
                        <a href="simulator.html">Simulator</a>
                        <a href="predictions.html">Predictions</a>
                        <a href="analytics.html">Analytics</a>
                        <a href="download.html">Download</a>
                    </nav>
                    
                    <div class="footer-basic-copy">
                        &copy; ${currentYear} GPac Scholarly Atelier. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('gpac-footer', GpacFooter);