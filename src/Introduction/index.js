import React from "react";
import './style.css';
import {FaCanadianMapleLeaf} from "react-icons/fa";

const Introduction = ()=>{
    const num = 9
    return(
        <div>
            <h1 id="heading">What I learned in React</h1>
            <p>React is a JavaScript library</p>
            <p> It can be used to build mobile and web applications.</p>
            <p>React native, a framework based on react, is specifically designed for mobile applications</p>
            <h4>This is a random picture of 3 cute dogs <FaCanadianMapleLeaf/></h4>
            <img src="https://res.cloudinary.com/dxqyew8om/image/upload/v1685637155/samples/animals/three-dogs.jpg" id="img"></img>
            <h2>Now, on with React</h2>
            <p>React makes it painless to create interactive UIs. It uses virtual DOM, which is faster than real DOM</p>
            <p>You should always git ignore node modules since Github has set a particular amount of space for each repo.</p>

            <div>
            
            </div>
        </div>
        
    )
}

export default Introduction;