import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getAdventure } from '../../api/firebase';
import { Adventure } from '../../types/adventure';
import { Character } from '../../types/adventure/character';
import { ClientWindowResolution } from '../../types/general';
import { CharacterView } from '../characterView/CharacterView';
import './AdventureView.sass';

interface MatchParams {
	id: string;
}

interface AdventureViewProps extends RouteComponentProps<MatchParams> {
	windowData: ClientWindowResolution;
}

const AdventureView: React.FC<AdventureViewProps> = (props) => {
	// const adventureUrl = props.match.url;
	const adventureId = props.match.params.id;
	const [adventure, setAdventure] = useState<Adventure>();
	const [containers, setContainers] = useState<JSX.Element[]>()

	const countGridParams = () => {
		const sideMenuWidth = 214;
		const headerHeight = 32;
		const { height, width, isMobile } = props.windowData

		const widthContainersCount = isMobile
			? Math.trunc((width - sideMenuWidth)) / 320
			: Math.trunc((width)) / 320
		const heightContainersCount = Math.trunc(height / 450)

		return {
			itemHeight: isMobile
				? height / heightContainersCount - headerHeight
				: height / heightContainersCount,
			itemWidth: isMobile
				? width / widthContainersCount
				: (width - sideMenuWidth) / widthContainersCount,
			maxContainersCount: widthContainersCount * heightContainersCount
		}
	}
	const gridParams = countGridParams()

	useEffect(() => {
		getAdventure(adventureId).then(response => {
			if (!adventure && response) {
				setAdventure(response);
			}
		}).then(() => {
			if (adventure) setContainers([renderContentPicker()])
		})
	}, [adventure, adventureId])

	const renderContainer = (content: JSX.Element) => {
		return <div
			className={'character-wrap'}
			style={{
				display: 'flex',
				// flexDirection: props.windowData.isMobile ? 'column' : 'row',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: gridParams.itemHeight,
				width: gridParams.itemWidth
			}}>
			{content}
		</div>
	}

	const renderContentPicker = () => {
		return <div className="content-picker">
			<div className="character-picker">
				{adventure?.charactersList.map((character: Character) => {
					return <Button onClick={() => {
						addContainer(<CharacterView character={character} windowData={props.windowData} />)
					}}>{character.about.info.characterName}</Button>
				})}
			</div>
		</div>
	}

	const addContainer = (content: JSX.Element) => {
		console.log('containers', containers)
		containers
			? setContainers([...containers, ...[content, renderContentPicker()]])
			: setContainers([...[content, renderContentPicker()]])
	}

	console.log('adventure', adventure);
	console.log('containers', containers);

	return (<>{
		adventure && containers
			? <div className='adventure-view'>
				<button onClick={() => { addContainer(renderContentPicker()) }}>add</button>
				{
					props.windowData.isMobile
						? <>{renderContainer(<CharacterView character={adventure.charactersList[0]} windowData={props.windowData} />)}</>
						: <>
							{/* {renderContainer(<CharacterView character={adventure.charactersList[0]} windowData={props.windowData} />)} */}
							{/* {renderContainer(renderContentPicker())} */}
							{containers.map(container => {
								console.log(container);
								return renderContainer(container);
							})}

						</>
				}
			</div>
			: <div>Loading . . .</div>
	}</>);
};

const mapStateToProps = (state: AdventureViewProps) => {
	return ({
		windowData: state.windowData,
	})
}

export default connect(mapStateToProps, null)(AdventureView);
