import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./Layout";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
"./App.css"
const App = () => {
  return (
    <Layout>
       <Routes>
      
        <Route path="/" element={<HomePage />} />
       <Route path="/projects" element={<Projects/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/skills" element={<Skills/>} />
     
    </Routes>
    </Layout>
   
  );
};

export default App;
