import React, { useEffect, useState } from 'react';
import { ProjectWrapper } from './styles';
import ProductItem from './productItem';

const product = [
  {
    id: 1,
    name: 'product',
    title: '미식초 두피 케어 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2021-01',
    participation: ['디자인 100%', '기획 50%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana03',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1113178',
    images: [
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_01.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_02.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_03.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_04.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_05.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_06.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_07.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_08.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_09.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_top_10.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_01.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_02.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_03.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_04.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_05.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_06.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_07.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/rice_vineger_390_set_bottom_08.jpg'},
    ],
  },
  {
    id: 2,
    name: 'product',
    title: '진동 브러쉬 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2020-09',
    participation: ['디자인 100%', '기획 50%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana02',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1104256',
    images: [
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_01.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_02.gif'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_03.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_04.gif'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_05.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_06.gif'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_07.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_08.gif'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_09.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_10.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/relaxing_ion_brush_11.jpeg'},
    ],
  },
  {
    id: 3,
    name: 'product',
    title: '봉고데기 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2020-03',
    participation: ['디자인 80%', '기획 30%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana04',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1104679',
    images: [
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/Pinkstyling_detailpage_01.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/Pinkstyling_detailpage_02.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/BubbleForm_video.gif', style: true},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/Pinkstyling_detailpage_03.jpeg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/Serum_use_beforeAfter.gif', style: true},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/Pinkstyling_detailpage_04.jpeg'},
    ],
  },
  {
    id: 4,
    name: 'product',
    title: '판고데기 제품 상세페이지',
    brand: 'vodana',
    category: ['제품 상세 이미지 디자인'],
    created_at: '2020-02',
    participation: ['디자인 100%', '기획 50%'],
    thumbnail: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/vodana01',
    url: 'http://voshop.co.kr/shop/shopdetail.html?branduid=1097944',
    images: [
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_01.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_02.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_03.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_04.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_use_video.gif', style: true},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_05.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_06.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_07.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_08.jpg'},
      {url : 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/softbar_flat_purple_09.jpg'},
    ],
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
          <h1>제품 상세 이미지</h1>
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
