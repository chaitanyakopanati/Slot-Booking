
import http from '../../complaint-types/helper/http-common'
import { ID, putPackagesmodel } from './ModelPackages'

const getDynamicPackages = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicPackageData/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicPackageData/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getPackages*/
}
const getPackages = () => {
  return http.get('GetAllPackages')
}

{
  /* begin::  postPackages*/
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
  /* begin::  deletePackages*/
}
const deletePackages = (Id: number) => {
  return http.delet(`DeletePackageById/${Id}`)
}

{
  /* begin::  editPackages*/
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
  /* begin::  GetPackagesTypeById*/
}
const GetPackagesTypeById = (id: ID) => {
  return http.get(`GetPackageById/${id}`)
}

{
  /* begin::  Zoneservice*/
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
