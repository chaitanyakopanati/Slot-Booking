import axios from 'axios'
import http from '../../../../../helpers/components/http-common'
import {ID, postlistData, putInquiriesmodel} from './ModelForms'

const API_URL_DATA = process.env.REACT_APP_API_URL

{
  /* begin:: User:- getDynamicUser Api call */
}
const getDynamicForm = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdById: number,
  statusId: number,
  roleId: string,
  salesExecutiveId: number,
  zoneId: number,
  companyId: number,
  paymentTypeId: number,
  createdStartDate: string,
  createdEndDate: string,
  formStartDate: string,
  formEndDate: string,
  expiryStartDate: string,
  expiryEndDate: string,
  packageCategoryId: number,
  connectionTypeId: number,
  formTypeId: number,
  searchByUserName: string,
  formSubmitTypeId: number
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetDynamicForms/${null}/${null}?searchText=${null}&createdById=${null}&statusId=${null}&roleId=${null}&salesExecutiveId=${null}&createdAt=${null}&zoneId=${null}&companyId=${null}&paymentTypeId=${null}&createdStartDate=${null}&createdEndDate=${null}&formStartDate=${null}&formEndDate=${null}&expiryStartDate=${null}&expiryEndDate=${null}&packageCategoryId=${null}&connectionTypeId=${null}&formTypeId=${null}&searchByUserName=${null}&formSubmitTypeId=${null}`
    )
  } else {
    return http.get(
      `GetDynamicForms/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}&statusId=${statusId}&roleId=${roleId}&salesExecutiveId=${salesExecutiveId}&zoneId=${zoneId}&companyId=${companyId}&paymentTypeId=${paymentTypeId}&createdStartDate=${createdStartDate}&createdEndDate=${createdEndDate}&formStartDate=${formStartDate}&formEndDate=${formEndDate}&expiryStartDate=${expiryStartDate}&expiryEndDate=${expiryEndDate}&packageCategoryId=${packageCategoryId}&connectionTypeId=${connectionTypeId}&formTypeId=${formTypeId}&searchByUserName=${searchByUserName}&formSubmitTypeId=${formSubmitTypeId}&orderByColumnName=${'createdAt'}&orderByColumnDir=${'desc'}`
    )
  }
}
{
  /* end:: User:- getDynamicFaults Api call */
}

// download

const getDynamicDownloadFile = (
  searchText: string,
  salesExecutiveId: number,
  zoneId: number,
  companyId: number,
  connectionTypeId: number,
  formTypeId: number,
  paymentTypeId: number,
  createdStartDate: string,
  createdEndDate: string,
  formStartDate: string,
  formEndDate: string,
  expiryStartDate: string,
  expiryEndDate: string,
  packageCategoryId: number,
  formSubmitTypeId: number
) => {
  return axios({
    url: `${API_URL_DATA}/GetFormsExcelSheet?&searchText=${searchText}&salesExecutiveId=${salesExecutiveId}&zoneId=${zoneId}&companyId=${companyId}&connectionTypeId=${connectionTypeId}&formTypeId=${formTypeId}&paymentTypeId=${paymentTypeId}&createdStartDate=${createdStartDate}&createdEndDate=${createdEndDate}&formStartDate=${formStartDate}&formEndDate=${formEndDate}&expiryStartDate=${expiryStartDate}&expiryEndDate=${expiryEndDate}&packageCategoryId=${packageCategoryId}&formSubmitTypeId=${formSubmitTypeId}`, //your url
    method: 'GET',
    responseType: 'blob', // important
  })
}

{
  /* begin:: User:- post Api call(create) */
}
const postForms = (formData: postlistData) => {
  return http.post('SaveFormV1', formData
  // {
  //   userid: obj.userid,
  //   formno: obj.formno,
  //   formdate: obj.formdate,
  //   formtype: obj.formtype,
  //   salesexecutiveid: +obj.salesexecutiveid,
  //   companyid: obj.companyid ? +obj.companyid : null,
  //   pacakgetype: obj.pacakgetype ? obj.pacakgetype.toString() : null,
  //   packageid: obj.packageid ? obj.packageid : null,
  //   packagecatid: obj.packagecatid ? +obj.packagecatid : null,
  //   packagevalidity: obj.packagevalidity,
  //   packagecost: obj.packagecost,
  //   installationcost: obj.installationcost,
  //   othercost: obj.othercost,
  //   discount: obj.discount,
  //   gstamount: obj.gstamount,
  //   totalamount: obj.totalamount,
  //   cashamount: obj.cashamount,
  //   chequeamount: obj.chequeamount,
  //   remaningamount: obj.remaningamount,
  //   bankid: obj.bankid ? +obj.bankid : null,
  //   chequeno: obj.chequeno.toString(),
  //   chequedate: obj.chequedate,
  //   receiverid: +obj.receiverid,
  //   activationdate: obj.activationdate,
  //   expirydate: obj.expirydate,
  //   iptype: obj.iptype ? obj.iptype.toString() : null,
  //   note: obj.note,
  //   thirdparty: obj.thirdparty,
  //   remark: obj.remark,
  //   status: obj.status.toString(),
  //   createdbyId: obj.createdbyId,
  //   newAddress: obj?.newAddress,
  //   FormDocument:obj.IdproofImageFile
  // }
  )
}
{
  /* end:: User:- post Api call(create) */
}

{
  /* begin:: User:- delete Api call */
}
const deleteForms = (Id: number) => {
  return http.delet(`DeleteFormById/${Id}`)
}

{
  /* end:: User:- delete Api call */
}

{
  /* begin:: User:- post Api call(edit) */
}
const editForms = (formData: putInquiriesmodel) => {
  console.log("formData",formData);
  
  return http.post(`SaveFormV1`,formData
  //  {
  //   id: obj.id,
  //   userid: obj.userid,
  //   userName: obj.userName,
  //   formno: obj.formno,
  //   formdate: obj.formdate,
  //   packageid: obj.packageid ? obj.packageid : null,
  //   formtype: obj.formtype.toString(),
  //   pacakgetype: obj.pacakgetype ? obj.pacakgetype.toString() : null,
  //   salesexecutiveid: obj.salesexecutiveid,
  //   companyid: obj.companyid ? +obj.companyid : null,
  //   packagecatid: obj.packagecatid ? +obj.packagecatid : null,
  //   packagevalidity: obj.packagevalidity,
  //   packagecost: obj.packagecost,
  //   installationcost: obj.installationcost,
  //   othercost: obj.othercost,
  //   discount: obj.discount,
  //   gstamount: obj.gstamount,
  //   totalamount: obj.totalamount,
  //   cashamount: obj.cashamount,
  //   chequeamount: obj.chequeamount,
  //   remaningamount: obj.remaningamount,
  //   bankid: obj.bankid ? +obj.bankid : null,
  //   chequeno: obj.chequeno,
  //   chequedate: obj.chequedate,
  //   receiverid: obj.receiverid,
  //   activationdate: obj.activationdate,
  //   expirydate: obj.expirydate,
  //   iptype: obj.iptype ? obj.iptype.toString() : null,
  //   note: obj.note,
  //   thirdparty: obj.thirdparty,
  //   remark: obj.remark,
  //   status: obj.status.toString(),
  //   newAddress: obj?.newAddress,
  //   modifyby: obj.modifyby,
  //   FormDocument:obj.IdproofImageFile
  // }
  )
}
{
  /* begin:: User:- post Api call(edit) */
}

{
  /* begin:: User:- getById Api call */
}

const formUploadImage =(formData:any)=>{
  console.log("111");
  
  return http.post(`UploadFormImage`,formData)
}
const GetFormsTypeById = (id: ID) => {
  return http.get(`GetFormById/${id}`)
}

const GetTechnicianUsers = () => {
  return http.get(`GetTechnicianAndSalesExecutiveUsers`)
}
{
  /* end:: User:- getById Api call */
}

// SalesExecutve
const getSalesExecutveByTypes = () => {
  return http.get('GetAllRoles')
}

// SalesExecutveUserByRole
const getSalesExecutveByGetUserByRoleTypes = () => {
  return http.get(`GetUserByRoleName?roleName=SalesExecutive`)
}

//Zones
const getZoneTypes = () => {
  return http.get('GetAllZones')
}

// Company
const getCompany = () => {
  return http.get('GetAllCompanies')
}

// Packages category
const getPackagesCategory = () => {
  return http.get('GetAllPackageCategories')
}

// Packages
const getPackage = () => {
  return http.get('GetAllPackages')
}

// Bank
const getBank = () => {
  return http.get('GetAllBanks')
}

// userName
const getUserName = (username: string) => {
  return http.get(`GetUserByRoleName?roleName=Customer`, {userName: username})
}

//Reciever
const getReciever = () => {
  return http.get(`GetRecieverUsers`)
}

const postInstallations = (obj: postlistData,remarkData?:any,installationId?:any) => {  
  return http.post('SaveInstallations', {
    id:installationId,
    userid: obj.userid,
    remark:remarkData,
    createdbyId: obj.createdbyId,
    isShifting:installationId?true:false
  })
}

const GetInstallationsTypeById = (id: any) => {
  return http.get(`GetInstallationById/${id}`)
}

const ValidateUserById =(id:any)=>{
   return http.get(`ValidateUserById/${id}`)
}
const Inquiriesservice = {
  getDynamicForm,
  postForms,
  deleteForms,
  editForms,
  GetFormsTypeById,
  getSalesExecutveByTypes,
  getZoneTypes,
  getSalesExecutveByGetUserByRoleTypes,
  getCompany,
  getPackagesCategory,
  getDynamicDownloadFile,
  getUserName,
  getPackage,
  getBank,
  getReciever,
  postInstallations,
  GetTechnicianUsers,
  GetInstallationsTypeById,
  ValidateUserById,
  formUploadImage
}

export default Inquiriesservice
