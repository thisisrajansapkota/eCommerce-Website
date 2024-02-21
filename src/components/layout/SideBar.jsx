import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
    const sideLinks = [
      {
        label: "Dashboard",
        path: "/dashboard",
      },
      {
        label: "Category",
        path: "/category",
      },
      {
        label: "Produts",
        path: "/product",
      },
      {
        label: "Payment options",
        path: "/payment-option",
      },
      {
        label: "Orders",
        path: "/order",
      },
      {
        label: "Clients",
        path: "/client",
      },
      {
        label: "hr"
      },
      {
        label: "Profile",
        path: "/profile",
      },
      {
        label: "Register Admin",
        path: "/register",
      },
    ];
  return (
    <>
      <div>
        <nav>
          <div className="mt-3 text-center">Welcome Admin</div>
          <hr />
        </nav>
      </div>
      <div>
        <ul className="list-unstyled">
        
          {sideLinks.map(({path, label}) => {
if(label === 'hr') {
    return <hr key={label}></hr>
}

return (
  <li key={label} className='mt-2 p-2 ms-2'>
    <Link className="nav-link" to={path}>
      {label}
    </Link>
  </li>
);
          })}
        </ul>
      </div>
    </>
  );
}

export default SideBar