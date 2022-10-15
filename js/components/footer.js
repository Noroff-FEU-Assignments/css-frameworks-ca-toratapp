const footer = document.querySelector("footer");

footer.innerHTML += `<div class="footer-sm-screens d-lg-none">
                        <div class="footer__vimeo-youtube">
                            <i class="fa-brands fa-vimeo-v"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                        <div class="footer__paragraphs">
                            <p>hello@yay.com</p>
                            <p>Copyright 2020</p>
                        </div>
                    </div>
                    <div class="footer-lg-screens d-none d-lg-flex">
                        <div class="footer__vimeo-youtube-wrapper">
                            <div class="footer__vimeo-youtube">
                                <i class="fa-brands fa-vimeo-v"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <p class="footer__email">hello@yay.com</p>
                        <p class="footer__copyright">Copyright 2020</p>
                    </div>`
                    