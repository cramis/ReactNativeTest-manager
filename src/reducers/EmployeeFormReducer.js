import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = { 
    name: '', 
    phone: '',
    shift: ''
    // error: '',
    // loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };    
        case EMPLOYEE_CREATE:        
            return INITIAL_STATE;    
        // case LOGIN_USER_SUCCESS:        
        //         return { ...state, ...INITIAL_STATE, user: action.payload };  
        // case LOGIN_USER_FAIL:        
        //         return { ...state, error: 'Auth Error', loading: false };   
        // case LOGIN_USER_LOADING:        
        //         return { ...state, error: '', loading: true };   
        default:
            return state;
    }
};
