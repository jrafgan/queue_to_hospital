import {DOCTORS, HOSPITALS, SCHEDULE} from "../Constants";
import {
    FETCH_ERROR,
    FETCH_POST,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    GET_HOSPITAL,
    GET_USER_DATA,
    SET_DATE, SET_RESPONSE_DATA, SHOW_SCHEDULE, SHOW_TIME_TABLE,
    SUBMIT_DATA
} from "./actions";


const initialState = {
    hospitalInfo: null, //весь список поликлиник
    doctorInfo: null, //список врачей
    doctorSchedule: null, //раб. график выбранного врача
    docName: null, //имя врача
    docSpecialist: null,
    docId: '', // ID врача
    set_date: '', //дата
    set_time: '', //время посещения
    first_name: '', //имя пациента
    last_name: '', //фамимлия пациента
    year_of_birth: '', //дата рождения
    show_ticket: false, //показать результат записи
    ticket_id: '', //ID записи на сервере
    showSpinner: false, // показать Спиннер
    response_data: null, //ответ с сревера при поиске
    showTimeTable: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_REQUEST: //это все для спиннера
            return {
                ...state,
                showSpinner: true,
            };

        case FETCH_SUCCESS: //это все для спиннера
            return {
                ...state,
                showSpinner: false,
                ticket_id: action.id,
            };

        case FETCH_POST: //это все для спиннера
            return {
                ...state,
                showSpinner: false,
            };

        case FETCH_ERROR: //это все для спиннера
            return {
                ...state,
                showSpinner: false,
            };

        case GET_HOSPITAL: //выбор больницы из массива
            const street = action.value;
            const index = HOSPITALS.findIndex(item => item.street === street);
            return {
                ...state,
                hospitalInfo: HOSPITALS[index], doctorInfo: DOCTORS[index]
            };

        case SHOW_SCHEDULE: //показать раб. график врача

            const id = action.id;
            const index2 = SCHEDULE.findIndex(item => Object.keys(item)[0] === id);
            console.log(id);
            const docSchedule = Object.values(SCHEDULE[index2])[0];
            console.log(state.doctorInfo[id]);
            const docName = docSchedule[0];
            console.log(docName);
            return {
                ...state,
                doctorSchedule: docSchedule,
                docName: docName,
                docId: id,
                docSpecialist: state.doctorInfo[id],
            };

        case SET_DATE: //выбранная дата посещения
            return {
                ...state,
                set_date: action.date,
            };

        case GET_USER_DATA: //получение инфы юзера
            const {name, value} = action.data;
            return {
                ...state,
                [name]: value
            };


        case SUBMIT_DATA: //сохранение инфы в state и показать результат
            return {
                ...state,
                show_ticket: true
            };

        case SET_RESPONSE_DATA: //сохранить response в state
            return {
                ...state,
                response_data: action.data
            };

        case SHOW_TIME_TABLE: //сохранить response в state
            return {
                ...state,
                showTimeTable: true,
            };

        default:
            return {...state};
    }

};

export default reducer;
