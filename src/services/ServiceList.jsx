import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const serviceData = [
    {
        imgUrl: weatherImg,
        title : "Calculate Weather",
        desc: "Weather instruments are used to take measurements of temperature, wind, precipitation, and other atmospheric factors that describe the local weather and climate. Different types of instruments are used to measure."
    },
    {
        imgUrl: guideImg,
        title : "Best Tour Guide",
        desc: "Who is a successful tour guide? Top Qualities of a Good Tour Guide for Amazing Experiences .A perfect guide will be attentive and respectful to everyone in the group, making sure that everyone can see and hear well."
    },
    {
        imgUrl: customizationImg,
        title : "Customization",
        desc: "Customization of products means a customer can select features like color, design, functionalities, add-on components or other options to make a more unique item rather than a mass produced one. For example, a shoe."
    },
  
]


const ServiceList = () => {
  return (
    <>
    {
        serviceData.map((item, index)=> <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>)
    }
    
    </>
  )
}

export default ServiceList