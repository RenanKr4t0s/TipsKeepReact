import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteMaker from "./NoteMaker";
import NewNote from "./newNote.jsx";
import { useState } from "react";

function App(){

  let [arrray, setArrray]= useState([])

  function addNote(objNota){
    setArrray(prevArray =>{
      return [...prevArray, objNota]
    })
  }

  function toDelete(id){
    console.log("Apertou o deletar")
    setArrray((prevArray)=>{
      return prevArray.filter(
        (item, index) =>{
          return index !==id
        }
      )
    })
  }

  return  (
    <>
      <Header />
      <NewNote array={arrray} onAdd={addNote}/>
      <NoteMaker 
        array = {arrray} toDelete={toDelete}
      />
      <Footer />
    </>
  );
}

export default App;