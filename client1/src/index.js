import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Components/Heros/Hero';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Hero />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

