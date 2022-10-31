import "./App.css";
import { Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Home } from "./components/Home/Home.jsx";
import { CreateActivities } from "./components/CreateActivities/CreateActivities";
import { NavBar } from "./components/NavBar/NavBar";
import { CountryDetailContainer } from "./components/CountryDetailContainer/CountryDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route
        exact
        path="/createActivities"
        component={CreateActivities}
      ></Route>
      <Route
        exact
        path="/CountryDetailContainer/:countryId"
        component={CountryDetailContainer}
      ></Route>
    </div>
  );
}

export default App;
