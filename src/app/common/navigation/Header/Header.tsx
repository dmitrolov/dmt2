import React from 'react';
import './Header.scss';

interface Header {
  onMenuButtonClick: () => void
}

export function Header(props: Header) {
  return (
    <div className='header'>
      <button className="menu-button" onClick={ props.onMenuButtonClick }>menu</button>
      <h3>Character name & owner</h3>
    </div>
  );
}
