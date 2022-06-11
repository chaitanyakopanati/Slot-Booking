
import http from '../../complaint-types/helper/http-common'
import { ID, putBankmodel } from './ModelPackages'

const getDynamicBank = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicBankData/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicBankData/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getBank*/
}
const getBank = () => {
  return http.get('GetAllBanks')
}

{
  /* begin::  postBank*/
}
const postBank = (obj: putBankmodel) => {
  return http.post('SaveBank', {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    createdby: 1,
    Updatedby: 1,
  })
}

{
  /* begin::  deleteBank*/
}
const deleteBank = (Id: number) => {
  return http.delet(`DeleteBankById/${Id}`)
}

{
  /* begin::  editBank*/
}
const editBank = (obj: putBankmodel) => {
  return http.post(`SaveBank`, {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    modifyby: 1,
    id: obj.id,
  })
}

{
  /* begin::  GetBankTypeById*/
}
const GetBankTypeById = (id: ID) => {
  return http.get(`GetBankById/${id}`)
}

{
  /* begin::  Zoneservice*/
}
const Zoneservice = {
  getDynamicBank,
  getBank,
  postBank,
  deleteBank,
  editBank,
  GetBankTypeById,
}

export default Zoneservice
