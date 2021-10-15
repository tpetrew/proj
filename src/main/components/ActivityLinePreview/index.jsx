import React from 'react';
import YoutubeIcon from '../../../24/symbols/youtube.svg';
import Heart from '../../../24/basic/heart.svg';
import Direction from '../../../24/maps/direction-45.svg';
import Etherium from '../../../24/finance/ethereum.svg';

const ActivityLinePreview = ({item}) => {
    return (
        <div className="recent-activity-wrapper__column__element">
            <div className="recent-activity-wrapper__column__element__left">
                <div className="recent-activity-wrapper__column__element__image">
                    <img src={YoutubeIcon} />
                </div>
                <div className="recent-activity-wrapper__column__element__about">
                    <h3>{item.name}</h3>
                    <p>{item.date}</p>
                </div>
            </div>
            <div className={`recent-activity-wrapper__column__element__amount income ${item.type}`}>
                {item.type === 'income' ? "+" : "-"} ${item.amount}
            </div>
        </div>
    )
}

export default ActivityLinePreview;