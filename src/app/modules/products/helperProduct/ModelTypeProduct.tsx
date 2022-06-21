export interface getProductData {
  name: string
  createdAt: string
  createdby: string
  id: number
  modifyAt: string
  modifyby: string
  unit: string
  createdById: number
  createdByName: string
}

export interface getAllProductData {
  data: getProductData[]
  message: string
  success: boolean
}
export interface postlistData {
  name: string
  unit: string
}

export interface putProductmodel {
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
}

export type ID = undefined | null | string

export type ViewForm = getProductData | undefined
