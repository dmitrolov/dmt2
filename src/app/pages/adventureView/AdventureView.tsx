import React from 'react';
import { connect } from 'react-redux';
import './AdventureView.sass';
import { Link } from 'react-router-dom';

const AdventureView = (props: any) => {
  const { match } = props;
  const { id } = match.params;

  return (
    <div className='adventure-view'>
      <span>Adventure id {id}</span>
      <Link to={`${id}/character/gremmy`}>Гремми</Link>
    </div>
  );
};

export default connect(null, null)(AdventureView);
