import http from '../../complaint-types/helper/http-common'
import { putFaultsmodel } from '../../faults/helperFaults/ModelFaultsType'
import { ID, postlistData, putMainPointmodel } from './ModelMainPoint'

const getDynamicMainPoint = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicMainPoints/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicMainPoints/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getMainPoint*/
}
const getMainPoint = () => {
  return http.get('GetAllMainPoints')
}

{
  /* begin::  postMainPoint*/
}
const postMainPoint = (obj: postlistData) => {
  return http.post('SaveMainPoint', {
    name: obj.name,
    zoneid: obj.faulttypeid,
    createdby: 1,
    Updatedby: 1,
  })
}

{
  /* begin::  deleteMainPoint*/
}
const deleteMainPoint = (Id: number) => {
  return http.delet(`DeleteMainPointById/${Id}`)
}

{
  /* begin::  editMainPoint*/
}
const editMainPoint = (obj: putMainPointmodel) => {
  return http.post(`SaveMainPoint`, {
    name: obj.name,
    zoneid: obj.faulttypeid,
    createdby: 1,
    id: obj.id,
  })
}

{
  /* begin::  GetFaultsTypeById*/
}
const GetFaultsTypeById = (id: ID) => {
  return http.get(`GetMainPointById/${id}`)
}

const getFaultsTypes = () => {
  return http.get('GetAllZones')
}

{
  /* begin::  Fautlservice*/
}
const MainPointservice = {
  getDynamicMainPoint,
  getMainPoint,
  postMainPoint,
  deleteMainPoint,
  editMainPoint,
  GetFaultsTypeById,
  getFaultsTypes
}

export default MainPointservice
