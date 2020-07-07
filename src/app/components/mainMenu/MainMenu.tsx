import { ClickAwayListener } from '@material-ui/core';
import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import { FaHome } from 'react-icons/all';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';
import './MainMenu.sass';

interface MainMenuProps {
  clientWindowResolution: {
    width: number;
    height: number;
  }
}

const MainMenu = (props: MainMenuProps) => {
  const [open, setOpen] = React.useState(false);

  const { width, height } = props.clientWindowResolution;
  const menuSize = width < height ? width * 0.8 : height * 0.8;

  useEffect(() => {
    const mainMenuContainer = document.getElementsByClassName('main-menu-container')[0];
    mainMenuContainer.addEventListener('touchmove', e => e.preventDefault(), false);
  }, []);

  const renderMenu = (menuSize: number) => {
    const backButtonSize = menuSize / 4;
    const backButtonIconSize = menuSize / 5;

    return <div className='main-menu'>
      { renderMenuItems(menuOptions.menuButtons, menuSize) }
      <div className='main-menu-item-container' style={ {
        width: backButtonSize,
        height: backButtonSize
      } }>
        <Link to={ ROUTES.HOME } onClick={ () => {setOpen(false);} }>
          { menuOptions.returnButton.icon?.call(null, {
            style: {
              width: backButtonIconSize,
              height: backButtonIconSize
            }
          }) }
        </Link>
      </div>
    </div>;
  };

  const renderMenuItems = (menuOptions: { name: string, link: string }[], menuSize: number) => {
    return menuOptions.map((option, index) => {
      const rotationStep = 360 / menuOptions.length;

      return <div className='main-menu__item' style={ {
        transform: `rotate(${ index * rotationStep }deg)`,
        width: menuSize / 2 - 6,
        height: menuSize / 3,
        marginLeft: -menuSize / 4 + 3
      } }>
        <div className='main-menu-item-container' style={ {
          transform: `rotate(-${ (index) * rotationStep }deg)`,
          width: menuSize / 3.5,
          height: menuSize / 3.5
        } }>
          <Link to={ option.link } onClick={ () => {setOpen(false);} }>{ option.name }</Link>
        </div>
      </div>;
    });
  };

  return (
    <>
      <ClickAwayListener onClickAway={ () => setOpen(false) }>
        <div className={ open ? 'main-menu-container opened' : 'main-menu-container' }
             onClick={ open ? () => {} : () => setOpen(!open) }
             style={ open ? {
               width: menuSize,
               height: menuSize,
               maxHeight: menuSize
             } : {} }
        >
          { open && renderMenu(menuSize) }
        </div>
      </ClickAwayListener>
    </>

  );
};

interface MenuOptions {
  returnButton: MenuItemOption
  menuButtons: MenuItemOption[]
}

interface MenuItemOption {
  name: string,
  link: string,
  icon?: IconType,
}

const menuOptions: MenuOptions = {
  returnButton: { name: 'Главная', link: ROUTES.HOME, icon: FaHome },
  menuButtons: [
    { name: 'Вход', link: ROUTES.SIGN_IN },
    { name: 'Регистрация', link: ROUTES.SIGN_UP },
    { name: 'Создать приключение', link: ROUTES.ADVENTURE_CREATE },
    { name: 'Мои приключения', link: ROUTES.ADVENTURE_LIST },
    { name: 'Создать персонажа', link: '/adventure/view/Djadame/character/create' },
    { name: 'a_a char', link: '/adventure/view/Djadame/character/view/a_a' }
  ]
};

export default connect(null, null)(MainMenu);
