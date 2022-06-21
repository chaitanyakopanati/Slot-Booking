import http from '../../complaint-types/helper/http-common'
import {ID, putPackagesmodel} from './ModelPackages'

{
  /* begin:: Packages:- getDynamicFaults Api call */
}
const getDynamicPackages = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicPackageData/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(`GetDynamicPackageData/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`)
  }
}
{
  /* end:: Packages:- getDynamicFaults Api call */
}

{
  /* begin:: Packages:- get Api call */
}
const getPackages = () => {
  return http.get('GetAllPackages')
}
{
  /* end:: Packages:- get Api call */
}

{
  /* begin:: Packages:- post Api call(create) */
}
const postPackages = (obj: putPackagesmodel) => {
  return http.post('SavePackage', {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    createdby: 1,
    Updatedby: 1,
  })
}
{
  /* end:: Packages:- post Api call(create) */
}

{
  /* begin:: Packages:- delete Api call */
}
const deletePackages = (Id: number) => {
  return http.delet(`DeletePackageById/${Id}`)
}
{
  /* end:: Packages:- delete Api call */
}

{
  /* begin:: Packages:- post Api call(edit) */
}
const editPackages = (obj: putPackagesmodel) => {
  return http.post(`SavePackage`, {
    name: obj.name,
    faulttypeid: obj.faulttypeid,
    modifyby: 1,
    id: obj.id,
  })
}
{
  /* end:: Packages:- post Api call(edit) */
}

{
  /* begin:: Packages:- getById Api call */
}
const GetPackagesTypeById = (id: ID) => {
  return http.get(`GetPackageById/${id}`)
}
{
  /* end:: Packages:- getById Api call */
}

const Zoneservice = {
  getDynamicPackages,
  getPackages,
  postPackages,
  deletePackages,
  editPackages,
  GetPackagesTypeById,
}

export default Zoneservice
