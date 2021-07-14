import React, { useCallback, useState } from 'react';
import { PromotionItemWrap } from './styles';
import ImageModal from './imageModal';

const PromotionItem = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickImage = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, [isOpen]);

    return (
        <>
            <PromotionItemWrap onClick={onClickImage}>
                <div className="thumbnail">
                    <img src={post.pcImage[0].src} alt={post.title} />
                </div>
                <p className="title">{post.title}</p>
                <div className="other">
                    <p>{post.created_at}</p>
                    <p>{post.category}</p>
                </div>
            </PromotionItemWrap>
            <ImageModal item={post} isOpen={isOpen} onClickImage={onClickImage}/>
        </>
    )
}

export default PromotionItem;