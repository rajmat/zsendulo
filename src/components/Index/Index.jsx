import React from 'react';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import Palyazatok from '../Palyazatok/Palyazatok';
import ScrollTop from '../ScrollToTheTop/ScrollToTheTop';
import Contact from '../Contact/Contact';

import './index.scss';

const Index = () => {
  return (
    <div className="index-wrapper">
      <Header />
      <Introduction />
      <Contact />
      <Palyazatok />
      <ScrollTop />
    </div>
  );
};

export default Index;
