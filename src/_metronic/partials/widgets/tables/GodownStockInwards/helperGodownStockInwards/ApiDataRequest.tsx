import axios from 'axios'
import http from '../../../../../helpers/components/http-common'
import {ID, postlistData, putGodownStockInwardssmodel} from './ModelGodownStockInwards'

const API_URL_DATA = process.env.REACT_APP_API_URL
{
  /* begin:: getDynamicGodownStockInwards Api call */
}
const getDynamicGodownStockInwards = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdBy: number,
  startDate: string,
  endDate: string,
  zoneId: number,
  productId: number,
  supplierName: string = ''
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicGodownStockInwards/${null}/${null}?searchText=${null}&createdBy=${null}&startDate=${null}&endDate=${null}&zoneId=${null}&productId=${null}&supplierName=${null}`
    )
  } else {
    return http.get(
      `GetDynamicGodownStockInwards/${pageNo}/${pageSize}?searchText=${searchText}&createdBy=${createdBy}&startDate=${startDate}&endDate=${endDate}&zoneId=${zoneId}&productId=${productId}&supplierName=${supplierName}&orderBYColumnName=${'createdDate'}&orderByColumnDir=${'desc'}`
    )
  }
}
{
  /* end:: getDynamicGodownStockInwards Api call */
}

// download

const getDynamicDownloadFile = (
  productId: number,
  zoneId: number,
  createdBy: number,
  searchText: string,
  startDate: string,
  endDate: string
) => {
  return axios({
    url: `${API_URL_DATA}/GetGodownStockInwardsExcelSheetData?productId=${productId}&zoneId=${zoneId}&searchText=${searchText}&startDate=${startDate}&endDate=${endDate}&createdBy=${createdBy}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

{
  /* begin:: post Api call(create) */
}
const postGodownStockInwards: any = (obj: postlistData) => {
  return http.post('SaveGodownStockInwards', {
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    supplierId: obj.supplierId,
    statusId: 1,
    serialno: obj.serialno,
    remark: obj.remark,
    createdbyId: obj.createdbyId,
  })
}
{
  /* end:: post Api call(create) */
}

{
  /* begin:: post Api call(edit) */
}
const editGodownStockInwards = (obj: putGodownStockInwardssmodel) => {
  return http.post(`SaveGodownStockInwards`, {
    id: obj.id,
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    supplierId: obj.supplierId,
    statusId: 1,
    serialno: obj.serialno,
    remark: obj.remark,
    modifyById: obj.modifyById,
  })
}
{
  /* begin:: post Api call(edit) */
}

{
  /* begin:: getById Api call */
}
const GetGodownStockInwardsTypeById = (inwardNo: ID) => {
  return http.get(`GetGodownStockInwardsById/${inwardNo}`)
}
{
  /* end:: getById Api call */
}

//Created by

const getCreatedByTypes = () => {
  return http.get('GetUserByRoleName')
}

//Zones
const getZoneTypes = () => {
  return http.get('GetAllZones')
}

//getProducts
const getProducts = () => {
  return http.get('GetAllProducts')
}

//getTechnicianTypes
const getTechnicianTypes = () => {
  return http.get(`GetUserByRoleName?roleName=technician`)
}

// userName
const getUserName = (username: string) => {
  return http.get(`GetByUserName`, {userName: username})
}

//delivery by
const getDeliveredByTypes = () => {
  return http.get(`GetUserByRoleName?roleName=technician`)
}

const getAllSuppliers = () => {
  return http.get(`GetAllSuppliers`)
}
const OfficeStockInwardsService = {
  getDynamicGodownStockInwards,
  postGodownStockInwards,
  editGodownStockInwards,
  getProducts,
  getTechnicianTypes,
  getUserName,
  GetGodownStockInwardsTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getDynamicDownloadFile,
  getDeliveredByTypes,
  getAllSuppliers,
}

export default OfficeStockInwardsService
