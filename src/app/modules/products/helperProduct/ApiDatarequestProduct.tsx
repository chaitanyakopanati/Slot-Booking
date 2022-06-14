import http from '../../complaint-types/helper/http-common'
import {ID, postlistData, putProductmodel} from './ModelTypeProduct'

{
  /* begin:: Product:- getDynamicProduct Api call */
}
const getDynamicProduct = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicProductData/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicProductData/${pageNo}/${pageSize}?searchText=${searchText}`)
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
    createdby: 1,
    modifyby: 1,
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

const Complaintservice = {
  getDynamicProduct,
  getProduct,
  postProduct,
  deleteProduct,
  editProduct,
  GetProductTypeById,
}

export default Complaintservice
