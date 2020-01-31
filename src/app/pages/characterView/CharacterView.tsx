import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterView.sass';

interface CharacterViewProps {
  match: any
}

const CharacterView = (props: CharacterViewProps) => {
  const [state, setState] = useState(true);
  const { match } = props;
  const { id } = match.params;

  useEffect(() => {
    console.log('[CharacterView WORKS!!!]', null);
  }, [state]);

  return (
    <div className='character-view'>
      <button onClick={ () => setState(!state) }>CharacterView WORKS!!!</button>
      <div>THIS CHARACTER IS <b>{id}</b></div>
    </div>
  );
};

export default connect(null, null)(CharacterView);
