import React from "react";

import "primeflex/primeflex.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";
import { Layout } from "./views/layout/Layout";
import Home from "./views/home/Home";
import Example from "./views/Exapmles/Example";
import Docs from "./views/docs/Docs";

export default function App() {
  return (
    <div className="container">
      {/* <Layout />
      <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/example" element={<Example />} />
            <Route path="/docs" element={<Docs />} />

            <Route
              path="*"
              element={
                <div className="mx-2 my-4 ">
                  <h3>404 Not Found</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
