import { TYPES } from "../Types";
import * as requestAPI from "../../helpers/api";

export const newMenu = (form, config, navigate) => async (dispatch) => {
  try {
    if (
      form.name == "" ||
      form.description == "" ||
      form.type == "" ||
      form.imageUrl == "" ||
      form.price == ""
    ) {
      dispatch({
        type: TYPES.AUTH_NEWDATA,
        payLoad: {
          isCreate: false,
        },
      });
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Name,ID,Description,Type,ImageUrl And Price Not Be Empety!",
      });
    }
    const token = localStorage.getItem("accessToken");
    form.price = Number(form.price);
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    //   setLoading(true)
    const res = await requestAPI.createNewMenu(form, config);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Create Data Succes!",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({
      type: TYPES.AUTH_NEWDATA,
      payLoad: {
        isCreate: true,
      },
    });

    setTimeout(() => {
      navigate("/menu");
    }, 2000);
    setLoading(true);
  } catch (err) {
    console.log(err);
  }
};
