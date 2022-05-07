import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { useLocation, useNavigate } from "react-router-dom";
const IconBreadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `${pathnames.slice(0, index + 1).join("/")}`;
          
          /* console.log(name);
            console.log(routeTo); */

          return (
            <Link key={index} onClick={() => navigate(routeTo)}>{name}</Link>);
        })}
      </Breadcrumbs>
    </div>
  );
};
export default IconBreadcrumbs;
