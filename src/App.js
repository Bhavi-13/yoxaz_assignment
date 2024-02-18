import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import Create from './Components/Create';
import ProductSummary from './Components/ProductSummary';
import Update from './Components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/create'} element={<Create/>} />
          <Route path={'/products'} element={<ProductSummary/>} />
          <Route path={'/update/:id'} element={<Update/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
