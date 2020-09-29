import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CharacterView.sass';
import { getCharacter } from '../../api/firebase';
import { Character } from '../../types/character/Character';
import { CharacterGeneralInfoSection } from './characterInfoSection/characterGeneralInfo';
import GameMenu from './GameMenu/GameMenu';
import { ClientWindowResolution } from '../../types/window/window';
import { CharacterAttributesSection } from './characterInfoSection/characterAttributes';
import { CharacterExperienceSection } from './characterInfoSection/characterExperience';

export type CharacterViewTabName = 'generalInfo' | 'attributes' | 'experience'

interface CharacterViewProps {
    windowData: ClientWindowResolution;
    match: any
}

const CharacterView = (props: CharacterViewProps) => {
    const [character, setCharacter] = useState<Character>();
    const [currentTab, setCurrentTab] = useState<CharacterViewTabName>('generalInfo')

    useEffect(() => {
        getCharacter(props.match.params.id)
            .then((data) => {
                if (data) {
                    setCharacter(data)
                    console.log('[characterData]', data);
                }
            })
    }, [props.match.params.id]);

    console.log('[state.character]', JSON.stringify(character));

    const renderTab = (currentTab: CharacterViewTabName, character: Character) => {
        const tab: Record<CharacterViewTabName, JSX.Element> = {
            generalInfo: <CharacterGeneralInfoSection info={character.about.info} description={character.about.description} />,
            attributes: <CharacterAttributesSection attributes={character.about.attributes} skills={character.about.proficiency.skills} />,
            experience: <CharacterExperienceSection classes={character.about.info.classes} action={character.about.action} info={character.about.info} />,
        }
        return tab[currentTab]
    }

    return (
        <>
            {
                character
                    ? <div style={{
                        display: 'flex',
                        flexDirection: props.windowData.isMobile ? 'column' : 'row'
                    }}>
                        <div
                            style={{
                                height: props.windowData.isMobile ? props.windowData.height - 30 - 60 : props.windowData.height,
                                overflow: 'auto'
                            }}
                            children={renderTab(currentTab, character)}
                        />
                        <GameMenu setCharacterViewTab={setCurrentTab} windowData={props.windowData} />
                    </div>
                    : <div>Loading . . .</div>
            }
            {/* <button onClick={
                () => setCharacterToDB('gremmy', characterMock)
            }>set</button> */}
        </>
    );
};

const mapStateToProps = (state: CharacterViewProps) => {
    return ({
        windowData: state.windowData,
    })
}

export default connect(mapStateToProps, null)(CharacterView);
