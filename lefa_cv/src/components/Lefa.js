import React, { Component } from "react";
//import img2 from "./pictures/drive-download/img2"

export default class Lefa extends Component {
  render() {
    return (
      <div className="lefaPAge">
        <div className="lefaText">
          <div className="lefaH2Div">
            <h1 className="lefaH1">Welcome to Lefa</h1>
          </div>
          <div>
            <h2 className="lefaSlogan" > A Dedicated Web Developer </h2>
          </div>
          <div className="lefaApps" >HTML | CSS | JavaScript | MongoDB | Express | React | Node | BootStrap</div>
        </div>

        <div className="img2Div">
          <img
            className="img2"
            src="./img2.jpg"
            alt="lefa a shirt and tie"
          ></img>
        </div>
      </div>
    );
  }
}
