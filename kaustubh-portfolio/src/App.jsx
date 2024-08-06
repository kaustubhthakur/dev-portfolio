import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./Layout";
import Projects from "./components/projects/Projects";
"./App.css"
const App = () => {
  return (
    <Layout>
       <Routes>
      
        <Route path="/" element={<HomePage />} />
       <Route path="/projects" element={<Projects/>} />
     
    </Routes>
    </Layout>
   
  );
};

export default App;
