import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./Components/App.js";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('App');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);