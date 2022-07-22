import http from '../../../../_metronic/helpers/components/http-common'
import { filterTable } from './ModelCustomer'

const getZoneTypes = () => {
  return http.get('GetAllZones')
}

const getCompaniesTypes = () => {
  return http.get('GetAllCompanies')
}

const getCustomerList = (filter:filterTable) =>{
  return http.get(`GetDynamicCustomers/1/10`,filter)
}

const getUserByRoleName = (rolename:string) =>{
  return http.get('GetUserByRoleName',{roleName:rolename})
}

const getMainPoint = () =>{
  return http.get('GetAllMainPoints')
}

export {getZoneTypes,getCustomerList,getCompaniesTypes,getUserByRoleName,getMainPoint}
