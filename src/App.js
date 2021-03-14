import logo from "./logo.svg";
import "./App.css";
import Info from "./info";
import Home from "./Hom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Link to="/info">sfsofosfo</Link> */}
      <BrowserRouter>
        <Switch>
          <Route path="/info" component={Info} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
