import { useState } from "react";
import axios from "axios";

function Userform() {
  //component, controller
  //model
  const [userform, setUserform] = useState(
    //useState = hook, predefined function
    { name: "Ram", mobileNumber: 8954327845 }
  );
  return (
    //view
    <div>
      <input value={userform.name} onChange={updateState}></input>
      <input value={userform.mobileNumber} onChange={updateState}></input>
      <button onClick={save}>Save</button>
    </div>
  );

  function save() {
    console.log(userform.name);
    console.log(userform.mobileNumber);
    axios
      .post("http://localhost:8080/user", userform)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateState(event) {
    console.log(event);
      const current = { ...userform,    //spread operator
        [event.target.value]: event.target.value };
        // name = event.target.value;
      console.log(current);
      setUserform(current);
  }
}

export default Userform;
