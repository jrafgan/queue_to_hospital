import {DOCTORS, HOSPITALS, SCHEDULE} from "../Constants";
import axios from "../axios_url";

const initialState = {
    hospitalInfo: null,
    doctorInfo: null,
    doctorSchedule: null,
    docName: null,
    set_date: '',
    first_name: '',
    last_name: '',
    year_of_birth: '',
    show_ticket: false,
    ticket_id: '',

};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_HOSPITAL':
            const street = action.value;
            const index = HOSPITALS.findIndex(item => item.street === street);
            console.log('Hospitals index', HOSPITALS[index]);
            console.log('Doctors index', DOCTORS[index]);
            console.log('this.state', state.hospitalInfo);
            return {
                ...state,
                hospitalInfo: HOSPITALS[index], doctorInfo: DOCTORS[index]
            };

        case 'SHOW_SCHEDULE':
            const id = action.value;
            const index2 = SCHEDULE.findIndex(item => Object.keys(item)[0] === id);
            const docSchedule = Object.values(SCHEDULE[index2])[0];
            const docName = docSchedule[0];
            console.log(docName);
            console.log(action.value);
            //state.doctorSchedule = docSchedule;
            return {
                ...state,
                doctorSchedule: docSchedule,
                docName: docName,
            };

        case 'SET_DATE':
            const date = action.value;
            console.log(date);
            return {
                ...state,
                set_date: date,
            };

        case 'GET_USER_DATA':
            const {name, value} = action.value;
            return {
                ...state,
                [name]: value
            };


        case 'SUBMIT_DATA':
            action.value.preventDefault();
            const userData = {
                hospitalInfo: [state.hospitalInfo.name, state.hospitalInfo.street],
                doctorName: state.docName,
                date: state.set_date,
                first_name: state.first_name,
                last_name: state.last_name,
                year_of_birth: state.year_of_birth
            };
            console.log(userData);
            axios.post('queueToHospital.json', userData).then(response => {
                state.ticket_id = response.data.name;
                console.log(state);
            });

            return {
                ...state,
                show_ticket: true
            };

        default:
            return {...state};
    }

};

export default reducer;
