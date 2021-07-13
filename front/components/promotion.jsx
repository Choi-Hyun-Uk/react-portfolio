import React, { useEffect, useState } from 'react';

import { ProjectWrapper } from './styles';
import PromotionItem from './promotionItem';

const post = [
  {
    id: 2,
    title: '2021 설날 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2021-02-01',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol03.jpg' },
    ],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol-src01.png' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol-src02.png' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol-src03.png' },
    ]
  },
  {
    id: 3,
    title: '2020 윈터 세일 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-12-14',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter03.jpg' },
    ],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter-src01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter-src02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter-src03.jpg' },
    ]
  },
  {
    id: 6,
    title: '2020 보다나 어워즈 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-12-11',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards04.jpg' },
    ],
    source: [],
  },
  {
    id: 5,
    title: '보다나 8주년 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-11-09',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th05.jpg' },
    ],
    source: [],
  },
  {
    id: 8,
    title: '가을 세일 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-09-24',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn05.jpg' },
    ],
    source: [],
  },
  {
    id: 7,
    title: '신제품 기대평 댓글 참여 이벤트 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-08-24',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink05.jpg' },
      { id: 6, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink06.jpg' },
    ],
    source: [],
  },
  {
    id: 1,
    title: '여름 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-07-15',
    image: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_04.jpg' },
    ],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src05.jpg' },
    ]
  },
  {
      id: 4,
      title: '앱 다운로드 혜택 상세페이지',
      brand: 'vodana',
      category: ['웹 디자인'],
      created_at: '2020-05-04',
      image: [
        { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/appdown_01.jpg' },
        { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/appdown_02.jpg' },
      ],
      source: [],
  },
];
  
const Promotion = ({ elRef }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= elRef.current.offsetTop * 0.4) {
        setFadeIn(true);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [setFadeIn]);

  return (
    <>
      <ProjectWrapper ref={elRef} className={fadeIn && 'fadeIn'}>
        <div className="inner">
          <h1>PROJECT</h1>
          <div className="project-list">
            <ul>
              { post.map((item) => (
                  <PromotionItem key={item.id} post={item} />
              ))}
            </ul>
          </div>
        </div>
      </ProjectWrapper>
    </>
  );
};

export default Promotion;
