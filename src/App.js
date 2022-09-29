import "./styles.css";
import * as React from "react";
import Button from "@mui/material/Button";

import MySlide from "./components/MySlide";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <MySlide></MySlide>
    </div>
  );
}
