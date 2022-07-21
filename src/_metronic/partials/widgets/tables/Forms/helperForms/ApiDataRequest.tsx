import http from '../../../../../helpers/components/http-common'
import { ID, postlistData, putInquiriesmodel } from './ModelForms'

{
  /* begin:: User:- getDynamicUser Api call */
}
const getDynamicInquiries = (
  pageNo: number,
  pageSize: number,
  searchText: string = '',
  createdById: number,
  statusId: number,
  roleId: string,
  salesExecutiveId: number,
  startDate: string,
  endDate: string,
) => {
  if (pageSize <= 0) {
    return http.get(
      `GetAllInquiries/${null}/${null}?searchText=${null}&createdById=${null}&statusId=${null}&roleId=${null}&salesExecutiveId=${null}&createdAt=${null}&startDate=${null}&endDate=${null}`
    )
  } else {
    return http.get(
      `GetAllInquiries/${pageNo}/${pageSize}?searchText=${searchText}&createdById=${createdById}&statusId=${statusId}&roleId=${roleId}&salesExecutiveId=${salesExecutiveId}&startDate=${startDate}&endDate=${endDate}`
    )
  }
}
{
  /* end:: User:- getDynamicFaults Api call */
}

{
  /* begin:: User:- post Api call(create) */
}
const postInquiries = (obj: postlistData) => {
  return http.post('SaveInquiry', {
    name: obj.name,
    address: obj.address,
    contactno: obj.contactno,
    statusId: 1,
    salesexecutiveName:obj.salesexecutiveName,
    salesexecutiveId: obj.salesexecutiveId,
    description: obj.description,
    remark: obj.remark,
    isnotify: obj.isnotify,
    createdbyId: 1,
  })
}
{
  /* end:: User:- post Api call(create) */
}

{
  /* begin:: User:- delete Api call */
}
const deleteInquiries = (Id: number) => {
  return http.delet(`DeleteInquiry/${Id}`)
}

{
  /* end:: User:- delete Api call */
}

{
  /* begin:: User:- post Api call(edit) */
}
const editInquiries = (obj: putInquiriesmodel) => {
  return http.post(`SaveInquiry`, {
    id: obj.id,
    name: obj.name,
    address: obj.address,
    contactno: obj.contactno,
    statusId: 1,
    salesexecutiveName:obj.salesexecutiveName,
    salesexecutiveId:obj.salesexecutiveId,
    description: obj.description,
    remark: obj.remark,
    isnotify: obj.isnotify,
    createdbyId: 1,
  })
}
{
  /* begin:: User:- post Api call(edit) */
}

{
  /* begin:: User:- getById Api call */
}
const GetInquiriesTypeById = (id: ID) => {
  console.log(id, 'id===============')

  return http.get(`GetInquiry/${id}`)
}
{
  /* end:: User:- getById Api call */
}

{
  /* begin:: User:- get User type Api call */
}

{
  /* end:: User:- get User type Api call */
}

// SalesExecutve
const getSalesExecutveByTypes = () => {
  return http.get('GetAllRoles')
}

// SalesExecutveUserByRole
const getSalesExecutveByGetUserByRoleTypes = () => {
  return http.get(`GetUserByRoleName?roleName=SalesExecutve`)
}

//Zones
const getZoneTypes = () => {
  return http.get('GetAllZones')
}


const Inquiriesservice = {
  getDynamicInquiries,
  postInquiries,
  deleteInquiries,
  editInquiries,
  GetInquiriesTypeById,
  getSalesExecutveByTypes,
  getZoneTypes,
  getSalesExecutveByGetUserByRoleTypes,
}

export default Inquiriesservice
