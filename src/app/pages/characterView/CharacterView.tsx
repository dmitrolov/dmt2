import React, { useState } from 'react';
import './CharacterView.sass';
import { Character } from '../../types/adventure/character';
import { CharacterGeneralInfoSection } from './characterInfoSection/characterGeneralInfo';
import GameMenu from './GameMenu/GameMenu';
import { CharacterAttributesSection } from './characterInfoSection/characterAttributes';
import { CharacterExperienceSection } from './characterInfoSection/characterExperience';
import { CharacterProficiencySection } from './characterInfoSection/characterProficiency';
import { CharacterCombatSection } from './characterInfoSection/characterCombat';
import { ClientWindowResolution } from '../../types/General';
import { CharacterEquipmentSection } from './characterEquipmentSection/characterEquipment';

export type CharacterViewTabName = 'generalInfo' | 'attributes' | 'experience' | 'proficiency' | 'combat' | 'equipment';

interface CharacterViewProps {
    windowData: ClientWindowResolution;
    character: Character;
}

export const CharacterView: React.FC<CharacterViewProps> = (props) => {
    const [currentTab, setCurrentTab] = useState<CharacterViewTabName>('generalInfo')

    const renderTab = (currentTab: CharacterViewTabName, character: Character) => {
        const tab: Record<CharacterViewTabName, JSX.Element> = {
            // Character about
            generalInfo: <CharacterGeneralInfoSection info={character.about.info} description={character.about.description} />,
            attributes: <CharacterAttributesSection attributes={character.about.attributes} skills={character.about.proficiency.skills} />,
            experience: <CharacterExperienceSection classes={character.about.info.classes} action={character.about.action} info={character.about.info} />,
            proficiency: <CharacterProficiencySection proficiency={character.about.proficiency} />,
            combat: <CharacterCombatSection action={character.about.action} attributes={character.about.attributes} stats={character.about.stats} effects={character.about.effects} />,
            // Equipment
            equipment: <CharacterEquipmentSection equipment={character.equipment} />,
        }
        return tab[currentTab]
    }

    return (
        <>
            <div
                style={{
                    // height: props.windowData.isMobile ? props.windowData.height - 32 - 60 : props.windowData.height,
                    height: props.windowData.height - 32 - 60,
                    overflow: 'auto'
                }}
                children={renderTab(currentTab, props.character)}
            />
            <GameMenu setCharacterViewTab={setCurrentTab} windowData={props.windowData} />
        </>
    );
};
