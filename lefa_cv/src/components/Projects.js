import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Lefa extends Component {
  render() {
    return (
      <div className="lefaPAge">
        <div className="lefaText">
          <div className="lefaH2Div">
            <h2 className="projectH2">Projects </h2>
          </div>
          <div className="cardDiv">
            <div className="card1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="OnlineStore.png" />
                <Card.Body>
                  <Card.Title>The Online Store</Card.Title>
                  <Card.Text>
                    This code demonstrates proficiency in React it also
                    features: a login, a cart, and product cards.
                  </Card.Text>
                  <a href="https://github.com/lefatsiane/onlineStore">
                    {" "}
                    <Button variant="primary">
                      Go to "OnlineStore" Source Code
                    </Button>{" "}
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="card2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="CloneApp.png" />
                <Card.Body>
                  <Card.Title>Instagram Clone</Card.Title>
                  <Card.Text>
                    This code demonstrates my understanding of app development
                    especially in React
                  </Card.Text>
                  <a href="https://github.com/lefatsiane/instagrame_clone">
                    <Button variant="primary">
                      Go to "instagram_clone" source code{" "}
                    </Button>{" "}
                  </a>
                  {/*  <a href=""></a> */}
                </Card.Body>
              </Card>
            </div>

            <div className="card3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="BankingApp.png" />
                <Card.Body>
                  <Card.Title>Banking App</Card.Title>
                  <Card.Text>
                    This demonstrates my ability in Local State Management and
                    Events
                  </Card.Text>
                  <a href="https://github.com/lefatsiane/banking_app">
                    {" "}
                    <Button variant="primary">
                      Go to "banking_app" source code
                    </Button>{" "}
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="card4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="CarInventory.png" />
                <Card.Body>
                  <Card.Title> Car Inventory</Card.Title>
                  <Card.Text>
                    This showcases my backend expertise in Express, MongoDB, and
                    Node.
                  </Card.Text>
                  <a href="https://github.com/lefatsiane/car_inventory2">
                    <Button variant="primary">
                      Go to "car_inventory" source code
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="projectSlogan">A few projects I have worked on</div>
        </div>

        <div className="img4Div">
          <img
            className="img4"
            src="./img2.jpg"
            alt="lefa in the background wearing a shirt and tie"
          ></img>
        </div>
      </div>
    );
  }
}
