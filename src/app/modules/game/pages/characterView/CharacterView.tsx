import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterView.sass';
import { getCharacter } from '../../../../api/firebase/firebase';
import { Character } from '../../../../types/character/Character';

import { Table } from 'antd';
import { Header } from '../../../../components/Header/Header';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: (text: React.ReactNode) => <a>text</a>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }
];

const data = [
    {
        key: '1',
        name: 'Расса (подвид)',
        age: 'Скальный гном'
    },
    {
        key: '1',
        name: 'Пол',
        age: 'Скальный гном'
    },
    {
        key: '1',
        name: 'Возраст',
        age: 'Скальный гном'
    },
    {
        key: '1',
        name: 'Рост',
        age: 'Скальный гном'
    },
    {
        key: '1',
        name: 'Вес',
        age: 'Скальный гном'
    },
    {
        key: '1',
        name: 'Предистория',
        age: 'Скальный гном'
    },
]

interface CharacterViewProps {
    match: any
}

interface CharacterViewState {
    character: Character | undefined
}

const CharacterView = (props: CharacterViewProps) => {
    const [state, setState] = useState<CharacterViewState>({
        character: undefined
    });

    useEffect(() => {
        getCharacter(props.match.params.id)
            .then((data) => {
                if (data) {
                    setState((state) => ({ ...state, character: data }))
                    console.log('[characterData]', data);
                }
            })
    }, [props.match.params.id]);

    console.log('[state.character]', state.character);
    return (
        <>
            <Header onMenuButtonClick={() => { }}></Header>
            {state.character ? <div className='character-view-container'>
                <div className={'character-view-container__item'}><img className={'character-view__image'} src={state.character.about.description.imageUrl} alt="" /></div>
                <div className={'character-view-container__item'}><Table title={() => 'Основная информация'} showHeader={false} pagination={false} columns={columns} dataSource={data} /></div>
                <div className={'character-view-container__item'}><Table title={() => 'Основная информация'} showHeader={false} pagination={false} columns={columns} dataSource={data} /></div>
                <div className={'character-view-container__item'}><Table title={() => 'Основная информация'} showHeader={false} pagination={false} columns={columns} dataSource={data} /></div>
                
                
            </div> : <div>Loading . . .</div>}
            {/* <button onClick={
                () => setCharacter(props.match.params.id, state.character as Character)
            }>set</button> */}
        </>
    );
};

export default connect(null, null)(CharacterView);
