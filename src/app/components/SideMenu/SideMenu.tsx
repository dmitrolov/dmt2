import { Drawer } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
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

  const renderMenuList = () => {
    return <div className='menu-list'>
      <div className="menu-list__item">
        <Link to={ ROUTES.HOME }>Главная</Link>
      </div>
      <div className="menu-list__item">
        <Link to={ ROUTES.SIGN_IN }>Вход</Link>
      </div>
      {
        props.isMobileMenuView
          ? null
          : <div className="menu-list__item no-padding">
            <Switch onChange={ () => setState({ ...state, isMenuCollapsed: !state.isMenuCollapsed }) } />
            <span className={ !state.isMenuCollapsed ? 'text' : 'text-collapsed' }>Collapse menu</span>
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
