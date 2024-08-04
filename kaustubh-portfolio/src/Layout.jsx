import React from 'react';

import './Layout.css'; // Import CSS for the layout if needed
import Navbar from './components/navbar/Navbar';
const Layout = ({ children }) => {
  return (
    <div className="layout">
     <Navbar/>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;