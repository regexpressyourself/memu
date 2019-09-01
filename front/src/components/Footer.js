import React from 'react';
import {GitHub} from 'react-feather';
import './Footer.scss';
import {Link} from 'react-router-dom';

function Footer(props) {
  const inlineLogo = <span className="logo-font">WAILto</span>;
  return (
    <footer>
      <div>
        <Link className="footer-img" to="/">
          <p className="css-logo">
            <span className="css-logo__wail">WAIL</span>
            <span className="css-logo__to">to</span>
          </p>
        </Link>
      </div>
      <div>
        <p>
          <a
            href="https://github.com/regexpressyourself/wailto"
            className="footer-gh-link"
            rel="noopener noreferrer"
            target="_blank">
            <GitHub />
            {inlineLogo} &nbsp;is 100% open source
          </a>
        </p>
      </div>
      <div className="smessina-info">
        <p>
          <a
            href="https://smessina.com"
            rel="noopener noreferrer"
            target="_blank">
            Sam Messina
          </a>
          <br />
          &copy; {new Date().getFullYear()}
        </p>
        <p>
          <a
            className="footer-img"
            href="https://smessina.com"
            rel="noopener noreferrer"
            target="_blank">
            <img
              className="sm-fav"
              src="https://smessina.com/images/sm_fav.png"
              alt="smessina.com"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
