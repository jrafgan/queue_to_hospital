import React, {Fragment} from 'react';
import Calendar from "./Calendar/Calendar";
import {connect} from "react-redux";
import {TIME} from '../../../Constants';

const RightSideBar = (props) => {
console.log(props.showTicket);
    return <div className='set_up_data'>
        {props.doctorName !== null ? <Fragment><Calendar/>
        <div className="doc_name"><p>{props.doctorName}</p></div>
        <form onSubmit={props.submitData}>
            <input type="text" name="last_name" placeholder="Ваша Фамилия" onChange={props.getUserData} value={props.userFirstName.first_name} required />

            <input type="text" name="first_name" placeholder="Ваше Имя" onChange={props.getUserData} value={props.userLastName.last_name} required />

            <input type="text" name='year_of_birth' placeholder="Дата рождения: 01/01/1995" onChange={props.getUserData} value={props.birthYear.year_of_birth} required pattern="\d{1,2}/\d{1,2}/\d{4}"/>

            <button type='submit' onSubmit={props.submitData} >Записаться</button>
            </form></Fragment> : <div><p>Выберите Врача</p></div>}

            <div className="table">
                {TIME.map((item, index)=>{
                    return <div className="time_table" key={index}>
                        <div className="time"><p>{item}</p></div>
                        <div className="user_name">UserName</div>
                    </div>
                })}
            </div>

        {props.showTicket === true ?
            <div className='data_result'>
                <p>{props.date}</p>
                <p>{props.hospitalInfo.name + ' ' + props.hospitalInfo.street}</p>
                <p>Имя врача : {props.doctorName}</p>
                <p>Ваше имя : {props.userFirstName}</p>
                <p>Ваша фамилия : {props.userLastName}</p>
                <p>Ваша дата рождения : {props.birthYear}</p>
            </div> : null}
    </div>
};

const mapStateToProps = state => {
    return {
        doctorName: state.docName,
        userFirstName: state.first_name,
        userLastName: state.last_name,
        birthYear: state.year_of_birth,
        showTicket: state.show_ticket,
        hospitalInfo: state.hospitalInfo,
        date: state.set_date,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserData: (e) => dispatch({type: 'GET_USER_DATA', value: e.currentTarget}),
        submitData: (e) => dispatch({type: 'SUBMIT_DATA', value: e}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);