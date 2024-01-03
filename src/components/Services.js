import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react';

function Services() {
 

    useEffect(()=>
    {
       Aos.init({duration: 1000});
    },[]);
  
  return (

    <div style={{padding:'2%',}}>
               <h1 style={{textAlign:'center',font:'revert',fontStyle:'revert',paddingBottom:'4%'}}>Our Services</h1>
        
  
      {[
      
        'Dark',
      ].map((variant) => (
        <Row style={{justifyContent:'center'}}>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '28rem' ,marginBottom:5,}}
          className="col-md-2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
         
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{variant} Card Title </Card.Title>
            <Card.Text style={{textAlign:'center'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '28rem' ,marginRight:10,marginLeft:10,marginBottom:5}}
          className="col-md-2"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{variant} Card Title </Card.Title>
            <Card.Text style={{textAlign:'center'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '28rem' ,marginBottom:5}}
          className="col-md-2"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"

        >
          
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{variant} Card Title </Card.Title>
            <Card.Text style={{textAlign:'center'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
      ))}
    </div>
  );
}

export default Services;
