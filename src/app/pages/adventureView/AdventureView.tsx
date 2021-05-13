import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getAdventure } from '../../api/firebase';
import { Adventure } from '../../types/adventure';
import { ClientWindowResolution } from '../../types/General';
import './AdventureView.scss';
import { ContentItemPicker } from './contentItemPicker';

interface MatchParams {
	id: string;
}

interface AdventureViewProps extends RouteComponentProps<MatchParams> {
	windowData: ClientWindowResolution;
}

const AdventureView: React.FC<AdventureViewProps> = (props) => {
	// const adventureUrl = props.match.url;
	const adventureId = props.match.params.id;
	const { height, width, isMobile } = props.windowData
	const [adventure, setAdventure] = useState<Adventure>();

	const countGridParams = () => {
		const sideMenuWidth = 214;
		const headerHeight = 32;

		const widthContainersCount = isMobile
			? Math.trunc(width / 320)
			: Math.trunc((width - sideMenuWidth) / 320)
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
		})
	}, [adventure, adventureId])

	const renderContentWrap = (content: JSX.Element) => {
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

	const renderGrid = (adventure: Adventure) => {
		const containersArray: JSX.Element[] = [];
		for (let i = 0; i < gridParams.maxContainersCount; i++) {
			containersArray.push(renderContentWrap(<ContentItemPicker adventure={adventure} windowData={props.windowData} />))
		}
		return containersArray;
	}

	return (<>{
		adventure
			? <div className='adventure-view'>
				{
					isMobile
						? <>{renderContentWrap(<ContentItemPicker adventure={adventure} windowData={props.windowData} initialStep={'itemPicker'} />)}</>
						: <>{renderGrid(adventure)}</>
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
