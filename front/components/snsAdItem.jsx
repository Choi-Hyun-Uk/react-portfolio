import React, { useState, useCallback } from 'react';
import ImageModal from './imageModal';
import { PromotionItemWrap } from './styles';

const SnsAdItem = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickImage = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, [isOpen]);

    return (
        <>
            <PromotionItemWrap onClick={onClickImage}>
                <div className="thumbnail">
                    <img src={post.images[0].src} alt={post.title} />
                    { post.images.length > 1 && <div className="image-legnth"><span>+</span>{post.images.length - 1}</div> }
                </div>
                <p className="title">{post.title}</p>
                <div className="other">
                    <p>{post.created_at}</p>
                    <p>{post.category[0]}</p>
                </div>
            </PromotionItemWrap>
            <ImageModal item={post} isOpen={isOpen} onClickImage={onClickImage}/>
        </>
    )
}

export default SnsAdItem;
