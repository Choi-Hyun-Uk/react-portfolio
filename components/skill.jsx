import React from 'react';
import { SkillWrapper, SkillList } from './styles';

const Skill = () => {
  return (
    <SkillWrapper>
      <div className="inner">
        <h1>SKILL</h1>
        <div>
          <div className="front">
            <SkillList>
              <li>
                <span>Illustrator</span>
                <div className="percent">
                  <div className="p-90">90%</div>
                </div>
              </li>
              <li>
                <span>Photoshop</span>
                <div className="percent">
                  <div className="p-80">80%</div>
                </div>
              </li>
              <li>
                <span>HTML</span>
                <div className="percent">
                  <div className="p-80">80%</div>
                </div>
              </li>
              <li>
                <span>CSS</span>
                <div className="percent">
                  <div className="p-70">70%</div>
                </div>
              </li>
              <li>
                <span>SCSS</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>Javascript</span>
                <div className="percent">
                  <div className="p-70">70%</div>
                </div>
              </li>
              {/* <li>
                <span>Typescript</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>React JS</span>
                <div className="percent">
                  <div className="p-70">70%</div>
                </div>
              </li> */}
              {/* <li>
                <span>Next JS</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>Redux</span>
                <div className="percent">
                  <div className="p-80">80%</div>
                </div>
              </li>
              <li>
                <span>Redux Toolkit</span>
                <div className="percent">
                  <div className="p-80">80%</div>
                </div>
              </li>
              <li>
                <span>Redux Saga</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li>
              <li>
                <span>Node JS</span>
                <div className="percent">
                  <div className="p-60">60%</div>
                </div>
              </li> */}
            </SkillList>
          </div>
        </div>
      </div>
    </SkillWrapper>
  );
};

export default Skill;
