import React from "react";
import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ItemList from "./components/ItemList"

let App = () => (
  <div>
    <Header title="Ugly Things" subtitle="Make Your List of Things That are So Ugly You Cant Help"/>
    <Form />
    <ItemList />
  </div>
)

export default App
