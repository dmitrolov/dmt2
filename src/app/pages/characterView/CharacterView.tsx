import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterView.sass';
import { getCharacter } from '../../api/firebase/firebase';
import { Character } from '../../types/character/Character';

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
        <div className='character-view'>
            {state.character ? <div>
                <img style={{ width: 100 }} src={state.character.about.description.imageUrl} alt="" />
                <table>
                    <tbody>
                        <tr key={1}>
                            <td>playerName</td>
                            <td>{state.character.about.info.playerName}</td>
                        </tr>
                        <tr key={2}>
                            <td>characterName</td>
                            <td>{state.character.about.info.characterName}</td>
                        </tr>
                        <tr key={3}>
                            <td>race</td>
                            <td>{state.character.about.info.race}</td>
                        </tr>
                        <tr key={4}>
                            <td>subRace</td>
                            <td>{state.character.about.info.subRace}</td>
                        </tr>
                        <tr key={5}>
                            <td>sex</td>
                            <td>{state.character.about.description.sex}</td>
                        </tr>
                        <tr key={6}>
                            <td>age</td>
                            <td>{state.character.about.description.age.total}</td>
                        </tr>
                        <tr key={7}>
                            <td>height</td>
                            <td>{state.character.about.description.height}</td>
                        </tr>
                        <tr key={8}>
                            <td>weight</td>
                            <td>{state.character.about.description.weight}</td>
                        </tr>
                        <tr key={9}>
                            <td>background</td>
                            <td>{state.character.about.info.background}</td>
                        </tr>
                    </tbody>
                </table>
            </div> : <div>Loading . . .</div>}
            {/* <button onClick={
                () => setCharacter(props.match.params.id, state.character as Character)
            }>set</button> */}
        </div>
    );
};

export default connect(null, null)(CharacterView);
