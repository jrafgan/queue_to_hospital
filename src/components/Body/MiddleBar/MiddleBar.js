import React from 'react';

const MiddleBar = (props) => {
    if (props.flag !== null)console.log(Object.values(props.docs));
    return (
        <div className='middle_bar'>
            <p>Врачи :</p>
            {props.flag !== null ? <ul>
                {Object.values(props.docs).map((item, index)=>{



                   return <li key={index}><ul className='ul'>{Array.isArray(item) ? item.map((item2, index)=>{if (index === 0) {
                       return <li className='show' onClick={props.onClick}>{item2}</li>
                   } else {
                       return <li className='hide'>{item2}</li>
                   }
                   }) : null}</ul></li>
                })
                }
                </ul> : null}
        </div>
    );
};

export default MiddleBar;