import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '' 
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('EMAIL_CHANGED action.payload', action.payload);
            return { ...state, email: action.payload };    
        case PASSWORD_CHANGED:        
            console.log('PASSWORD_CHANGED action.payload', action.payload);
            return { ...state, password: action.payload };    
        case LOGIN_USER_SUCCESS:        
                console.log('LOGIN_USER_SUCCESS action.payload', action.payload);
                return { ...state, user: action.payload };   
        default:
            return state;
    }
};
