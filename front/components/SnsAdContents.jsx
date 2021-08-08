import React from 'react';

const SnsAdContents = ({ item }) => {

    return (
        <>
            <div className="image-box product-box">
                <div className="text-box common-text">
                    <h3>작업 내용</h3>
                    <p>{item.concept}</p>
                </div>
                <div className="product-image">
                    {item.images.map((item) => (
                        <img key={item.id} src={item.src} alt={item.title} style={{ margin: '1rem 0' }}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SnsAdContents;