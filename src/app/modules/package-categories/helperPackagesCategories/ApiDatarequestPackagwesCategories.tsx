import http from "../../complaint-types/helper/http-common"
import { ID, postlistData, putPackagecategoriesmodel } from "./ModelTypePackagesCategories"


const getDynamicPackageCategories = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicPackageCategoriesData/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicPackageCategoriesData/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getPackageCategories*/
}
const getPackageCategories = () => {
  return http.get('GetAllPackageCategories')
}

{
  /* begin::  postPackageCategories*/
}

const postPackageCategories = (obj: postlistData) => {
  return http.post('SavePackageCategory', {
    name: obj.name,
    etr: obj.etr,
    createdby: 1,
    modifyby: 1,
  })
}

{
  /* begin::  deletePackagesCategories*/
}
const deletePackagesCategories = (Id: number) => {
  return http.delet(`DeletePackageCategoryId/${Id}`)
}

{
  /* begin::  editPackagesCategories*/
}
const editPackagesCategories = (obj: putPackagecategoriesmodel) => {
  return http.post(`SavePackageCategory`, {
    name: obj.name,
    etr: obj.etr,
    id: obj.id,
  })
}

{
  /* begin::  GetPackagesCategoriesTypeById*/
}
const GetPackagesCategoriesTypeById = (id: ID) => {
  return http.get(`GetPackageCategoryById/${id}`)
}

{
  /* begin::  Complaintservice*/
}
const Complaintservice = {
  getDynamicPackageCategories,
  getPackageCategories,
  postPackageCategories,
  deletePackagesCategories,
  editPackagesCategories,
  GetPackagesCategoriesTypeById,
}

export default Complaintservice
