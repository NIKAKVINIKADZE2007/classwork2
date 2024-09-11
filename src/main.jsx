import React from 'react';
import ReactDOM from 'react-dom/client';
import items from './script';
import Header from './components/header/header';
import Main from './components/Main/Main';
import Footer from './components/footer/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main items={items} />
    <Footer></Footer>
  </React.StrictMode>
);
