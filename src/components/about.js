import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './about.css'

const About = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id={props.features24Id} className="thq-section-padding">
      <div className="about-container2 thq-section-max-width">
        <div className="about-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="about-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="about-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="about-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="about-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="about-tab-horizontal1"
          >
            <div className="about-divider-container1">
              {activeTab === 0 && <div className="about-container3"></div>}
            </div>
            <div className="about-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="about-text2">Best Quality Products</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="about-text4">
                      Providing top-notch organic products
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="about-tab-horizontal2"
          >
            <div className="about-divider-container2">
              {activeTab === 1 && <div className="about-container4"></div>}
            </div>
            <div className="about-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="about-text1">Competitive Pricing</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="about-text6">
                      Competitive pricing for all products
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="about-tab-horizontal3"
          >
            <div className="about-divider-container3">
              {activeTab === 2 && <div className="about-container5"></div>}
            </div>
            <div className="about-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="about-text5">Global Reach</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="about-text3">
                      Exporting to all regions of the world
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

About.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1576158113840-43db9ff3ef09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1ImgAlt: 'Organic fullers earth product image',
  feature1Title: undefined,
  feature3Description: undefined,
  feature1Description: undefined,
  feature3Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1716786404383-683d2a41f87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'World map showing global export locations',
  feature2Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1611255153959-5d090dc09ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  features24Id: '',
  feature2ImgAlt: 'Price tag symbolizing competitive pricing',
}

About.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  features24Id: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default About
