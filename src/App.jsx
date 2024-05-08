import React, { useState } from "react";

import "primeflex/primeflex.css";

import "./app.css";
import { Layout } from "./views/layout/Layout";
import Home from "./views/home/Home";

export default function App() {
  return (
    <div className="container">
      <Layout />
      <Home />
    </div>
  );
}
