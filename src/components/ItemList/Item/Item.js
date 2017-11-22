import React from "react";
import "./Item.css";


let Item = (props) => (

      <div className="col-md-4 my-3">
        <div className="card" >
          <img className="card-img-top img-fliud img-thumbnail img" src={props.url} alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title text-info">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <button className="btn btn-info btn-sm" onClick={props.handleRemove}>Remove</button>
          </div>
        </div>
      </div>
)

export default Item;
