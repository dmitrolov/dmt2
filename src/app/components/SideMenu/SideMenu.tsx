import { Drawer } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import HomeIcon from '@material-ui/icons/Home';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './SideMenu.sass';

interface SideMenuProps {
  isMobileMenuView: boolean;
  isMenuCollapsed: boolean;
  isMenuOpened: boolean;
  onClose: () => void;
}

interface SideMenuState {
  isMenuCollapsed: boolean;
}

export const SideMenu = (props: SideMenuProps) => {
  const [state, setState] = useState<SideMenuState>({
    isMenuCollapsed: props.isMenuCollapsed
  });

  const renderMenuItem = (route: string, staticItem: JSX.Element, text: string) => {
    return <div className='menu-list__item'>
      <Link to={ route } className='menu-list__link'>
        <div className='menu-list__static-item'>{ staticItem }</div>
        <div className={ !state.isMenuCollapsed ? 'menu-list__text' : 'menu-list__text--collapsed' }>
          <span>{ text }</span>
        </div>
      </Link>
    </div>;
  };

  const renderMenuList = () => {
    return <div className='menu-list'>
      { renderMenuItem(ROUTES.HOME, <HomeIcon />, 'Главная') }
      { renderMenuItem(ROUTES.SIGN_IN, <ExitToAppIcon />, 'Вход') }
      {
        !props.isMobileMenuView &&
        <div className='menu-list__item switch'>
          <Switch
            checked={ !state.isMenuCollapsed }
            onChange={ () => setState({ ...state, isMenuCollapsed: !state.isMenuCollapsed }) } />
          <span
            className={ !state.isMenuCollapsed ? 'menu-list__text' : 'menu-list__text--collapsed' }>COLLAPSE MENU
          </span>
        </div>
      }
    </div>;
  };

  return <>
    {
      props.isMobileMenuView
        ?
        <Drawer
          open={ props.isMenuOpened }
          onClose={ props.onClose }
        >
          <div
            className='side-menu side-menu--mobile'
            onClick={ props.onClose }
            onKeyDown={ props.onClose }
          >
            { renderMenuList() }
          </div>
        </Drawer>
        :
        <div
          className={ `side-menu side-menu--desktop ${ state.isMenuCollapsed ? 'collapsed' : '' } ${ !props.isMenuOpened ? 'closed' : '' }` }>
          { renderMenuList() }
        </div>
    }
  </>;
};
