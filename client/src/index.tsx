import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './pages/Menu/Menu';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="" element={<Menu/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);