import React, { useState, useEffect } from 'react';
import { SnsContentsWrap } from './styles';
import SnsAdItem from './snsAdItem';

const posts = [
    {
        id: 5,
        name: 'snsad',
        title: '어워즈 이벤트 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2020-12-11',
        participation: ['디자인 100%'],
        concept: [
            `트로피, 글리터를 제외한 그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards-sns01.jpeg' },
            { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards-sns02.jpeg' },
            { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/awards-sns03.jpeg' }
        ]
    },
    {
        id: 1,
        name: 'snsad',
        title: '여신강림 제작지원 광고',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2020-12-09',
        participation: ['디자인 100%'],
        concept: [
            `여신강림 포스터를 제외한 그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/sns01.jpeg' }
        ]
    },
    {
        id: 6,
        name: 'snsad',
        title: '12월 올리브영 행사 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2020-12-02',
        participation: ['디자인 100%'],
        concept: [
            `리본, 선물상자, 트리장식 제외한 그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/oliveyoung-sns01.jpg' },
            { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/oliveyoung-sns02.jpg' },
            { id: 3, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/oliveyoung-sns03.jpg' },
            { id: 4, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/oliveyoung-sns04.jpg' },
            { id: 5, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/oliveyoung-sns05.jpg' },
        ]
    },
    {
        id: 2,
        name: 'snsad',
        title: '신제품 출시 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2020-09-11',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/sns02.jpeg' }
        ]
    },
    {
        id: 9,
        name: 'snsad',
        title: '빼빼로데이 이벤트 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2019-11-01',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/pepero.jpg' },
        ]
    },
    {
        id: 3,
        name: 'snsad',
        title: '10월 올리브영 행사 광고',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2019-10-11',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/sns03.jpeg' }
        ]
    },
    {
        id: 7,
        name: 'snsad',
        title: '2019 추석 이벤트 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2019-09-11',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/2019-chuseok01.jpg' },
            { id: 2, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/2019-chuseok02.jpg' },
        ]
    },
    {
        id: 8,
        name: 'snsad',
        title: '주말 특가 이벤트 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2019-06-15',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/weeksale.jpg' },
        ]
    },
    {
        id: 10,
        name: 'snsad',
        title: '2019 설날 이벤트 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2019-02-04',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/2019-seolnal.jpg' },
        ]
    },
    {
        id: 4,
        name: 'snsad',
        title: '팝업스토어 오픈 홍보',
        brand: 'vodana',
        category: ['SNS 광고 디자인'],
        created_at: '2018-10-25',
        participation: ['디자인 100%'],
        concept: [
            `그래픽 소스 및 이미지는 100% 제작 되었습니다.`,
        ],
        images: [
            { id: 1, src: 'https://react-blog-s3.s3.ap-northeast-2.amazonaws.com/original/sns04.jpeg' }
        ]
    },
]

const SnsAd = ({ snsAdRef }) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY >= snsAdRef.current.offsetTop * 0.825) {
            setFadeIn(true);
            }
        };
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, [setFadeIn]);

    return (
        <SnsContentsWrap ref={snsAdRef} className={fadeIn && 'fadeIn'}>
            <div className="inner">
                <h1>SNS 광고 이미지</h1>
                <div className="design-list-box">
                    <ul>
                        { posts.map((item) => (
                            <SnsAdItem key={item.id} post={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </SnsContentsWrap>
    )
}  

export default SnsAd;