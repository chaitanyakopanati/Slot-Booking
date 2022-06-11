
import http from '../../complaint-types/helper/http-common'
import { postlistData,putFaultsmodel,ID} from './ModelFaultsType'


const getDynamicFaults = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicFaults/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicFaults/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getFaults*/
}
const getFaults = () => {
  return http.get('GetAllFaults')
}

{
  /* begin::  postFaults*/
}
const postFaults = (obj: postlistData) => {
  return http.post('SaveFault', {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    createdby: 1,
    Updatedby: 1,
  })
}

{
  /* begin::  deleteFaults*/
}
const deleteFaults = (Id: number) => {
  return http.delet(`DeleteFaultById/${Id}`)
}

{
  /* begin::  editFaults*/
}
const editFaults = (obj: putFaultsmodel) => {
  return http.post(`SaveFault`, {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    modifyby: 1,
    id: obj.id,
  })
}

{
  /* begin::  GetFaultsTypeById*/
}
const GetFaultsTypeById = (id: ID) => {
  return http.get(`GetFaultById/${id}`)
}

const getFaultsTypes = () => {
  return http.get('GetAllFaultTypes')
}

{
  /* begin::  Fautlservice*/
}
const Fautlservice = {
  getDynamicFaults,
  getFaults,
  postFaults,
  deleteFaults,
  editFaults,
  GetFaultsTypeById,
  getFaultsTypes
}

export default Fautlservice
