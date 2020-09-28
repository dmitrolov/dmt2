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

const characterGeneralInfoMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key}><a href="#anc1">О персонаже</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc2">Характеристики</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc3">Класс и опыт</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc4">Черты</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc5">Владение</a></Menu.Item>
    </Menu>
);

const characterBattleInfoMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key}><a href="#anc1">Боевые параметры</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc2">Здоровье</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc3">Спасброски от смерти</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc4">Сопротивления</a></Menu.Item>
    </Menu>
);

const characterEquipmentMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key}><a href="#anc1">Экипировка</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc2">Рюкзак</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc3">Хранилище</a></Menu.Item>
    </Menu>
);

const characterAbilitiesMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key}><a href="#anc1">Способности</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc2">Навыки</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc3">Умения</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc4">Ритуалы</a></Menu.Item>
        <Menu.Item key={key}><a href="#anc5">Заклинания</a></Menu.Item>
    </Menu>
);

const GameMenu = (props: GameMenuProps) => {
    return (
        <div
            className={'game-menu'}
            style={
                props.windowData.isLandscape
                    ? { width: 180, flexDirection: 'column', justifyContent: 'space-between' }
                    : { height: 60, flexDirection: 'row' }
            }>
            {
                props.windowData.isLandscape
                    ? (<>
                        {characterGeneralInfoMenu('1')}
                        {characterBattleInfoMenu('1')}
                        {characterEquipmentMenu('1')}
                        {characterAbilitiesMenu('1')}
                    </>)
                    : (<>
                        <Dropdown key={'11'} overlay={characterGeneralInfoMenu('21')} overlayStyle={props.windowData.isLandscape ? {} : { width: '100%' }}>
                            <Button className={'game-menu__button'}>
                                <FaceIcon />
                            </Button>
                        </Dropdown><Dropdown key={'12'} overlay={characterBattleInfoMenu('22')} overlayStyle={props.windowData.isLandscape ? {} : { width: '100%' }}>
                            <Button className={'game-menu__button'}>
                                <FaceIcon />
                            </Button>
                        </Dropdown><Button className={'game-menu__button'} onClick={props.onMenuButtonClick}>
                            <HomeIcon />
                        </Button><Dropdown key={'13'} overlay={characterEquipmentMenu('23')} overlayStyle={props.windowData.isLandscape ? {} : { width: '100%' }}>
                            <Button className={'game-menu__button'}>
                                <FaceIcon />
                            </Button>
                        </Dropdown>
                        <Dropdown key={'14'} overlay={characterAbilitiesMenu('24')} overlayStyle={props.windowData.isLandscape ? {} : { width: '100%' }}>
                            <Button className={'game-menu__button'}>
                                <FaceIcon />
                            </Button>
                        </Dropdown>
                    </>)
            }
        </div>
    )
}

const mapStateToProps = (state: GameMenuProps) => {
    return ({
        windowData: state.windowData,
    })
}

export default connect(mapStateToProps, null)(GameMenu);