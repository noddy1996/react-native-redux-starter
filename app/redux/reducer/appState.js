import { TOGGLE_DARK_MODE } from "../appStateAction";
 

const initialState = {
    darkMode: false,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode:  !state.darkMode ,
            }
        default:
            return  state   //must be like this so it can  presist the reducers
    }
}