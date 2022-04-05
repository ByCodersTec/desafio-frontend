import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
