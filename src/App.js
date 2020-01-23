import React from 'react';
import Menu from './components/Layout/Menu/Menu';
import Banner from './components/Layout/Banner/Banner';
import ListProducts from './components/Products/ListProducts/ListProducts';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <Banner/>
      <ListProducts/>
      <Footer/>
    </div>
  );
}

export default App;
