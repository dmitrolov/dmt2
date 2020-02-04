import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterView.sass';
import { GetCharacter } from '../../api/firebase/firebase';

interface CharacterViewProps {
  match: any
}

const CharacterView = (props: CharacterViewProps) => {
  const [state, setState] = useState(true);
  const [characterData, setCharacterData] = useState();
  const { match } = props;
  const { id } = match.params;

  useEffect(() => {
    GetCharacter(id).then(data => setCharacterData(data));
    console.log('[characterData]', null);
    console.log('[CharacterView WORKS!!!]', null);
  }, [id]);

  return (
    <div className='character-view'>
      <button onClick={ () => setState(!state) }>CharacterView WORKS!!!</button>
      <div>THIS CHARACTER IS <b>{id}</b></div>
      <div style={{
        width: 300,
        height: 120,
        wordBreak: 'break-word',
        overflow: 'auto'
      }}>{characterData ? JSON.stringify(characterData, null, '\n') : <span>Wrong character page</span>}</div>
    </div>
  );
};

export default connect(null, null)(CharacterView);
