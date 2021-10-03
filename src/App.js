import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/movie/:movieId' component = {Movie}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
