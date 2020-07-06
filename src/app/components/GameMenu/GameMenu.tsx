import { connect } from 'react-redux';
import React from 'react';
import './GameMenu.sass'
import { ClientWindowResolution } from '../../App';

interface gameMenuProps {
    clientWindowResolution: ClientWindowResolution
    onMenuButtonClick: () => void
}

const GameMenu = (props: gameMenuProps) => {
    return (
        <div className={'game-menu'} style={{height: 30}}>
            <button className={'game-menu__button'} onClick={() => {}}>1</button>
            <button className={'game-menu__button'} onClick={() => {}}>2</button>
            <button className={'game-menu__button'} onClick={props.onMenuButtonClick}>Menu</button>
            <button className={'game-menu__button'} onClick={() => {}}>3</button>
            <button className={'game-menu__button'} onClick={() => {}}>4</button>
        </div>
    )
}

export default connect(null, null)(GameMenu);