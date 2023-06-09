import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";
import { addBook } from "../redux/actions/actionAddBooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBooks = () => {
  const [title, settitle] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    dispatch(fetchBooks(title));
    // console.log(state);
  };

  const handleSave = (title, author) => {
    const data = {
      title,
      author,
    };
    dispatch(addBook(data));
    toast.info("Livre enregistrer");
  };

  const displayFetch = state.isLoading ? (
    <div>
      {console.log("IsLoading")}
      <p>Loading ...</p>
    </div>
  ) : state.error !== "" ? (
    <p>{state.error}</p>
  ) : (
    state.fetchedBooks.map((data) => {
      return (
        <div className="col-md-3 col-sm-6" key={data.id}>
          <div className="mu-book-overview-single">
            {data.volumeInfo.hasOwnProperty("imageLinks") ? (
              <img
                src={data.volumeInfo.imageLinks.smallThumbnail}
                alt={data.volumeInfo.title}
              />
            ) : (
              <span className="mu-book-overview-icon-box">
                <i className="fa fa-area-chart" aria-hidden="true"></i>
              </span>
            )}

            <h4>{data.volumeInfo.title}</h4>
            <p>{data.volumeInfo.authors}</p>
            <a
              href={data.volumeInfo.previewLink}
              className="btn btn-info"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Plus d'infos
            </a>
            <br></br>
            <button
              className="mu-send-msg-btn"
              onClick={() =>
                handleSave(data.volumeInfo.title, data.volumeInfo.authors)
              }
            >
              <span>Enregistrer</span>
            </button>
          </div>
        </div>
      );
    })
  );

  return (
    <>
      <div className="mu-heading-area">
        <h2 className="mu-heading-title">Recherche Books</h2>
        <span className="mu-header-dot"></span>
        <p>Rechercher votre livre a Google Books API</p>
      </div>
      <div className="mu-contact-content">
        <div id="form-messages"></div>
        <form className="mu-contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={title}
              placeholder="Quoi Rechercher"
              required=""
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <button type="submit" className="mu-send-msg-btn">
            <span>Rechercher</span>
          </button>
        </form>
      </div>

      <div className="mu-book-overview-content">
        <div className="row">{displayFetch}</div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SearchBooks;
