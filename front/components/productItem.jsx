import React, { useState, useCallback } from 'react';
import { PromotionItemWrap } from './styles';
import ImageModal from './imageModal';

const ProductItem = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickImage = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, [isOpen]);

    return (
        <>
            <PromotionItemWrap onClick={onClickImage}>
                <div className="thumbnail">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <p className="title">{product.title}</p>
                <div className="other">
                    <p>{product.created_at}</p>
                    <p>{product.category}</p>
                </div>
                <div className="participation"><span>작업 참여도 :</span>{product.participation.map((text, index) => <p key={index}>{text}</p>)}</div>
            </PromotionItemWrap>
            <ImageModal item={product} isOpen={isOpen} onClickImage={onClickImage}/>
        </>
    )
}

export default ProductItem;