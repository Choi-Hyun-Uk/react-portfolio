import React, { useRef } from 'react';
import Header from '../components/header';
import Main from '../components/main';
import Skill from '../components/skill';
import Project from '../components/project';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home = () => {
  const elRef = useRef();

  return (
    <>
      <Header top={elRef} />
      <Main />
      <Skill />
      <Project elRef={elRef} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
