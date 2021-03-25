import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Comments from './Comments';
import Wizard from './Wizard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CommentDetails from './CommentDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/comments">
              <Comments />
            </Route>
            <Route exact path="/comments/:id">
              <CommentDetails />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/wizard">
              <Wizard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
