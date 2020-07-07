import { connect } from 'react-redux';
import React from 'react';
import './GameMenu.sass'
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import { Menu, Dropdown, Button } from 'antd';
import { ClientWindowResolution } from '../../helpers/clientWindowResolution';

interface gameMenuProps {
    clientWindowResolution: ClientWindowResolution
    onMenuButtonClick: () => void
}

const menu = (
    <Menu className={'submenu'}>
        <Menu.Item key="1"><a href="#anc1">1</a></Menu.Item>
        <Menu.Item key="2"><a href="#anc2">2</a></Menu.Item>
        <Menu.Item key="3"><a href="#anc3">3</a></Menu.Item>
    </Menu>
);

const GameMenu = (props: gameMenuProps) => {
    return (
        <div
            className={'game-menu'}
            style={
                props.clientWindowResolution.width < props.clientWindowResolution.height
                    ? { height: 60, flexDirection: 'row' }
                    : { width: 60, flexDirection: 'column' }
            }>
            <Dropdown overlay={menu} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
            <Dropdown overlay={menu} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
            <Button className={'game-menu__button'} onClick={props.onMenuButtonClick}>
                <HomeIcon />
            </Button>
            <Dropdown overlay={menu} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
            <Dropdown overlay={menu} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
        </div>
    )
}

export default connect(null, null)(GameMenu);