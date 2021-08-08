import React, { useEffect, useState } from 'react';

import { ProjectWrapper } from './styles';
import PromotionItem from './promotionItem';

const promotion = [
  {
    id: 1,
    name: 'promotion',
    title: '2021 설날 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2021-02-01',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `온라인으로 통해 대면하는 방식을 가르키는 언택트와 설날을 합친 설택트의 주제로 진행 되었습니다.`,
      `메인 컬러의 핑크는 기업의 브랜드를 나타내는 컬러이며,`,
      `그래픽 소스는 언택트 컨셉에 맞는 느낌의 모습으로 작업 했습니다.`,
    ],
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
    name: 'promotion',
    title: '2020 윈터 세일 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-12-14',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `크리스마스 주제로 귀여운 캐릭터와 재미있는 컨셉으로 제작 되었습니다.`,
      `메인 컬러는 크리스마스 분위기와 맞는 그린, 레드를 사용했으며,`,
      `그래픽 소스는 여러 매체에서 사용할 수 있도록 타이틀 디자인, 산트 캐릭터, 크리스마스 느낌의 오브젝트 등을 제작했습니다.`,
    ],
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
    ],
  },
  {
    id: 3,
    name: 'promotion',
    title: '2020 보다나 어워즈 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-12-11',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `고급스러운 분위기의 컨셉으로 메인 작업을 진행 했으며,`,
      `트로피와 파티클은 디자인 소스 라이센스를 구하여 작업 되었습니다.`,
      `그 외의 트로피 로고 합성, 타이틀 작업 등 제작을 했습니다.`,
    ],
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
    name: 'promotion',
    title: '보다나 8주년 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-11-09',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `별이 빛나는 밤 주제로 아래에서 어두운 밤 하늘을 처다보는 컨셉으로 메인 디자인을 작업 했습니다.`,
      `메인 디자인은 구름, 별, 배경색, 빛 등 모두 각각 합성 작업하여 만들었으며,`,
      `그 외에 컨텐츠에 필요한 그래픽 소스 제작을 했습니다.`,
    ],
    pcImage: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th02.jpg' },
      { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th03.jpg' },
      { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th04.jpg' },
      { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th05.jpg' },
    ],
    mobileImage: [],
    source: [
      { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th-src01.jpg' },
      { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/8th-src02.jpg' },
    ],
  },
  {
    id: 5,
    name: 'promotion',
    title: '가을 세일 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-09-24',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `알집을 열어 이벤트를 확인한다는 주제로 기획된 이벤트 프로모션입니다.`,
      `알집을 깨고 나온 귀여운 캐릭터를 제작을 했으며, 가을 분위기에 맞는 톤다운된 컬러를 사용했습니다.`,
    ],
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
    name: 'promotion',
    title: '신제품 기대평 댓글 참여 이벤트 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-08-24',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `물결 웨이브를 넣는 제품의 특성에 맞게 밝고, 귀여운 느낌으로 제작 되었습니다.`,
      `타이틀 디자인과 물결 패턴 디자인만으로 진행했습니다.`,
    ],
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
    name: 'promotion',
    title: '여름 이벤트 프로모션 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
    created_at: '2020-07-15',
    participation: ['디자인 100%', '웹퍼블리싱 100%'],
    concept: [
      `여름 주제로 제작 되었으며, 타이틀 디자인을 중점으로 진행 되었습니다.`,
      `여러 매체에서 사용할 수 있도록 타이틀을 가로, 세로 각 디자인 하였고,`,
      `인물 구도는 이미지를 조사하여 참고 후 제작 되었습니다.`,
    ],
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
    ],
  },
  {
    id: 8,
    name: 'promotion',
    title: '앱 다운로드 혜택 상세페이지',
    brand: 'vodana',
    category: ['웹 디자인'],
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
          <h1>이벤트 프로모션</h1>
          <div className="design-list-box">
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
