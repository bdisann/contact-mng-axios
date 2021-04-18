import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
