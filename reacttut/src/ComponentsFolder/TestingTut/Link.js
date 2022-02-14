import React, {useState} from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link = ({page, children}) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
     <>
     {status}
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
    </>
  );
};

export default Link;