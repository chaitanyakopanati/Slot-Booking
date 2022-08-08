import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putSuppliersmodel} from './ModelTypeSupplier'

{
}
const getDynamicSuppliers = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdById: number
) => {
  if (pageSize <= 0) {
    return http.get(`GetDynamicSupplierData/${null}/${null}?searchText=${null}&createdById=${null}`)
  } else {
    return http.get(
      `GetDynamicSupplierData/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById} &orderByColumnName=${'createdAt'}&sortColumnDir=${'desc'}`
    )
  }
}
{
}

{
}
const getAllSuppliers = () => {
  return http.get('GetAllSuppliers')
}
{
}

{
}
const postSuppliers = (obj: postlistData) => {
  return http.post('SaveSupplier', {
    name: obj.name,
    gstNo: obj.gstNo,
    createdby: obj.createdby,
  })
}
{
}

{
}
const deleteSuppliers = (Id: number) => {
  return http.delet(`DeleteSupplierById/${Id}`)
}
{
}

{
}
const editSuppliers = (obj: putSuppliersmodel) => {
  return http.post(`SaveSupplier`, {
    name: obj.name,
    gstNo: obj.gstNo,
    id: obj.id,
    modifyby: obj.modifyby,
  })
}
{
}

{
}
const GetSuppliersTypeById = (id: ID) => {
  return http.get(`GetSupplieById/${id}`)
}
{
}

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

const Supplierservice = {
  getDynamicSuppliers,
  getAllSuppliers,
  postSuppliers,
  deleteSuppliers,
  editSuppliers,
  getCreatedByTypes,
  GetSuppliersTypeById,
}

export default Supplierservice
