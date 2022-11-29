import React, { useEffect, useState } from "react";
import Axios from "axios";
import Add from "./add.jsx";
import Grocery from "./grocery.jsx";
import "../App.css"
var App = () => {
  const [grocery, setGrocery] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/grocery").then((res) => {
      setGrocery(res.data);
    });
  },[]);
  // grocery
  // when we put the grocery into the empty state it will return the result without refreshing the page

  return (
    
    <div>
    <div className="headerImg"></div>
      <center><h1>My Grocery List</h1></center>
      <center><h3><Grocery grocery={grocery} /></h3></center>
      <center><Add setGrocery={setGrocery} /></center>
    </div>
  );
};

export default App;
