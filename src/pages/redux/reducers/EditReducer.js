import { TYPES } from "../Types";

const initialState = {
    isEdit : false,
    message_EditSucces : ""
}

export const handleEditMenu = (state = initialState,action) => {
switch(action.type){
case TYPES.EDIT_MENU:
return{
    isEdit : action.payLoad.isEdit,
    message_EditSucces : "EDIT SUCCES"
}
default:
return state
}
}