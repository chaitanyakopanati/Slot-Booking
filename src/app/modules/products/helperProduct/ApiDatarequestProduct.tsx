import http from "../../complaint-types/helper/http-common"
import { ID, postlistData, putProductmodel } from "./ModelTypeProduct"


const getDynamicProduct = (pageNo: number, pageSize: number, searchText: string = '') => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicProductData/${null}/${null}?searchText=${null}`)
  } else {
    return http.get(`GetDynamicProductData/${pageNo}/${pageSize}?searchText=${searchText}`)
  }
}

{
  /* begin::  getProduct*/
}
const getProduct = () => {
  return http.get('GetAllProducts')
}

{
  /* begin::  postProduct*/
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
  /* begin::  deleteProduct*/
}
const deleteProduct = (Id: number) => {
  return http.delet(`DeleteProductById/${Id}`)
}

{
  /* begin::  editProduct*/
}
const editProduct = (obj: putProductmodel) => {
  return http.post(`SaveProduct`, {
    name: obj.name,
    unit: obj.unit,
    id: obj.id,
  })
}

{
  /* begin::  GetProductTypeById*/
}
const GetProductTypeById = (id: ID) => {
  return http.get(`GetProductById/${id}`)
}

{
  /* begin::  Complaintservice*/
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
