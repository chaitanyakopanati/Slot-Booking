export interface getInquiriesData {
  name: string
  createdAt: string
  createdby: number
  id: number
  modifyAt: number
  modifyby: number
  roleName: string
  roleId: string
  createdById: number
  createdByName: string
  zoneId: number
  address: string
  contactno: string
  salesexecutiveName: string
  status: string
  statusId: number
  fileNo: string
  userName: string
  formdate: string
  formtype: string
  formtypeName: string
  remaningamount: number
  customerId: number
}

export interface getAllInquiriesData {
  data: getInquiriesData[]
  message: string
  success: boolean
}
export interface postlistData {
  userid: any
  formno: string
  formdate: string
  formtype: string
  createdbyId: any
  salesexecutiveid: number
  pacakgetype: string
  packageid: number
  companyid: number
  packagecatid: number
  packagevalidity: number
  packagecost: number
  installationcost: number
  othercost: number
  discount: number
  gstamount: number
  totalamount: number
  cashamount: number
  chequeamount: number
  remaningamount: number
  bankid: number
  chequeno: string
  chequedate: string
  receiverid: number
  activationdate: string
  expirydate: string
  iptype: string
  note: string
  thirdparty: string
  remark: string
  status: string
  newAddress: any
}

export interface GetAllData {
  firstname: string
  message: string
  data: any
  success: boolean
  fullName: string
  id: number
  name: string
  createdById: number
  createdByName: string
  username: string
  status: string
}

export interface GetAllDataApiSalesExecutve {
  fullName: string
  salesexecutiveName: string
  id: string
  name: string
  username: string
}
export interface GetAllDataApiSalesExecutve {
  data: GetAllDataApiSalesExecutve[]
  success: boolean
  message: string
}
export interface GetAllDataApi {
  data: GetAllData[]
  success: boolean
  message: string
}
export interface putInquiriesmodel {
  modifyby: any
  id: number
  userid: number
  formno: string
  formdate: string
  packageid: number
  userName: string
  formtype: string
  pacakgetype: string
  salesexecutiveid: number
  companyid: number
  packagecatid: number
  packagevalidity: number
  packagecost: number
  installationcost: number
  othercost: number
  discount: number
  gstamount: number
  totalamount: number
  cashamount: number
  chequeamount: number
  remaningamount: number
  bankid: number
  chequeno: string
  chequedate: string
  receiverid: number
  activationdate: string
  expirydate: string
  iptype: string
  note: string
  thirdparty: string
  remark: string
  status: string
  newAddress: any
}
export interface putInquiriesmodel1 {
  data: getInquiriesData
  message: string
  success: boolean
}

export interface roleIdInquiries {
  roleId: string
}

export interface GetAllInquiriesApi {
  data: getInquiriesData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  zoneId: number
  roleId: string
  searchByUsername: string
  statusId: number
  startDate: string
  endDate: string
  salesexecutiveName: string
}

export type ID = undefined | null | string

export type ViewForm = getInquiriesData | undefined
