import http from '../../../../../helpers/components/http-common'
import { ID, postlistData, putInstallationsmodel, roleIdInstallations, USERNAME } from './ModelInstallation'


{
  /* begin:: User:- getDynamicInstallations Api call */
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
  zoneId:number,
  mainPointId:number,
  installerId:number,
  companyId:number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicInstallations/${null}/${null}?searchText=${null}&statusId=${null}&salesExecutiveId=${null}&createdAt=${null}&startDate=${null}&endDate=${null}&connectionTypeId=${null}&zoneId=${null}&mainPointId=${null}&installerId=${null}&companyId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicInstallations/${pageNo}/${pageSize}?searchText=${searchText}&statusId=${statusId}&salesExecutiveId=${salesExecutiveId}&startDate=${startDate}&endDate=${endDate}&connectionTypeId=${connectionTypeId}&zoneId=${zoneId}&mainPointId=${mainPointId}&installerId=${installerId}&companyId=${companyId}`
    )
  }
}
{
  /* end:: User:- getDynamicInstallations Api call */
}

{
  /* begin:: postInstallations:- post Api call(create) */
}
const postInstallations = (obj: postlistData) => {
  return http.post('SaveInstallations', {
    userid: obj.userid,
    zonepointid: obj.zonepointid,
    connectiontype:obj.connectiontype,
    installerid: obj.installerid,
    cabletypeid:obj.cabletypeid,
    cablelength: obj.cablelength,
    iptype: obj.iptype,
    iptypeId: obj.iptypeId,
    accesspointip: obj.accesspointip,
    stationip: obj.stationip,
    stationname: obj.stationname,
    stationMac: obj.stationMac,
    status: obj.status,
    remark: obj.remark,
    isnotifyinstaller: obj.isnotifyinstaller,
    createdbyId: 1,
    statusId:"1"
  })
}
{
  /* end:: User:- post Api call(create) */
}

{
  /* begin:: deleteInstallations:- delete Api call */
}
const deleteInstallations = (Id: number) => {
  return http.delet(`DeleteInstallationById/${Id}`)
}

{
  /* end:: User:- delete Api call */
}

{
  /* begin:: editInstallations:- editInstallations Api call(edit) */
}
const editInstallations = (obj: putInstallationsmodel) => {
  return http.post(`SaveInstallations`, {
    id:obj.id,
    userName:obj.userName,
    userid: obj.userid,
    connectiontype:obj.connectiontype,
    zonepointid: obj.zonepointid,
    installerid: obj.installerid,
    cabletypeid:obj.cabletypeid,
    cablelength: obj.cablelength,
    iptype: obj.iptype,
    iptypeId: obj.iptypeId,
    accesspointip: obj.accesspointip,
    stationip: obj.stationip,
    stationname: obj.stationname,
    stationMac: obj.stationMac,
    status: obj.status,
    remark: obj.remark,
    isnotifyinstaller: obj.isnotifyinstaller,
    createdbyId: 1,
    statusId:"1"
  })
}
{
  /* begin:: User:- post Api call(edit) */
}

{
  /* begin:: GetInstallationsTypeById:- getById Api call */
}
const GetInstallationsTypeById = (id: ID) => {
  console.log(id, 'id===============')

  return http.get(`GetInstallationById/${id}`)
}
{
  /* end:: User:- getById Api call */
}

//getZoneTypes

const getZoneTypes = () => {
  return http.get('GetAllZones')
}

// Status
const getStatusByTypes = () => {
  return http.get('GetinquireStatus')
}

// SalesExecutve
const getSalesExecutveByTypes = () => {
  return http.get('GetUserByRoleName?roleName=SalesExecutve')
}

// SalesExecutveUserByRole
const getSalesExecutveByGetUserByRoleTypes = () => {
  return http.get(`GetUserByRoleName?roleName=SalesExecutve`)
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
const getUserName = (username : string) => {
  return http.get(`GetByUserName`,{userName:username})
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
  getCompany
}

export default InstallationsService
