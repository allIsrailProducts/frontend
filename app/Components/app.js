"use client";

import Cards from "@/app/cards";
// import About from '../about';
import Hero from "../hero";
import Footer from "../footer";
import Searchbar from "./searchbar";
import Navbar from "./navbar";
 
function App() {
  return (
    <>
    <Navbar />
      <Hero />
      <Searchbar />
      <Footer />
    </>
  );
}

export default App;
