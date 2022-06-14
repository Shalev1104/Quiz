import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import Questionnaire from './pages/Questionnaire/Questionnaire';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/:category" element={<Questionnaire/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);