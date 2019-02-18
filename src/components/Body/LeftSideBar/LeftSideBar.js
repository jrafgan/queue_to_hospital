import React from 'react';
import {connect} from "react-redux";

const LeftSideBar = (props) => {
    console.log(props.hospitalInfo);
    return (
        <div className='left_side_bar'>

            {props.hospitalInfo !== null ? <div className='info_div'>
                <p>Инфо о поликлинике</p>
                <p>{props.hospitalInfo.name}</p>
                <p>{props.hospitalInfo.city}</p>
                <p>{props.hospitalInfo.street}</p>
                <p>{props.hospitalInfo.phone1}</p>
                <p>{props.hospitalInfo.phone2}</p>
                <p>{props.hospitalInfo.phone3}</p>
                <p>{props.hospitalInfo.dinner}</p>
                <p>{props.hospitalInfo.mon}</p>
                <p>{props.hospitalInfo.tue}</p>
                <p>{props.hospitalInfo.wed}</p>
                <p>{props.hospitalInfo.thu}</p>
                <p>{props.hospitalInfo.fri}</p>
                <p>{props.hospitalInfo.sat}</p>
                <p>{props.hospitalInfo.sun}</p>
            </div> : <p>Чтобы увидеть инфо о Центре Семейной Медицине выберите его выше</p>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        hospitalInfo: state.hospitalInfo,
    }
};

export default connect(mapStateToProps)(LeftSideBar);