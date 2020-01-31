import { Icon, Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './SideMenu.sass';

const { SubMenu } = Menu;

interface SideMenu {
  isMobileMenuView: boolean
  isMenuCollapsed: boolean
}

interface MenuItem {
  name: string;
  icon?: string;
  link?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', link: ROUTES.HOME, icon: 'home' },
  {
    icon: 'user', name: 'Аккаунт', subItems: [
      { name: 'Вход', link: ROUTES.SIGN_IN },
      { name: 'Регистрация', link: ROUTES.SIGN_UP }
    ]
  },
  {
    icon: 'crown', name: 'Приключения', subItems: [
      { name: 'Создать приключение', link: ROUTES.ADVENTURE_CREATE },
      { name: 'Мои приключения', link: ROUTES.ADVENTURE_LIST },
    ]
  },

  {
    name: 'Список персонажей', icon: 'team', subItems: [
      {
        name: 'Гремми', icon: 'crown', subItems: [
          {
            name: 'О персонаже', icon: 'crown', subItems: [
              { name: 'Характеристики' }
            ]
          }
        ]
      }
    ]
  },
  { icon: 'thunderbolt', name: 'Заклинания' }
];

export const SideMenu = (props: SideMenu) => {
  return (
    <Menu className='side-menu'
          mode="inline"
          inlineCollapsed={ props.isMobileMenuView ? false : props.isMenuCollapsed }
          style={ props.isMobileMenuView && props.isMenuCollapsed ? { marginLeft: -240 } : { marginLeft: 0 } }>
      { renderMenu(menuItems) }
    </Menu>
  );
};

const renderMenuItem = (option: MenuItem) => {
  return (
    <Menu.Item key={ option.name }>
      <Link to={ option.link || ROUTES.HOME }>
        { option.icon && <Icon type={ option.icon } /> }
        <span>{ option.name }</span>
      </Link>
    </Menu.Item>
  );
};

const renderMenu = (options: MenuItem[]) => {
  return options.map((option: MenuItem) => {
    return option.subItems
      ?
      <SubMenu key={ option.name } title={
        <span>
          <Icon type={ option.icon } />
          <span>{ option.name }</span>
        </span>
      }>
        { renderMenu(option.subItems) }
      </SubMenu>
      :
      renderMenuItem(option);
  });
};
