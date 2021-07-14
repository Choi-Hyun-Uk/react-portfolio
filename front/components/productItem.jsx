import React from 'react';
import { PromotionItemWrap } from './styles';

const ProductItem = ({ product }) => {
    return (
        <>
            <PromotionItemWrap>
                <div className="thumbnail">
                    <a href={product.url} target="_blank"><img src={product.thumbnail} alt={product.title} /></a>
                </div>
                <p className="title">{product.title}</p>
                <div className="other">
                    <p>{product.created_at}</p>
                    <p>{product.category}</p>
                </div>
                <div className="participation"><span>작업 참여도 :</span>{product.participation.map((text, index) => <p key={index}>{text}</p>)}</div>
            </PromotionItemWrap>
        </>
    )
}

export default ProductItem;