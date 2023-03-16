import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
<section id="mu-book-overview">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-book-overview-area">

							<div class="mu-heading-area">
								<h2 class="mu-heading-title">Accueil</h2>
								<span class="mu-header-dot"></span>
								<p>Mes livres</p>
							</div>

							<div class="mu-book-overview-content">
								<div class="row">

									<div class="col-md-3 col-sm-6">
										<div class="mu-book-overview-single">
											<span class="mu-book-overview-icon-box">
												<i class="fa fa-area-chart" aria-hidden="true"></i>
											</span>
											<h4>Chapter One</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>

									<div class="col-md-3 col-sm-6">
										<div class="mu-book-overview-single">
											<span class="mu-book-overview-icon-box">
												<i class="fa fa-cubes" aria-hidden="true"></i>
											</span>
											<h4>Chapter Two</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>

									<div class="col-md-3 col-sm-6">
										<div class="mu-book-overview-single">
											<span class="mu-book-overview-icon-box">
												<i class="fa fa-modx" aria-hidden="true"></i>
											</span>
											<h4>Chapter Three</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>

									<div class="col-md-3 col-sm-6">
										<div class="mu-book-overview-single">
											<span class="mu-book-overview-icon-box">
												<i class="fa fa-files-o" aria-hidden="true"></i>
											</span>
											<h4>Chapter Four</h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </Layout>
  );
}

export default App;
