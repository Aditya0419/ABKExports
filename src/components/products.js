import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './products.css'

const Products = (props) => {
  return (
    <div id={props.cTA26Id} className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="products-accent2-bg">
          <div className="products-accent1-bg">
            <div className="products-container2">
              <div className="products-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="products-text5">
                        Exporting Best Quality Fuller&apos;s Earth Worldwide
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="products-text3">
                        ABK Exports is your trusted partner for sourcing the
                        finest quality Fuller&apos;s Earth from India and
                        exporting it to all regions of the world.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="products-actions">
                <button
                  type="button"
                  className="thq-button-filled products-button"
                >
                  <a
                    href="mailto:abkexports18@gmail.com?subject=Enquire about all products available."
                    className="products-link"
                  >
                    {props.action1 ?? (
                      <Fragment>
                        <span className="products-text4">
                          Explore Our Products
                        </span>
                      </Fragment>
                    )}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Products.defaultProps = {
  content1: undefined,
  cTA26Id: '',
  action1: undefined,
  heading1: undefined,
}

Products.propTypes = {
  content1: PropTypes.element,
  cTA26Id: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Products
