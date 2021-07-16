import React, { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ImageModalWrap, ImageModalContent, SnsContentsWrap } from './styles';
import SnsContentsItem from './snsContentsItem';

const ImageModal = ({ item, isOpen, onClickImage }) => {
    
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        const bodyClass = body.classList.contains('not-scroll');
        if (bodyClass || !isOpen) {
            body.classList.remove('not-scroll');
        } else {
            body.classList.add('not-scroll');
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <ImageModalWrap>
            <ImageModalContent isOpen={isOpen}>
                <div className="head">
                    <h3>{item.title}</h3>
                    <div>
                        <p>{item.created_at}</p>
                        <p>{item.category}</p>
                    </div>
                    <div className="participation">
                        <span>작업 참여도 :</span>
                        {item.participation.map((text, index) => <p key={index}>{text}</p>)}
                    </div>
                    <h4>브랜드 : {item.brand}</h4>
                    {item.url
                        ? <div className="link-box">URL : <a href={item.url} target="_blank">링크</a></div>
                        : <div className="link-box-none">현재 링크가 닫혀 있습니다.</div>
                    }
                </div>
                <div className="image-box pc-version">
                    <h3>PC 버전</h3>
                    {item.pcImage.map((item) => (
                        <div key={item.id}>
                            <img key={item.id} src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
                {item.mobileImage.length > 0 && (
                    <div className="image-box m-version">
                        <h3>MOBILE 버전</h3>
                        {item.mobileImage.map((item) => (
                            <div key={item.id}>
                                <img key={item.id} src={item.src} alt={item.title} />
                            </div>
                        ))}
                    </div>
                )}
                <button className="close-btn" onClick={onClickImage}>
                    <RiCloseFill />
                </button>
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
            </ImageModalContent>
        </ImageModalWrap>
    )
}

export default ImageModal;