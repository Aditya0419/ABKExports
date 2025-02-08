import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial-text29">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial-text33">
                  ABK Exports provided us with top-quality fuller&apos;s earth
                  at competitive prices. Their service was exceptional, and we
                  look forward to doing business with them again.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial-text34">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial-text27">
                            CEO, ABC Company
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial-text24">
                        ABK Exports provided us with top-quality fuller&apos;s
                        earth at competitive prices. Their service was
                        exceptional, and we look forward to doing business with
                        them again.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial-text35">Jane Smith</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial-text26">
                            Purchasing Manager, XYZ Corporation
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial-text28">
                        We have been sourcing fuller&apos;s earth from ABK
                        Exports for years now, and they have never disappointed.
                        Their commitment to quality and customer satisfaction is
                        commendable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial-text37">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial-text36">
                            Director, LMN Industries
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial-text31">
                        ABK Exports is our go-to supplier for organic products
                        like fuller&apos;s earth. Their reliability and
                        consistency in delivering high-quality products sets
                        them apart from the rest.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial-text32">
                            Sarah Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial-text25">
                            Supply Chain Manager, PQR Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial-text30">
                        Working with ABK Exports has been a pleasure. Their
                        professionalism and dedication to meeting our
                        requirements have made them a valuable partner in our
                        supply chain.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Alt: 'Image of Michael Johnson',
  review1: undefined,
  author4Position: undefined,
  author2Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author1Position: undefined,
  author1Alt: 'Image of John Doe',
  author2Alt: 'Image of Jane Smith',
  review2: undefined,
  heading1: undefined,
  review4: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  review3: undefined,
  author4Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  content1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author4Alt: 'Image of Sarah Williams',
  author1Name: undefined,
  author2Name: undefined,
  author3Position: undefined,
  author3Name: undefined,
}

Testimonial.propTypes = {
  author3Alt: PropTypes.string,
  review1: PropTypes.element,
  author4Position: PropTypes.element,
  author2Position: PropTypes.element,
  author2Src: PropTypes.string,
  author1Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  review4: PropTypes.element,
  author4Src: PropTypes.string,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author3Src: PropTypes.string,
  content1: PropTypes.element,
  author1Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
}

export default Testimonial
