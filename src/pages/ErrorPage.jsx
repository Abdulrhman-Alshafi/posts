import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.css";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={style.error}>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>{error.statusText || error.message}</p>
      <NavLink className={style.btn} to="/">
        try Login
      </NavLink>
    </div>
  );
};

export default ErrorPage;
