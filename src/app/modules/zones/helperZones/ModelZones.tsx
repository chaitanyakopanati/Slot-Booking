export interface getZoneData {
  name: string
  createdAt: string
  modifyById: null
  id: number
  faulttypeid: number
  faultTypeName: string
  modifyAt: null
  modifyby: null
  createdById: null
  createdByName: string
  modifyByName: string
 
}
export interface getAllZoneData {
  data: getZoneData[]
  message: string
  success: boolean
  page: number
  pageSize: number
  pages: number
}
export interface postlistData {
  name: string
  faulttypeid: number
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
export interface putZonemodel {
  name: string
  faulttypeid: number
  id: number | string
}
export interface putZonemodel1 {
  data: getZoneData
  message: string
  success: boolean
}

export interface GetAllFaulttApi {
  data: getZoneData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
}

export type ID = undefined | null | string

export type ViewForm = getZoneData | undefined
