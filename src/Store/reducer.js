import {DOCTORS, HOSPITALS, SCHEDULE} from "../Constants";
import {
    FETCH_ERROR,
    FETCH_POST,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    GET_HOSPITAL,
    GET_USER_DATA,
    SET_DATE, SHOW_SCHEDULE,
    SUBMIT_DATA
} from "./actions";


const initialState = {
    hospitalInfo: null,
    doctorInfo: null,
    doctorSchedule: null,
    docName: null,
    set_date: '',
    set_time: '',
    first_name: '',
    last_name: '',
    year_of_birth: '',
    show_ticket: false,
    ticket_id: '',
    showSpinner: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_REQUEST:
            return {
                ...state,
                showSpinner: true,
            };

        case FETCH_SUCCESS:
            console.log(action.id);
            return {
                ...state,
                showSpinner: false,
                ticket_id: action.id,
            };

        case FETCH_POST:
            return {
                ...state,
                showSpinner: false,
            };

        case FETCH_ERROR:
            return {
                ...state,
                showSpinner: false,
            };

        case GET_HOSPITAL:
            const street = action.value;
            const index = HOSPITALS.findIndex(item => item.street === street);
            return {
                ...state,
                hospitalInfo: HOSPITALS[index], doctorInfo: DOCTORS[index]
            };

        case SHOW_SCHEDULE:
            const id = action.value;
            const index2 = SCHEDULE.findIndex(item => Object.keys(item)[0] === id);
            const docSchedule = Object.values(SCHEDULE[index2])[0];
            const docName = docSchedule[0];
            console.log(docName);
            console.log(action.value);
            return {
                ...state,
                doctorSchedule: docSchedule,
                docName: docName,
            };

        case SET_DATE:
            const date = action.value;
            console.log(date);
            return {
                ...state,
                set_date: date,
            };

        case GET_USER_DATA:
            console.log(action.data);
            const {name, value} = action.data;
            return {
                ...state,
                [name]: value
            };


        case SUBMIT_DATA:
            return {
                ...state,
                show_ticket: true
            };


        default:
            return {...state};
    }

};

export default reducer;
