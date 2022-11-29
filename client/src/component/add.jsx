import React, { useState } from "react";
import Axios from "axios";

var Add = ({ setGrocery }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  var add = () => {
    Axios.post("http://localhost:3000/grocery", {
      name: name,
      description: description,
    }).then((res) => {
      console.log("updated");
      setGrocery((grocery) => [
        ...grocery,
        { id: Math.floor(Math.random() * 333), name, description },
      ]);
      // we added the new item in the list of items that we took them as a props from the app
      //   it will take a random id between 0 and 333 after the invocation it will return the correct list of ids even when we delete an element
      setName("");
      //return an empty name
      setDescription("");
      // return an empty description
    });
  };

  return (
    <div>
      <input
        placeholder="Grocery Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Quantity"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div>
        <button className="btn" onClick={add}>
          Add grocery
        </button>
      </div>
    </div>
  );
};

export default Add;
