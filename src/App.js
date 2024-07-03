import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productlist from "./pages/Productlist";
import SingleView from "./pages/SingleView";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path = '/' element = {<Productlist />} ></Route>
      <Route path = '/view/:id' element = { <SingleView/>} ></Route>
      <Route path = '/*' element ={<PageNotFound/>}></Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
