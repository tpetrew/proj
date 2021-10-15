import React from 'react';
import TextAlignRight from '../../../24/basic/white/text-align-right.svg';
import ArrowTopRight from '../../../24/basic/white/arrow-top-right.svg';
import Folder from '../../../24/basic/white/folder.svg';

const TotalPreviewCard = ({item}) => {
    return (
        <div className="main-panel__total-blocks__box">
            <div className="main-panel__total-blocks__box__first-line">
                <span>{item.name}</span>
                <div className={`main-panel__total-blocks__box__first-line__icon-wrapper ${item.color}`}>
                    <img src={item.image === 1 ? TextAlignRight : item.image === 2 ? ArrowTopRight : Folder} />
                </div>
            </div>
            <div className="main-panel__total-blocks__box__bottom">
                <div className="main-panel__total-blocks__box__second-line">
                    <span className="main-panel__total-blocks__box__second-line__large">
                        ${Math.floor(item.amount/1000)},{item.amount%1000 === 0 ? "000" : item.amount%1000}
                    </span>
                    <span className={`main-panel__total-blocks__box__second-line__small ${item.type}`}>
                        {item.type === 'text-green' ? '+' : '-'}{item.percent}%
                    </span>
                </div>
                <p>Closed target</p>
            </div>
        </div>
    )
}

export default TotalPreviewCard;