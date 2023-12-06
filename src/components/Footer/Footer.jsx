import React from 'react'
import "./footer.css"
import { Container, Row, Col,
   ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"


const quick_links1=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tour'
  },
]

const quick_links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
         <Row>
           <Col lg='3'>
            <Link to="/"><img src={logo} alt="" /></Link>
             <h3>About Us</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus provident id
               nam cumque eligendi.</p>
              <div className="social__link d-flex align-atems-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-facebook-fill"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-twitter-fill"></i>
                  </Link>
                  <Link to="#">
                     <i class="ri-instagram-fill"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
              </div>
           </Col>
           <Col lg="3">
            <h5 className="footer__link-title">Discovery</h5>
            <ListGroup className="footer__quick-links">
              {
                quick_links1.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
           </Col>
           <Col lg="3">
           <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {
                quick_links2.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
           </Col>
           <Col lg="3">
           <h5 className="footer__link-title">Contact Details</h5>
            <ListGroup className="footer__quick-links">
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-phone-line"></i></span>
                      Tel:
                      <p className="mb-0">00000000000</p>
                    </h6>
                  </ListGroupItem>
            </ListGroup>

            <ListGroup className="footer__quick-links">
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-map-pin-fill"></i></span>
                      Address:
                      <p className="mb-0">Cape Town, South Africa</p>
                    </h6>
                    
                  </ListGroupItem>
            </ListGroup>

            <ListGroup className="footer__quick-links">
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-mail-fill"></i></span>
                      Email:
                      <p className="mb-0">aaaaaaaaaaaaaaaaaa</p>
                    </h6>
                  </ListGroupItem>
            </ListGroup>
           </Col>
           <Col lg='12'>
             <p className="copyright">Copyright@{year}, design and develop by 
             Ako Atem || All Right Reserved.</p>
           </Col>
         </Row>
      </Container>
    </footer>
  )
}

export default Footer
