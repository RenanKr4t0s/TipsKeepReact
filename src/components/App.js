import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteMaker from "./NoteMaker";
import notes from "./notes.js"


function App(){
  return  (
    <>
      <Header />
      <NoteMaker
        array = {notes}
      />
      <Footer />
    </>
  );
}

export default App;