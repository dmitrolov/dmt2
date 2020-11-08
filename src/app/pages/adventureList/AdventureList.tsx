import { Button, Card, PageHeader } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addAdventure, auth, GetAllUserAdventures, setAdventure } from '../../api/firebase';
import { Adventure } from '../../types/adventure';
import './AdventureList.sass';
import { ADVENTURE } from '../../routes';
import { PlusOutlined, RightCircleOutlined } from '@ant-design/icons';

export const AdventureList = () => {
  const [adventuresList, setAdventuresList] = useState<Adventure[]>([]);
  const history = useHistory();

  useEffect(() => {
    GetAllUserAdventures().then((adventures: Adventure[]) => {
      setAdventuresList(adventures);
    });
  }, [])

  const onAddButtonClick = () => {
    const currentUserEmail = auth.currentUser?.email;
    if (currentUserEmail === 'nunky.balthazar@gmail.com') {
      addAdventure().then(id => {
        const initialAdventure: Adventure = {
          id: id,
          name: id,
          playersList: [{
            email: currentUserEmail,
            isDungeonMaster: true,
          }],
          customCounter: 0,
          charactersList: [],
          itemsList: [],
          notes: [],
        }
        setAdventure(id, initialAdventure).then(() => {
          history.push(ADVENTURE + '/' + id);
        })
      });
    } else alert('no access');
  }

  const renderAdventureCard = (adventure: Adventure) => {
    return <Card
      hoverable
      key={adventure.id}
      className={'adventure-item'}
      cover={<img className={'adventure-item__image'} alt="adventure" src={adventure.image || "https://picsum.photos/400/200"} />}
      actions={[
        <Button><Link to={`${ADVENTURE}/${adventure.name}`}>Войти <RightCircleOutlined key={'enter'} /></Link></Button>
      ]}
    >
      <Meta
        title={adventure.name}
        description={<div className={'adventure-item__description'}>
          {adventure.description}
        </div>}
      />
    </Card>
  }

  return (<>
    <div className="adventure-header">
      <PageHeader
        className="site-page-header"
        title="Приключения"
      />
      <Button onClick={onAddButtonClick} className={'adventure-header__add-button'} icon={<PlusOutlined />} />
    </div>
    <div className='adventure-list'>
      {adventuresList.map(adventure => renderAdventureCard(adventure))}
    </div>
  </>);
};

export default connect(null, null)(AdventureList);
