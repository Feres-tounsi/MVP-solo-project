
import OneGrocery from "./OneGrocery";
var Grocery = (props) => {
 
  return (
    <div>
      {props.grocery.map((element) => { console.log(element);
        return (<OneGrocery element={element} key={element.id}/>)
      })}
    </div>
  );
};

export default Grocery;
