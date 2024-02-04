import { TYPES } from "../Types";
import * as requestAPI from "../../helpers/api"
import { handleGetAllMenu } from "./MenuAction";
export const DeleteMenu = (id,config,filterName,filterType) => async (dispatch) => {
    try{
      const token = localStorage.getItem("accessToken")
      const config = {
       headers : {
        Authorization : `Bearer ${token}`
       }}
       const res =  await requestAPI .deleteMenu (id,config)
       dispatch(handleGetAllMenu(filterName,filterType))
       dispatch({
        type : TYPES.DELETE_MENU,
        payLoad : {
          isDelete : true
        }
       })
      //  setTimeout(() => {
      //   Swal.fire({
      //     position: "center",
      //     icon: "success",
      //     title: "Delete Data Succes!",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      //  }, 3000);
    }catch(err) {
      console.log(err)
    }
  }
  