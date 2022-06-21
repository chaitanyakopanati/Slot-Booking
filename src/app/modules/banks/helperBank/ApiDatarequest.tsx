import http from '../../complaint-types/helper/http-common'
import {ID, putBankmodel} from './ModelBank'

{
  /* begin:: Bank:- GetDynamicBankData Api call */
}
const getDynamicBank = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicBankData/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(`GetDynamicBankData/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`)
  }
}
{
  /* end:: Bank:- GetDynamicBankData Api call */
}

{
  /* begin:: Bank:- get Api call */
}
const getBank = () => {
  return http.get('GetAllBanks')
}
{
  /* end:: Bank:- get Api call */
}

{
  /* begin:: Bank:- post Api call(create) */
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
  /* end:: Bank:- post Api call(create) */
}

{
  /* begin:: Bank:- delete Api call */
}
const deleteBank = (Id: number) => {
  return http.delet(`DeleteBankById/${Id}`)
}
{
  /* end:: Bank:- delete Api call */
}

{
  /* begin:: Bank:- post Api call(edit) */
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
  /* end:: Bank:- post Api call(edit) */
}

{
  /* begin:: Bank:- getById Api call */
}
const GetBankTypeById = (id: ID) => {
  return http.get(`GetBankById/${id}`)
}
{
  /* end:: Bank:- getById Api call */
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
