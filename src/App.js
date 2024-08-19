import React, { useState, useEffect, useRef } from "react"

// import logo from './logo.svg';
import './App.css';
import RadioButton from "./RadioButton/RadioButton";
import Content from "./Content";


function App() {
  const [selectedBtn, setSelectedBtn] = useState("title")
  const [content, setContent] = useState()

  const handleChange = (e) => {
    setSelectedBtn(e.target.value)
    console.log("hi")
  }

  let endPoint = selectedBtn == "title" ? "todos" : "users"

  useEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
    const data = await response.json()
    setContent(data)
    console.log("hello")
  }, [selectedBtn])


  return (
    <>
      <RadioButton handleChange={handleChange} selectedBtn={selectedBtn} />
      {/* <Content /> */}
    </>
  );
}

export default App;
