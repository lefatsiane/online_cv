// import React, { Component } from "react";
// //import img2 from "./pictures/drive-download/img2"

// export default class Lefa extends Component {
//   render() {
//     return (
//       <div className="lefaPAge">
//         <div className="lefaText"> <div></div>
//           <div className="lefaH2Div">
//             <h1 className="lefaH1">Welcome to Lefa</h1>
//           </div>
//           <div>
//             <h2 className="lefaSlogan" > A Dedicated Web Developer </h2>
//           </div>
//           <div className="lefaApps" >HTML | CSS | JavaScript | MongoDB | Express | React | Node | BootStrap</div>
//         </div>

//         <div className="img2Div">
//           <img
//             className="img2"
//             src="./img2.jpg"
//             alt="lefa a shirt and tie"
//           ></img>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";

const Lefa = () => {
  return (
    <div className="lefaPage">
      <div className="lefaText">
        <h1 className="lefaH1">Welcome to Lefa</h1>
        <h2 className="lefaSlogan">A Dedicated Web Developer</h2>
        <div className="lefaApps">
          HTML | CSS | JavaScript | MongoDB | Express | React | Node | Bootstrap
        </div>
      </div>

      <div className="img2Div">
        <img
          className="img2"
          src="./img3.jpg"
          alt="Lefa wearing a shirt and tie"
        />
      </div>
    </div>
  );
};

export default Lefa;


