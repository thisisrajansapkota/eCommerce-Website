import React from "react";
import { Link, useLocation } from "react-router-dom";
import className from "classnames";
import classNames from "classnames";
function SideBar() {
  const {pathname} = useLocation();
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
      label: "hr",
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
        <ul className="list-unstyled side-links">
          {sideLinks.map(({ path, label }) => {
            if (label === "hr") {
              return <hr key={label}></hr>;
            }
            const liClass = classNames({
              'mt-2': true,
              'p-2':true,
              'ms-2': true,
              "active": pathname.includes(path),
            });
           
            return (
              <li key={label} className={liClass}>
                <Link to={path} className="nav-link">
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

export default SideBar;
