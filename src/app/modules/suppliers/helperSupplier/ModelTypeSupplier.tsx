export interface getSuppliersData {
  fullName: string
  name: string
  createdAt: string
  createdby: string
  id: number
  modifyAt: string
  modifyby: string
  createdById: number
  createdByName: string
  username: string
  gstNo: string
}

export interface getAllSuppliersData {
  data: getSuppliersData[]
  message: string
  success: boolean
}
export interface postlistData {
  createdby: any
  name: string
  gstNo: string
}
export interface putSuppliersmodel {
  modifyby: any
  name: string
  gstNo: string
  id: number | string
}
export interface putSuppliermodel1 {
  data: getSuppliersData
  message: string
  success: boolean
}

export interface GetAllSuppliersApi {
  data: getSuppliersData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  createdById: number
  username: string
}

export type ID = undefined | null | string

export type ViewForm = getSuppliersData | undefined
