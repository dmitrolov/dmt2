import React from 'react';
import { connect } from 'react-redux';
import { Adventure } from '../../types/adventure/Adventure';

const newAdventure: Adventure = {
  name: '',
  description: '',
  charactersList: [],
  notes: []
}

const AdventureCreate = () => {
  return (
    <div>
      AdventureCreate page
    </div>
  )
}

export default connect(null, null)(AdventureCreate);
