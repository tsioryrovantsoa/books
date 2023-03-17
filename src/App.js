import './App.css';
import Layout from './components/Layout/Layout';
import AddBooks from './containers/AddBooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={AddBooks}/>
        <Route exact path="/search" component={SearchBooks}/>
      </Switch>
    </Layout>
    </Router>
  );
}

export default App;
