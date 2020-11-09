import { Button } from "antd";
import React, { useState } from "react"
import { Adventure } from "../../types/adventure";
import { Character } from "../../types/adventure/character";
import { ClientWindowResolution } from "../../types/general";
import { CharacterView } from "../characterView/CharacterView";

type contentItems = 'addButton' | 'itemPicker' | 'customItem';

interface ContentItemPickerProps {
	adventure: Adventure;
	windowData: ClientWindowResolution;
	initialStep?: contentItems;
}

export const ContentItemPicker: React.FC<ContentItemPickerProps> = (props) => {
	const [currentstep, setCurrentStep] = useState<contentItems>(props.initialStep || 'addButton');
	const [currentItem, setCurrentItem] = useState<JSX.Element>(<></>);

	const onCustumItemPickerButtonClick = (element: JSX.Element) => {
		setCurrentItem(element);
		setCurrentStep('customItem');
	}

	const addButton: JSX.Element = <Button onClick={() => { setCurrentStep('itemPicker') }} className={'add-content-item-button'} type={'dashed'}>+</Button>
	const itemPicker: JSX.Element = <div className="content-picker">
		<div className="character-picker">
			{props.adventure?.charactersList.map((character: Character) => {
				return <Button onClick={() => {
					onCustumItemPickerButtonClick(<CharacterView character={character} windowData={props.windowData} />)
				}}>{character.about.info.characterName}</Button>
			})}
		</div>
	</div>	

	const content: Record<contentItems, JSX.Element> = {
		addButton,
		itemPicker,
		customItem: currentItem
	}

	return <>{
		content[currentstep]
	}</>
}