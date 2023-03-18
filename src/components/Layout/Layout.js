import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main role="main">
        <section id="mu-book-overview">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-book-overview-area">{props.children}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
