import axios from 'axios'
import http from '../../../../../helpers/components/http-common'
import { ID, postlistData, putUsersmodel } from './ModelGodownStockInwards'

const API_URL_DATA = process.env.REACT_APP_API_URL
{
  /* begin:: getDynamicOfficeStockInwards Api call */
}
const getDynamicOfficeStockInwards = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdBy: number,
  startDate:string,
  endDate:string,
  zoneId:number,
  productId:number,
  supplierId:string = '',
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicGodownStockInwards/${null}/${null}?searchText=${null}&createdBy=${null}&startDate=${null}&endDate=${null}&zoneId=${null}&productId=${null}&supplierId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicGodownStockInwards/${pageNo}/${pageSize}?searchText=${searchText}&createdBy=${createdBy}&startDate=${startDate}&endDate=${endDate}&zoneId=${zoneId}&productId=${productId}&supplierId=${supplierId}`
    )
  }
}
{
  /* end:: getDynamicFaults Api call */
}

// download

const getDynamicDownloadFile = (
  productId: number,
  zoneId: number,
  createdBy: number,
  searchText: string,
  startDate: string,
  endDate: string,
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
const postOfficeStockInwards:any = (obj: postlistData) => {
  console.log(obj,"obj");

  // var userData:any =  getUserName(obj.id)
  return http.post('SaveGodownStockInwards', {
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    supplierName: obj.supplierName,
    statusId: 1,
    supplierId: obj.supplierId,
    serialno: obj.serialno,
    remark: obj.remark,
    createdbyId: 1,
  })
}
{
  /* end:: post Api call(create) */
}

{
  /* begin:: post Api call(edit) */
}
const editOfficeStockInwards = (obj: putUsersmodel) => {
  return http.post(`SaveGodownStockInwards`, {
    id:obj.id,
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    supplierName: obj.supplierName,
    statusId: 1,
    supplierId: obj.supplierId,
    serialno: obj.serialno,
    remark: obj.remark,
    createdbyId: 1,
    modifyById:1,
  })
}
{
  /* begin:: post Api call(edit) */
}

{
  /* begin:: getById Api call */
}
const GetOfficeStockInwardsTypeById = (inwardNo: ID) => {
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

const OfficeStockInwardsService = {
  getDynamicOfficeStockInwards,
  postOfficeStockInwards,
  editOfficeStockInwards,
  getProducts,
  getTechnicianTypes,
  getUserName,
  GetOfficeStockInwardsTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getDynamicDownloadFile,
  getDeliveredByTypes
}

export default OfficeStockInwardsService



