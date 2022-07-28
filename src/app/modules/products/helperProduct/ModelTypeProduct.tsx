export interface getProductData {
  fullName: string
  name: string
  createdAt: string
  createdby: string
  id: number
  modifyAt: string
  modifyby: string
  unit: string
  createdById: number
  createdByName: string
  username:string
}

export interface getAllProductData {
  data: getProductData[]
  message: string
  success: boolean
}
export interface postlistData {
  createdby: any
  name: string
  unit: string
}

export interface putProductmodel {
  modifyby: any
  name: string
  unit: string
  id: number | string
}
export interface putProductmodel1 {
  data: getProductData
  message: string
  success: boolean
}

export interface GetAllProductApi {
  data: getProductData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  createdById: number
  username:string
}

export type ID = undefined | null | string

export type ViewForm = getProductData | undefined
