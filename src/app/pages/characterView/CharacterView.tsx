import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterView.sass';
import { getCharacter } from '../../api/firebase/firebase';
import { Character } from '../../types/character/Character';
import { Table } from 'antd';
import { CharacterGeneralInfoSection } from './characterInfoSection/characterGeneralInfo';

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
            {
                state.character
                    ? <div className='character-view-container'>
                        <div className={'character-view-container__item'}>
                            <img className={'character-view__image'} src={state.character.about.description.imageUrl} alt="" />
                        </div>
                        <div id={'anc1'} className={'character-view-container__item'}>
                            <CharacterGeneralInfoSection
                                info={state.character.about.info}
                                description={state.character.about.description}
                            />
                        </div>
                        <div id={'anc2'} className={'character-view-container__item'}>
                            <Table
                                title={() => 'Характеристики'}
                                showHeader={false}
                                pagination={false}
                                style={{ width: '100%' }}
                                columns={[
                                    {
                                        title: 'Name',
                                        dataIndex: 'name',
                                        key: 'name',
                                        // render: (text: React.ReactNode) => <a>text</a>
                                    },
                                    {
                                        title: 'Count',
                                        dataIndex: 'count',
                                        key: 'count',
                                    },
                                    {
                                        title: 'Bonus',
                                        dataIndex: 'bonus',
                                        key: 'bonus',
                                    }
                                ]}
                                dataSource={[
                                    {
                                        key: '1',
                                        name: 'Сила',
                                        count: state.character.about.attributes.strength,
                                        bonus: Math.round((state.character.about.attributes.strength - 0.5) / 2 - 5),
                                    },
                                    {
                                        key: '2',
                                        name: 'Ловкость',
                                        count: state.character.about.attributes.dexterity,
                                        bonus: Math.round((state.character.about.attributes.dexterity - 0.5) / 2 - 5)
                                    },
                                    {
                                        key: '3',
                                        name: 'Телосложение',
                                        count: state.character.about.attributes.constitution,
                                        bonus: Math.round((state.character.about.attributes.constitution - 0.5) / 2 - 5)
                                    },
                                    {
                                        key: '4',
                                        name: 'Интеллект',
                                        count: state.character.about.attributes.intelligence,
                                        bonus: Math.round((state.character.about.attributes.intelligence - 0.5) / 2 - 5)
                                    },
                                    {
                                        key: '5',
                                        name: 'Мудрость',
                                        count: state.character.about.attributes.wisdom,
                                        bonus: Math.round((state.character.about.attributes.wisdom - 0.5) / 2 - 5)
                                    },
                                    {
                                        key: '6',
                                        name: 'Харизма',
                                        count: state.character.about.attributes.charisma,
                                        bonus: Math.round((state.character.about.attributes.charisma - 0.5) / 2 - 5)
                                    },
                                ]}
                            />
                        </div>
                        
                        </div>
                    : <div>Loading . . .</div>
            }
            {/* <button onClick={
                () => setCharacter('klinfort', state.character as Character)
            }>set</button> */}
        </>
    );
};

export default connect(null, null)(CharacterView);
