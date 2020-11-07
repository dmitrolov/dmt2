import { Button, Card, PageHeader } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllUserAdventures } from '../../api/firebase';
import { Adventure } from '../../types/adventure';
import './AdventureList.sass';
import { ADVENTURE } from '../../routes';
import { DeleteOutlined, PlusOutlined, RightCircleOutlined } from '@ant-design/icons';

export const AdventureList = () => {
  const [adventuresList, setAdventuresList] = useState<Adventure[]>([]);

  GetAllUserAdventures().then((adventures: Adventure[]) => {
    setAdventuresList(adventures);
  });

  useEffect(() => {

  });

  const onAddButtonClick = () => {

  }

  const onDelleteButtonClick = () => {

  }

  const renderAdventureCard = (adventure: Adventure) => {
    return <Card
      hoverable
      className={'adventure-item'}
      cover={<img className={'adventure-item__image'} alt="adventure" src={adventure.image || "https://picsum.photos/400/200"} />}
      actions={[
        <Button onClick={onDelleteButtonClick} icon={<DeleteOutlined />} danger>Удалить</Button>,
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
      <Button onClick={onAddButtonClick} className={'adventure-header__add-button'} icon={<PlusOutlined />}/>
    </div>
    <div className='adventure-list'>
      {adventuresList.map(adventure => renderAdventureCard(adventure))}
    </div>
  </>);
};

export default connect(null, null)(AdventureList);
