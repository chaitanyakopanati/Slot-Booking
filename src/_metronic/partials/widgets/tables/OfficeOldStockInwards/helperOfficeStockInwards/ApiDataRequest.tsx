import axios from 'axios'
import http from '../../../../../helpers/components/http-common'
import {ID, postlistData, putOfficeOldStockInwardsmodel} from './ModelOfficeStockInwards'

const API_URL_DATA = process.env.REACT_APP_API_URL
{
  /* begin:: getDynamicOfficeOldStockInwards Api call */
}
const getDynamicOfficeOldStockInwards = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdBy: number,
  startDate: string,
  endDate: string,
  zoneId: number,
  productId: number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicOfficeOldStockInwards/${null}/${null}?searchText=${null}&createdBy=${null}&startDate=${null}&endDate=${null}&zoneId=${null}&productId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicOfficeOldStockInwards/${pageNo}/${pageSize}?searchText=${searchText}&createdBy=${createdBy}&startDate=${startDate}&endDate=${endDate}&zoneId=${zoneId}&productId=${productId}`
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
  endDate: string
) => {
  return axios({
    url: `${API_URL_DATA}/GetOfficeOldStockInwardsExcelSheetData?productId=${productId}&zoneId=${zoneId}&searchText=${searchText}&startDate=${startDate}&endDate=${endDate}&createdBy=${createdBy}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

{
  /* begin:: post Api call(create) */
}
const postOfficeOldStockInwards: any = (obj: postlistData) => {
  console.log(obj, 'obj')

  // var userData:any =  getUserName(obj.id)
  return http.post('SaveOfficeOldStockInwards', {
    inwardNo: obj.inwardNo,
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    userId: obj.userId,
    statusId: 1,
    deliveredById: obj.deliveredById,
    zoneId: obj.zoneId,
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
const editOfficeOldStockInwards = (obj: putOfficeOldStockInwardsmodel) => {
  return http.post(`SaveOfficeOldStockInwards`, {
    id: obj.id,
    inwardNo: obj.inwardNo,
    inwardDate: obj.inwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    userId: obj.userId,
    statusId: 1,
    deliveredById: obj.deliveredById,
    zoneId: obj.zoneId,
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
const GetOfficeOldStockInwardsTypeById = (inwardNo: ID) => {
  return http.get(`GetOfficeOldStockInwardsById/${inwardNo}`)
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
  getDynamicOfficeOldStockInwards,
  postOfficeOldStockInwards,
  editOfficeOldStockInwards,
  getProducts,
  getTechnicianTypes,
  getUserName,
  GetOfficeOldStockInwardsTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getDynamicDownloadFile,
  getDeliveredByTypes,
}

export default OfficeStockInwardsService
