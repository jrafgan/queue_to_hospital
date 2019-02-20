import React, {Fragment} from 'react';
import Calendar from "./Calendar/Calendar";
import {connect} from "react-redux";
import {TIME} from '../../../Constants';
import {postUserData, getUserData} from "../../../Store/actions";

const RightSideBar = (props) => {
    console.log(props);
    return <div className='set_up_data'>
        {props.doctorName !== null ? <Fragment><Calendar/>
            <div className="doc_name"><p>{props.doctorName}</p></div>
            <form onSubmit={props.submitData}>
                <input type="text" name="last_name" placeholder="Ваша Фамилия" onChange={props.getUserData}
                       value={props.userFirstName.first_name} required/>

                <input type="text" name="first_name" placeholder="Ваше Имя" onChange={props.getUserData}
                       value={props.userLastName.last_name} required/>

                <input type="text" name='year_of_birth' placeholder="Дата рождения: 01/01/1995"
                       onChange={props.getUserData} value={props.birthYear.year_of_birth} required
                       pattern="\d{1,2}/\d{1,2}/\d{4}"/>

                <button type='submit' onSubmit={props.submitData}>Записаться</button>
            </form>
        </Fragment> : <div><p>Выберите Врача</p></div>}

        <div className="table">
            {props.doctorName !== null ? TIME.map((item, index) => {
                return <div className="time_table" key={index}>
                        <input className="time" type="text" name="set_time" readOnly={item} value={item} onClick={props.getUserData} />
                    <div className="user_name">{props.response !== null && props.response.time === item ? props.response.last_name + ' ' + props.response.first_name + ' ' + props.response.year_of_birth : 'Свободно'}</div>
                </div>
            }) : null}
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
        time: state.set_time,
        response: state.response_data,
    }
};

const mapDispatchToProps = dispatch => {

    return {
        getUserData: (e) => dispatch(getUserData(e.currentTarget)),
        submitData: (e) => dispatch(postUserData(e)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);