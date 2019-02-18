import React from 'react';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/ru';
import {connect} from "react-redux";

const Calendar = (props) => {
        return (
            <DayPickerInput
                required
                value='Выберите число'
                formatDate={formatDate}
                parseDate={parseDate}
                format="LL"
                placeholder={`${formatDate(new Date(), 'LL', 'ru')}`}
                dayPickerProps={{
                    locale: 'ru',
                    localeUtils: MomentLocaleUtils,
                }}
                onDayChange={props.dateChange} />
        )
};

const mapDispatchToProps = dispatch => {
    return {
        dateChange: (e) => dispatch({type: 'SET_DATE', value: `${formatDate(e, 'LL', 'ru')}`}),
    }
};

export default connect(null, mapDispatchToProps)(Calendar);