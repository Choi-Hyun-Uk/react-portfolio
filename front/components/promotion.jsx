import React, { useEffect, useState } from 'react';

import { ProjectWrapper } from './styles';
import PromotionItem from './promotionItem';

const promotion = [
  {
    id: 1,
    title: '2021 설날 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2021-02-01',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol03.jpg' },
    ],
    mobileImage: [],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol-src01.png' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol-src02.png' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/seol-src03.png' },
    ]
  },
  {
    id: 2,
    title: '2020 윈터 세일 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-12-14',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter03.jpg' },
    ],
    mobileImage: [],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter-src01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter-src02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/winter-src03.jpg' },
    ]
  },
  {
    id: 3,
    title: '2020 보다나 어워즈 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-12-11',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards04.jpg' },
    ],
    mobileImage: [],
    source: [],
  },
  {
    id: 4,
    title: '보다나 8주년 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-11-09',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th05.jpg' },
    ],
    mobileImage: [],
    source: [],
  },
  {
    id: 5,
    title: '가을 세일 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-09-24',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn05.jpg' },
    ],
    mobileImage: [],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn-src01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn-src02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn-src03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn-src04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn-src05.jpg' },
      { id: 6, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/autumn-src06.jpg' },
    ],
  },
  {
    id: 6,
    title: '신제품 기대평 댓글 참여 이벤트 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-08-24',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink05.jpg' },
      { id: 6, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pink06.jpg' },
    ],
    mobileImage: [],
    source: [],
  },
  {
    id: 7,
    title: '여름 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-07-15',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer_04.jpg' },
    ],
    mobileImage: [],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/summer-src05.jpg' },
    ]
  },
  {
    id: 8,
    title: '앱 다운로드 혜택 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인', '웹 퍼블리싱'],
    created_at: '2020-05-04',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/appdown_01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/appdown_02.jpg' },
    ],
    mobileImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/appdown-mobile_01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/appdown-mobile_02.jpg' },
    ],
    source: [],
    url: 'https://voshop.co.kr/board/board.html?code=vodana_image11&page=1&type=v&board_cate=&num1=999999&num2=00000&number=1&lock=N',
  },
];

const Promotion = ({ promotionRef }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= promotionRef.current.offsetTop * 0.2) {
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
      <ProjectWrapper ref={promotionRef} className={fadeIn && 'fadeIn'}>
        <div className="inner">
          <h1>이벤트 프로모션 페이지</h1>
          <div className="project-list">
            <ul>
              { promotion.map((item) => (
                  <PromotionItem key={item.id} promotion={item} />
              ))}
            </ul>
          </div>
        </div>
      </ProjectWrapper>
    </>
  );
};

export default Promotion;
