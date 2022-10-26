import React, {useState, useEffect} from 'react';
import SnowboardCollection from './SnowboardCollection';
import Search from "./Search";
import { Container } from "semantic-ui-react";

function SnowboardPage() {
  const [snowboards, setSnowboards] = useState([]);
  const [search, setSearch] = useState("")

 useEffect(() => {
  fetch("https://localhost:8001/snowboards")
      .then((res) => res.json())
      .then((data) => setSnowboards(data))
 }, [""]);

 let filtered = snowboards.filter((snowboard) =>
snowboard.name.toLowerCase().includes(search.toLowerCase())
 )

 return (
    <Container>
      <h1>Snowboard Selection</h1>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <SnowboardCollection snowboards={filtered} />
    </Container>
  );
}

export default SnowboardPage;