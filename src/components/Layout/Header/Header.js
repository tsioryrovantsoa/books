import React from "react";
import Navbar from "../Navbar/NavBar";

function Header() {
  return (
    <>
      <header id="mu-header" className="" role="banner">
        <div className="container">
          <nav className="navbar navbar-default mu-navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="index.html">
                  <i className="fa fa-book" aria-hidden="true" /> Books
                </a>
              </div>
              <Navbar />
            </div>
          </nav>
        </div>
      </header>
      <section id="mu-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-sm-push-6">
              <div className="mu-hero-right">
                <img src="assets/images/ebook.png" alt="Ebook img" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-sm-pull-6">
              <div className="mu-hero-left">
                <h1>Enregistrer vos livres et Rechercher des books</h1>
                <p>Apprentissage ReactJS Redux avec Google Books API.</p>
                <a href="/" className="mu-primary-btn">
                  Rechercher ici !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
