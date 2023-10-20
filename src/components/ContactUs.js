import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ContactUs() {
  return (
    <div style={{width:'100%',background:'#4F709C',height:400}}>
     <div style={{width:'70%',background:'#EADBC8',height:400}}>
        <h1 style={{padding:'2%',fontFamily:'monospace',fontSize:30,fontWeight:'bolder'}}>CONTACT US</h1>
        <div style={{width:'90%',padding:'3%'}}>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control type="uname" placeholder="Full Name" />
      </FloatingLabel>
      <FloatingLabel  controlId="Email" label="Email Address">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px',marginTop:10 }}
        />
      </FloatingLabel>
    </div>

    
</div>
    
    </div>
  );
}

export default ContactUs;
