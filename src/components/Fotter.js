import React from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";

function Fotter() {
  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "#363062", height: 200 }}>
        <h2
          style={{
            textAlign: "center",
            color: "white",
            font: "revert",
            fontStyle: "revert",
            paddingTop: "2%",
            paddingBottom: "1%",
          }}
        ></h2>
        <div>
          <Container>
            <Row>
              <Col>
                {" "}
                <div>
                  <img
                    src={logo}
                    alt="Logo"
                    width="180"
                    height="70"
                    className="d-inline-block align-top"
                  />
                </div>
              </Col>

              <Col>
                <div style={{ color: "white" }}>Call us</div>
                <div style={{ color: "white" }}>
                  <IoLogoWhatsapp style={{ fontSize: "150%" }} />
                  <t /> 009874564213
                  <div>Email</div>
                  <div>infolesson2DeivingSchool</div>
                </div>
              </Col>

              <Col>
                <div style={{ color: "white" }}>
                  Follows Us
                  <br></br>
                  <FaFacebookSquare style={{ fontSize: "250%" }} />
                  <t /> <t />
                  <FaTwitter style={{ fontSize: "250%" }} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div style={{ width: "100%", backgroundColor: "#C5FFF8", height: 30 }}>
        <div style={{ textAlign: "center" }}>
          2 0 2 3 LESSONS 2 DRIVE <FaCarAlt />{" "}
        </div>
      </div>
    </div>
  );
}

export default Fotter;
