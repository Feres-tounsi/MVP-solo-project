import React, { useState } from "react";
import Axios from "axios";

export default function OneGrocery({ element }) {
  const [check, setCheck] = useState(false);
  const [isOnEdit, setIsOnEdit] = useState(false);

  const [name, setName] = useState(element.name);
  const [description, setDescription] = useState(element.description);

  console.log(element);
  var del = (id) => {
    Axios.delete(`http://localhost:3000/grocery/${id}`)
      .then((res) => {
        console.log("oh you deleted me ");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  var edit = () => {
    Axios.put(`http://localhost:3000/grocery/${element.id}`, {name, description})
      .then((res) => {
        handelIsOnEdit()
        // we invoked the function handelIsOnEdit to return the display state
        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelIsOnEdit = () => {
    setIsOnEdit((state) => !state);
  };
  return (
    <>
      {" "}
      <button className="butt" onClick={handelIsOnEdit}>
        Edit {isOnEdit ? "me" : "me"}
      </button>
      <div key={element.id}>
        {isOnEdit ? (
          <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="btn" onClick={edit}>update</button>
          </div>
        ) : (
          <center>
            <ul>
              {check === false ? (
                <li
                  onClick={() => {
                    console.log(element.id);
                    setCheck(!check);
                  }}
                >
                  {element.name}
                </li>
              ) : (
                <div>
                  <li
                    onClick={() => {
                      setCheck(!check);
                    }}
                  >
                    {element.name}
                  </li>
                  <li>
                    {element.description}{" "}
                    <span
                      onClick={() => {
                        return del(element.id);
                      }}
                    >
                      🗑
                    </span>{" "}
                  </li>
                </div>
              )}
            </ul>
          </center>
        )}
      </div>
    </>
  );
}
