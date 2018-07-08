import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';

import firebase from 'firebase';

import { executionAsyncId } from 'async_hooks';

import { Actions } from '../../node_modules/react-native-router-flux';
import EmployeeCreate from '../components/EmployeeCreate';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};



export const employeeCreate = ({ name, phone, shift }) => {

    
    const { currentUser } = firebase.auth();

    
    console.log(currentUser);

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE});
            Actions.pop({ type: 'reset' });
        });
    }
    

};