import axios from 'axios'
import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putUsersmodel} from './ModelUserType'

const API_URL_DATA = process.env.REACT_APP_API_URL
{
  /* begin:: User:- getDynamicUser Api call */
}
const getDynamicUser = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId: number,
  roleId: string,
  searchByUsername: string,
  createdById: number,
  orderByColumnName: string
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetAllUsers/${null}/${null}?searchText=${null}&zoneId=${null}&roleId=${null}&searchByUsername=${null}&createdById=${null}&orderByColumnName=${null}`
    )
  } else {
    return http.get(
      `GetAllUsers/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&roleId=${roleId}&searchByUsername=${searchByUsername}&createdById=${createdById}&orderByColumnName=${orderByColumnName}`
    )
  }
}
{
  /* end:: User:- getDynamicFaults Api call */
}

// download

const getDynamicDownloadFile = (
  zoneId: number,
  roleId: string,
  createdById: number,
  searchText: string,
  searchByUsername: string
) => {
  return axios({
    url: `${API_URL_DATA}/GetUsersExcelSheet?zoneId=${zoneId}&searchText=${searchText}&roleId=${roleId}&searchByUsername=${searchByUsername}&createdById=${createdById}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

{
  /* begin:: User:- post Api call(create) */
}
const postUser = (obj: postlistData) => {
  return http.post('CreateUser', {
    firstname: obj.firstname,
    lastname: obj.lastname,
    username: obj.username,
    email: obj.email,
    phone: obj.phone,
    password: obj.password,
    roleId: obj.roleId,
    zoneId: obj.zoneId,
    status: '1',
    createdby: obj.createdby,
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
    zoneId: obj.zoneId,
    roleId: obj.roleId,
    modifyby: obj.modifyby,
    status: '1',
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
  console.log(id, 'id===============')

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

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

const Userservice = {
  getDynamicUser,
  postUser,
  deleteUser,
  editUser,
  // getUser,
  GetUserTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getroleTypes,
  getDynamicDownloadFile,
}

export default Userservice
