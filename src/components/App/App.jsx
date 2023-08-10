// Dependencies
import React from 'react';

// Styling
import './App.css';

// Components
import Header from '../Header/Header';
import GalleryList from '../Gallery/GalleryList';


function App() {
    return (
      <div className="App">
        <Header/>
        <GalleryList/>
      </div>
    );
}

export default App;