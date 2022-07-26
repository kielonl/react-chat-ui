import React from "react";
import "./style/About.css";
import Navbar from "./components/navbar.js";
import Author from "./components/Author.js";

function About() {
  return (
    <div className="main-about">
      <div class="navbar-about">
        <Navbar></Navbar>
      </div>
      <section class="container-about">
        <div class="card">
          <div class="card-image card-1"></div>
          <h2>Miłosz Stachlewski</h2>
          <p>Backend</p>
        </div>
        <div class="card">
          <div class="card-image card-2"></div>
          <h2>Kielon</h2>
          <p>Backend</p>
        </div>
        <div class="card">
          <div class="card-image card-3"></div>
          <h2>Filip Popławski</h2>
          <p>Frontend</p>
        </div>
        <div class="card">
          <div class="card-image card-4"></div>
          <h2>Oskar Kotlarski</h2>
          <p>Backend</p>
        </div>
      </section>
      <footer className="footer-about">
        <h4>Website created: June of 2022</h4>
      </footer>
    </div>
  );
}
export default About;
/*
  
*/
/*
  <>
      <div className="bodyweb">
        
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
            <table>
              <tr>
                <td>
                  <Author
                    source="https://www.wykop.pl/cdn/c3201142/comment_D7XfAHC4AUqQWlMB6xHTtmo1947Zhpvu,w400.jpg"
                    name="Miłosz Stachlewski"
                    role="Backend"
                  />
                </td>
                <td>
                  <Author
                    source="https://st4.depositphotos.com/2249091/21946/i/1600/depositphotos_219464348-stock-photo-vertical-view-mother-holding-cute.jpg"
                    name="Kielon"
                    role="Backend"
                  />
                </td>
                <td>
                  <Author
                    source="https://thumbs.dreamstime.com/b/para-seniora-razem-pionowe-805221.jpg"
                    name="Filip Popławski"
                    role="Frontend"
                  />
                </td>
                <td>
                  <Author
                    source="https://thumbs.dreamstime.com/b/szcz%C4%99%C5%9Bliwa-rodzina-pionowe-4016034.jpg"
                    name="Oskar Kotlarski"
                    role="Frontend"
                  />
                </td>
              </tr>
            </table>
          </div>
        </main>
        <footer className="aboutFooter">
          <h4>Website created: June of 2022</h4>
        </footer>
      </div>
    </>

*/
