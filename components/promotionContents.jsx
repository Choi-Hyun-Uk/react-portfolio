import React from 'react';
import SnsContentsItem from './snsContentsItem';

const PromotionContents = ({ item }) => {
    return (
        <>
            <div className="image-box pc-version">
                <div className="text-box common-text">
                    <h3>공통 내용</h3>
                    <p>
                        모든 이벤트 기획은 마케팅, 온라인MD 부서에서 기획 되었으며,<br />
                        그래픽 소스, 상세페이지 디자인 작업 및 웹 퍼블리싱까지 개인 작업으로 진행 되었습니다.
                    </p>
                </div>
                {item.concept && (
                <div className="text-box detail-text">
                    <h3>상세 내용</h3>
                    {item.concept.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                )}
                {item.pcImage.map((item) => (
                    <div key={item.id}>
                        <img key={item.id} src={item.src} alt={item.title} />
                    </div>
                ))}
            </div>
            {item.mobileImage.length > 0 && (
                <div className="image-box m-version">
                    {item.mobileImage.map((item) => (
                        <div key={item.id}>
                            <img key={item.id} src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
            )}
            {item.source.length > 0 &&
                <div className="image-box image-source">
                    <h3>그래픽 소스</h3>
                    {item.source.map((item) => (
                        <div key={item.id}>
                            <img key={item.id} src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
            }
            {item.snsImage?.length > 0 &&
                <div className="image-box sns-image">
                    <h3>SNS 광고 이미지</h3>
                    <div>
                        {item.snsImage.map((item) => <SnsContentsItem key={item.id} item={item}/>)}
                    </div>
                </div >
            }
        </>
    )
}

export default PromotionContents;