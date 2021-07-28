import React, { useRef } from 'react';

import Header from '../components/header';
import Skill from '../components/skill';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Main from '../components/main';
import Promotion from '../components/promotion';
import ProductDetail from '../components/productDetail';

const Home = () => {
  const elRef = useRef();

  return (
    <>
      <Header top={elRef} />
      <Main />
      <Skill />
      <Promotion promotionRef={elRef} />
      <ProductDetail productRef={elRef} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
