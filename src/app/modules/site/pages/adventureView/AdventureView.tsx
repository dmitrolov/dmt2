import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './AdventureView.sass';

const AdventureView = (props: any) => {
  const { match } = props;
  const { id } = match.params;
  const history = useHistory()

  return (
    <div className='adventure-view'>
      <span>Adventure id { id }</span>
      <Link to={ `${ id }/character/view/a_a` }>a_a</Link>

      <button onClick={ () => history.push(`/adventure/view/${id}/character/create`) }>Create character</button>
    </div>
  );
};

export default connect(null, null)(AdventureView);
