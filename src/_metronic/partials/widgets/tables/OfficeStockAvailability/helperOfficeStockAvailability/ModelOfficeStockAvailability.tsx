export interface getOfficetockAvailabilityData {
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
export interface getAllOfficetockAvailabilitData {
  data: getOfficetockAvailabilityData[]
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

export interface GetAlLlOfficetockAvailabilitApi {
  data: getOfficetockAvailabilityData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
}

export type ID = undefined | null | string

export type ViewForm = getOfficetockAvailabilityData | undefined
