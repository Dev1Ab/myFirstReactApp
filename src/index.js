import React from "react";
import ReactDOM from "react-dom/client";
import CustomGreet from './Greeting';
import Contact from "./Contact";

const name = "Sadeeq";
const date =new Date();
const year = date.getFullYear();
var num = Math.round(Math.random()*10);
var greeting = CustomGreet()[0];
var txtcolor = CustomGreet()[1];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
  <h1>Welcome <span style={txtcolor}>Good {greeting}</span></h1>
  <h1>Hello {name}</h1>
  <p>Your guess is {num}</p>
  <div className="container">
    <img src="/tech2.jpg" alt="s" />
    <img src="/tech3.jpg" alt="v" />
    <img src="/tech4.jpg" alt="h" />
  </div>
  <Contact />
  <p className="footer">Copyright {year}</p>
</div>)
