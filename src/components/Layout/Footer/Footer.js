import React from "react";

function Footer() {
  return (
    <>
      <footer id="mu-footer" role="contentinfo">
        <div className="container">
          <div className="mu-footer-area">
            <div className="mu-social-media">
              <a href="/">
                <i className="fa fa-facebook" />
              </a>
              <a href="/">
                <i className="fa fa-twitter" />
              </a>
              <a href="/">
                <i className="fa fa-google-plus" />
              </a>
              <a href="/">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <p className="mu-copyright">
              © Copyright{" "}
              <a rel="nofollow" href="/">
                Tsiory Rakotoarimalala
              </a>
              . All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
