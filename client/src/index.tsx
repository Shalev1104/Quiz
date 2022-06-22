import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import Questionnaire from './pages/Questionnaire/Questionnaire';
import QuizProvider from './contexts/Quiz';
import ThemeProvider from './contexts/Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/:category" element={
              <QuizProvider>
                <Questionnaire />
              </QuizProvider>}
            />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);