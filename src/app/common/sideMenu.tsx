import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ROUTES from '../routes';
import './sideMenu.sass'
import { ClientWindowResolution, PlayerAccount } from '../types/general';
import { Avatar, Drawer, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { auth } from 'firebase';

interface SideMenuProps {
  windowData: ClientWindowResolution;
  userData: PlayerAccount;
  isMenuOpened: boolean;
  onSignInButtonClick: () => void;
  onClose: () => void;
}

interface RenderMenuListProps {
  icon: JSX.Element;
  text: string;
  route?: string;
  onClick?: () => void
}

export const SideMenu: React.FC<SideMenuProps> = (props) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [currentUserEmail, setcurrentUserEmail] = useState<string | null | undefined>()
  const location = useLocation();

  auth().onAuthStateChanged(() => {
    setcurrentUserEmail(auth().currentUser?.email);
  });

  const renderMenuItem = (props: RenderMenuListProps) => {
    return <div className='menu-list__item'>
      <Link to={props.route || location.pathname} className='menu-list__link' onClick={props.onClick}>
        <div className='menu-list__static-item'>{props.icon}</div>
        <div className={!isMenuCollapsed ? 'menu-list__text' : 'menu-list__text collapsed'}>
          <span>{props.text}</span>
        </div>
      </Link>
    </div>;
  };

  const renderMenuList = () => {
    return <div className='menu-list'>
      <div>
        {renderMenuItem({ icon: <HomeIcon />, text: 'Главная', route: ROUTES.ROOT })}
        {renderMenuItem({ icon: <ListIcon />, text: 'Приключения', route: ROUTES.ADVENTURE })}

        {renderMenuItem({ icon: <AddIcon />, text: 'Создать приключение', route: ROUTES.ADVENTURE_CREATE })}
        {renderMenuItem({ icon: <PersonAddIcon />, text: 'Создать персонажа', route: '/game/adventure/view/Djadame/character/create' })}
        {renderMenuItem({ icon: <FaceIcon />, text: 'gremmy', route: '/game/adventure/view/Djadame/character/view/gremmy' })}
        {renderMenuItem({ icon: <FaceIcon />, text: 'klinfort char', route: '/game/adventure/view/Djadame/character/view/klinfort' })}
        {renderMenuItem({ icon: <FaceIcon />, text: 'skarlet char', route: '/game/adventure/view/Djadame/character/view/skarlet' })}
      </div>
      <div>
        {renderMenuItem({
          icon: <Avatar icon={<UserOutlined />} />,
          text: currentUserEmail?.split('@')[0] || 'Вход',
          onClick: currentUserEmail ? () => auth().signOut() : props.onSignInButtonClick
        })}
        {
          !props.windowData.isMobile &&
          <div className='menu-list__item switch'>
            <Switch
              checked={!isMenuCollapsed}
              onChange={() => setIsMenuCollapsed(!isMenuCollapsed)} />
            <span className={!isMenuCollapsed ? 'menu-list__text' : 'menu-list__text collapsed'}>COLLAPSE MENU</span>
          </div>
        }
      </div>
    </div>;
  };

  return props.windowData.isMobile
    ? <Drawer
      visible={props.isMenuOpened}
      onClose={props.onClose}>
      <div
        className='side-menu side-menu--mobile'
        onClick={props.onClose}
        onKeyDown={props.onClose}>
        {renderMenuList()}
      </div>
    </Drawer>
    : <div
      className={`side-menu side-menu--desktop ${isMenuCollapsed ? 'collapsed' : ''} ${!props.isMenuOpened ? 'closed' : ''}`}>
      {renderMenuList()}
    </div>;
};