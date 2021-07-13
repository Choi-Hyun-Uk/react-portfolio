import React, { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ImageModalWrap, ImageModalContent } from './styles';

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
                        <p>작업 참여도 : 디자인 100%</p>
                    </div>
                    <h4>브랜드 : {item.brand}</h4>
                </div>
                <div className="image-box">
                    {item.image.map((item) => (
                        <div key={item.id}>
                            <img key={item.id} src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
                <button className="close-btn" onClick={onClickImage}>
                    <RiCloseFill />
                </button>
                {item.source.length > 0 &&
                    <div className="image-source">
                        <h3>그래픽 소스</h3>
                        {item.source.map((item) => (
                            <div key={item.id}>
                                <img key={item.id} src={item.src} alt={item.title} />
                            </div>
                        ))}
                    </div>
                }
            </ImageModalContent>
        </ImageModalWrap>
    )
}

export default ImageModal;