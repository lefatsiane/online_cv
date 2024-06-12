import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarFunction from "./components/navBar";

function App() {
  return (
    <div className="App">
      <NavBarFunction /> {/* This will render the NavBar */}
    </div>
  );
}

export default App;
