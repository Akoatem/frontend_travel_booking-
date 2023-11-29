import React from 'react'
import  "./newslet.css"
import { Container, Row, Col } from 'reactstrap';
import maleTourist from "../assets/images/male-tourist.png"

const Newslet = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                   <div className="newsletter__content">
                    <h2>Subscribe Now To Get Useful Travelling Information</h2>
                    <div className="newsletter__input">
                        <input type='email' placeholder='enter your email' />
                        <button className="btn newsletter__btn">
                            Subscribe
                        </button>
                    </div>
                    <p>If you prefer to keep your welcome email concise, 
                        you can just show your appreciation and tell subscribers what happens next. 
                        Explain what they have signed up for, what types of emails they'll be getting, and how often..</p>
                   </div>
                </Col>
                <Col lg="6">
                 <div className="newsletter__img">
                 <img src={maleTourist} alt="" />
                </div>
            </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newslet