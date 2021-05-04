import React from 'react';

import { MainWrapper } from './styles';

const Main = () => {
  return (
    <MainWrapper>
      <div className="inner">
        <div className="intro-title">
          <h1>안녕하세요.</h1>
          <h2>
            <strong>웹 프론트엔드</strong>를 목표로 하고 있는 <strong>최현욱</strong> 입니다.
          </h2>
        </div>
        <div className="intro-content">
          <p>
            컴퓨터와 무관한 산업디자인과를 졸업하여 디자이너로 직장을 다닌 뒤 코딩에 대한 첫 걸음은 2017년 부터
            시작했습니다.
            <br />
            국가에서 진행하는 프로그램에 참여한 후 취업을 했지만 단순한 쇼핑몰을 관리하는 일이었습니다.
          </p>
          <p>
            제가 만든 쇼핑몰이 아닌 쇼핑몰 솔루션의 도움을 얻어 진행하는 업무였습니다. 처음에는 코딩을 한다라는 생각이
            들었지만,
            <br />
            점차 누군가가 잘 만든 시설을 이용만 하고 있는 느낌이 들었습니다. <br />그 이후로 내가 직접 개발을 하고
            싶다는 생각이 들었고, 개발에 대한 욕심은 더 커져만 갔습니다.
          </p>
          <p>
            그래서 3년간 다니던 직장을 그만두고 제대로 웹 프론트엔드 대한 공부를 진행하면서 그 동안 우물안 개구리로
            지냈다는 것을 깨달았습니다.
            <br />
            뭔가 결심해서 했다는 그런 내용 넣어보자.
          </p>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Main;
