import { connect } from 'react-redux';
import React, { SetStateAction } from 'react';
import './GameMenu.sass'
import FaceIcon from '@material-ui/icons/Face';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Menu, Dropdown, Button } from 'antd';
import { CharacterViewTabName } from '../CharacterView';
import { ClientWindowResolution } from '../../../types/General';

const generalInfoMenuTabs: menuTab[] = [
    { name: 'generalInfo', caption: 'О персонаже' },
    { name: 'attributes', caption: 'Характеристики' },
    { name: 'experience', caption: 'Класс и опыт' },
    { name: 'proficiency', caption: 'Владение' },
    { name: 'combat', caption: 'Боевые параметры' },
];

const journalMenuTabs: menuTab[] = [
    { name: 'generalInfo', caption: 'Время' },
    { name: 'generalInfo', caption: 'Заметки' },
    { name: 'generalInfo', caption: 'Квесты' },
    { name: 'generalInfo', caption: 'Персонажи' },
    { name: 'generalInfo', caption: 'Лог' },
];

const equipmentMenuTabs: menuTab[] = [
    { name: 'equipment', caption: 'Экипировка' },
];

const abilitiesMenuTabs: menuTab[] = [
    { name: 'generalInfo', caption: 'Способности' },
    { name: 'generalInfo', caption: 'Навыки' },
    { name: 'generalInfo', caption: 'Умения' },
    { name: 'generalInfo', caption: 'Ритуалы' },
    { name: 'generalInfo', caption: 'Заклинания' },
];

interface GameMenuProps {
    windowData: ClientWindowResolution;
    setCharacterViewTab: React.Dispatch<SetStateAction<CharacterViewTabName>>;
}

interface menuTab {
    name: CharacterViewTabName;
    caption: string;
}

const GameMenu = (props: GameMenuProps) => {
    // const { isLandscape, isMobile } = props.windowData;
    const { isLandscape } = props.windowData;

    const renderSubmenu = (tabs: menuTab[]) =>
        <Menu className={'submenu'}>
            {tabs.map((tab: menuTab) =>
                <Menu.Item key={tab.name} onClick={() => props.setCharacterViewTab(tab.name)} children={tab.caption} />)
            }
        </Menu>

    const portraitMenu = (key: string, overlay: JSX.Element, icon: JSX.Element, isDisabled?: boolean) => (
        <Dropdown disabled={isDisabled} key={key} overlay={overlay} overlayStyle={isLandscape ? {} : { width: '100%' }}>
            <Button className={'game-menu__button'} children={icon} />
        </Dropdown>
    )

    return (
        // <div
        //     className={'game-menu'}
        //     style={(isLandscape && !isMobile)
        //         ? { width: 180, flexDirection: 'column', justifyContent: 'space-between' }
        //         : { height: 60, flexDirection: 'row' }
        //     }>
        //     {(isLandscape && !isMobile)
        //         ? (<>
        //             {renderSubmenu(generalInfoMenuTabs)}
        //             {renderSubmenu(journalMenuTabs)}
        //             {renderSubmenu(equipmentMenuTabs)}
        //             {renderSubmenu(abilitiesMenuTabs)}
        //             {/* TODO: add favorites sections */}
        //         </>)
        //         : (<>
        //             {portraitMenu('generalInfoMenu', renderSubmenu(generalInfoMenuTabs), <FaceIcon />)}
        //             {portraitMenu('journalMenuTabs', renderSubmenu(journalMenuTabs), <MenuBookIcon />, true)}
        //             {portraitMenu('equipmentMenuTabs', renderSubmenu(equipmentMenuTabs), <AccountBalanceWalletIcon />)}
        //             {portraitMenu('abilitiesMenuTabs', renderSubmenu(abilitiesMenuTabs), <WhatshotIcon />, true)}
        //             {/* TODO: add favorites sections <FavoriteBorderIcon /> */}
        //         </>)
        //     }
        // </div>
        <div
            className={'game-menu'}
            style={{ height: 60, flexDirection: 'row' }}>
            <>
                {portraitMenu('generalInfoMenu', renderSubmenu(generalInfoMenuTabs), <FaceIcon />)}
                {portraitMenu('journalMenuTabs', renderSubmenu(journalMenuTabs), <MenuBookIcon />, true)}
                {portraitMenu('equipmentMenuTabs', renderSubmenu(equipmentMenuTabs), <AccountBalanceWalletIcon />)}
                {portraitMenu('abilitiesMenuTabs', renderSubmenu(abilitiesMenuTabs), <WhatshotIcon />, true)}
                {/* TODO: add favorites sections <FavoriteBorderIcon /> */}
            </>
        </div>
    )
}

export default connect(null, null)(GameMenu);