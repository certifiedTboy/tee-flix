import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="page-footer">
      <div className="container">
        <div className="footer-top">
          {/* <img src={logo} alt='Movflx' /> */}
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="quick-link-list">
              <ul>
                <li>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <ul>
                <li>
                  <a
                    href="https://www.pinterest.com/imdbofficial/_created/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="ri-tiktok-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/certifiedTboy/tee-flix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="ri-github-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p className="para">
            Copyright © 2024. All Rights Reserved By
            <a className="link" href="#" target="_blank" rel="noreferrer">
              Tee-Flix
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
