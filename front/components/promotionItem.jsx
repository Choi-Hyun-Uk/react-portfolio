import React, { useCallback, useState } from 'react';
import { PromotionItemWrap } from './styles';
import ImageModal from './imageModal';

const PromotionItem = ({ promotion }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickImage = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, [isOpen]);

    return (
        <>
            <PromotionItemWrap onClick={onClickImage}>
                <div className="thumbnail">
                    <img src={promotion.pcImage[0].src} alt={promotion.title} />
                </div>
                <p className="title">{promotion.title}</p>
                <div className="other">
                    <p>{promotion.created_at}</p>
                    <p>{promotion.category}</p>
                </div>
            </PromotionItemWrap>
            <ImageModal item={promotion} isOpen={isOpen} onClickImage={onClickImage}/>
        </>
    )
}

export default PromotionItem;