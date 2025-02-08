import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './home.css'

const Home = (props) => {
  return (
    <div id={props.hero17Id} className="home-header78">
      <div className="home-column thq-section-padding thq-section-max-width">
        <div className="home-content1">
          <h1 className="home-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="home-text3">
                  Medium length hero headline goes here
                </span>
              </Fragment>
            )}
          </h1>
          <p className="home-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="home-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="home-actions"></div>
      </div>
      <div className="home-content2">
        <div className="home-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="home-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="home-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="home-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="home-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="home-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="home-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="home-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="home-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="home-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="home-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="home-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="home-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="home-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="home-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="home-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="home-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="home-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="home-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="home-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="home-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="home-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="home-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="home-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="home-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Home.defaultProps = {
  heading1: undefined,
  image6Alt: 'Hero Image',
  image1Alt: 'Hero Image',
  image10Src:
    'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg?sfvrsn=7abe71fe_4',
  image2Alt: 'Hero Image',
  image3Src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Br7scCttaoadQpPm2Izpoyyn-eHaw4Wc2g&s',
  image4Src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oFvu2RmTf1qPNCa8i4jUJ8gqQvx6ju3FcA&s',
  image8Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image1Src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ6iJRZdEMbYDtp-1a4Vo-jykOU1Sb2GvVw&s',
  image7Src:
    'https://images.unsplash.com/photo-1523544463628-d873327f5217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  image11Src:
    'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
  image5Src:
    'https://profit.pakistantoday.com.pk/wp-content/uploads/2019/07/32-3.jpg',
  content1: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1592963219751-3800a144a41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image12Src:
    'https://cdn.shopaccino.com/refresh/articles/dal-pulse-745535_l.jpg?v=426',
  image9Src:
    'https://images.unsplash.com/photo-1668485096368-5104ebdf8a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  hero17Id: '',
  image3Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image8Src:
    'https://images.unsplash.com/photo-1566118029194-de9876da3233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1709627393686-e7ad62399354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODg1NDAyNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Home.propTypes = {
  heading1: PropTypes.element,
  image6Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image7Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.element,
  image6Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image9Src: PropTypes.string,
  hero17Id: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
}

export default Home
