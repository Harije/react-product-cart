import logo from './logo.svg';
import './App.css';
import Forms from './form';
import Header from './header';
import Headerr from './headerr';
import Content from './content';
import About from './about';
import Clients from './client';
import Feature from './feature';
import Step from './step';
import Services from './services';
import Portfolio from './portfolio';
import Testimonial from './testionial';
import Team from './team';
import Pricing from './pricing';
import Faq from './faq';
import Contact from './contact';
import Footer from './footer';
import Product from './product';
import React, { useState } from 'react';

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateTotalQuantity = (newQuantities) => {
    const newTotal = newQuantities.reduce((acc, quantity) => acc + quantity, 0);
    setTotalQuantity(newTotal);
  };
  return (
    <div className="App">
     <Headerr totalQuantity={totalQuantity} />
     <Product updateTotalQuantity={updateTotalQuantity} />
     <Forms/>
      <Content/>
      <About/>
      <Clients/>
      <Feature/>
      <Step/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Team/>
      <Pricing/>
      <Faq/>
      <Contact/>
      <Footer/> 
      

    </div>
  );
}

export default App;
