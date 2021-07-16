import React, { useEffect, useState } from 'react';
import { ProjectWrapper } from './styles';
import ProductItem from './productItem';

const product = [
  {
    id: 3,
    title: '미식초 두피 케어 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2021-01',
    participation: ['디자인 100%', '기획 50%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana03',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1113178',
  },
  {
    id: 2,
    title: '진동 브러쉬 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2020-09',
    participation: ['디자인 100%', '기획 50%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana02',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1104256',
  },
  {
    id: 4,
    title: '봉고데기 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2020-03',
    participation: ['디자인 80%', '기획 30%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana04',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1104679',
  },
  {
    id: 1,
    title: '판고데기 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2020-02',
    participation: ['디자인 100%', '기획 50%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana01',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1097944',
  },
];

const ProductDetail = ({ productRef }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= productRef.current.offsetTop * 0.8) {
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
      <ProjectWrapper ref={productRef} className={fadeIn && 'fadeIn'}>
        <div className="inner">
          <h1>
            제품 상세 이미지
            <p>섬네일 이미지 클릭 시 해당 제품 페이지로 이동 됩니다.</p>
          </h1>
          
          <div className="design-list-box">
            <ul>
              { product.map((item) => (
                  <ProductItem key={item.id} product={item} />
              ))}
            </ul>
          </div>
        </div>
      </ProjectWrapper>
    </>
  );
};

export default ProductDetail;
