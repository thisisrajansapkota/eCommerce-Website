import React from 'react'
import Header from './Header'
import Footer from "./Footer";
import SideBar from './SideBar';

function AdminLayout({ children, title }) {
  return (
    <div>
      <div className="d-flex">
        <div className="left w-25  bg-info ">
          <SideBar />
        </div>

        <div className="right w-75 ">
          <Header></Header>

          <div className="main">
            <h2 className="px-2 m-2 text-center">{title}</h2>
            {children}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout