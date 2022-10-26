import React from "react";
import SnowboardPage from "./SnowboardPage";
import Header from './Header';
import { Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <div id="page">
        <Router>
          <Header />
          <Routes>

{/* home page */}
            <Route path="/" element={
              <SnowboardPage/>
            } />
{/* add snowboard form */}
            {/* <Route path="/addsnowboard" element={
              <AddForm snowboards={snowboards}/>
            } /> */}
{/* about us  */}
            {/* <Route path="/aboutus" element={
              <AboutUs snowboards={snowboards}/>
            } /> */}
          </Routes>
        </Router>

          {/* <SnowboardPage /> */}
      </div>
    </div>
  );
}

export default App;