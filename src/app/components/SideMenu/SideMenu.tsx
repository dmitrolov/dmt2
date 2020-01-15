import { Icon, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const SideMenu = (isMenuCollapsed: boolean) => {
  console.log('[SideMenu isMenuCollapsed]:', isMenuCollapsed);
  console.log('[BodyW]:', document.getElementsByTagName('body')[0].clientWidth);
  console.log('[BodyH]:', document.getElementsByTagName('body')[0].clientHeight);
  return (
    <Sider collapsed={ !isMenuCollapsed } width={ 240 } theme="light" style={
      isMenuCollapsed ? {} : { display: 'none' }
    }>
      <div style={ { width: 240 } }>
        <Menu
          defaultSelectedKeys={ ['1'] }
          mode="inline"
          theme="light"
          inlineCollapsed={ isMenuCollapsed }
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
