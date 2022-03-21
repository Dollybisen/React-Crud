import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./Components/Home";
import Edit from "./Components/Student/Edit";
import View from "./Components/Student/View";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;