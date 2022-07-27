import http from '../../../../_metronic/helpers/components/http-common'
import {filterTable} from './ModelCustomer'

const getZoneTypes = () => {
  return http.get('GetAllZones')
}

const getCompaniesTypes = () => {
  return http.get('GetAllCompanies')
}

const getCustomerList = (filter: filterTable, pageNo: number, pageSize: number) => {
  // return http.get(`GetDynamicCustomers/1/10`, filter)
  return http.get(`GetDynamicCustomers/${pageNo}/${pageSize}`, filter)
}

const getUserByRoleName = (rolename: string, searchText: string | null = null) => {
  return http.get('GetUserByRoleName', {roleName: rolename, userName: searchText || ''})
}

const getMainPoint = () => {
  return http.get('GetAllMainPoints')
}

const saveCustomer = (formdata: any) => {
  return http.post('SaveCustomer', formdata)
}

const GetCustomerById = (id: any) => {
  return http.get(`GetCustomerById/${id}`).then((result) => result.data)
}

const deleteCustomer = (Id: number, username: string) => {
  return http.delet(`DeleteCustomerById/${username}/${Id}`)
}

export {
  getZoneTypes,
  getCustomerList,
  getCompaniesTypes,
  getUserByRoleName,
  getMainPoint,
  saveCustomer,
  GetCustomerById,
  deleteCustomer,
}
