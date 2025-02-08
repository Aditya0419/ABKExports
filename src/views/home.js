import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Home from '../components/home'
import About from '../components/about'
import Products from '../components/products'
import Features25 from '../components/features25'
import Process from '../components/process'
import Testimonial from '../components/testimonial'
import Contact10 from '../components/contact10'
import Footer from '../components/footer'
import './home.css'

const HHome = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ABK-Exports</title>
        <meta property="og:title" content="ABK-Exports" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">About</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Products</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Products</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact Us</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text18">Products</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text19">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text20">Contact Us</span>
          </Fragment>
        }
        logoSrc="/aditya%20(7)-1500h1.png"
        link1Url="#Hero17"
        link2Url="#Features24"
        link3Url="#CTA26"
        link2Url1="#CTA26"
        page1Description={
          <Fragment>
            <span className="home-text21">
              Welcome to ABK Exports - Your Trusted Export Partner
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text22">
              Learn more about ABK Exports and our commitment to quality and
              service.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text23">
              Explore our range of organic products, including premium quality
              Fuller&apos;s Earth.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text24">
              Contact us for inquiries or to place an order.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Home
        content1={
          <Fragment>
            <span className="home-text25">
              Welcome to ABK Exports, your trusted partner in global trade.
              Based in India, we specialize in exporting premium quality organic
              products to markets around the world. Our commitment to excellence
              ensures that we provide top-notch services and competitive pricing
              across our diverse product range
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">ABK Exports</span>
          </Fragment>
        }
        hero17Id="Hero17"
        image3Src="https://cdn.pixabay.com/photo/2017/08/01/21/54/container-2568197_1280.jpg"
        image7Src="https://images.unsplash.com/photo-1601897690942-bcacbad33e55?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGV4cG9ydHN8ZW58MHx8fHwxNzM4ODU2ODE5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1617952739858-28043cecdae3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxleHBvcnRzfGVufDB8fHx8MTczODg1NjgxOXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://5.imimg.com/data5/SELLER/Default/2024/12/473634007/TO/YN/YM/6270965/fullers-earth-powder.jpg"
      ></Home>
      <About
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text27">Best Quality Products</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text28">Competitive Pricing</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29">Global Reach</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text30">
              Providing top-notch organic products
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text31">
              Competitive pricing for all products
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text32">
              Exporting to all regions of the world
            </span>
          </Fragment>
        }
      ></About>
      <Products
        action1={
          <Fragment>
            <span className="home-text33">Explore Our Products</span>
          </Fragment>
        }
        cTA26Id="CTA26"
        content1={
          <Fragment>
            <span className="home-text34">
              ABK Exports is your trusted partner for sourcing the finest
              quality Fuller&apos;s Earth from India and exporting it to all
              regions of the world.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text35">
              Exporting Best Quality Fuller&apos;s Earth Worldwide
            </span>
          </Fragment>
        }
      ></Products>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text36">Best Quality Products</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text37">Competitive Pricing</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text38">Excellent Services</span>
          </Fragment>
        }
        feature1ImgSrc="https://www.advancingnortheast.in/wp-content/uploads/2022/11/Types-of-Cereals-and-Pulses.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text39">
              We export only the finest quality across all available range of
              products.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text40">
              Our pricing is competitive to ensure our customers get the best
              value for their money.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text41">
              We provide top-notch services to ensure a smooth and hassle-free
              export experience.
            </span>
          </Fragment>
        }
      ></Features25>
      <Process
        step1Title={
          <Fragment>
            <span className="home-text42">Choose Your Products</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text43">Request a Quote</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text44">Place Your Order</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text45">Track Your Shipment</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text46">
              Browse through our wide range of products like fuller&apos;s earth
              and select the ones you want.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text47">
              Contact us to get a competitive pricing quote for the products you
              have selected.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text48">
              Finalize the order details with us and we will ensure a smooth
              export process for you.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text49">
              Once the order is confirmed, you can easily track the shipment to
              your desired destination.
            </span>
          </Fragment>
        }
      ></Process>
      <Testimonial
        review1={
          <Fragment>
            <span className="home-text50">
              ABK Exports provided us with top-quality fuller&apos;s earth at
              competitive prices. Their service was exceptional, and we look
              forward to doing business with them again.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text51">
              We have been sourcing fuller&apos;s earth from ABK Exports for
              years now, and they have never disappointed. Their commitment to
              quality and customer satisfaction is commendable.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text52">
              ABK Exports is our go-to supplier for organic products like
              fuller&apos;s earth. Their reliability and consistency in
              delivering high-quality products sets them apart from the rest.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text53">
              Working with ABK Exports has been a pleasure. Their
              professionalism and dedication to meeting our requirements have
              made them a valuable partner in our supply chain.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text54">
              ABK Exports provided us with top-quality fuller&apos;s earth at
              competitive prices. Their service was exceptional, and we look
              forward to doing business with them again.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text55">Testimonials</span>
          </Fragment>
        }
        author2Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&amp;s"
        author1Name={
          <Fragment>
            <span className="home-text56">John Matthews</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text57">Rahul Sharma</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text58">Ayesha Al Mansoori</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text59">Fatima Al Saeed</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text60">USA</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text61">India</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text62">UAE</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text63">Saudi Arabia</span>
          </Fragment>
        }
      ></Testimonial>
      <Contact10
        text={
          <Fragment>
            <span className="home-text64">+91 6351806108, +91 9510561595</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text65">
              For inquiries or to place an order, please contact us using the
              information below.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text66">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text67">India Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text68">ABK Exports, India</span>
          </Fragment>
        }
      ></Contact10>
      <Footer
        link1={
          <Fragment>
            <span className="home-text69">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text70">Products</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text71">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text72">Contact Us</span>
          </Fragment>
        }
        logoSrc="/logo-black-1500h.png"
        termsLink={
          <Fragment>
            <span className="home-text73">Terms &amp; Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text74">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text75">Privacy Policy</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default HHome
