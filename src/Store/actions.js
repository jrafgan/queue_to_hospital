import axios from "../axios_url";

export const GET_HOSPITAL = 'GET_HOSPITAL';
export const SHOW_SCHEDULE = 'SHOW_SCHEDULE';
export const SET_DATE = 'SET_DATE';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SUBMIT_DATA = 'SUBMIT_DATA';
export const SET_RESPONSE_DATA = 'SET_RESPONSE_DATA';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SHOW_TIME_TABLE = 'SHOW_TIME_TABLE';

let RESPONSE_DATA = null;

export const getUserData = (data) => {
    return {type: GET_USER_DATA, data};
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

export const showSchedule = (id, specialistName) => {
    return {type: SHOW_SCHEDULE, id, specialistName};
};

export const setDate = date => {
    return {type: SET_DATE, date};
};

export const setResponseData = (data) => {
    return {type: SET_RESPONSE_DATA, data};
};

export const showTimeTable = () => {
    return {type: SHOW_TIME_TABLE};
};

export const postUserData = (e) => { //отправка инфы на АПИ
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(submitData());
        dispatch(fetchRequest());
        const sendingData = getState();
        const userData = {
            hospitalInfo: [sendingData.hospitalInfo.name, sendingData.hospitalInfo.street],
            doctorId: sendingData.docId,
            date: sendingData.set_date,
            time: sendingData.set_time,
            first_name: sendingData.first_name,
            last_name: sendingData.last_name,
            year_of_birth: sendingData.year_of_birth
        };

        console.log(userData);
        axios.post('queueToHospital.json', userData).then(response => {
            const ticket_id = response.data.name;
            dispatch(fetchSuccess(ticket_id));
        }, error => {
            dispatch(fetchError())
        })
    }
};

export const checkInApi = (id) => { // поиск по ID врача на

    return (dispatch) => {

        console.log('checkInApi is working', id);

        axios.get(`queueToHospital.json?orderBy="doctorId"&equalTo="${id}"`).then(response => {
            console.log(response.data);
            if (Object.keys(response.data).length !== 0) {
                RESPONSE_DATA = response.data[Object.keys(response.data)];
                console.log(response.data[Object.keys(response.data)])
            }
        }).then(dispatch(showSchedule(id)));
    }
};

export const checkDate = () => { //проверка если дата совпадает с датой с сревера

    return (dispatch, getState) => {
        const state = getState();

        if (RESPONSE_DATA !== null) {
            console.log(RESPONSE_DATA.date, state.set_date);
            if (RESPONSE_DATA.date === state.set_date) {
                dispatch(setResponseData(RESPONSE_DATA));
                console.log('date OK');
            }
        }
    }
};