import React from "react";
import { useEffect,useRef } from "react";
import Image1 from "../assets/carouselImages/1.jpg"
import Image2 from "../assets/carouselImages/2.jpg"
import Image3 from "../assets/carouselImages/3.jpg"
import Image4 from "../assets/carouselImages/4.jpg"
import Carousel from 'react-bootstrap/Carousel';
import MyHeader from "./MyHeader";




function Slider() {

  return (
   <div>
      <div style={{position:'fixed',top:0,zIndex:2000,width:'100%'}}>
          <MyHeader/>
        </div>
       <Carousel fade>
      
      <Carousel.Item >
        <img style={{height:700,width:'100%',position:'relative'}} src={Image1}/>
  
      </Carousel.Item>
      
      <Carousel.Item >
        <img style={{height:700,width:'100%',position:'relative'}} src={Image2}/>
  
      </Carousel.Item>
      
      <Carousel.Item >
        <img style={{height:700,width:'100%',position:'relative'}} src={Image3}/>
  
      </Carousel.Item>

            
      <Carousel.Item >
        <img style={{height:700,width:'100%',position:'relative'}} src={Image4}/>
  
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Slider;
