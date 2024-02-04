import { TYPES } from "../Types";

const initialState = {
    isDelete : false,
    message_DeleteSucces : ""
}

export const DeleteData = (state = initialState,action) => {
switch(action.type){
case TYPES.DELETE_MENU:
return {
 isDelete : action.payLoad.isDelete,
 message_DeleteSucces : "DELETE SUCCES"    
}
default:
return state
}
}
