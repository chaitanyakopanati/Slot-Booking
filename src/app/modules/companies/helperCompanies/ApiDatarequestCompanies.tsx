
import http from '../../complaint-types/helper/http-common'
import { ID, postlistData, putCompaniesmodel } from './ModelCompanies'

const getDynamicCompanies = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicCompanyData/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicCompanyData/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getCompanies*/
}
const getCompanies = () => {
  return http.get('GetAllCompanies')
}

{
  /* begin::  postCompanies*/
}
const postCompanies = (obj: putCompaniesmodel) => {
  return http.post('SaveCompany', {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    createdby: 1,
    Updatedby: 1,
  })
}

{
  /* begin::  deleteCompanies*/
}
const deleteCompanies = (Id: number) => {
  return http.delet(`DeleteCompanyById/${Id}`)
}

{
  /* begin::  editCompanies*/
}
const editCompanies = (obj: putCompaniesmodel) => {
  return http.post(`SaveCompany`, {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    modifyby: 1,
    id: obj.id,
  })
}

{
  /* begin::  GetCompaniesTypeById*/
}
const GetCompaniesTypeById = (id: ID) => {
  return http.get(`GetCompanyById/${id}`)
}

{
  /* begin::  Zoneservice*/
}
const Zoneservice = {
  getDynamicCompanies,
  getCompanies,
  postCompanies,
  deleteCompanies,
  editCompanies,
  GetCompaniesTypeById,
}

export default Zoneservice
