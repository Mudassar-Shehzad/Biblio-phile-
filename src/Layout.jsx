import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';

function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <Navbar2 />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
