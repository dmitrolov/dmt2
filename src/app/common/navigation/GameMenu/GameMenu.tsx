import { connect } from 'react-redux';
import React from 'react';
import './GameMenu.sass'
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import { Menu, Dropdown, Button } from 'antd';
import { ClientWindowResolution } from '../../../types/window/window';

interface GameMenuProps {
    windowData: ClientWindowResolution;
    onMenuButtonClick: () => void
}

const menu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key}><a href="#anc1">1</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc2">2</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc3">3</a></Menu.Item>
    </Menu>
);

const GameMenu = (props: GameMenuProps) => {
    return (
        <div
            className={'game-menu'}
            style={
                props.windowData.isLandscape
                    ? { width: 60, flexDirection: 'column' }
                    : { height: 60, flexDirection: 'row' }
            }>
            <Dropdown key={'11'} overlay={menu('21')} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
            <Dropdown key={'12'} overlay={menu('22')} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
            <Button className={'game-menu__button'} onClick={props.onMenuButtonClick}>
                <HomeIcon />
            </Button>
            <Dropdown key={'13'} overlay={menu('23')} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
            <Dropdown key={'14'} overlay={menu('24')} overlayStyle={{ width: '100%' }}>
                <Button className={'game-menu__button'}>
                    <FaceIcon />
                </Button>
            </Dropdown>
        </div>
    )
}

const mapStateToProps = (state: GameMenuProps) => {
    return ({
        windowData: state.windowData, 
    })
}

export default connect(mapStateToProps, null)(GameMenu);