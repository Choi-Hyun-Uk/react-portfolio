import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

import { HeaderWrapper } from './styles';

const Header = ({ top }) => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);

  const onClickHome = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickProject = useCallback(() => {
    window.scrollTo(0, top.current.offsetTop * 0.3);
  }, []);

  const onClickContact = useCallback(() => {
    window.scrollTo(0, 5000);
  }, []);

  useEffect(() => {
    const scroll = () => {
      const { pageYOffset } = window;
      const deltaY = pageYOffset - pageY;
      const result = pageYOffset !== 0 && deltaY >= 0;
      setHide(result);
      setPageY(pageYOffset);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [hide, pageY]);

  return (
    <HeaderWrapper className={hide && 'hide'}>
      <div className="inner">
        <div className="name-logo">
          <div className="logo-c">C</div>
          <div className="logo-h">H</div>
          <div className="logo-u">U</div>
        </div>
        <ul>
          <li onClick={onClickHome}>
            Home<span></span>
          </li>
          <li onClick={onClickProject}>
            Project<span></span>
          </li>
          <li onClick={onClickContact}>
            Contact<span></span>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
