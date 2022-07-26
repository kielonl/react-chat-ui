import React from "react";
import "./style/About.css";
import Navbar from "./components/navbar.js";
import Author from "./components/Author.js";

function About() {
  return (
    <div className="main-about">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <div class="navbar-about">
        <Navbar></Navbar>
      </div>
      <section class="container-about">
        <div class="card">
          <div class="card-image card-1"></div>
          <Author name="Miłosz Stachlewski" role="Backend" />
        </div>
        <div class="card">
          <div class="card-image card-2"></div>
          <Author name="Kielon" role="Backend" />
        </div>
        <div class="card">
          <div class="card-image card-3"></div>
          <Author name="Filip Popławski" role="Frontend" />
        </div>
        <div class="card">
          <div class="card-image card-4"></div>
          <Author name="Oskar Kotlarski" role="Backend" />
        </div>
      </section>
      <footer className="footer-about">
        <h4>Website created: June of 2022</h4>
      </footer>
    </div>
  );
}
export default About;
