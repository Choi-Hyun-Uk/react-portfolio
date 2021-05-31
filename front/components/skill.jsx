import React from 'react';
import { SkillWrapper } from './styles';

const Skill = () => {
  return (
    <SkillWrapper>
      <div className="inner">
        <h1>SKILL</h1>
        <div>
          <div className="front">
            <h2>Front End</h2>
            <ul>
              <li>
                <span>HTML</span>
                <div className="percent">
                  <div className="p-70">70%</div>
                </div>
              </li>
              <li>
                <span>CSS</span>
                <div className="percent">
                  <div className="p-70">70%</div>
                </div>
              </li>
              <li>
                <span>Javascript</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>React JS</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>Next JS</span>
                <div className="percent">
                  <div className="p-40">40%</div>
                </div>
              </li>
              <li>
                <span>Redux</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>Redux Toolkit</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>Redux Saga</span>
                <div className="percent">
                  <div className="p-40">40%</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="back">
            <h2>부가적인 기술</h2>
            <ul>
              <li>
                <span>Node JS</span>
                <div className="percent">
                  <div className="p-40">40%</div>
                </div>
              </li>
              <li>
                <span>Express</span>
                <div className="percent">
                  <div className="p-50">50%</div>
                </div>
              </li>
              <li>
                <span>Sequelize</span>
                <div className="percent">
                  <div className="p-30">30%</div>
                </div>
              </li>
              <li>
                <span>Passport</span>
                <div className="percent">
                  <div className="p-50">50%</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SkillWrapper>
  );
};

export default Skill;
