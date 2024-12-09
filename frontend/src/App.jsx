import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Stores from "./Components/Stores/Stores";
import Hero from "./Components/Hero/Hero";
import TopSellers from "./Components/TopSellers/TopSellers";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import placeholder from "./assets/placeholder.jpg";

const App = () => {
  const firstTopSellersData = [
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum 1",
      description: "Description of Lorem ipsum 1",
      actual_price: "99 zł",
      old_price: "149 zł",
      rating: 3.93,
      reviews: 432,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum 2",
      description: "Description of Lorem ipsum 2",
      actual_price: "129 zł",
      old_price: "179 zł",
      rating: 1.7,
      reviews: 512,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum 3",
      description: "Description of Lorem ipsum 3",
      actual_price: "149 zł",
      old_price: "199 zł",
      rating: 4.2,
      reviews: 200,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum 4",
      description: "Description of Lorem ipsum 4",
      actual_price: "99 zł",
      old_price: "139 zł",
      rating: 4.8,
      reviews: 99,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum 5",
      description: "Description of Lorem ipsum 5",
      actual_price: "109 zł",
      old_price: "159 zł",
      rating: 4.6,
      reviews: 150,
    },
  ];

  const secondTopSellersData = [
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum A",
      description: "Description of Lorem ipsum A",
      actual_price: "99 zł",
      old_price: "149 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum B",
      description: "Description of Lorem ipsum B",
      actual_price: "129 zł",
      old_price: "179 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum C",
      description: "Description of Lorem ipsum C",
      actual_price: "149 zł",
      old_price: "199 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum D",
      description: "Description of Lorem ipsum D",
      actual_price: "99 zł",
      old_price: "139 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      image: placeholder,
      link: "#",
      name: "Lorem ipsum E",
      description: "Description of Lorem ipsum E",
      actual_price: "109 zł",
      old_price: "159 zł",
      rating: 4.6,
      reviews: 150,
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Stores />
              <Hero />
              <TopSellers title="lorem ipsum 0" data={secondTopSellersData} showFullDetails={false} />
              <TopSellers title="Lorem ipsum 1" data={firstTopSellersData} showFullDetails={true} />
              <TopSellers title="Lorem ipsum 2" data={secondTopSellersData} showFullDetails={true} />

            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
