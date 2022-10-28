import React, {useState} from 'react';
import {Form} from "semantic-ui-react"

function AddForm({onAdd}) {
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [imageMain, setImageMain] = useState("")
    const [imageBackup, setImageBackup] = useState("")
    const [terrain, setTerrain] = useState("")
    const [size, setSize] = useState("")
    const [shape, setShape] = useState("")
    const [price, setPrice] = useState("")

    function handleSubmit(e) {
    e.preventDefault()
  fetch("http://localhost:8001/snowboards", {
    method: "POST",
    headers: {
    "Content-Type" : "application/json"
  },
    body: JSON.stringify({
      brand: brand,
      model: model,
      images: {main:imageMain, backup:imageBackup},
      terrain: terrain,
      size: size,
      shape: shape,
      price: price

    })
})
  .then((r) => r.json())
  .then((setSnowboards) => onAdd(setSnowboards))
  
}

return (
    <div>
      <h3>Add a Snowboard!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Brand" placeholder="Brand" name="brand" onChange = {(e) => setBrand(e.target.value)}/>
          <Form.Input fluid label="Model" placeholder="model" name="model" onChange = {(e) => setModel(e.target.value)}/>
          <Form.Input
            fluid
            label="Image1 URL"
            placeholder="url"
            name="imageMain"
            onChange = {(e) => setImageMain(e.target.value)}
          />
          <Form.Input
            fluid
            label="Image2 URL"
            placeholder="url"
            name="imageBackup"
            onChange = {(e) => setImageBackup(e.target.value)}
          />
          <Form.Input fluid label="Terrain" placeholder="Terrain" name="terrain" onChange = {(e) => setTerrain(e.target.value)}/>
          <Form.Input fluid label="Size" placeholder="Size" name="size" onChange = {(e) => setSize(e.target.value)}/>
          <Form.Input fluid label="Shape" placeholder="Shape" name="shape" onChange = {(e) => setShape(e.target.value)}/>
          <Form.Input fluid label="Price" placeholder="Price" name="price" onChange = {(e) => setPrice(e.target.value)}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}




export default AddForm;