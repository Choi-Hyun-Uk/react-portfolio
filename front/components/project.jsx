import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

import { ProjectWrapper } from './styles';

const Project = ({ elRef }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const el = useRef((node) => node.current);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= elRef.current.offsetTop * 0.6) {
        setFadeIn(true);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [setFadeIn]);

  console.log(el);

  return (
    <ProjectWrapper ref={elRef} className={fadeIn && 'fadeIn'}>
      <div className="inner">
        <h1>PROJECT</h1>
        <div className="project-list">
          <ul>
            <li>
              <Link href="https://chudevlog.com">
                <a>
                  <span className="thumb">
                    <img
                      src="https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/reactblog-thumnail.jpeg"
                      alt="project-thumbnail"
                    />
                  </span>
                  <h2>리액트로 만든 SNS형식 블로그</h2>
                  <p>Front는 리액트로 작업하였으며, Back 노드와 익스프레스로 작업하였습니다.</p>
                </a>
              </Link>
              <div className="link-box">
                <Link href="https://github.com/Choi-Hyun-Uk/react-blog">
                  <a>
                    <AiFillGithub className="github-icon" />
                  </a>
                </Link>
                <Link href="https://chudevlog.com">
                  <a className="site">
                    <span>홈페이지 이동</span>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
