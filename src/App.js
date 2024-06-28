import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productlist from "./pages/Productlist";

function App() {
  return (
    <div className="App">
      <Header />
      <Productlist />
      <Footer />
    </div>
  );
}

export default App;
