export interface getOfficetockInwardsData {
  quantityDisplay: string
  inwardNo: number
  inwardDate: string
  productName: string
  quantity: string
  deliveredByName: string
  createdAt: string
  modifyById: number
  id: number
  faulttypeid: number
  faultTypeName: string
  modifyAt: string
  modifyby: string
  createdById: number
  createdByName: string
  modifyByName: string
  zoneName: string
  zoneid: number
  username: string
  name: string
  fullName: string
  serialno: string
  remark: string
  createdBy:number
}
export interface getAllOfficetockInwardsData {
  data: getOfficetockInwardsData[]
  message: string
  success: boolean
  page: number
  pageSize: number
  pages: number
}
export interface postlistData {
  inwardDate: string
  productId: number
  quantity: string
  deliveredById: number
  zoneId: number
  serialno: number
  remark: string
  id: number | string
  inwardNo: number | string
}

export interface GetAllData {
  fullName: string
  id: number
  name: string
}

export interface GetAllData {
  data: GetAllData[]
  success: boolean
  message: string
}
export interface putmodel {
  inwardDate: string
  productId: number
  quantity: string
  deliveredById: number
  zoneId: number
  serialno: number
  remark: string
  id:number
  inwardNo: number | string
}
export interface putOfficetockInwardsmodel1 {
  data: getOfficetockInwardsData
  message: string
  success: boolean
}

export interface GetAlLlOfficetockInwardsApi {
  data: getOfficetockInwardsData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  username: string
  startDate: number
  endDate: number
}

export type ID = undefined | null | string

export type ViewForm = getOfficetockInwardsData | undefined
