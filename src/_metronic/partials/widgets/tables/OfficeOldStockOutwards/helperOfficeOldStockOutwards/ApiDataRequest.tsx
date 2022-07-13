import http from '../../../../../helpers/components/http-common'
import { ID, postlistData, putmodel } from './ModelOfficeOldStocksOutwards'

{
  /* begin::  getDynamicOfficeStockInwards Api call */
}
const getDynamicOfficeStockOutwards = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdBy: number,
  startDate:string,
  endDate:string,
  zoneId:number,
  productId:number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetAllOfficeStockInward/${null}/${null}?searchText=${null}&createdBy=${null}&startDate=${null}&endDate=${null}&zoneId=${null}&productId=${null}`
    )
  } else {
    return http.get(
      `GetAllOfficeStockInward/${pageNo}/${pageSize}?searchText=${searchText}&createdBy=${createdBy}&startDate=${startDate}&endDate=${endDate}&zoneId=${zoneId}&productId=${productId}`
    )
  }
}
{
  /* end::  getDynamicOfficeStockInwards Api call */
}

{
  /* begin::  post Api call(create) */
}
const postOfficeStockOutwards = (obj: postlistData) => {
  return http.post('SaveOfficeStockInward', {
    inwardNo: obj.inwardNo,
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    statusId: 1,
    deliveredById: obj.deliveredById,
    zoneId: obj.zoneId,
    serialno: obj.serialno,
    remark: obj.remark,
    createdbyId: 1,
  })
}
{
  /* end::  post Api call(create) */
}

{
  /* begin::  post Api call(edit) */
}
const editOfficeStockOutwards = (obj: putmodel) => {
  return http.post(`SaveOfficeStockInward`, {
    id:obj.id,
    inwardNo: obj.inwardNo,
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    statusId: 1,
    deliveredById: obj.deliveredById,
    zoneId: obj.zoneId,
    serialno: obj.serialno,
    remark: obj.remark,
    createdbyId: 1,
  })
}
{
  /* end::  post Api call(edit) */
}

{
  /* begin::  getById Api call */
}
const GetOfficeStockOutwardsTypeById = (inwardNo: ID) => {
  return http.get(`GetOfficeStockInwardById/${inwardNo}`)
}
{
  /* end::  getById Api call */
}

{
  /* begin::  GetAllZones Api call */
}
const getOfficeStockOutwardsTypes = () => {
  return http.get('GetAllZones')
}
{
  /* end::  GetAllZones Api call */
}

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

//Zones
const getZoneTypes = () => {
  return http.get('GetAllZones')
}

//Zones
const getProducts = () => {
  return http.get('GetAllProducts')
}

//Technician 
const getTechnicianTypes = () => {
  return http.get(`GetUserByRoleName?roleName=technician`)
}

const OfficeStockOutwardservice = {
  getDynamicOfficeStockOutwards,
  postOfficeStockOutwards,
  editOfficeStockOutwards,
  // getStatusByTypes,
  getCreatedByTypes,
  getOfficeStockOutwardsTypes,
  getTechnicianTypes,
  getZoneTypes,
  getProducts,
  GetOfficeStockOutwardsTypeById,
}

export default OfficeStockOutwardservice
