import axios from "../axios_url";

export const GET_HOSPITAL = 'GET_HOSPITAL';
export const SHOW_SCHEDULE = 'SHOW_SCHEDULE';
export const SET_DATE = 'SET_DATE';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SUBMIT_DATA = 'SUBMIT_DATA';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getUserData = (data) => {
    return {type: GET_USER_DATA,data};
};

export const submitData = () => {
    return {type: SUBMIT_DATA};
};

export const fetchRequest = () => {
    return {type: FETCH_REQUEST};
};

export const fetchSuccess = id => {
    return {type: FETCH_SUCCESS, id};
};

export const fetchPost = () => {
    return {type: FETCH_POST};
};

export const fetchError = error => {
    return {type: FETCH_ERROR, error};
};

export const postUserData = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(submitData());
        dispatch(fetchRequest());
        const sendingData = getState();
        const userData = {
            hospitalInfo: [sendingData.hospitalInfo.name, sendingData.hospitalInfo.street],
            doctorName: sendingData.docName,
            date: sendingData.set_date,
            time: sendingData.set_time,
            first_name: sendingData.first_name,
            last_name: sendingData.last_name,
            year_of_birth: sendingData.year_of_birth
        };

        // sendingData.set_date = [hospitalInfo: [sendingData.hospitalInfo.name, sendingData.hospitalInfo.street],
        //     doctorName: sendingData.docName,
        //
        //     time: sendingData.set_time,
        //     first_name: sendingData.first_name,
        //     last_name: sendingData.last_name,
        //     year_of_birth: sendingData.year_of_birth]



        console.log(userData);
        axios.post('queueToHospital.json', userData).then(response => {
            const ticket_id = response.data.name;
            console.log(ticket_id);
            dispatch(fetchSuccess(ticket_id));
        }, error => {
            dispatch(fetchError())
        })
    }
};
