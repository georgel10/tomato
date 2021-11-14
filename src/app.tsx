import React from 'react';
import Footer from './components/footer/footer';
import NavHeader from './components/header/header';
import Router from './router';

const App = () => {
  return (
    <>
      <div className="App">
        <NavHeader />
        <Router />
        <Footer />
      </div>
    </>
  );
};

export default App;
