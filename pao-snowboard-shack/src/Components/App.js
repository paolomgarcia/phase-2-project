import React from "react";
import SnowboardPage from "./SnowboardPage";
import AddForm from "./AddForm";
import AboutUs from "./AboutUs";
import '../App.css'


import Header from './Header';
import { Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <div id="page">
        {/* <Router> */}
          <Header />
           <Routes>
{/* home page */}
            <Route exact path="/" element={
              <SnowboardPage/>
            } />
{/* add snowboard form */}
            <Route path="/addsnowboard" element={
              <AddForm />
            } />
{/* about us  */}
            <Route path="/aboutus" element={
              <AboutUs />
            } />
          </Routes>
        {/* </Router> */}
      </div>
    </div>
  );
}

export default App;