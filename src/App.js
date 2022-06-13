import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Welcome from './components/Welcome';
import CategoryList from './components/CategoryList';



export default function App() {
  return (
  <Router>
    <Header/>
    <Routes>
        <Route path='/' element={ <Welcome /> } />
        <Route path='/categories' element={ <CategoryList /> } />
    </Routes>
  </Router>
    
  );
}

