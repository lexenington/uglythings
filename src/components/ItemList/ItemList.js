import React from "react";
import "./ItemList.css";
import Item from "./Item";



let ItemList = (props) => (
  <div className="container">
    <div className="row justify-content-center">
      {props.data.map((item,index)=>(
        <Item key={item.title+index} data={item} index={index}/>
      ))}
    </div>
  </div>

)

export default ItemList;
