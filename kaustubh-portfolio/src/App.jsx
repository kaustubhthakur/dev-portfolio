import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./Layout";
"./App.css"
const App = () => {
  return (
    <Layout>
       <Routes>
      
        <Route path="/" element={<HomePage />} />
       
     
    </Routes>
    </Layout>
   
  );
};

export default App;
