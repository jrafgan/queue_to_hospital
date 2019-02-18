import React from 'react';
import {connect} from "react-redux";

const MiddleBar = (props) => {
    if (props.doctorName.hospitalInfo !== null)console.log(Object.keys(props.doctorName.doctorInfo));
    return (
        <div className='middle_bar'>
            <p>Врачи :</p>
            <ul>
            {props.doctorName.hospitalInfo !== null ? Object.values(props.doctorName.doctorInfo).map((item, index)=>{
                const keysArr = Object.keys(props.doctorName.doctorInfo);
                return index === 0 ? <p key={index}>{item}</p> : <li key={index} id={keysArr[index]} onClick={e=>props.showSchedule(e)}>{item}</li>
            }) : null}
            </ul>
            <div className="schedule">
                <ul>
                {props.doctorName.doctorSchedule ? props.doctorName.doctorSchedule.map((item, index)=>{
                    return <li key={index}>{item}</li>
                }) : null}
                </ul>
            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        doctorName: state,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showSchedule: (e)=>dispatch({type: 'SHOW_SCHEDULE', value: e.currentTarget.id}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MiddleBar);