import React from "react";
import "./Form.css";

let Form = (props) => (
  <div>
    <div className="container">
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input type="text" name="title" value={props.title} onChange={props.handleChange} className="form-control" placeholder="Title"/>
          </div>
          <div className="col">
            <input type="text" name="url" value={props.url} onChange={props.handleChange} className="form-control" placeholder="URL"/>
          </div>
          <div className="col">
            <input type="text" name="description" value={props.description} onChange={props.handleChange} className="form-control" placeholder="Description"/>
          </div>
          <div className="col">
            <button className="btn btn-info form-control">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <hr className="bg-info mt-4"/>
  </div>
)

export default Form;
