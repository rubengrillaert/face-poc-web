import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./pages/home/index"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/configuration">
            <Configuration />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
