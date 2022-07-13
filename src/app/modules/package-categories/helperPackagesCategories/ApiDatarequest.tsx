import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putPackagecategoriesmodel} from './ModelTypePackagesCategories'

{
  /* begin:: Package-Category:- GetDynamicPackageCategoriesData Api call */
}
const getDynamicPackageCategories = (pageNo: number, pageSize: number, searchText: string = '',createdById:number) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicPackageCategoriesData/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(
      `GetDynamicPackageCategoriesData/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}`
    )
  }
}
{
  /* end:: Package-Category:- GetDynamicPackageCategoriesData Api call */
}

{
  /* begin:: Package-Category:- get Api call */
}
const getPackageCategories = () => {
  return http.get('GetAllPackageCategories')
}
{
  /* end:: Package-Category:- get Api call */
}

{
  /* begin:: Package-Category:- post Api call(create) */
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
  /* end:: Package-Category:- post Api call(create) */
}

{
  /* begin:: Package-Category:- delete Api call */
}
const deletePackagesCategories = (Id: number) => {
  return http.delet(`DeletePackageCategoryId/${Id}`)
}
{
  /* end:: Package-Category:- delete Api call */
}

{
  /* begin:: Package-Category:- post Api call(edit) */
}
const editPackagesCategories = (obj: putPackagecategoriesmodel) => {
  return http.post(`SavePackageCategory`, {
    name: obj.name,
    etr: obj.etr,
    id: obj.id,
  })
}
{
  /* end:: Package-Category:- post Api call(edit) */
}

{
  /* begin:: Package-Category:- getById Api call */
}
const GetPackagesCategoriesTypeById = (id: ID) => {
  return http.get(`GetPackageCategoryById/${id}`)
}
{
  /* end:: Package-Category:- getById Api call */
}

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

const Complaintservice = {
  getDynamicPackageCategories,
  getPackageCategories,
  postPackageCategories,
  deletePackagesCategories,
  editPackagesCategories,
  getCreatedByTypes,
  GetPackagesCategoriesTypeById,
}

export default Complaintservice
