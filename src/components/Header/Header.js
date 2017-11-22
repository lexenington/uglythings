import React from "react";
import "./Header.css";


let Header = (props)=> (

    <div className="bg-info">
      <div className="container">
        <div className="jumbotron bg-info">
          <h2 className="text-center display-4 text-white">{props.title}</h2>
          <h4 className="text-center lead text-white">{props.subtitle}</h4>
        </div>
      </div>
    </div>

)

export default Header;
