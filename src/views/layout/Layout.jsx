import React from "react";
import { Outlet } from "react-router-dom";
import TopMenuBar from "../../components/TopMenuBar";

export const Layout = () => {
  return (
    <>
      <TopMenuBar />
      <Outlet />
    </>
  );
};
