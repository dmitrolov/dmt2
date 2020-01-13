import { Breadcrumb, Button, Icon, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './App.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App: React.FC = () => {
  const [status, isMenuCollapsed] = useState(true);

  const onMenuClick = () => {
    isMenuCollapsed(!status);
  };

  return (
    <>
      <Layout style={ { minHeight: '100vh' } }>
        <Sider collapsible collapsed={ status } onCollapse={ onMenuClick } width={320}>
          <div style={ { width: 320 } }>
            <Button type="primary" onClick={ onMenuClick } style={ { marginBottom: 16 } }>
              <Icon type={ status ? 'menu-unfold' : 'menu-fold' } />
            </Button>
            <Menu
              defaultSelectedKeys={ ['1'] }
              // defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={ status }
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
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
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header style={ { background: '#fff', padding: 0 } } />
          <Content style={ { margin: '0 16px' } }>
            <Breadcrumb style={ { margin: '16px 0' } }>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={ { padding: 24, background: '#fff', minHeight: 360 } }>Bill is a cat.</div>
          </Content>
          <Footer style={ { textAlign: 'center' } }>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
