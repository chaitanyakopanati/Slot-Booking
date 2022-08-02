import http from '../../../../_metronic/helpers/components/http-common'
import {postlistData, putFaultsmodel, ID} from './ModelFaultsType'

{
  /* begin:: Faults:- getDynamicFaults Api call */
}
const getDynamicFaults = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdById: number
) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicFaults/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(
      `GetDynamicFaults/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById} &orderByColumnName=${'createdAt'}&sortColumnDir=${'desc'}`
    )
  }
}
{
  /* end:: Faults:- getDynamicFaults Api call */
}

{
  /* begin:: Faults:- get Api call */
}
const getFaults = () => {
  return http.get('GetAllFaults')
}
{
  /* end:: Faults:- get Api call */
}

{
  /* begin:: Faults:- post Api call(create) */
}
const postFaults = (obj: postlistData) => {
  return http.post('SaveFault', {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    createdby: obj.createdby,
  })
}
{
  /* end:: Faults:- post Api call(create) */
}

{
  /* begin:: Faults:- delete Api call */
}
const deleteFaults = (Id: number) => {
  return http.delet(`DeleteFaultById/${Id}`)
}
{
  /* end:: Faults:- delete Api call */
}

{
  /* begin:: Faults:- post Api call(edit) */
}
const editFaults = (obj: putFaultsmodel) => {
  return http.post(`SaveFault`, {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    modifyby: obj.modifyby,
    id: obj.id,
  })
}
{
  /* begin:: Faults:- post Api call(edit) */
}

{
  /* begin:: Faults:- getById Api call */
}
const GetFaultsTypeById = (id: ID) => {
  return http.get(`GetFaultById/${id}`)
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

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

const Fautlservice = {
  getDynamicFaults,
  getFaults,
  postFaults,
  deleteFaults,
  editFaults,
  GetFaultsTypeById,
  getFaultsTypes,
  getCreatedByTypes,
}

export default Fautlservice
