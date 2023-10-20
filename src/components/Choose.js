import React from 'react'
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logo192 from "../assets/logo192.png"

function Choose() {
  return (
    
    <div style={{padding:'4%'}}>
               <h1 style={{textAlign:'center',font:'revert',fontStyle:'revert',paddingBottom:'4%'}}>Why Choose Us..?</h1>
        
  
      {[
      
        'Light',
      ].map((variant) => (
        <Row style={{justifyContent:'center'}}>
        <Card
          
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '28rem' ,marginBottom:12,borderWidth:0}}
          className="col-md-2"
        >
         
          <Card.Body className='text-center'>
             
            <Card.Img variant="top" src={Logo192} style={{width: 50, height: 50, display: 'block', margin: '0 auto'}}  />
    
         
            <Card.Title style={{textAlign:'center',paddingTop:'6%'}}>{variant} Card Title </Card.Title>
            <Card.Text style={{textAlign:'center'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '28rem' ,marginRight:20,marginLeft:20,marginBottom:8, borderWidth:0}}
          className="col-md-2"
        >
          
          <Card.Body className='text-center'>
          <Card.Img variant="top" src={Logo192} style={{width: 50, height: 50, display: 'block', margin: '0 auto'}}  />
            <Card.Title style={{textAlign:'center',paddingTop:'6%'}}>{variant} Card Title </Card.Title>
            <Card.Text style={{textAlign:'center'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '28rem' ,marginBottom:12,borderWidth:0}}
          className="col-md-2"
        >
          
          <Card.Body className='text-center'>
          <Card.Img variant="top" src={Logo192} style={{width: 50, height: 50, display: 'block', margin: '0 auto'}}  />
            <Card.Title style={{textAlign:'center',paddingTop:'6%'}}>{variant} Card Title </Card.Title>
            <Card.Text style={{textAlign:'center'}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
))}
      {[
      
      'Light',
    ].map((variant) => (
      <Row style={{justifyContent:'center'}}>
      <Card
       
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '28rem' ,marginBottom:12,borderWidth:0}}
        className="col-md-2"
      >
       
        <Card.Body className='text-center'>
        <Card.Img variant="top" src={Logo192} style={{width: 50, height: 50, display: 'block', margin: '0 auto'}}  />
          <Card.Title style={{textAlign:'center',paddingTop:'6%'}}>{variant} Card Title </Card.Title>
          <Card.Text style={{textAlign:'center'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '28rem' ,marginRight:20,marginLeft:20,marginBottom:5, borderWidth:0}}
        className="col-md-2"
      >
        
        <Card.Body className='text-center'>
        <Card.Img variant="top" src={Logo192} style={{width: 50, height: 50, display: 'block', margin: '0 auto'}}  />
          <Card.Title style={{textAlign:'center',paddingTop:'6%'}}>{variant} Card Title </Card.Title>
          <Card.Text style={{textAlign:'center'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

     
      </Row>
))}
    </div>
  )
}

export default Choose