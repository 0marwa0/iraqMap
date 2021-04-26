import logo from "./logo.svg";
import "./App.css";
import Info from "./detalis";
import Home from "./Hom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/info" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
