import { useState } from "react";

function Userform(){       //component, controller
    //model
    const [userform, setUserform] = useState(   //useState = hook, predefined function
        {name: 'Ram', age: 20
    })
        return( //view
        <div>
            <input value = {userform.name} onChange = {handleEvent1}></input>
            <input value = {userform.age} onChange = {handleEvent2}></input>
            <button onClick = {save}>Save</button>
        </div>
    )

    function save(){
        console.log(userform.name);
        console.log(userform.age)
    }

    function handleEvent1(event){
        console.log(event);
        setUserform({
            name: event.target.value})
        // name = event.target.value;
        
    }

    function handleEvent2(event){
        console.log(event);
        setUserform({
            age: event.target.value
        })
    }
}

export default Userform;