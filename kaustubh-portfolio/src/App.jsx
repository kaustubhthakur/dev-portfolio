import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";

import About from "./components/about/About";
import Layout from "./Layout";
const App = () => {
  return (
    <Layout>
       <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
     
    </Routes>
    </Layout>
   
  );
};

export default App;
