export interface getOfficeStockInwardsData {
  quantityDisplay: string
  name: string
  createdAt: string
  createdby: number
  id: number
  faulttypeid: number
  faultTypeName: string
  modifyAt: number
  modifyby: number
  username: string
  email: string
  phone: string
  zoneName: string
  roleName: string
  firstname: string
  lastname: string
  roleId: string
  zoneId: number
  technician: string
  inwardDate: string
  productName: string
  quantity: number
  deliveredByName: string
  modifyById: number
  createdById: number
  createdByName: string
  modifyByName: string
  zoneid: number
  fullName: string
  serialno: string
  remark: string
  createdBy: number
  inwardNo: number
}

export interface getAllOfficeStockInwardsData {
  data: getOfficeStockInwardsData[]
  message: string
  success: boolean
}
export interface postlistData {
  createdbyId: any
  productId: number
  quantity: number
  zoneId: number
  serialno: number
  remark: string
  id: number
  outwardDate: string
  technicianId: number
  userid: number
  reason: string
  username: string
  inwardNo: number
  inwardDate: string
  deliveredById: number
}

export interface GetAllData {
  fullName: string
  id: number
  name: string
  createdById: number
  createdByName: string
  username: string
  firstname: string
}

export interface GetAllData {
  data: GetAllData[]
  success: boolean
  message: string
}
export interface putUsersmodel {
  modifyById: any
  productId: number
  quantity: number
  zoneId: number
  serialno: number
  remark: string
  id: number
  outwardDate: string
  technicianId: number
  userid: number
  reason: string
  username: string
  inwardNo: number
  inwardDate: string
  deliveredById: number
}
export interface putUsermodel1 {
  data: getOfficeStockInwardsData
  message: string
  success: boolean
}

export interface GetAllOfficeStockInwardsApi {
  data: getOfficeStockInwardsData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  zoneId: number
  roleId: string
  searchByUsername: string
}

export type ID = undefined | null | string

export type username = undefined | null | string

export type ViewForm = getOfficeStockInwardsData | undefined
