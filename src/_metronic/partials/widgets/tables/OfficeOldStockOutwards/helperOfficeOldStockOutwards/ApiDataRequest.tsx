import axios from 'axios'
import http from '../../../../../helpers/components/http-common'
import { ID, postlistData, putgetOfficeStockOutwardsDatasmodel } from './ModelOfficeOldStocksOutwards'

const API_URL_DATA = process.env.REACT_APP_API_URL
{
  /* begin:: getDynamicOfficeOldStockOutwards Api call */
}
const getDynamicOfficeOldStockOutwards = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId: number,
  Username: string,
  createdBy: number,
  productId: number,
  TechnicianId: number,
  startDate: string,
  endDate: string,
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicOfficeOldStockOutwards/${null}/${null}?searchText=${null}&zoneId=${null}&Username=${null}&createdBy=${null}&&TechnicianId=${null}&startDate=${null}&endDate=${null}&productId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicOfficeOldStockOutwards/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&Username=${Username}&createdBy=${createdBy}&TechnicianId=${TechnicianId}&startDate=${startDate}&endDate=${endDate}&productId=${productId}`
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
  createdBy:number
) => {
    return axios({
      url: `${API_URL_DATA}/GetOfficeOldStockOutwardsExcelSheetData?productId=${productId}&zoneId=${zoneId}&searchText=${searchText}&TechnicianId=${TechnicianId}&Username=${Username}&startDate=${startDate}&endDate=${endDate}&createdBy=${createdBy}`, //your url
      method: 'GET',
      responseType: 'blob', // important
  })
}

{
  /* begin:: post Api call(create) */
}
const postOfficeOldStockOutwards:any = (obj: postlistData) => {
  console.log(obj,"obj");

  return http.post('SaveOfficeOldStockOutwards', {
    outwardDate: obj.outwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    technicianId: obj.technicianId,
    userid: obj.userid,
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
const editOfficeOldStockOutwards = (obj: putgetOfficeStockOutwardsDatasmodel) => {
  return http.post(`SaveOfficeOldStockOutwards`, {
    id: obj.id,
    outwardDate: obj.outwardDate,
    productId: obj.productId,
    quantity: obj.quantity,
    technicianId: obj.technicianId,
    userid: obj.userid,
    reason: obj.reason,
    statusId: 1,
    zoneId: obj.zoneId,
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
const GetOfficeOldStockOutwardsTypeById = (id: ID) => {
  console.log(id, 'id===============')

  return http.get(`GetOfficeOldStockOutwardsById/${id}`)
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

const OfficeStockOutwardsViewService = {
  getDynamicOfficeOldStockOutwards,
  postOfficeOldStockOutwards,
  editOfficeOldStockOutwards,
  getProducts,
  getTechnicianTypes,
  getUserName,
  GetOfficeOldStockOutwardsTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getDynamicDownloadFile,
}

export default OfficeStockOutwardsViewService



