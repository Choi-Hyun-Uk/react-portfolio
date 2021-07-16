import React from 'react';

const SnsContentsItem = ({ item }) => {
    return (
        <div>
            <img src={item.src} alt="SNS광고이미지" />
        </div>
    )
}

export default SnsContentsItem;