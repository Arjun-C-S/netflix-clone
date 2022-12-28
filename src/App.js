import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action , originals} from './urls'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={action} title='Actions' isSmall />
    </div>
  );
}

export default App;
