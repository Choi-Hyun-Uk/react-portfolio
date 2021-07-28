import React, { useState, useRef, useEffect } from 'react';
import { ContactWrapper } from './styles';

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= divRef.current.offsetTop * 0.6) {
        setFadeIn(true);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [setFadeIn, divRef]);

  return (
    <ContactWrapper ref={divRef} className={fadeIn && 'fadeIn'}>
      <div className="inner">
        <h1>CONTACT</h1>
        <div>
          <div className="logo">
            <div className="logo-c">C</div>
            <div className="logo-h">H</div>
            <div className="logo-u">U</div>
          </div>
          <div className="my-info">
            <div>
              <h2>Number</h2>
              <p>+82 (0)10 3233 8018</p>
            </div>
            <div>
              <h2>Kakao Talk</h2>
              <p>xka926</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>akdlgusdnr26@naver.com</p>
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
