import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import Questionnaire from './pages/Questionnaire/Questionnaire';
import QuizProvider from './contexts/Quiz';
import ThemeProvider from './contexts/Theme';
import NotFound from './pages/404/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to={'/categories'} />} />
            <Route path="/categories" element={<Menu/>} />
            <Route path="/categories/:category" element=
            {
              <QuizProvider>
                <Questionnaire />
              </QuizProvider>
            } />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);