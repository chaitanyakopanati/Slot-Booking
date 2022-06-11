export interface getMainPointData {
  name: string
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
}
export interface getAllMainPointData {
  data: getMainPointData[]
  message: string
  success: boolean
  page: number
  pageSize: number
  pages: number
}
export interface postlistData {
  name: string
  zoneName: string
  faulttypeid: number
  zoneid: number
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
export interface putMainPointmodel {
  name: string
  zoneid: number
  zoneName: string
  id: number | string
  faulttypeid: number
}
export interface putMainPointmodel1 {
  data: getMainPointData
  message: string
  success: boolean
}

export interface GetAllMainPointApi {
  data: getMainPointData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
}

export type ID = undefined | null | string

export type ViewForm = getMainPointData | undefined
