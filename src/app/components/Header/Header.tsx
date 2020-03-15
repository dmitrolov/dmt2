import React from 'react';
import './Header.scss';

interface Header {
  onMenuButtonClick: () => void
}

export function Header(props: Header) {
  return (
    <div className='header'>
      <div className="menu-button" onClick={ props.onMenuButtonClick }>click me</div>
    </div>
  );
}
