import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'


function App() {
  return (
    <div className="app">
      <Header />
      <Nav/>
    </div>
  );
}

export default () => (
  <Router>
    <App />
  </Router>
);