import React from 'react';
import {connect} from "react-redux";

const LeftSideBar = (props) => {
    console.log(props.hospitalInfo);
    return (
        <div className='left_side_bar'>

            {props.hospitalInfo !== null ? <div className='info_div'>
                <p>Инфо о поликлинике</p>
                {Object.values(props.hospitalInfo).map((item, index)=>{
                    return <p key={index}>{item}</p>
                })}

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