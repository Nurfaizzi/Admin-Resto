import axios from "axios";

export async function createNewMenu(form,config){
    const response = await axios .post(`https://api.mudoapi.tech/menu`,form,config)
    return response
}

export async function allMenu (type,filterName,pagination) {
    const response = await axios.get(` https://api.mudoapi.tech/menus?name=${filterName}&type=${type}&perPage=6&page=${pagination}`)
    return response;
}   


export async function DetailMenu (id){
    const response = await axios.get(`https://api.mudoapi.tech/menu/${id}`)
    return response
}

export async function deleteMenu (id,config){
    const response = await axios .delete(`https://api.mudoapi.tech/menu/${id}`,config)
    return response
}


export async function EditMenu (id,form,config) {
    const response = await axios .put(`https://api.mudoapi.tech/menu/${id}`,form,config)
    return response
}
