import React from 'react';

const ProductContents = ({ item }) => {

    return (
        <>
            <div className="image-box product-box">
                <div className="text-box common-text">
                    <h3>업무 내용</h3>
                    <p>
                        제품 기획팀에서 컨텐츠 및 제품 정보 전달 뱓게되며,<br />
                        제품 정보에 맞는 그래픽 소스 제작, 제품 합성 및 상세 페이지 제작 됩니다.<br />
                        또한, 전달 받은 내용 중 금지어 또는 추가 및 삭제되야 할 내용 피드백 전달 후 내용 전반적으로 수정하여<br />
                        최종 제품 기획팀께 컨펌 요청 후 업로드 되는 프로세스로 진행되었습니다.
                    </p>
                </div>
                <div className="product-image">
                    {item.images.map((item, index) => (
                        <img key={index} src={item.url} alt='제품 상세 이미지' style={item.style && {margin: '4rem 0'}}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductContents;