// import logo from "./logo.svg";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Plants from "./screens/Plants/Plant";
// import Monsteras from "./screens/Monstera/Monstera";
// import Pothos from "./screens/Pothos/Potho";
import MainContainer from "./container/MainContainer";
// import ContactUs from "./screens/ContactUs";
// import Review from "./screens/Review";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer />
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <div className="main-container"></div>
        <Route exact path="/plants">
          <Plants plants={plants} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/monsteras">
          <Monsteras monsteras={monsteras} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/pothos">
          <Pothos pothos={pothos} setToggleFetch={setToggleFetch} />
        </Route> */}
        {/* <Route path="/contactus/">
          <ContactUs setToggleFetch={setToggleFetch} />
        </Route> */}
        {/* <Route path="/review">
          <Review reviews={reviews} setToggleFetch={setToggleFetch} />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
