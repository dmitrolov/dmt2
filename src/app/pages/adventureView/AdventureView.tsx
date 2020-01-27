import React from 'react';
import { connect } from 'react-redux';
import './AdventureView.sass';

const AdventureView = (props: any) => {
  const { match } = props;
  const { id } = match.params;

  return (
    <div className='adventure-view'>
      <span>Adventure id {id}</span>
    </div>
  );
};

export default connect(null, null)(AdventureView);
