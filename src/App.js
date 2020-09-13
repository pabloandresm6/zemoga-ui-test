import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBanner from './components/mainBanner/index';
import Message from './components/message/index';
import Content from './components/content/index';
import Footer from './components/footer/index';

function App() {
  return (
    <div className="global_container_">
      <div className="group-2">

      <MainBanner></MainBanner>
        <div className="l-unconstrained">
          <div className="l-constrained">
          <Message></Message>
          <Content></Content>
          <Footer></Footer> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
