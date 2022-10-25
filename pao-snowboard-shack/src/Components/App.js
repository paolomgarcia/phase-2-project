import React, { useState } from "react";
import SnowboardPage from "src/Components/SnowboardPage.js";
import Header from 'src/Components/Header.js';
import { Routes, Route } from "react-router-dom";


function App() {
  const [snowboards, setSnowboards] = useState([]);

 useEffect(() => {
  fetch("https://localhost:8001/snowboards")
      .then((res) => res.json())
      .then((data) => setSnowboards(data))
 }, []);

  return (
    <div id="App">
      <div id="page">
        <Header />
          <Routes>
{/* home page */}
            <Route path="/" element={
              <SnowboardPage snowboards={snowboards}/>
            } />
{/* add snowboard form */}
            <Route path="/addsnowboard" element={
              <AddForm snowboards={snowboards}/>
            } />
{/* about us  */}
            <Route path="/aboutus" element={
              <AboutUs snowboards={snowboards}/>
            } />
          </Routes>
      </div>
    </div>
  );
}

export default App;