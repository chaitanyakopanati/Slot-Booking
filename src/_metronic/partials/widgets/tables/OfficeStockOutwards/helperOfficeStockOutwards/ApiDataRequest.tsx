import axios from 'axios'
import http from '../../../../../helpers/components/http-common'
import {ID, postlistData, putgetOfficeStockOutwardsDatasmodel} from './ModelOfficeStockOutwards'

const API_URL_DATA = process.env.REACT_APP_API_URL
{
  /* begin:: getDynamicOfficeStockOutwards Api call */
}
const getDynamicOfficeStockOutwards = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId: number,
  Username: string,
  startDate: string,
  endDate: string,
  createdBy: number,
  productId: number,
  TechnicianId: number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicOfficeStockOutwards/${null}/${null}?searchText=${null}&zoneId=${null}&Username=${null}&createdBy=${null}&&TechnicianId=${null}&productId=${null}&startDate=${null}&endDate=${null}`
    )
  } else {
    return http.get(
      `GetDynamicOfficeStockOutwards/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&Username=${Username}&createdBy=${createdBy}&TechnicianId=${TechnicianId}&productId=${productId}&startDate=${startDate}&endDate=${endDate}`
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
  TechnicianId: number,
  searchText: string,
  Username: string,
  startDate: string,
  endDate: string,
  createdBy: number
) => {
  return axios({
    url: `${API_URL_DATA}/GetOfficeStockOutwardsExcelSheetData?productId=${productId}&zoneId=${zoneId}&searchText=${searchText}&TechnicianId=${TechnicianId}&Username=${Username}&startDate=${startDate}&endDate=${endDate}&createdBy=${createdBy}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

{
  /* begin:: post Api call(create) */
}
const postOfficeStockOutwards: any = (obj: postlistData) => {
  console.log(obj, 'obj')

  return http.post('SaveOfficeStockOutwards', {
    outwardDate: obj.outwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    technicianId: obj.technicianId,
    userId: obj.userId,
    reason: obj.reason,
    statusId: 1,
    zoneId: obj.zoneId,
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
const editOfficeStockOutwards = (obj: putgetOfficeStockOutwardsDatasmodel) => {
  return http.post(`SaveOfficeStockOutwards`, {
    id: obj.id,
    outwardDate: obj.outwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    technicianId: obj.technicianId,
    userId: obj.userId,
    reason: obj.reason,
    statusId: 1,
    zoneId: obj.zoneId,
    serialno: obj.serialno,
    remark: obj.remark,
    createdbyId: 1,
    modifyById: 1,
  })
}
{
  /* begin:: post Api call(edit) */
}

{
  /* begin:: getById Api call */
}
const GetOfficeStockOutwardsTypeById = (id: ID) => {
  console.log(id, 'id===============')

  return http.get(`GetOfficeStockOutwardsById/${id}`)
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

//  product Zone quntity

const getProductZoneQuntityTypes = (productId: number, zoneId: number) => {
  return http.get(`GetProductCountByZone/${productId}/${zoneId}`)
}

const OfficeStockOutwardsViewService = {
  getDynamicOfficeStockOutwards,
  postOfficeStockOutwards,
  editOfficeStockOutwards,
  getProducts,
  getTechnicianTypes,
  getUserName,
  GetOfficeStockOutwardsTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getDynamicDownloadFile,
  getProductZoneQuntityTypes,
}

export default OfficeStockOutwardsViewService
