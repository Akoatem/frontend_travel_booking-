import React from 'react'
import "../style/home.css"
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg2 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import experienceImg from "../assets/images/experience.png"
import capetownImg from "../assets/images/capetown.jpg"
import MasinryImgGallery from '../components/image-gallery/MasinryImgGallery';
import Subtitle from '../shared/Subtitle';
import ServiceList from '../services/ServiceList';
import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList';
import Testimonial from '../components/testimonial/Testimonial';
import Newslet from '../shared/Newslet';


const Home = () => {
  return (
   <>

   {/* ======hero section start======= */}
   <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-item-center">
             <Subtitle subtitle={'Save 10% on worldwide tours'}/>
             <img src={worldImg} alt='' />
            </div>
            <h1>Travelling opens the door to creating <span className="highlight">
             memories
            </span>
            </h1>
            <p>Enjoy an elevated staycation experience at Palazzo Versace Dubai with exclusive rates 
              for the summer and winter months to mark the hotel's 7th anniversary..Book direct online and enjoy great savings off your stay, food and beverage, spa and 
              Versace retail products in Dubai's most fashionable urban resort.</p>
              <h4>Save R2500 per couple on your first trip when you sign up to our newsletter.</h4>
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box">
            <img src={heroImg} alt='' />
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt='' controls />
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg2} alt='' />
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
   </section>
   {/* ======hero section start======= */}
   <section>
    <Container>
      <Row>
        <Col lg="3">
         <h5 className="services_subtitle">WHAT WE SERVE</h5>
         <h2 className="services__title">We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
   </section>

    {/* ======Feature section start======= */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
            <h2 className="feature__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    {/* ======Feature section end======= */}

    {/* ======Expirience section start======= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With All Our Experiences <br/> We Will Serve You</h2>
                
              <p>When you travel, you leave behind the familiar and take on a world of new things. <br /> You're constantly learning through travel, with new cultures, friends, foods and languages. You may feel excitement or even fear, but usually never boredom…
                 and it will be one of the most rewarding things you ever do</p>
            </div>
            <div className="counter__wrapper d-flex align-item-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>5k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>17</span>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ======Expirience section end======= */}

    {/* ======Gallery section start======= */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">
              Visit Our Customers Tour Gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasinryImgGallery />
          </Col>
        </Row>
      </Container>
    </section>
     {/* ======Gallery section end======= */}

     {/* ======Testimonial section start======= */}

     <section>
       <Container>
         <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Testimonial'}/>
          <h2 className="testimonial__title">
            What Our Fans Say About Us
          </h2>
          </Col>
          <Col lg='6'>
            <Testimonial />
          </Col>
          <Col lg='6'>
            <div className="testimonial__img">
              <img src={capetownImg} alt="" />
            </div>
          </Col>
         </Row>
       </Container>
     </section>
     {/* ======Testimonial section end======= */}

     <Newslet />
   </>
  )
}

export default Home