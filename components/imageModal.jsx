import React, { useEffect } from 'react';
import { ImageModalWrap, ImageModalContent } from './styles';
import { RiCloseFill } from 'react-icons/ri';

import PromotionContents from './promotionContents';
import ProductContents from './productContents';

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
                {item.name === 'promotion' && <PromotionContents item={item} />}
                {item.name === 'product' && <ProductContents item={item} />}
                <button className="close-btn" onClick={onClickImage}>
                    <RiCloseFill />
                </button>
            </ImageModalContent>
        </ImageModalWrap>
    )
}

export default ImageModal;