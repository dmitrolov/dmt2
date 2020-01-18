import { Icon, Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './SideMenu.scss';

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
  {
    icon: 'user', name: 'Аккаунт', link: ROUTES.SIGN_IN, subItems: [
      { name: 'Вход' }
    ]
  },
  {
    icon: 'crown', name: 'Приключения', subItems: [
      {
        name: 'Джадам', icon: 'crown', subItems: [
          {
            name: 'Список персонажей', icon: 'crown', subItems: [
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
          }
        ]
      }
    ]
  },
  { icon: 'thunderbolt', name: 'Заклинания' }
];

export function SideMenu(props: SideMenu) {

  return (
    <Menu className='side-menu'
          mode="inline"
          inlineCollapsed={ props.isMobileMenuView ? false : props.isMenuCollapsed }
          style={ props.isMobileMenuView && props.isMenuCollapsed ? { marginLeft: -240 } : { marginLeft: 0 } }>
      { renderMenu(menuItems) }
    </Menu>
  );
}

const renderMenuItem = (option: MenuItem) => {
  return (
    <Menu.Item key={ option.name }>
      <Link to={ option.link || ROUTES.LANDING }>
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
