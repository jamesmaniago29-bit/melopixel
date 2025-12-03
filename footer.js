class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: rgba(17, 24, 39, 0.8);
                    backdrop-filter: blur(10px);
                    padding: 4rem 2rem 2rem;
                    position: relative;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    background: linear-gradient(to right, #00E5FF, #9D5CFF);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 1rem;
                }
                
                .footer-description {
                    color: #9ca3af;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(156, 163, 175, 0.1);
                    color: #9ca3af;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: linear-gradient(to right, #00E5FF, #9D5CFF);
                    color: white;
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    color: white;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 3px;
                    background: linear-gradient(to right, #00E5FF, #9D5CFF);
                    border-radius: 3px;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #9ca3af;
                    transition: all 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #00E5FF;
                    transform: translateX(5px);
                }
                
                .footer-bottom {
                    max-width: 1200px;
                    margin: 4rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(156, 163, 175, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }
                
                .copyright {
                    color: #6b7280;
                    font-size: 0.875rem;
                }
                
                .glow-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(to right, transparent, #00E5FF, #9D5CFF, transparent);
                }
            </style>
            <div class="glow-line"></div>
            <div class="footer-content">
                <div class="footer-col">
                    <div class="footer-logo">MeloPixel</div>
                    <p class="footer-description">
                        A creative blog exploring music, art, gaming, and lifelong learning. 
                        Sharing discoveries and progress along the way.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="youtube"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="github"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Home</a>
                        <a href="#interests" class="footer-link">Music</a>
                        <a href="#interests" class="footer-link">Drawing</a>
                        <a href="#interests" class="footer-link">Gaming</a>
                        <a href="#interests" class="footer-link">Learning</a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Resources</h3>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Blog</a>
                        <a href="#" class="footer-link">Tutorials</a>
                        <a href="#" class="footer-link">Playlists</a>
                        <a href="#" class="footer-link">Art Gallery</a>
                        <a href="#" class="footer-link">Learning Materials</a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Contact</h3>
                    <div class="footer-links">
                        <a href="#" class="footer-link">
                            <i data-feather="mail" class="w-4 h-4 mr-2 inline"></i>
                            Email
                        </a>
                        <a href="#" class="footer-link">
                            <i data-feather="message-square" class="w-4 h-4 mr-2 inline"></i>
                            Chat
                        </a>
                        <a href="#" class="footer-link">
                            <i data-feather="map-pin" class="w-4 h-4 mr-2 inline"></i>
                            Location
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">
                    &copy; ${new Date().getFullYear()} MeloPixel Playscape. All rights reserved.
                </p>
</div>
        `;

        // Replace icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);