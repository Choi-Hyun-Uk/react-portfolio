import React from 'react';
import { RiAddFill } from 'react-icons/ri';
import { MainWrapper } from './styles';

import Introduce from './introduce';

const intro = [
  {
    id: 1,
    title: '소통과 협업을 중요시하는 이유는?',
    content: [
      `실무에서 업무를 진행할 때에는 혼자하는 업무는 거의 없을 것 같습니다.
      팀 내부 혹은 다른 팀과 함께 일을 진행할 경우가 많습니다.`,

      `제가 처음 웹 디자이너라는 직무를 맡아 일을 했던 때에 소통과 협업에 대해 중요하게 생각하게 된 계기가 있습니다.`,

      `디자인 요청을 받는 과정에서 기획의 주제, 컨셉 등 대한 기획서 없이 업무를 진행 했었습니다.`,

      `당연하게도 결과는 저도 그렇지만, 콘텐츠를 기획한 담당자 또한 100% 마음에 들어하지 않았었습니다.`,

      `작업 외에 기획에 대해서 물어보는 대화가 작업하는 과정보다 더 많은 에너지를 소비해야 했기 때문이었습니다.`,

      `그 당시에는 업무 요청에 정의된 문서가 없었기 때문에 "자신의 생각을 정리하지 못하고 업무를 요청하게 되는 문제가 생기지 않았을까" 라는 생각이 들었고,
      더 나은 협업을 위해 업무요청서를 만든 뒤 여러 팀에게 공유해 체계를 잡는 계기가 되었습니다.`,

      `솔직히 어떤 결과가 나올지는 상상할 수 없었습니다. 제가 벌린 일이 더 안좋은 결과를 나타내지 않을까 했습니다.
      하지만, 다행스럽게도 업무요청서 라는 간단한 문서로 인해 서로간의 소통도 원활하게 이어지게 되었고,`,

      `그 결과 더 나은 협업으로 이루어져 재미있고 좋은 콘텐츠를 제공했다고 자부합니다.`,

      `또한 이러한 과정에서 기획 담당자와 디자이너간에 의견이 맞지 않을 수도 있겠지만 이런 부딪치는 부분도 협업의 과정이라 생각합니다.`,

      `위와 같은 경험으로 소통과 협업 또는 그 과정에 필요한 도구들이 얼마나 중요한지 알게 되었습니다.`,
    ],
  }
];

const Main = () => {
  return (
    <MainWrapper>
      <div className="inner">
        <div className="intro-title">
          <h1>안녕하세요.</h1>
          <div>
            <h2><strong>소통</strong> 과 <strong>협업</strong>에 노력하는</h2>
            <h2><strong>웹 디자이너</strong><RiAddFill /><strong>웹 퍼블리셔</strong></h2>
            <h2><strong>최현욱</strong> 입니다.</h2>
          </div>
        </div>
        <div className="intro-content">
          <ul className="list-wrapper">
            {intro.map((item) => (
              <Introduce key={item.id} title={item.title} content={item.content} />
            ))}
          </ul>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Main;
