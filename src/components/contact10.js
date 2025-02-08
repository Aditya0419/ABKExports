import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text19">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text17">
                    For inquiries or to place an order, please contact us using
                    the information below.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text18">India Office</span>
                </Fragment>
              )}
            </h3>
            <p className="contact10-text13 thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text15">ABK Exports, India</span>
                </Fragment>
              )}
            </p>
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="contact10-text16">
                    +91 6351806108, +91 9510561595
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact10-container3">
              <a
                href="https://maps.app.goo.gl/sppFo3eBJNJBejoc9"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1Description: undefined,
  text: undefined,
  content1: undefined,
  location1: undefined,
  heading1: undefined,
}

Contact10.propTypes = {
  location1Description: PropTypes.element,
  text: PropTypes.element,
  content1: PropTypes.element,
  location1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact10
