import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import AddPage from "./pages/AddPage/AddPage";
import EditPage from "./pages/EditPage/EditPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/add" exact component={AddPage} />
          <Route path="/edit/:id" exact component={EditPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
