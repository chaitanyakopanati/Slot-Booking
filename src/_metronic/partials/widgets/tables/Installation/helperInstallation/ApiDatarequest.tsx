import http from '../../../../../helpers/components/http-common'
import axios from 'axios'
import {ID, postlistData, putInstallationsmodel} from './ModelInstallation'
const API_URL_DATA = process.env.REACT_APP_API_URL

{
  /* begin:: getDynamicInstallations Api call */
}
const getDynamicInstallations = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  connectionTypeId: number,
  statusId: number,
  roleId: string,
  salesExecutiveId: number,
  startDate: string,
  endDate: string,
  zoneId: number,
  mainPointId: number,
  installerId: number,
  companyId: number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicInstallations/${null}/${null}?searchText=${null}&statusId=${null}&salesExecutiveId=${null}&createdAt=${null}&startDate=${null}&endDate=${null}&connectionTypeId=${null}&zoneId=${null}&mainPointId=${null}&installerId=${null}&companyId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicInstallations/${pageNo}/${pageSize}?searchText=${searchText}&statusId=${statusId}&salesExecutiveId=${salesExecutiveId}&startDate=${startDate}&endDate=${endDate}&connectionTypeId=${zoneId}&zoneId=${connectionTypeId}&mainPointId=${mainPointId}&installerId=${installerId}&companyId=${companyId}&orderByColumnName=${'createdAt'}&sortColumnDir=${'desc'}`
    )
  }
}
{
  /* end:: getDynamicInstallations Api call */
}

{
  /* begin:: postInstallations:- post Api call(create) */
}
const postInstallations = (obj: postlistData) => {
  return http.post('SaveInstallations', {
    userid: obj.userid,
    zonepointid: obj.zonepointid ? obj.zonepointid : null,
    connectiontype: obj.connectiontype ? obj.connectiontype : null,
    installerid: obj.installerid ? obj.installerid : null,
    cabletypeid: obj.cabletypeid ? obj.cabletypeid : null,
    cablelength: +obj.cablelength,
    iptype: obj.iptype ? obj.iptype : null,
    iptypeId: obj.iptypeId,
    accesspointip: obj.accesspointip,
    stationip: obj.stationip,
    stationname: obj.stationname,
    stationMac: obj.stationMac,
    status: obj.status ? obj.status : null,
    remark: obj.remark,
    isnotifyinstaller: obj.isnotifyinstaller,
    createdbyId: obj.createdbyId,
    wirelessTypeId: obj.wirelessTypeId ? obj.wirelessTypeId : null,
  })
}
{
  /* end:: post Api call(create) */
}

{
  /* begin:: deleteInstallations:- delete Api call */
}
const deleteInstallations = (Id: number) => {
  return http.delet(`DeleteInstallationById/${Id}`)
}

{
  /* end:: delete Api call */
}

{
  /* begin:: editInstallations:- editInstallations Api call(edit) */
}
const editInstallations = (obj: putInstallationsmodel) => {
  return http.post(`SaveInstallations`, {
    id: obj.id,
    userid: obj.userid,
    zonepointid: obj.zonepointid ? obj.zonepointid : null,
    connectiontype: obj.connectiontype ? obj.connectiontype : null,
    installerid: obj.installerid ? obj.installerid : null,
    cabletypeid: obj.cabletypeid ? obj.cabletypeid : null,
    cablelength: +obj.cablelength,
    iptype: obj.iptype ? obj.iptype.toString() : null,
    accesspointip: obj.accesspointip,
    stationip: obj.stationip,
    stationname: obj.stationname,
    status: obj.status ? obj.status : null,
    stationMac: obj.stationMac,
    remark: obj.remark,
    isnotifyinstaller: obj.isnotifyinstaller,
    wirelessTypeId: obj.wirelessTypeId ? obj.wirelessTypeId : null,

    modifyby: obj.modifyby,
  })
}

{
  /* begin:: post Api call(edit) */
}

// download

const getDynamicDownloadFile = (
  searchText: string,
  startDate: string,
  endDate: string,
  createdById: number,
  statusId: number,
  salesExecutiveId: number,
  installerId: number,
  zoneId: number,
  companyId: number,
  mainPointId: number,
  connectionTypeId: number
) => {
  return axios({
    url: `${API_URL_DATA}/GetInstallationsExcelSheet?&searchText=${searchText}&startDate=${startDate}&endDate=${endDate}&createdById=${createdById}&statusId=${statusId}&salesExecutiveId=${salesExecutiveId}&installerId=${installerId}&zoneId=${zoneId}&companyId=${companyId}&mainPointId=${mainPointId}&connectionTypeId=${connectionTypeId}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

{
  /* begin:: GetInstallationsTypeById:- getById Api call */
}
const GetInstallationsTypeById = (id: ID) => {
  return http.get(`GetInstallationById/${id}`)
}
{
  /* end:: getById Api call */
}

//getZoneTypes

const getZoneTypes = () => {
  return http.get('GetAllZones')
}

const getAllWirelessTypeProducts = () => {
  return http.get('GetAllWirelessTypeProducts')
}

// Status
const getStatusByTypes = () => {
  return http.get('GetinquireStatus')
}

// SalesExecutve
const getSalesExecutveByTypes = () => {
  return http.get('GetUserByRoleName?roleName=SalesExecutive')
}

// SalesExecutveUserByRole
const getSalesExecutveByGetUserByRoleTypes = () => {
  return http.get(`GetUserByRoleName?roleName=SalesExecutive`)
}

// Technician Installations
const getInstallationsByTypes = () => {
  return http.get('GetUserByRoleName?roleName=Technician')
}

// main point
const getMainPoint = () => {
  return http.get('GetAllMainPoints')
}

// Cable type
const getcableType = () => {
  return http.get('GetAllCableTypes')
}

// userName
const getUserName = (username: string) => {
  return http.get(`GetUserByRoleName?roleName=Customer`, {userName: username})
}

// Company
const getCompany = () => {
  return http.get('GetAllCompanies')
}

const InstallationsService = {
  getDynamicInstallations,
  postInstallations,
  deleteInstallations,
  editInstallations,
  getStatusByTypes,
  GetInstallationsTypeById,
  getZoneTypes,
  getSalesExecutveByTypes,
  getSalesExecutveByGetUserByRoleTypes,
  getInstallationsByTypes,
  getMainPoint,
  getcableType,
  getUserName,
  getCompany,
  getDynamicDownloadFile,
  getAllWirelessTypeProducts,
}

export default InstallationsService
