import React from 'react';
import {HOSPITALS} from "../../../Constants";
import {connect} from "react-redux";

const MakeAnAppointment = (props) => {
    return (
        <div className='make_an_appointment'><p className='info'>Выберите Центр Семейной Медицины</p>
            <select id="select_hospital" name="select_hospital" onChange={e=>props.getHospital(e)}>
                <option>Список ЦСМ города Бишкек</option>
                {HOSPITALS.map((item, index)=>{
                    return <option value={item.street} key={index}>{`${item.name}  ${'(' + item.street + ')'}`}</option>
                })}
            </select>
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
        getHospital: (e)=>dispatch({type: 'GET_HOSPITAL', value: e.currentTarget.value}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeAnAppointment);