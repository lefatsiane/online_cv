import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default class Contact extends Component {
  render() {
    return (
      <div className="ContactPAge">
        <div className="ContactText">
          <div className="ContactDiv">
            <div className="contactH2Div">
              <h2 className="ContacttH2">Contacts </h2>
            </div>
            <div className="contactSloganDiv">
              <h3>Let's Collaborate</h3>
            </div>
            <div className="contactDetailsDiv">
              {" "}
              <h4>find me on:</h4>
              <div className="detailsDiv">
                <div className="whatsappDiv">
                  <a href="whatsapp://qr/5QWGPFNBZYA7N1?autoload=1&amp;app_absent=0">
                    {" "}
                    <Button variant="primary">
                      <WhatsAppIcon /> : 078 880 1396
                    </Button>{" "}
                  </a>
                </div>
                <br />
                <div className="linkedInDiv">
                  <a href="https://www.linkedin.com/in/lefa-tsiane-420a5b185/">
                    {" "}
                    <Button variant="primary">
                      <LinkedInIcon /> : Lefa Tsiane
                    </Button>{" "}
                  </a>
                </div>
                <br />

                <div className="githubDiv">
                  <a href="https://github.com/lefatsiane">
                    {" "}
                    <Button variant="primary">
                      <GitHubIcon /> : Lefa Tsiane
                    </Button>{" "}
                  </a>
                </div>
                <br/>

                <p>lefataleni@gmail.com </p>
              </div>
            </div>
          </div>
        </div>

        <div className="videoDiv">
          <video className="loopVideo" autoPlay muted loop id="video">
            <source src={"The_Search.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
