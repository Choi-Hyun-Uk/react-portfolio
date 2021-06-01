import React, { useCallback, useState, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ListItem } from './styles';

const Introduce = ({ title, content }) => {
  const [done, setDone] = useState(false);
  const onClickHeight = useCallback(() => {
    setDone((prev) => !prev);
  }, []);

  return (
    <ul className="list-wrapper">
      <ListItem className={done ? 'active' : ''}>
        <h2 onClick={(e) => onClickHeight(e.currentTarget)}>
          {title}
          <MdKeyboardArrowDown />
        </h2>
        <p>{content}</p>
      </ListItem>
    </ul>
  );
};

export default Introduce;
