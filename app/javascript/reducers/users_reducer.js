import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullUser = {
    id: null
};

const usersReducer = (oldState ={}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const {first_name , last_name, email} = action.payload.users;
            return Object.assign({},oldState,{first_name, last_name, email});

        // case LOGOUT_CURRENT_USER:
        //     return _nullUser;
        default:
            return oldState;
    }
}

export default usersReducer