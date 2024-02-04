import { TYPES } from "../Types";
import * as requestAPI from "../../helpers/api";

export const handleGetAllMenu =
  (type, filterName, pagination) => async (dispatch, setPagination) => {
    try {
      const res = await requestAPI.allMenu(type, filterName, pagination);

      dispatch({
        type: TYPES.ALL_MENU,
        payload: {
          data: res.data.data.Data,
        },
      });
      setPagination({
        currentPage: res.data.data.currentPage,
        nextPage: res.data.data.nextPage,
        previousPage: res.data.data.previousPage,
      });
    } catch (err) {
      console.log(err);
    }
  };
