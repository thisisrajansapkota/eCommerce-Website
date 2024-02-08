import React from "react";
import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<h1>New Project! Coming Soon!</h1>}>  </Route>
      </Routes>
    </>
  );
 
}

export default App;
