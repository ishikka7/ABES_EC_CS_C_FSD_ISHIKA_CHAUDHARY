import { useState } from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [search, setSearch] = useState("");

  const searchHandler = (value) => {
    setSearch(value);
  };

  return (
    <div className="app">
      <Router>

        <Header searchHandler={searchHandler} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Pass search to Body */}
          <Route path="/products" element={<Body search={search} />} />
        </Routes>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
