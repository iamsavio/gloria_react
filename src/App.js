import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mystyle.css"


function App() {
  const [state, setstate] = useState(false)
  const dark =state?{background:'#31393C'}:{}
  const toggle=()=>{
    state?setstate(false):setstate(true)
  }
  return (
    <div  className={state&& "text-white"} style={dark}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

     

      <div className="container">
       <div className="row ml-1"><h1 className="d-flex justify-content-center">Chandi Mary Gloria</h1><a href="#!"><i class="m-2 fa-2x fa fa-bolt" onClick={()=>toggle()} title=" Toggle dark mode" aria-hidden="true"></i></a></div> 
        {/* <img src = "./public/glosh.jpg" alt=""/> */}

        <h3 className="lead">MY PROFESSION</h3>
    <p>I am a highly result oriented, librarian who has invaluable experience, skilled in
interpersonal communication, possess the ability to handle complex assignments
effectively also possessing the confidence to work as per team or independently.</p>

<h4 className="">My Skills</h4>
<p>I have acquired skills like record keeping which involved compiling of data and user
research as a librarian at Global college, I have worked as a sales representative
and supervisor with amplitude Africa , in this capacity I-co managed in all areas of
customer relations,sales generation,reporting workflow and problem solving.
additional experience includes working in restaurants and hotel managements as
receptionist and cashier. In this positions I ensured good welcome and proper
communications with the clients,ensured proper records and safety of both clients
and company information, recording and reporting financial flow of the company.
Secretary with Jakdev engineering ltd where I also ensured proper communication
and customer satisfactory.</p>

      <h4>My Web Developement Journey</h4>
      <p>Well my Journey to software Development started with a text that i got from a friend never knew in the year 2019
        it was in a certain whatsApp group that was formed by my course-mates. the link posted in the group was inviting interested females to apply for coding 
        lessons with educating the children at Ntinda, well being a person with no code experience i had to call the 
        person who had posted the link for more information which later satisfied my curiosity. Well i applied for it and thats how my journey began</p>

<h5>Projects</h5>
<p>well i am cooking up something with react😉.
</p>
      </div>

    </div>




  );
}

export default App;
