import { 
    EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;    
        // case EMPLOYEE_CREATE:        
        //     return INITIAL_STATE;    
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
