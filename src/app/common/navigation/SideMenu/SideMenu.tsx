import { Drawer } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../routes';
import './SideMenu.sass';
import { connect } from 'react-redux';
import { ClientWindowResolution } from '../../../types/window/window';

interface SideMenuProps {
  windowData?: ClientWindowResolution;
  isMenuOpened: boolean;
  onClose: () => void;
}

interface SideMenuState {
  isMenuCollapsed: boolean;
}

const SideMenu = (props: SideMenuProps) => {
  const [state, setState] = useState<SideMenuState>({
    isMenuCollapsed: false
  });

  const renderMenuItem = (route: string, staticItem: JSX.Element, text: string) => {
    return <div className='menu-list__item'>
      <Link to={route} className='menu-list__link'>
        <div className='menu-list__static-item'>{staticItem}</div>
        <div className={!state.isMenuCollapsed ? 'menu-list__text' : 'menu-list__text collapsed'}>
          <span>{text}</span>
        </div>
      </Link>
    </div>;
  };

  const renderMenuList = () => {
    return <div className='menu-list'>
      <div>
        {renderMenuItem(ROUTES.DASHBOARD, <HomeIcon />, 'Главная')}
        {renderMenuItem(ROUTES.ADVENTURE_CREATE, <AddIcon />, 'Создать приключение')}
        {renderMenuItem(ROUTES.ADVENTURE_LIST, <ListIcon />, 'Мои приключения')}
        {renderMenuItem('/game/adventure/view/Djadame/character/create', <PersonAddIcon />, 'Создать персонажа')}
        {renderMenuItem('/game/adventure/view/Djadame/character/view/gremmy', <FaceIcon />, 'gremmy')}
        {renderMenuItem('/game/adventure/view/Djadame/character/view/klinfort', <FaceIcon />, 'klinfort char')}
        {renderMenuItem('/game/adventure/view/Djadame/character/view/skarlet', <FaceIcon />, 'skarlet char')}
      </div>
      <div>
        {renderMenuItem(ROUTES.SIGN_IN, <AccountCircleIcon />, 'Вход')}
        {renderMenuItem(ROUTES.SIGN_UP, <AccountCircleIcon />, 'Регистрация')}
        {
          !props.windowData?.isMobile &&
          <div className='menu-list__item switch'>
            <Switch
              checked={!state.isMenuCollapsed}
              onChange={() => setState({ ...state, isMenuCollapsed: !state.isMenuCollapsed })} />
            <span
              className={!state.isMenuCollapsed ? 'menu-list__text' : 'menu-list__text collapsed'}>COLLAPSE MENU
          </span>
          </div>
        }
      </div>
    </div>;
  };

  return props.windowData?.isMobile
    ? <Drawer
      open={props.isMenuOpened}
      onClose={props.onClose}>
      <div
        className='side-menu side-menu--mobile'
        onClick={props.onClose}
        onKeyDown={props.onClose}>
        {renderMenuList()}
      </div>
    </Drawer>
    : <div
      className={`side-menu side-menu--desktop ${state.isMenuCollapsed ? 'collapsed' : ''} ${!props.isMenuOpened ? 'closed' : ''}`}>
      {renderMenuList()}
    </div>;
};

const mapStateToProps = (state: SideMenuProps) => {
  return ({
    windowData: state.windowData,
  })
}

export default connect(mapStateToProps, null)(SideMenu);