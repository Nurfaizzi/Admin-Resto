import * as requestAPI from '../../helpers/api'
import { TYPES } from '../Types'
export const getDetail =(id,setForm,form) => async (dispatch) => {

    try{
    const res = await requestAPI.DetailMenu(id)
    dispatch({
      type : TYPES.AUTH_DETAIL,
      payLoad : {
        data : res.data.data
      }
    })
    setForm ({
      ...form,
      name : res.data.data.name,
      description : res.data.data.description,
      type : res.data.data.type,
      imageUrl : res.data.data.imageUrl,
      price : res.data.data.price
    })
    }catch(err) {
      console.log(err)
    }
    
    }