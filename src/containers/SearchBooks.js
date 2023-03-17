import React, {useState} from 'react'

const SearchBooks = () => {

    const [title, settitle] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log(title);
    }

  return (
    <>
                <div className="mu-heading-area">
								<h2 className="mu-heading-title">Recherche Books</h2>
								<span className="mu-header-dot"></span>
								<p>Rechercher votre livre a Google Books API</p>
							</div>
                            <div className="mu-contact-content">

								<div id="form-messages"></div>
								<form className="mu-contact-form" onSubmit={handleSubmit} >
									<div className="form-group">                
										<input type="text" className="form-control" value={title} placeholder="Quoi Rechercher" required="" onChange={(e) => settitle(e.target.value)} />
									</div>    
									<button type="submit" className="mu-send-msg-btn"><span>Rechercher</span></button>
						        </form>

							</div>
                            
							<div className="mu-book-overview-content">
								<div className="row">
                                <div className="col-md-3 col-sm-6" >
													<div className="mu-book-overview-single">
														<span className="mu-book-overview-icon-box">
															<i className="fa fa-area-chart" aria-hidden="true"></i>
														</span>
														<h4>exemple</h4>
														<p>exemple</p>
														<button className="mu-send-msg-btn"><span>Enregistrer</span></button>
													</div>
												</div>
								</div>
							</div>

                            
    </>
  )
}

export default SearchBooks