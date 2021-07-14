import React, { useCallback, useState } from 'react';
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
      <div className="content-box">{content.map((text, index) => <p key={index}>{text}</p>)}</div>
    </ListItem>
  );
};

export default Introduce;
