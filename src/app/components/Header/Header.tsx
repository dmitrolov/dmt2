import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../img/default-user-icon-4.jpg';
import logo from '../../../img/dndLogo.png';
import './Header.scss';

interface Header {
  onMenuClick: () => void;
}

export function Header(props: Header) {
  return (
    <div className='header'>
      <Button type="primary" shape="round" icon="menu-fold" size={ 'default' }
              onClick={ props.onMenuClick } />
      <Link to={ '/' }><img className='header__logo' src={ logo } alt="" /></Link>
      <img className='header__userAvatar' src={ avatar } alt="" />
    </div>
  );
}
