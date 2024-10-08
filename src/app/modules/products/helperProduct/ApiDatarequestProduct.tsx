import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putProductmodel} from './ModelTypeProduct'

{
  /* begin:: Product:- getDynamicProduct Api call */
}
const getDynamicProduct = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdById: number,
  connectionTypeId: any
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicProductData/${null}/${null}?searchText=${null}&createdById=${null}&createdById=${null}&connectionTypeId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicProductData/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}&connectionTypeId=${connectionTypeId}&orderByColumnName=${'createdAt'}&sortColumnDir=${'desc'}`
    )
  }
}
{
  /* end:: Product:- getDynamicProduct Api call */
}

{
  /* begin:: Product:- get Api call */
}
const getProduct = () => {
  return http.get('GetAllProducts')
}
{
  /* end:: Product:- get Api call */
}

{
  /* begin:: Product:- post Api call(create) */
}
const postProduct = (obj: postlistData) => {
  return http.post('SaveProduct', {
    name: obj.name,
    unit: obj.unit,
    createdby: obj.createdby,
    connectionTypeId: obj.connectionTypeId,
  })
}
{
  /* end:: Product:- post Api call(create) */
}

{
  /* begin:: Product:- delete Api call */
}
const deleteProduct = (Id: number) => {
  return http.delet(`DeleteProductById/${Id}`)
}
{
  /* end:: Product:- delete Api call */
}

{
  /* begin:: Product:- post Api call(edit) */
}
const editProduct = (obj: putProductmodel) => {
  return http.post(`SaveProduct`, {
    name: obj.name,
    unit: obj.unit,
    id: obj.id,
    modifyby: obj.modifyby,
    connectionTypeId: obj.connectionTypeId,
  })
}
{
  /* end:: Product:- post Api call(edit) */
}

{
  /* begin:: Product:- getById Api call */
}
const GetProductTypeById = (id: ID) => {
  return http.get(`GetProductById/${id}`)
}
{
  /* end:: Product:- getById Api call */
}

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

const Complaintservice = {
  getDynamicProduct,
  getProduct,
  postProduct,
  deleteProduct,
  editProduct,
  GetProductTypeById,
  getCreatedByTypes,
}

export default Complaintservice
