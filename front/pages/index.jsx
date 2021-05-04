import React from 'react';
import Header from '../components/header';
import Main from '../components/main';
import Skill from '../components/skill';
import Project from '../components/project';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
