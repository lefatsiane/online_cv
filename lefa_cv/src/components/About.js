import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import "./Styles.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="videoDiv">
          <video className="loopVideo" autoPlay muted loop id="video">
            <source src={"Particles.mp4"} type="video/mp4" />
          </video>
        </div>

        <Container className="containter">
          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row className="aboutLayout">
            <Col xs={6}>
              <div className="img5Div">
                <img
                  className="img5"
                  src="./img5.jpg"
                  alt="lefa on the left"
                ></img>
              </div>
            </Col>
            <Col xs={6}>
              <div className="descriptions">
                <div className="aboutDescription">
                  As a results-driven professional, I consistently strive for
                  excellence in every task I undertake. My willingness to go the
                  extra mile ensures that I deliver high-quality results.
                  Thriving in dynamic, fast-paced environments, I embrace
                  challenges with a positive mindset. My strong organizational
                  and time management skills allow me to efficiently handle
                  complex tasks.
                </div>
                <br />
                <div className="aboutDescription">
                  My experience extends across various formats, from written
                  articles to multimedia content. I've honed my skills in
                  crafting compelling narratives that captivate audiences. As a
                  top-10 finalist in Mr. South Africa, I gained a unique
                  understanding of working closely with clients to achieve their
                  goals. Brands have recognized my talent, approaching me to
                  create engaging content that strikes the delicate balance
                  between artistic expression and meeting business objectives.
                </div>
                <br />
                <div className="aboutDescription">
                  I aspire to contribute positively to any team or project. My
                  adaptability and openness to learning allow me to tackle new
                  challenges head-on. Whether collaborating with
                  cross-functional teams, driving marketing initiatives, or
                  shaping user experiences, I'm ready to make a meaningful
                  impact. With a passion for excellence and practical expertise,
                  I'm excited to continue my journey as a web developer and
                  future project manager.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
