1) function
  fcomponent.js
   import React from 'react'
function demo() {
return(
<div>
<h1>Hello everyone, Welcome to react.</h1>
</div>
)
}
export default demo
  
  index.js
    import React from 'react';
import ReactDOM from 'react-dom/client';
import Fcomponent from './fcomponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Fcomponent/>
</React.StrictMode>

);

2)Class

   fcomponent.js
  import React from 'react'
class fcomponent extends React.Component {
state = { }
render() {
return (
<div>
<h1>Class Component:</h1>
<h2>Hello Everyone,Welcome To React</h2>
</div>
);
}
}
export default fcomponent;

   index.js
  import React from 'react';
import ReactDOM from 'react-dom/client';
import Fcomponent from './fcomponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Fcomponent/>
</React.StrictMode>

);


3)conditional redenring

   fcomponent.js
  import React, { Component } from 'react';
class fcomponent extends Component {
state = { count: 0 ,name:"Zero"}
changeCount(){
if(this.state.count===0 )
return"Zero";
else if(this.state.count===10)
return"Ten";
else
return this.state.count;
}
changeColor1(){
let str="btn btn-";
if(this.state.count===0){
str+="danger";
}

else {
str+="success";
}
return str;
}
changeColor2(){
let str="btn btn-";
if(this.state.count===10){
str+="danger";
}
else {
str+="success";
}
return str;
}
render() {
return (<div style={{textAlign:'center',padding:50}}>
<h1 style={{padding:100}}> choose the number:</h1>
<button className={this.changeColor1()}style={{width:100,height:50}}
disabled={this.state.count===0} onClick={() =>
{ this.setState({ count: this.state.count - 1 }) }}>- </button>
<span style={{padding:50,fontSize:27}}>{this.changeCount()}</span>
<button className={this.changeColor2()}
style={{width:100,height:50}}disabled={this.state.count===10}
onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
</div>);
}
}
export default fcomponent;

 index.js
  import React from 'react';
import ReactDOM from 'react-dom/client';
import Fcomponent from './fcomponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Fcomponent/>
</React.StrictMode>

);



or



3)App.js

import React, { Component } from 'react'
import "./App.css"
import Class from './Class.js'
class App extends Component {
 render() {
 return ( <div><Class /></div> )
 }
}

export default App


Class.js

import React, { Component } from 'react'
export class Class extends Component {
 constructor(props){
 super(props)
 this.state={
 isLoggedIn:false
 } }
 render() {
 if(this.state.isLoggedIn){
 return ( <h1>Welcome !</h1> )}
 else{
 return ( <h1>You are not logged in!!</h1> )
 } }}
export default Class


4)Parent and child class

  Parent.js
  import React from 'react';
import Child from './child';
class Parent extends React.Component{
state = {
name: "",
}
handleCallback = (childData) =>{
this.setState({name: childData})
}
render(){
const {name} = this.state;
return(
<div style={{textAlign:'center'}}>
<h1>Child and Parent Components</h1>
<Child parentCallback = {this.handleCallback}/>
{name}
</div>
)
}
}
export default Parent;

   child.js
   import React from 'react'
class child extends React.Component{
onTrigger = (event) => {
this.props.parentCallback(event.target.myname.value);
event.preventDefault();
}
render(){
return(
<div>
<form onSubmit = {this.onTrigger}>
<input type = "text"
name = "myname" placeholder = "Enter Name"/>
<br></br><br></br>
<input type = "submit" value = "Submit"/>
<br></br><br></br>
</form>
</div>
)
}
}
export default child

  index.js
  import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Parent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Parent/>
</React.StrictMode>
);

5)UI Material

  npm install @mui/material
  npm install @mui/material @emotion/react @emotion/styled

  App.js
  import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
 return (
 <Card sx={{ maxWidth: 345 }}>
 <CardMedia
 component="img"
 height="140"
 
image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/EBnda3IIUzAJDMXe90eQQqb
mJJyyw5uaqPyjJYna8yYStYSTmNCA+agBA+EsBXjrWNR0VxSpiJqlAODLDgubLLUo1vHdFxb9CHl
UqXubGSaJ5DygjhNkonoClKUChbhm+HIqrg6iA8nEpDB/A7o1HR+ozCu938IjmTMIp82Ckl+ 
/rjE3wp5woUA1wVtTHRbthQoZPY2ZeI4UKGhM//2Q=="
 alt="green iguana"
 />
 <CardContent>
 <Typography gutterBottom variant="h5" component="div">
 SKCET
 </Typography>
 <Typography variant="body2" color="text.secondary">
 SKCET is one of the finest colleges in South India.It is well known for it's infrastructure, 
academics and the placements offered. With Asia's second-largest library, SKCET is well -known for it's 
architecture and maintenance.
 </Typography>
 </CardContent>
 <CardActions>
 <Button size="small">Share</Button>
 <Button size="small">Learn More</Button>
 </CardActions>
 </Card>

 );
}

  index.js
  import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


6) Navigation Bar

App.js

import React from 'react';
function App() {
 return (<>
<div>
    <a href="https://www.google.co.in/">google</a>
    <br></br>
    <a href="https://www.youtube.com/">youtube</a>
    <br></br>
    <a href="https://www.bing.com/search?q=wiki&cvid=6fdde29df5484cfa9a17059b2ef3e1ba&aqs=edge..69i57j46l2j0l4j46l2.2328j0j4&FORM=ANAB01&PC=HCTS">wiki</a>


</div>
 </>);
}
export default App;

Nav.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <p className='navbar-logo' onClick={closeMobileMenu}>
          SCHEMEUP
        </p>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Schemes'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SCHEMES <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Camps'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CAMPS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/EditDetails'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              EDIT DETAILS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Log'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              LOG IN
            </Link>
          </li>
          <li>
            <Link
              to='/Logout'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              LOGOUT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


Navbar.css

.navbar {
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
  
  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    text-decoration: none;
    font-size: 2rem;
  }
  
  .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
  
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
  }
  
  .nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  
  .nav-links:hover {
    background-color: greenyellow;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  
  .fa-bars {
    color: #fff;
  }
  
  .nav-links-mobile {
    display: none;
  }
  
  .menu-icon {
    display: none;
  }
  
  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
  
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
  
    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
  
    .nav-links:hover {
      background-color: #9064d8fc;
      border-radius: 0;
    }
  
    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }
  
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  
    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
  
    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #9064d8fc;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }
  
    .nav-links-mobile:hover {
      background: #fff;
      color: #9064d8fc;
      transition: 250ms;
    }
  
    button {
      display: none;
    }
  }






7)HTTP requests

  npm install axios
  npm install react-select

  fetch.js 

  import { useEffect, useState } from "react";
export default function FetchAPI(){
const [user, setUser] = useState([]);
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => setUser(res))
})
console.log(user)
return(
<div className="main">
{user.map(u => (
<div>{u.name}, {u.id}, {u.email}</div> ))}
</div>
)
}
  
  App.js
import './App.css';
import FetchAPI from './fetch';
function App() {
 return (<>
<FetchAPI />
 </>);
}
export default App;

8)Dropdown

 Bgcolor.js
 import React ,{ useState } from 'react'
import Select from 'react-select'
import './App.css'
 function Bgcolor() {
    var colors=[
    {
       value:1,
       label:"Lime"
    },
    {
        value:2,
        label:"Red"
    },
    {
        value:3,
        label:"Crimson"
    },
    {
        value:4,
        label:"Darkblue"
    },
    {
        value:5,
        label:"Teal"
    },
    {
        value:6,
        label:"Rebeccapurple"
    },
    {
        value:7,
        label:"Aquamarine"
    },
    {
        value:8,
        label:"Yellow"
    }
    ];
    var [setbgcolor,ddlvalue]=useState(colors.label);
    var ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
  return (
    <div className='bg'>
       <h1>My Colour is changed to</h1>
       <style>{'center {background-color:'+ setbgcolor +';}'}</style>
       <div className='design'>
       <Select  options={colors} onChange={ddlhandle}>  </Select>
       </div> 
       <center>
        <div className='box'>
        <p>YOU CHOSE</p>
        <p>{setbgcolor}</p>
        </div>
       </center>
    </div>
  )
}

export default Bgcolor;

  Dropdown.css
   .dropdown-container {
    text-align: left;
    border: 2px solid rgb(57, 19, 196);
    position: relative;
    border-radius: 5px;
   }
   .dropdown-input {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
   }

   index.js
   import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bgcolor from './Bgcolor';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Bgcolor/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  App.css
   
  .bg{
  
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}

h1{
  text-align: center;
  color: rgb(0, 0, 0);
  border: 2px solid black;
  font-family: Times;
 
  font-size: 50px;
  margin: 10px;
}

.design{
  width: 250px;
  margin-left: 560px;
  margin-top: 50px;
  color: black;
  font-family: Times;
}

p{
  font-family: Times;
  font-size: 50px;
  text-align: center;
}

.box{
  background-color: rgba(255, 255, 255, 0);
  width: 600px;
  margin-top: 50px;
  border: 2px solid black;
}
center{
  width: 605px;
  margin-left: 380px;
}

9)Routing

  npm install react-router-dom
 App.js
import './mainpage.css';
import './returnpage.css';
import Mainpage from './Mainpage';
import Returnpage from './Returnpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
return(
<Router>
<div className='App'>
<Routes>
<Route exact path='/' element={<Mainpage />}></Route>
<Route exact path='/mainpage' element={<Mainpage />}></Route>
<Route exact path='/returnpage' element={<Returnpage />}></Route>
</Routes>
</div>
</Router>
)
}
export default App;

App.css

.bg{
  
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}

h1{
  text-align: center;
  color: rgb(0, 0, 0);
  border: 2px solid black;
  font-family: Times;
 
  font-size: 50px;
  margin: 10px;
}

.design{
  width: 250px;
  margin-left: 560px;
  margin-top: 50px;
  color: black;
  font-family: Times;
}

p{
  font-family: Times;
  font-size: 50px;
  text-align: center;
}

.box{
  background-color: rgba(255, 255, 255, 0);
  width: 600px;
  margin-top: 50px;
  border: 2px solid black;
}
center{
  width: 605px;
  margin-left: 380px;
}

Returnpage.css
v2_21 {
    top: 100px;
    left: 50vh;
    position: absolute;
    font-family: Inter;
    font-weight: Bold;
    font-size: 30px;
    text-align: center;
    }
Returnpage.js
import "./mainpage.css"
import "./returnpage.css"
import { Link } from "react-router-dom";
const Returnpage = () => {
return (<>
<div>
<h1>This is Next Page</h1>
<Link to='/mainpage' class="v2_21">Back to mainpage</Link>
</div>
</>
);
};
export default Returnpage;

Mainpage.css
v2_21 {
    top: 100px;
    left: 50vh;
    position: absolute;
    font-family: Inter;
    font-weight: Bold;
    font-size: 30px;
    text-align: center;
    }
 Index.js
   import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
<App />,
document.getElementById('root')
);

  Indec.css

  html, body, #root, #root>div {
  height: 100%;
  }
  body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  height: 100%;
  }

  App.test.js
  import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<App />, div);
});
  Mainpage.js

 //import React from 'react';
import "./mainpage.css"
import "./returnpage.css"
import { Link } from "react-router-dom";
const Mainpage = () => {
return (<>
<div>
<h1>This is Mainpage</h1>
<Link to="/returnpage" className="v2_21">Next Page</Link>
</div>
</>
);
};
export default Mainpage;

10.)Form validation

  App.js
  import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Must contain at least one number and one uppercase and lowercase letter, and at least 8-12 characters",
      pattern:"(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,12}",
      label: "Password",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form>
        <h1>USER FORM</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default App;

   App.css
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  height: 100vh;
  background: url("https://img.freepik.com/free-vector/overlapping-gradient-violet-forms-background_52683-46651.jpg?w=2000");
  background-size: cover;
}

form{
    background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
}

h1{
    color: rgb(28, 5, 129);
    text-align: center;
}

button{
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: rgb(28, 5, 129);
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
}

FormInput.js

 import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

FormInput.css
.formInput{
    display: flex;
    flex-direction: column;
    width: 280px;
}

input{
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
}


label{
    font-size: 12px;
    color: gray;
}

span{
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
}

input:invalid[focused="true"]{
    border: 1px solid red;
}

input:invalid[focused="true"] ~ span{
    display: block;
}
 

6)
App.js
import React from 'react';
import Navbar from "./Navbar";
import "./App.css";
function App() {
    return (
            <Navbar/>
    );
}

export default App;

App.css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Titillium Web", sans-serif;
}

:root {
  --mainColor: #29335c;
  --mainColorLight: #5767aa;
  --secondaryColor: #db2b39;
  --textColor: #eee;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;
  background-color: var(--mainColor);
  color: var(--textColor);
}

nav a {
  margin: 0 1rem;
  color: var(--textColor);
  text-decoration: none;
}

nav a:hover {
  color: var(--secondaryColor);
}

header .nav-btn {
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: var(--textColor);
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;
}

header div,
nav {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  header .nav-btn {
    visibility: visible;
    opacity: 1;
  }

  header nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: var(--mainColor);
    transition: 1s;
    transform: translateY(-100vh);
  }

  header .responsive_nav {
    transform: none;
  }

  nav .nav-close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  nav a {
    font-size: 1.5rem;
  }
}

Navbar.js
import { useRef } from "react";
import "./App.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
            </button>
        </header>
    );
}

export default Navbar;

   