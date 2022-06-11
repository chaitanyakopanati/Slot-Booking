import http from './http-common'
import {postlistData, putcomplaintsmodel, ID} from './ModelType'

const getDynamicComplaints = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicComplaintTypes/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicComplaintTypes/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getComplaints*/
}
const getComplaints = () => {
  return http.get('GetAllComplaintTypes')
}

{
  /* begin::  postcomplaints*/
}
const postcomplaints = (obj: postlistData) => {
  return http.post('SaveComplaintType', obj)
}

{
  /* begin::  deletecomplaints*/
}
const deletecomplaints = (Id: number) => {
  return http.delet(`DeleteComplaintTypeById/${Id}`)
}

{
  /* begin::  editcomplaints*/
}
const editcomplaints = (obj: putcomplaintsmodel) => {
  return http.post(`SaveComplaintType`, {
    name: obj.name,
    etr: obj.etr,
    id: obj.id,
  })
}

{
  /* begin::  GetComplaintTypeById*/
}
const GetComplaintTypeById = (id: ID) => {
  return http.get(`GetComplaintTypeById/${id}`)
}

{
  /* begin::  Complaintservice*/
}
const Complaintservice = {
  getDynamicComplaints,
  getComplaints,
  postcomplaints,
  deletecomplaints,
  editcomplaints,
  GetComplaintTypeById,
}

export default Complaintservice
