import { combineReducers } from "redux";
import { Menu } from "./MenuReducer";
import { AuthMenuDetail } from "./DetailMenuReducers";
import { createNewMenu } from "./NewMenuReducer";
import { handleEditMenu } from "./EditReducer";
import { DeleteData } from "./DeleteReducer";
export const rootReducers = combineReducers({
  Menu,
createNewMenu,
AuthMenuDetail,
handleEditMenu,
DeleteData,
})