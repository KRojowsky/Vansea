import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Stores from "./Components/Stores/Stores";
import Hero from "./Components/Hero/Hero";
import TopSellers from "./Components/TopSellers/TopSellers";
import Login from "./Components/Login/Login";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import placeholder from "./assets/placeholder.jpg";

const App = () => {
  const firstTopSellersData = [
    {
      id: 11,
      image: placeholder,
      link: "/product/11",
      name: "Lorem ipsum 1",
      description: "Description of Lorem ipsum 1",
      actual_price: "99 zł",
      old_price: "149 zł",
      rating: 3.93,
      reviews: 432,
    },
    {
      id: 12,
      image: placeholder,
      link: "/product/12",
      name: "Lorem ipsum 2",
      description: "Description of Lorem ipsum 2",
      actual_price: "129 zł",
      old_price: "179 zł",
      rating: 1.7,
      reviews: 512,
    },
    {
      id: 13,
      image: placeholder,
      link: "/product/13",
      name: "Lorem ipsum 3",
      description: "Description of Lorem ipsum 3",
      actual_price: "149 zł",
      old_price: "199 zł",
      rating: 4.2,
      reviews: 200,
    },
    {
      id: 14,
      image: placeholder,
      link: "/product/14",
      name: "Lorem ipsum 4",
      description: "Description of Lorem ipsum 4",
      actual_price: "99 zł",
      old_price: "139 zł",
      rating: 4.8,
      reviews: 99,
    },
    {
      id: 15,
      image: placeholder,
      link: "/product/15",
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
      id: 1,
      image: placeholder,
      link: "/product/1",
      name: "Lorem ipsum A",
      description: "Description of Lorem ipsum A",
      actual_price: "99 zł",
      old_price: "149 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      id: 2,
      image: placeholder,
      link: "/product/2",
      name: "Lorem ipsum B",
      description: "Description of Lorem ipsum B",
      actual_price: "129 zł",
      old_price: "179 zł",
      rating: 4.6,
      reviews: 150,
      productReviews: [
        {
          username: "Lorem ipsum1",
          userImage: "https://via.placeholder.com/50",
          date: "2024-12-10",
          rating: 5,
          text: "Lorem ipsum11",
        },
        {
          username: "Lorem ipsum2",
          userImage: "https://via.placeholder.com/50",
          date: "2024-12-12",
          rating: 4,
          text: "Lorem ipsum122",
        },
      ],
    },
    {
      id: 3,
      image: placeholder,
      link: "/product/3",
      name: "Lorem ipsum C",
      description: "Description of Lorem ipsum C",
      actual_price: "149 zł",
      old_price: "199 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      id: 4,
      image: placeholder,
      link: "/product/4",
      name: "Lorem ipsum D",
      description: "Description of Lorem ipsum D",
      actual_price: "99 zł",
      old_price: "139 zł",
      rating: 4.6,
      reviews: 150,
    },
    {
      id: 5,
      image: placeholder,
      link: "/product/5",
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
        <Route
          path="/product/:id"
          element={<ProductDetails data={[...firstTopSellersData, ...secondTopSellersData]} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
