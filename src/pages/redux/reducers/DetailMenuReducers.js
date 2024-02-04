import { TYPES } from "../Types";

const initialState = {
    menu : {}
}

export const AuthMenuDetail = (state= initialState,action) => {
switch(action.type){
case TYPES.AUTH_DETAIL:
return{
 ...state,
 menu : action.payLoad.data
}
default:
return state
}
}