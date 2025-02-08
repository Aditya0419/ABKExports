import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer7 thq-section-padding">
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer-logo2"
            />
          </div>
          <div className="footer-links">
            <span className="thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer-text21">Home</span>
                </Fragment>
              )}
            </span>
            <span className="thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer-text20">Products</span>
                </Fragment>
              )}
            </span>
            <span className="thq-body-small">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer-text17">About Us</span>
                </Fragment>
              )}
            </span>
            <a
              href="mailto:abkexports18@gmail.com?subject=Enquire About Products"
              className="footer-link thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer-text23">Contact Us</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <div className="footer-container">
              <span className="thq-body-small">© 2025 ABK Exports</span>
            </div>
            <div className="footer-footer-links">
              <span className="footer-text14 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer-text22">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer-text19">
                      Terms &amp; Conditions
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer-text18">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  logoAlt: 'ABK Exports Logo',
  link3: undefined,
  cookiesLink: undefined,
  termsLink: undefined,
  link2: undefined,
  link1: undefined,
  logoSrc: '/logo-black-200h.png',
  privacyLink: undefined,
  link4: undefined,
}

Footer.propTypes = {
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  cookiesLink: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
  link4: PropTypes.element,
}

export default Footer
