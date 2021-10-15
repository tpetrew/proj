import React from 'react';
import CalendarDates from '../../../24/basic/gray/calendar-dates.svg';
import ChevronBottom from '../../../24/basic/gray/chevron-bottom.svg';

const ChangeDate = () => {
    return (
        <div className="set-week-wrapper">
            <img src={CalendarDates} />
            <span>This week</span>
            <img src={ChevronBottom} />
        </div>
    )
}

export default ChangeDate