import React from 'react';
import { SkillWrapper } from './styles';

const Skill = () => {
  return (
    <SkillWrapper>
      <div className="inner">
        <h1>SKILL</h1>
        <div>
          <div className="front">
            <h2>FRONT</h2>
            <ul>
              <li>
                <span>Javascript</span>
              </li>
              <li>
                <span>React JS</span>
              </li>
              <li>
                <span>Next JS</span>
              </li>
              <li>
                <span>Redux</span>
              </li>
              <li>
                <span>Redux Saga</span>
              </li>
            </ul>
          </div>
          <div className="back">
            <h2>BACK</h2>
            <ul>
              <li>
                <span>Node JS</span>
              </li>
              <li>
                <span>Express</span>
              </li>
              <li>
                <span>Sequelize</span>
              </li>
              <li>
                <span>MySQL</span>
              </li>
              <li>
                <span>AWS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SkillWrapper>
  );
};

export default Skill;
