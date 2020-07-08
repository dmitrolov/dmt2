import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterCreate.sass';

interface CharacterCreateProps {

}

const CharacterCreate = (props: CharacterCreateProps) => {
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log('[CharacterCreate WORKS!!!]', null);
  }, [state]);

  return (
    <div className='character-create'>
      <button onClick={ () => setState(!state) }>CharacterCreate WORKS!!!</button>
      <input type="text"/>
    </div>
  );
};

export default connect(null, null)(CharacterCreate);
