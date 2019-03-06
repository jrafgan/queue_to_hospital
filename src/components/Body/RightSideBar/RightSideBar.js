import React, {Fragment} from 'react';
import Calendar from "./Calendar/Calendar";
import {connect} from "react-redux";
import {TIME} from '../../../Constants';
import {postUserData, getUserData, showTimeTable} from "../../../Store/actions";

const RightSideBar = (props) => {
    console.log(props);
    return <div className='set_up_data'>

        {props.doctorName !== null ? <Fragment>

            <form className='form' onSubmit={props.submitData}>
                <p className="doc_name">{props.specialist} : {props.doctorName}</p>

                <Calendar/>

                <input className='last_name_input' type="text" name="last_name" placeholder="Ваша Фамилия" onChange={props.getUserData}
                       value={props.userFirstName.first_name} required/>

                <input className='first_name_input' type="text" name="first_name" placeholder="Ваше Имя" onChange={props.getUserData}
                       value={props.userLastName.last_name} required/>

                <input className='year_of_birth_input' type="text" name='year_of_birth' placeholder="Дата рождения: 01/01/1995"
                       onChange={props.getUserData} value={props.birthYear.year_of_birth} required
                       pattern="\d{1,2}/\d{1,2}/\d{4}"/>

                <div className="table">
                    <p onClick={props.showTimeTable}>Выберите время</p>
                    <p className='info'>Кликните на время</p>



                    {props.doctorName !== null ? TIME.map((item, index) => {

                        return <div className="time_table" key={index}>

                            <input className="time" type="text" name="set_time" readOnly={item} value={item} onClick={props.getUserData} />
                            <div className="user_name">{props.response !== null && props.response.time === item ? props.response.last_name + ' ' + props.response.first_name + ' ' + props.response.year_of_birth : 'Свободно'}</div>
                        </div>
                    }) : null}
                </div>

                <button className='submit_btn' type='submit' onSubmit={props.submitData}>Записаться</button>
            </form>
        </Fragment> : <div><p className='info'>Выберите Врача</p></div>}



        {props.showTicket === true ?
            <div className='data_result'>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.hospitalInfo.name + ' ' + props.hospitalInfo.street}</p>
                <p>{props.specialist} : {props.doctorName}</p>
                <p>Ваше имя : {props.userFirstName}</p>
                <p>Ваша фамилия : {props.userLastName}</p>
                <p>Ваша дата рождения : {props.birthYear}</p>
            </div> : null}
    </div>
};

const mapStateToProps = state => {
    return {
        doctorName: state.docName,
        specialist: state.docSpecialist,
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
        showTimeTable: () => dispatch(showTimeTable()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);