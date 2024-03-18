import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainContainer from "./container/MainContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
