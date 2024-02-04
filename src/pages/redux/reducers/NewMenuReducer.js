import { TYPES } from "../Types";

const initiaState = {
    isCreate : false,
    message_SuccesCreate : "",
    message_EmptyCreate : ""
}

export const createNewMenu = (state = initiaState,action) => {
switch(action.type){
case TYPES.AUTH_NEWDATA:
return{
    isCreate : action.payLoad.isCreate,
    message_SuccesCreate : "CREATE DATA SUCCES"
}
case TYPES.NEWDATA_EMPTY:
return{
    isCreate : action.payLoad.isCreate,
    message_EmptyCreate : "DATA FIELD!"
}
default:
return state
}
}