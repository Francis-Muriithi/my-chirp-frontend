import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BirdDetails from './BirdDetails';
import NotFound from './NotFound';
import Update from './Update';


function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route exact path='/create'>
          <Create/>
          </Route>
          <Route exact path='/birds/:id'>
          <BirdDetails/>
          </Route>
          <Route exact path='/update/:id'>
          <Update/>
          </Route>
          <Route exact path='*'>
          <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
