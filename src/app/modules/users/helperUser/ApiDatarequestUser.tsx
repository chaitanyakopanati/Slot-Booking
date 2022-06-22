import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putUsersmodel} from './ModelUserType'

{
  /* begin:: User:- getDynamicUser Api call */
}
const getDynamicUser = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId: number | null,
  roleId: string,
  searchByUsername:string,
  createdById:number
) => {
  if (pageSize <= 0) {
    return http.get(`GetAllUsers/${null}/${null}?searchText=${null}&zoneId=${null}&roleId=${null}&searchByUsername=${null}&createdById=${null}`)
  } else {
    return http.get(
      `GetAllUsers/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&roleId=${roleId}&searchByUsername=${searchByUsername}&createdById=${createdById}`
    )
  }
}
{
  /* end:: User:- getDynamicFaults Api call */
}

{
  /* begin:: User:- get Api call */
}
// const getUser = () => {
//   return http.get('GetAllFaults')
// }
{
  /* end:: User:- get Api call */
}

{
  /* begin:: User:- post Api call(create) */
}
const postUser = (obj: postlistData) => {
  return http.post('CreateUser', {
    id: 0,
    firstname: obj.firstname,
    lastname: obj.lastname,
    username: obj.username,
    email: obj.email,
    phone: obj.phone,
    password: obj.password,
    zoneId: obj.zoneId,
    roleId: obj.roleId,
    createdby: 1,
    Updatedby: 1,
    status: 1,
  })
}
{
  /* end:: User:- post Api call(create) */
}

{
  /* begin:: User:- delete Api call */
}
const deleteUser = (Id: number, username: string) => {
  return http.delet(`DeleteUserById/${username}/${Id}`)
}

{
  /* end:: User:- delete Api call */
}

{
  /* begin:: User:- post Api call(edit) */
}
const editUser = (obj: putUsersmodel) => {
  return http.post(`UpdateUser`, {
    firstname: obj.firstname,
    lastname: obj.lastname,
    username: obj.username,
    email: obj.email,
    phone: obj.phone,
    password: obj.password,
    zoneId: obj.zoneId,
    roleId: obj.roleId,
    createdby: 1,
    Updatedby: 1,
    status: 1,
    id: obj.id,
  })
}
{
  /* begin:: User:- post Api call(edit) */
}

{
  /* begin:: User:- getById Api call */
}
const GetUserTypeById = (id: ID) => {
  return http.get(`GetUserbyId/${id}`)
}
{
  /* end:: User:- getById Api call */
}

{
  /* begin:: User:- get User type Api call */
}

{
  /* end:: User:- get User type Api call */
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
  getZoneTypes,
  getroleTypes,
}

export default Userservice
