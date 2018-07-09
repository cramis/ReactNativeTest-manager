import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';

import firebase from 'firebase';

import { Actions } from '../../node_modules/react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {

    
    const { currentUser } = firebase.auth();

    // firebase.database().ref(`/users/${currentUser.uid}/employees`)
    //     .push({ name, phone, shift });

    return (dispatch) => {
        console.log('dispatch: ', dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            console.log('firebase push!');
            Actions.pop({ type: 'reset' });
        })
        .catch(() => {
            console.log('can not firebase push');
            });
    };
};
