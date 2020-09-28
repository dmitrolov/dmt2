import { connect } from 'react-redux';
import React from 'react';
import './GameMenu.sass'
import FaceIcon from '@material-ui/icons/Face';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Menu, Dropdown, Button } from 'antd';
import { ClientWindowResolution } from '../../../types/window/window';

interface GameMenuProps {
    windowData: ClientWindowResolution;
    onMenuButtonClick: () => void
}

const characterGeneralInfoMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key + '1'}><a href="#anc1">О персонаже</a></Menu.Item>
        <Menu.Item key={key + '2'}><a href="#anc2">Характеристики</a></Menu.Item>
        <Menu.Item key={key + '3'}><a href="#anc3">Класс и опыт</a></Menu.Item>
        <Menu.Item key={key + '4'}><a href="#anc4">Черты</a></Menu.Item>
        <Menu.Item key={key + '5'}><a href="#anc5">Владение</a></Menu.Item>
    </Menu>
);

const characterBattleInfoMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key + '1'}><a href="#anc1">Боевые параметры</a></Menu.Item>
        <Menu.Item key={key + '2'}><a href="#anc2">Здоровье</a></Menu.Item>
        <Menu.Item key={key + '3'}><a href="#anc3">Спасброски от смерти</a></Menu.Item>
        <Menu.Item key={key + '4'}><a href="#anc4">Сопротивления</a></Menu.Item>
    </Menu>
);

const characterJournalMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key + '1'}><a href="#anc1">Время</a></Menu.Item>
        <Menu.Item key={key + '2'}><a href="#anc1">Заметки</a></Menu.Item>
        <Menu.Item key={key + '3'}><a href="#anc2">Квесты</a></Menu.Item>
        <Menu.Item key={key + '4'}><a href="#anc3">Персонажи</a></Menu.Item>
        <Menu.Item key={key + '5'}><a href="#anc4">Лог</a></Menu.Item>
    </Menu>
);

const characterEquipmentMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key + '1'}><a href="#anc1">Экипировка</a></Menu.Item>
        <Menu.Item key={key + '2'}><a href="#anc2">Рюкзак</a></Menu.Item>
        <Menu.Item key={key + '3'}><a href="#anc3">Хранилище</a></Menu.Item>
    </Menu>
);

const characterAbilitiesMenu = (key: string) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key + '1'}><a href="#anc1">Способности</a></Menu.Item>
        <Menu.Item key={key + '2'}><a href="#anc2">Навыки</a></Menu.Item>
        <Menu.Item key={key + '3'}><a href="#anc3">Умения</a></Menu.Item>
        <Menu.Item key={key + '4'}><a href="#anc4">Ритуалы</a></Menu.Item>
        <Menu.Item key={key + '5'}><a href="#anc5">Заклинания</a></Menu.Item>
    </Menu>
);

const portraitMenu = (key: string, overlay: JSX.Element, isLandscape: boolean, icon: JSX.Element) => (
    <Dropdown key={key} overlay={overlay} overlayStyle={isLandscape ? {} : { width: '100%' }}>
        <Button className={'game-menu__button'}>
            {icon}
        </Button>
    </Dropdown>
)

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
                        {characterGeneralInfoMenu('l1')}
                        {characterBattleInfoMenu('l2')}
                        {characterJournalMenu('l3')}
                        {characterEquipmentMenu('l4')}
                        {characterAbilitiesMenu('l5')}
                    </>)
                    : (<>
                        {portraitMenu('p1', characterGeneralInfoMenu('k1'), props.windowData.isLandscape, <FaceIcon />)}
                        {portraitMenu('p2', characterBattleInfoMenu('k2'), props.windowData.isLandscape, <MenuBookIcon />)}
                        {portraitMenu('p3', characterJournalMenu('k3'), props.windowData.isLandscape, <WhatshotIcon />)}
                        {portraitMenu('p4', characterEquipmentMenu('k4'), props.windowData.isLandscape, <FavoriteBorderIcon />)}
                        {portraitMenu('p5', characterAbilitiesMenu('k5'), props.windowData.isLandscape, <AccountBalanceWalletIcon />)}
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