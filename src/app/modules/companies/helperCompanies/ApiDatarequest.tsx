import http from '../../../../_metronic/helpers/components/http-common'
import {ID, putCompaniesmodel} from './ModelCompanies'

{
  /* begin:: Company:- GetDynamicCompanyData Api call */
}
const getDynamicCompanies = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicCompanyData/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(`GetDynamicCompanyData/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`)
  }
}
{
  /* end:: Company:- GetDynamicCompanyData Api call */
}

{
  /* begin:: Company:- get Api call */
}
const getCompanies = () => {
  return http.get('GetAllCompanies')
}
{
  /* end:: Company:- get Api call */
}

{
  /* begin:: Company:- post Api call(create) */
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
  /* end:: Company:- post Api call(create) */
}

{
  /* begin:: Company:- delete Api call */
}
const deleteCompanies = (Id: number) => {
  return http.delet(`DeleteCompanyById/${Id}`)
}
{
  /* end:: Company:- delete Api call */
}

{
  /* begin:: Company:- post Api call(edit) */
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
  /* end:: Company:- post Api call(edit) */
}

{
  /* begin:: Company:- getById Api call */
}
const GetCompaniesTypeById = (id: ID) => {
  return http.get(`GetCompanyById/${id}`)
}
{
  /* end:: Company:- getById Api call */
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
