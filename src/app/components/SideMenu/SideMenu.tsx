import { Button, Icon, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const SideMenu = () => {
  const [status, isMenuCollapsed] = useState(true);

  const onMenuClick = () => {
    isMenuCollapsed(!status);
  };

  return (
    <Sider collapsed={ status } width={ 240 } theme="light">
      <div style={ { width: 240 } }>
        <Button type="primary" onClick={ onMenuClick } style={ { marginBottom: 16 } }>
          <Icon type={ status ? 'menu-unfold' : 'menu-fold' } />
        </Button>
        <Menu
          defaultSelectedKeys={ ['1'] }
          mode="inline"
          theme="light"
          inlineCollapsed={ status }
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span><Link to={ ROUTES.SIGN_IN }>Sign in</Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 13</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Very long submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  );
};
