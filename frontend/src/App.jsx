import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Stores from './Components/Stores/Stores'
import TopSellers from './Components/TopSellers/TopSellers'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Stores/>
      <TopSellers/>
    </div>
  )
}

export default App