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
}

export interface getAllInquiriesData {
  data: getInquiriesData[]
  message: string
  success: boolean
}
export interface postlistData {
  createdbyId: any
  name: string
  address: string
  contactno: string
  statusId: number
  salesexecutiveId: number
  description: string
  remark: string
  isnotify: boolean
  salesexecutiveName: string
  area: string
  userId: number
  ResidencyName: string
  OfficeNoHomeNo: string
}

export interface GetAllData {
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
  salesexecutiveName: string
  id: string
  name: string
  username: string
  fullName: string
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
  modifybyId: any
  id: number
  name: string
  address: string
  contactno: string
  statusId: number
  salesexecutiveId: number
  description: string
  remark: string
  isnotify: boolean
  salesexecutiveName: string
  area: string
  userId: number
  ResidencyName: string
  OfficeNoHomeNo: string
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
