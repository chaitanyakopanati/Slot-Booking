import axios from 'axios'
import http from '../../../../_metronic/helpers/components/http-common'
import {ID, postlistData, putgetComplaintsDatasmodel, username} from './ModelComplaint'

const API_URL_DATA = process.env.REACT_APP_API_URL

const getDynamicComplaintData = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  zoneId: number,
  Username: string,
  complainttypeid: string,
  status: number,
  createdDate: string,
  assigntechnicianid: number,
  faultid: number,
  CompanyId: number,
  createdBy: number,
  PackageCategoryId: number,
  startDate: string,
  endDate: string
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicComplaintData/${null}/${null}?searchText=${null}&zoneId=${null}&Username=${null}&complainttypeid=${null}&status=${null}&assigntechnicianid=${null}&faultid=${null}&CompanyId=${null}&createdBy=${null}&PackageCategoryId=${null}&startDate=${null}&endDate=${null}`
    )
  } else {
    return http.get(
      `GetDynamicComplaintData/${pageNo}/${pageSize}?searchText=${searchText}&zoneId=${zoneId}&Username=${Username}&complainttypeid=${complainttypeid}&status=${status}&assignToId=${assigntechnicianid}&faultid=${faultid}&CompanyId=${CompanyId}&createdBy=${createdBy}&PackageCategoryId=${PackageCategoryId}&startDate=${startDate}&endDate=${endDate}&orderBYColumnName=${'createdDate'}&orderByColumnDir=${'desc'}`
    )
  }
}
{
  /* end:: getDynamicFaults Api call */
}

// download

const getDynamicDownloadFile = (
  pageNo: number,
  pageSize: number,
  searchText: string,
  zoneId: number,
  Username: string,
  complainttypeid: string,
  status: number,
  createdDate: string,
  assigntechnicianid: number,
  faultid: number,
  CompanyId: number,
  createdBy: number,
  PackageCategoryId: number,
  startDate: string,
  endDate: string
) => {
  return axios({
    url: `${API_URL_DATA}/GetComplaintExcelSheetData?searchText=${searchText}&zoneId=${zoneId}&Username=${Username}&complainttypeid=${complainttypeid}&status=${status}&createdDate=${createdDate}&assignToId=${assigntechnicianid}&faultid=${faultid}&CompanyId=${CompanyId}&createdBy=${createdBy}&PackageCategoryId=${PackageCategoryId}&startDate=${startDate}&endDate=${endDate}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

const deleteComplaint = (Id: number) => {
  return http.delet(`DeleteComplaintById/${Id}`)
}

{
  /* begin:: post Api call(create) */
}
const postComplaint: any = (obj: postlistData) => {
  return http.post('SaveComplaint', {
    complainttypeid: obj.complainttypeid ? obj.complainttypeid : null,
    userId: obj.userId,
    description: obj.description,
    status: obj.status,
    remark: obj.remark,
    assigntechnicianid: obj.assigntechnicianid ? obj.assigntechnicianid : null,
    faultid: obj.faultid ? obj.faultid : null,
    isnotifycustomer: obj.isnotifycustomer,
    isnotifytechinician: obj.isnotifytechinician,
    CreatedBy: obj.CreatedBy,
  })
}
{
  /* end:: post Api call(create) */
}

{
  /* begin:: post Api call(edit) */
}
const editComplaints = (obj: postlistData) => {
  return http.post(`SaveComplaint`, {
    id: obj.id,
    complainttypeid: obj.complainttypeid ? obj.complainttypeid : null,
    userId: obj.userId,
    description: obj.description,
    status: obj.status,
    remark: obj.remark,
    assigntechnicianid: obj.assigntechnicianid ? obj.assigntechnicianid : null,
    faultid: obj.faultid ? obj.faultid : null,
    isnotifycustomer: obj.isnotifycustomer,
    isnotifytechinician: obj.isnotifytechinician,
    ModifyBy: obj.ModifyBy,
  })
}
{
  /* begin:: post Api call(edit) */
}

{
  /* begin:: getById Api call */
}
const GetComplaintsTypeById = (id: ID) => {
  return http.get(`GetComplaintById/${id}`)
}

const GetComplaintsByUserId = (id: ID) => {
  return http.get(`GetComplaintsByUserId/${id}`)
}

const deleteComplaintByIds = (Id: any) => {
  return http.deletes(`DeleteComplaintByIds`, Id)
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

const getComplaintTypes = () => {
  return http.get('GetAllComplaintTypes')
}

const getAllFaults = () => {
  return http.get(`GetAllFaults`)
}

//getTechnicianTypes
const getTechnicianTypes = () => {
  return http.get(`GetUserByRoleName?roleName=technician`)
}

const getAllCompanies = () => {
  return http.get(`GetAllCompanies`)
}

// userName
const getUserName = (username: string) => {
  return http.get(`GetUserByRoleName?roleName=Customer`, {userName: username})
}

const getAllPackages = () => {
  return http.get(`GetAllPackages`)
}

const ComplaintsViewService = {
  getDynamicComplaintData,
  postComplaint,
  editComplaints,
  getComplaintTypes,
  getTechnicianTypes,
  getUserName,
  GetComplaintsTypeById,
  getCreatedByTypes,
  getZoneTypes,
  getDynamicDownloadFile,
  getAllFaults,
  getAllCompanies,
  getAllPackages,
  deleteComplaint,
  GetComplaintsByUserId,
  deleteComplaintByIds,
}

export default ComplaintsViewService
