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
import CategoryList from './components/Category/CategoryList';
import AuthorList from './components/Author/AuthorList';
import MainCatalog from './components/Catalog/MainCatalog';



export default function App() {
  return (
  <Router>
    <Header/>
    <Routes>
        <Route path='/' element={ <Welcome message="Bienvenido a la ludoteca!"/> } />
        <Route path='/categories' element={ <CategoryList /> } />
        <Route path='/authors' element={ <AuthorList /> } />
        <Route path='/catalog' element={ <MainCatalog /> } />
    </Routes>
  </Router>
    
  );
}

