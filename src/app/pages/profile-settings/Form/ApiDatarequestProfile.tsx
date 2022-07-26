import axios from 'axios'
import http from '../../../../_metronic/helpers/components/http-common'
import {ID, putUsersmodel} from './ModelProfile'

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
    createdby: 1,
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
const GetUserTypeById = (id: number) => {
  //   console.log(id, 'id===============')

  return http.get(`GetUserbyId/${id}`)
  // return http.get(`GetUserbyId/135`)
}
{
  /* end:: User:- getById Api call */
}

const Profileservice = {
  editUser,
  GetUserTypeById,
}

export default Profileservice
