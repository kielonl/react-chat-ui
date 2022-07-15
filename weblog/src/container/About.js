import React from "react";
import "./About.css";
import Navbar from "./navbar.js";
function About() {
  return (
    <>
      <Navbar></Navbar>
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

      <main>
        <h1 className="aboutText">Authors:</h1>
        <hr></hr>
        <div className="authorContainer">
          <div className="author">
            <img
              src="https://www.wykop.pl/cdn/c3201142/comment_D7XfAHC4AUqQWlMB6xHTtmo1947Zhpvu,w400.jpg"
              alt="website develeper"
              className="authorPhoto"
            ></img>
            <div className="container">
              <h4>
                <b>Miłosz Stachlewski</b>
              </h4>
              <p>Backend</p>
            </div>
          </div>

          <div className="author">
            <img
              src="https://st4.depositphotos.com/2249091/21946/i/1600/depositphotos_219464348-stock-photo-vertical-view-mother-holding-cute.jpg"
              alt="website develeper"
              className="authorPhoto"
            ></img>
            <div className="container">
              <h4>
                <b>Kielon Osadowski</b>
              </h4>
              <p>Backend</p>
            </div>
          </div>

          <div className="author">
            <img
              src="https://thumbs.dreamstime.com/b/szcz%C4%99%C5%9Bliwa-rodzina-pionowe-4016034.jpg"
              alt="website develeper"
              className="authorPhoto"
            ></img>
            <div className="container">
              <h4>
                <b>Oskar Kotlarski</b>
              </h4>
              <p>Frontend</p>
            </div>
          </div>

          <div className="author">
            <img
              src="https://thumbs.dreamstime.com/b/para-seniora-razem-pionowe-805221.jpg"
              alt="website develeper"
              className="authorPhoto"
            ></img>
            <div className="container">
              <h4>
                <b>Filip Popławski</b>
              </h4>
              <p>Frontent</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="aboutFooter">
        <h4>Website created: June of 2022</h4>
      </footer>
    </>
  );
  // {
  //   this.state.persons.map((person) => <li key={person.id}>{person.name}</li>);
  // }
}
export default About;
