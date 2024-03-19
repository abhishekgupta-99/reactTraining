import { useState } from "react";

const Greeting = (props: GreetingProps) => {

    let [currentName, setCurrentName] = useState<string>(props.name);

    const changeName = () : void => {
        setCurrentName("James");
    }

    return (
        <div>
            <p className="greeting_text"> Hello {currentName}. You are {props.age} years old. </p>
            <button onClick={changeName} >change my name</button>
        </div>
    );
}

export default Greeting;

type GreetingProps = {name: string, age: number};