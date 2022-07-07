import http from '../../../../_metronic/helpers/components/http-common'
import {postlistData, putcomplaintsmodel, ID} from './ModelType'

{
  /* begin:: Complaint Type:- getDynamicComplainTypes Api call */
}
const getDynamicComplaints = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicComplaintTypes/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(`GetDynamicComplaintTypes/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`)
  }
}
{
  /* end:: Complaint Type:- getDynamicComplainTypes Api call */
}

{
  /* begin:: Complaint Type:- get Api call */
}
const getComplaints = () => {
  return http.get('GetAllComplaintTypes')
}
{
  /* end:: Complaint Type:- get Api call */
}

{
  /* begin:: Complaint Type:- post Api call(create) */
}
const postcomplaints = (obj: postlistData) => {
  return http.post('SaveComplaintType', {
    name: obj.name,
    etr: obj.etr,
    createdby: 1,
    modifyby: 1,
  
  })
}
{
  /* end:: Complaint Type:- post Api call(create) */
}

{
  /* begin:: Complaint Type:- delete Api call */
}
const deletecomplaints = (Id: number) => {
  return http.delet(`DeleteComplaintTypeById/${Id}`)
}
{
  /* end:: Complaint Type:- delete Api call */
}

{
  /* begin:: Complaint Type:- post Api call(edit) */
}
const editcomplaints = (obj: putcomplaintsmodel) => {
  return http.post(`SaveComplaintType`, {
    name: obj.name,
    etr: obj.etr,
    id: obj.id,
  })
}
{
  /* end:: Complaint Type:- post Api call(edit) */
}

{
  /* begin:: Complaint Type:- getById Api call */
}
const GetComplaintTypeById = (id: ID) => {
  return http.get(`GetComplaintTypeById/${id}`)
}
{
  /* end:: Complaint Type:- getById Api call */
}

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRole/4aebb2c4-648a-4929-95c5-67ae2f012805')
}

const Complaintservice = {
  getDynamicComplaints,
  getComplaints,
  postcomplaints,
  deletecomplaints,
  editcomplaints,
  GetComplaintTypeById,
  getCreatedByTypes
}

export default Complaintservice
