import React from "react";
import Welcome from "../components/Welcome";

import PopularBooks from "../components/PopularBooks";
import BookCategory from "../components/BookCategory";
import { Link } from "react-router-dom";
// import CategoryCards from "../components/CategoryCards ";

const Home = () => {
  
  return (
    <div className="mx-12">
      <Welcome />
      <BookCategory />
      <PopularBooks />
    </div>
  );
};

export default Home;
