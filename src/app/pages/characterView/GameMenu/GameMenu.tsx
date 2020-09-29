import { connect } from 'react-redux';
import React, { Dispatch, SetStateAction } from 'react';
import './GameMenu.sass'
import FaceIcon from '@material-ui/icons/Face';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Menu, Dropdown, Button } from 'antd';
import { ClientWindowResolution } from '../../../types/window/window';
import { CharacterViewTabName } from '../CharacterView';

interface GameMenuProps {
    windowData: ClientWindowResolution;
    setCharacterViewTab: Dispatch<SetStateAction<CharacterViewTabName>>;
}

const characterGeneralInfoMenu = (key: string, setCharacterViewTab: Dispatch<SetStateAction<CharacterViewTabName>>) => (
    <Menu className={'submenu'}>
        <Menu.Item key={key + '1'}><button onClick={() => setCharacterViewTab('generalInfo')}>О персонаже</button></Menu.Item>
        <Menu.Item key={key + '2'}><button onClick={() => setCharacterViewTab('attributes')}>Характеристики</button></Menu.Item>
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
                props.windowData.isLandscape && !props.windowData.isMobile
                    ? { width: 180, flexDirection: 'column', justifyContent: 'space-between' }
                    : { height: 60, flexDirection: 'row' }
            }>
            {
                props.windowData.isLandscape && !props.windowData.isMobile
                    ? (<>
                        {characterGeneralInfoMenu('l1', props.setCharacterViewTab)}
                        {characterBattleInfoMenu('l2')}
                        {characterJournalMenu('l3')}
                        {characterEquipmentMenu('l4')}
                        {characterAbilitiesMenu('l5')}
                        {/* TODO: add favorites sections */}
                    </>)
                    : (<>
                        {portraitMenu('p1', characterGeneralInfoMenu('k1', props.setCharacterViewTab), props.windowData.isLandscape, <FaceIcon />)}
                        {portraitMenu('p2', characterBattleInfoMenu('k2'), props.windowData.isLandscape, <FavoriteBorderIcon />)}
                        {portraitMenu('p3', characterJournalMenu('k3'), props.windowData.isLandscape, <MenuBookIcon />)}
                        {portraitMenu('p4', characterEquipmentMenu('k4'), props.windowData.isLandscape, <AccountBalanceWalletIcon />)}
                        {portraitMenu('p5', characterAbilitiesMenu('k5'), props.windowData.isLandscape, <WhatshotIcon />)}
                        {/* TODO: add favorites sections */}
                    </>)
            }
        </div>
    )
}

export default connect(null, null)(GameMenu);