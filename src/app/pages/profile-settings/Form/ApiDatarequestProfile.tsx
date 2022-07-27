import axios from 'axios'
import http from '../../../../_metronic/helpers/components/http-common'
import {editPasswordmodel, ID, putUsersmodel} from './ModelProfile'

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
    // zoneId: 3,
    roleId: obj.roleId,
    // roleId: '4aebb2c4-648a-4929-95c5-67ae2f012805',
    modifyby: 1,
    status: '1',
    id: obj.id,
    // id: 135,
  })
}
{
  /* begin:: User:- post Api call(edit) */
}

{
  /* begin:: User:- getById Api call */
}
const GetUserTypeById = (id: number) => {
  //   console.log(id, 'id===============')

  return http.get(`GetUserbyId/${id}`)
}
{
  /* end:: User:- getById Api call */
}

{
  /* begin:: User:- editPassword Api call */
}
const editPassword = (obj: editPasswordmodel) => {
  return http.post(`EditPassword`, {
    userName: obj.userName,
    password: obj.password,
  })
}
{
  /* end:: User:- editPassword Api call */
}

const Profileservice = {
  editUser,
  GetUserTypeById,
  editPassword,
}

export default Profileservice
