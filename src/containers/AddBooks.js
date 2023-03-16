import React,{useState} from 'react'
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/actionAddBooks';

const AddBooks = ({librarydata, addBook}) => {

console.log(librarydata);

const initialstate = {
        title : '',
        author : ''
}

const [newData, setnewData] = useState(initialstate);


const handleSubmit = e => {
    e.preventDefault();
    //console.log(newData);
	addBook(newData);

	//vider input

	setnewData(initialstate);

}
  return (
    <>
                <div className="mu-heading-area">
								<h2 className="mu-heading-title">Books</h2>
								<span className="mu-header-dot"></span>
								<p>Ajouter un livre a votre bibliotheque</p>
							</div>
                            <div className="mu-contact-content">

								<div id="form-messages"></div>
								<form className="mu-contact-form" onSubmit={handleSubmit}>
									<div className="form-group">                
										<input type="text" className="form-control" placeholder="Titre" required="" value={newData.title} onChange={e => setnewData({...newData, title:e.target.value})} />
									</div>
									<div className="form-group">                
										<input type="text" className="form-control" placeholder="Auteur" required="" value={newData.author} onChange={ e => setnewData({...newData, author:e.target.value})} />
									</div>          
									<button type="submit" className="mu-send-msg-btn"><span>AJOUTER</span></button>
						        </form>

							</div>
                            
							<div className="mu-book-overview-content">
								<div className="row">
									<div className="col-md-3 col-sm-6">
										<div className="mu-book-overview-single">
											<span className="mu-book-overview-icon-box">
												<i className="fa fa-area-chart" aria-hidden="true"></i>
											</span>
											<h4>Livre enregistrer</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                            <button className="mu-send-msg-btn"><span>SUPPRIMER</span></button>
                                        </div>
									</div>
									<div className="col-md-3 col-sm-6">
										<div className="mu-book-overview-single">
											<span className="mu-book-overview-icon-box">
												<i className="fa fa-cubes" aria-hidden="true"></i>
											</span>
											<h4>Chapter Two</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>
									<div className="col-md-3 col-sm-6">
										<div className="mu-book-overview-single">
											<span className="mu-book-overview-icon-box">
												<i className="fa fa-modx" aria-hidden="true"></i>
											</span>
											<h4>Chapter Three</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>

									<div className="col-md-3 col-sm-6">
										<div className="mu-book-overview-single">
											<span className="mu-book-overview-icon-box">
												<i className="fa fa-files-o" aria-hidden="true"></i>
											</span>
											<h4>Chapter Four</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>
								</div>
							</div>
                            <div className="mu-contact-content">
                                <div className="mu-contact-form">

                            <button className="mu-send-msg-btn">EFFACER TOUS LES LIVRES</button>
                                </div>
                            </div>
    </>
  )
}

const addStateToProps = (state) => {
	return {
		librarydata : state.library
	}
}

const addDispatchToProps = (dispatch) => {
	return {
		addBook : param => dispatch(addBook(param))
	}
}

export default connect(addStateToProps,addDispatchToProps)(AddBooks)