import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default class ERouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>

        <Routes>
          <Route path="/skills" element={<Skills />} />
        </Routes>

        <Routes>
          <Route path="/project" element={<Projects />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
