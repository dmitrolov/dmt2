import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { CreateAdventure } from '../../api/firebase';
import { Adventure } from '../../types/adventure';
import * as ROUTES from '../../routes';
import './AdventureCreate.sass';

const newAdventure: Adventure = {
  name: '',
  description: '',
  image: '',
  playersList: [],
  dungeonMaster: '',
  charactersList: [],
  itemsList:[],
  notes: [],
  customCounter: 1,
};

const AdventureCreate = () => {
  const [playerEmail, setPlayerEmail] = useState('');
  const [errorsList, setErrorsList] = useState(['']);
  const history = useHistory();
  const currentErrors: string[] = [];

  const validation = () => {
    if (newAdventure.name.length === 0) currentErrors.push('Adventure name should not be empty');
    if (newAdventure.playersList.length === 0) currentErrors.push('Players list should not be empty');
    setErrorsList(currentErrors);
    console.log('[currentErrors]:', currentErrors);
  };

  const onSubmit = () => {
    validation();
    if (currentErrors.length === 0) {
      newAdventure.dungeonMaster = newAdventure.playersList[0];
      CreateAdventure(newAdventure).then(response => console.log('[AdventureCreate response]:', response));
      history.push(ROUTES.ADVENTURE_LIST);
    }
  };

  return (
    <div className='adventure-create'>
      <span>Название приключения*</span>
      <input onChange={ (event => newAdventure.name = event.target.value) } />
      <span>Описание приключения</span>
      <textarea onChange={ (event => newAdventure.description = event.target.value) } />
      <span>Картинка приключения</span>
      <input placeholder='url' onChange={ (event => newAdventure.image = event.target.value) } />
      <span>Добавить игрока</span>
      <div>
        <input placeholder='email' value={ playerEmail } onChange={ (e) => {setPlayerEmail(e.target.value);} } />
        <button onClick={ () => {
          newAdventure.playersList.push(playerEmail);
          setPlayerEmail('');
        } }>Добавить
        </button>
      </div>
      <h4>Игроки*:</h4>
      { newAdventure.playersList.map(email => <span>{ email }</span>) }
      <h4>Dungeon Master*:</h4>
      { newAdventure.playersList[0] }
      <button onClick={ onSubmit }>Создать приключение</button>
      <span>Errors:</span>
      { errorsList.map(error => <span>{ error }</span>) }
    </div>
  );
};

export default connect(null, null)(AdventureCreate);
