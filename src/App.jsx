import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Blogpost from "./pages/Blogpost";
import About from "./pages/About";
import Category from "./pages/Category";
import ContactUs from "./pages/ContactUs";
import Author from "./pages/Author";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpost" element={<Blogpost />} />
        <Route path="/about" element={<About/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/author" element={<Author/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>

<Footer/>
    </>
  );
}

export default App;
