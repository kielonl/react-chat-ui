import React from "react";
import "../style/About.css";
import Navbar from "./navbar.js";
import Author from "./Author.js";

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
          <Author
            source="https://www.wykop.pl/cdn/c3201142/comment_D7XfAHC4AUqQWlMB6xHTtmo1947Zhpvu,w400.jpg"
            name="Miłosz Stachlewski"
            role="Backend"
          />
          <Author
            source="https://st4.depositphotos.com/2249091/21946/i/1600/depositphotos_219464348-stock-photo-vertical-view-mother-holding-cute.jpg"
            name="Kielon"
            role="Backend"
          />
          <Author
            source="https://thumbs.dreamstime.com/b/para-seniora-razem-pionowe-805221.jpg"
            name="Filip Popławski"
            role="Frontend"
          />
          <Author
            source="https://thumbs.dreamstime.com/b/szcz%C4%99%C5%9Bliwa-rodzina-pionowe-4016034.jpg"
            name="Oskar Kotlarski"
            role="Frontend"
          />
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
