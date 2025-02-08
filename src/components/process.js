import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './process.css'

const Process = (props) => {
  return (
    <div className="process-container1 thq-section-padding">
      <div className="process-max-width thq-section-max-width">
        <div className="process-container2 thq-grid-2">
          <div className="process-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="process-actions">
              <button className="thq-button-animated thq-button-filled process-button">
                <a
                  href="mailto:abkexports18@gmail.com?subject=Enquire About Fuller's Earth"
                  className="process-text12 thq-body-small"
                >
                  Mail Us
                </a>
              </button>
            </div>
          </div>
          <div className="process-container3">
            <div className="process-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="process-text26">Choose Your Products</span>
                  </Fragment>
                )}
              </h2>
              <span className="process-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="process-text32">
                      Browse through our wide range of organic products like
                      fuller&apos;s earth and select the ones you want.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="process-text15 thq-heading-3">01</label>
            </div>
            <div className="process-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="process-text25">Request a Quote</span>
                  </Fragment>
                )}
              </h2>
              <span className="process-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="process-text31">
                      Contact us to get a competitive pricing quote for the
                      products you have selected.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="process-text18 thq-heading-3">02</label>
            </div>
            <div className="process-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="process-text30">Place Your Order</span>
                  </Fragment>
                )}
              </h2>
              <span className="process-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="process-text28">
                      Finalize the order details with us and we will ensure a
                      smooth export process for you.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="process-text21 thq-heading-3">03</label>
            </div>
            <div className="process-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="process-text27">Track Your Shipment</span>
                  </Fragment>
                )}
              </h2>
              <span className="process-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="process-text29">
                      Once the order is confirmed, you can easily track the
                      shipment to your desired destination.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="process-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Process.defaultProps = {
  step2Title: undefined,
  step1Title: undefined,
  step4Title: undefined,
  step3Description: undefined,
  step4Description: undefined,
  step3Title: undefined,
  step2Description: undefined,
  step1Description: undefined,
}

Process.propTypes = {
  step2Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Process
