import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllUserAdventures } from '../../api/firebase/firebase';
import { Adventure } from '../../types/adventure/Adventure';
import './AdventureList.sass';

export const AdventureList = () => {
  const [adventuresList, setAdventuresList] = useState<Adventure[]>([]);

  GetAllUserAdventures().then((adventures: Adventure[]) => {
    setAdventuresList(adventures);
  });

  useEffect(() => {

  });

  return (
    <div className='adventure-list'>
      Advenure List here
      { adventuresList.map(adventure => <Link to={`view/${adventure.name}`}>{ adventure.name }</Link>) }
    </div>
  );
};

export default connect(null, null)(AdventureList);
