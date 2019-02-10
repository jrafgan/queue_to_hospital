import React from 'react';
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import MiddleBar from "./MiddleBar/MiddleBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <LeftSideBar/>
            <MiddleBar/>
            <RightSideBar/>
        </div>
    );
};

export default Body;