import http from "../../complaint-types/helper/http-common"
import { ID, postlistData, putUsermodel } from "./ModelTypeUser"


const getDynamicUser = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetAllUsers/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetAllUsers/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getUser*/
}
const getUser = () => {
  return http.get('GetAllPackageCategories')
}

{
  /* begin::  postUser*/
}

const postUser = (obj: postlistData) => {
  return http.post('CreateUser', {
    name: obj.name,
    etr: obj.etr,
    createdby: 1,
    modifyby: 1,
  })
}

{
  /* begin::  deleteUser*/
}
const deleteUser = (Id: number) => {
  return http.delet(`DeleteUserById/${Id}`)
}

{
  /* begin::  editUser*/
}
const editUser = (obj: putUsermodel) => {
  return http.post(`CreateUser`, {
    name: obj.name,
    etr: obj.etr,
    id: obj.id,
  })
}

{
  /* begin::  GetPackagesCategoriesTypeById*/
}
const GetUserTypeById = (id: ID) => {
  return http.get(`GetUserbyId/${id}`)
}

{
  /* begin::  Complaintservice*/
}
const Userservice = {
  getDynamicUser,
  getUser,
  postUser,
  deleteUser,
  editUser,
  GetUserTypeById,
}

export default Userservice