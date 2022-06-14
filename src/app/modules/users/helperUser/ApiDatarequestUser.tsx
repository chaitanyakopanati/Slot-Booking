import http from '../../complaint-types/helper/http-common'
import {ID, postlistData, putUsersmodel} from './ModelUserType'

{
  /* begin:: Faults:- getDynamicUser Api call */
}
const getDynamicUser = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetAllUsers/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetAllUsers/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}
{
  /* end:: Faults:- getDynamicFaults Api call */
}

{
  /* begin:: Faults:- get Api call */
}
// const getUser = () => {
//   return http.get('GetAllFaults')
// }
{
  /* end:: Faults:- get Api call */
}

{
  /* begin:: Faults:- post Api call(create) */
}
const postUser = (obj: postlistData) => {
  return http.post('CreateUser', {
    name: obj.name,
    zoneId: obj.zoneId,
    roleId: obj.roleId,
    createdby: 1,
    Updatedby: 1,
    status:1,
  })
}
{
  /* end:: Faults:- post Api call(create) */
}

{
  /* begin:: Faults:- delete Api call */
}
const deleteUser = (Id: number) => {
  return http.delet(`DeleteFaultById/${Id}`)
}
{
  /* end:: Faults:- delete Api call */
}

{
  /* begin:: Faults:- post Api call(edit) */
}
const editUser = (obj: putUsersmodel) => {
  return http.post(`UpdateUser`, {
    name: obj.name,
    zoneId: obj.zoneId,
    roleId: obj.roleId,
    createdby: 1,
    Updatedby: 1,
    status:1,
    id: obj.id,
  })
}
{
  /* begin:: Faults:- post Api call(edit) */
}

{
  /* begin:: Faults:- getById Api call */
}
const GetUserTypeById = (id: ID) => {
  return http.get(`GetUserbyId/${id}`)
}
{
  /* end:: Faults:- getById Api call */
}

{
  /* begin:: Faults:- get Faults type Api call */
}
const getFaultsTypes = () => {
  return http.get('GetAllFaultTypes')
}
{
  /* end:: Faults:- get Faults type Api call */
}
//Zones
const getZoneTypes = () => {
  return http.get('GetAllZones')
}

//Role
const getroleTypes = () => {
  return http.get('GetAllRoles')
}

const Userservice = {
  getDynamicUser,
  postUser,
  deleteUser,
  editUser,
  GetUserTypeById,
  getFaultsTypes,
  getZoneTypes,
  getroleTypes
}

export default Userservice
