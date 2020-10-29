// import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Favourite from './Components/Favourite/Favourite';
// import Favourite from './Components/Favourite/Favourite';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';

import SideNav from './Components/SideNav/SideNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App row">
      <Router>
        <SideNav></SideNav>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/favourites">
            <Favourite></Favourite>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>


  );
}

export default App;
