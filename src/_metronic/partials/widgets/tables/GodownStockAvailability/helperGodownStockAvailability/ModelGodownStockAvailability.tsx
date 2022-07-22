export interface getGodownstockavailabilitiesData {
  productName: string
  quantity: string
  createdAt: string
  modifyById: number
  id: number
  modifyAt: string
  modifyby: string
  createdById: number
  createdByName: string
  modifyByName: string
  zoneName: string
  zoneid: number
  serialno: string
  remark: string
  createdBy: number
  quantityDisplay:string
}
export interface getAllGodownstockavailabilitiesData {
  data: getGodownstockavailabilitiesData[]
  message: string
  success: boolean
  page: number
  pageSize: number
  pages: number
}

export interface GetAllData {
  id: number
  name: string
}

export interface GetAllData {
  data: GetAllData[]
  success: boolean
  message: string
}

export interface GetAlLlGodownstockavailabilitiesApi {
  data: getGodownstockavailabilitiesData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
}

export type ID = undefined | null | string

export type ViewForm = getGodownstockavailabilitiesData | undefined
