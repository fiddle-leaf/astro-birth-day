import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './app/Header';
import Footer from './app/Footer';
import AstroForm from './app/AstroForm';

function App() {
  return (
    <div className="App">
      <Header />
      <AstroForm />
      <Footer />
      
    </div>
  );
}

export default App;
