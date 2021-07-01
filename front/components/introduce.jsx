import React, { useCallback, useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ListItem } from './styles';

const Introduce = ({ title, content }) => {
  const [done, setDone] = useState(false);
  const onClickHeight = useCallback(() => {
    setDone(!done);
  }, [done]);

  return (
    <ListItem className={done ? 'active' : null}>
      <h2 onClick={onClickHeight}>
        {title}
        <MdKeyboardArrowDown />
      </h2>
      <p>{content}</p>
    </ListItem>
  );
};

export default Introduce;
