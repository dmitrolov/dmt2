import { Breadcrumb, Button, Icon } from 'antd';
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

interface Header {
  onMenuClick: () => void;
}

export function Header(props: Header) {
  return (
    <div className='header'>
      <Button type="primary" shape="round" icon="menu-fold" size={ 'default' }
              onClick={ props.onMenuClick } />
      <Breadcrumb style={{maxWidth: 240}}>
        <Breadcrumb.Item><Link to={'/'}><Icon type="home" /></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={'/'}><span>Приключения</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={'/'}><span>Джадам</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={'/'}><span>Персонаж</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={'/'}><span>Гремми</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={'/'}><span>О персонаже</span></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to={'/'}><span>Характеристики</span></Link></Breadcrumb.Item>
      </Breadcrumb>
      {/*<Link to={ '/' }><img className='header__logo' src={ logo } alt="" /></Link>*/ }
      {/*<img className='header__userAvatar' src={ avatar } alt="" />*/ }
    </div>
  );
}
