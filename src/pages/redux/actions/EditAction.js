import { TYPES } from "../Types";
import * as requestAPI from "../../helpers/api";

export const handleMenuEdit =
  (id, config, form, navigate) => async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      form.price = Number(form.price);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await requestAPI.EditMenu(id, form, config);
      dispatch({
        type: TYPES.EDIT_MENU,
        payLoad: {
          isEdit: true,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Edit Data Succes!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/menu");
      }, 2000);
    } catch (err) {
      console.log(err);
      dispatch({
        type: TYPES.EDIT_MENU,
        payLoad: {
          isEdit: false,
        },
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name,ID,Description,Type,ImageUrl And Price Field!",
      });
    }
  };
