export interface getPackagesData {
    name: string
    createdAt: string
    modifyById: null
    id: number
    faulttypeid: number
    faultTypeName: string
    modifyAt: null
    modifyby: null
    createdById: number
    createdByName: string
    modifyByName: string
    username:string
  }
  export interface getAllPackagesData {
    data: getPackagesData[]
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
  export interface putPackagesmodel {
    name: string
    faulttypeid: number
    id: number | string
  }
  export interface putPackagesmodel1 {
    data: getPackagesData
    message: string
    success: boolean
  }
  
  export interface GetAllPackagesApi {
    data: getPackagesData[]
    message: string
    success: boolean
    pages: number
    TotalRecords: number
    page: number
    pageSize: number
    createdById:number
    username:string
  }
  
  export type ID = undefined | null | string
  
  export type ViewForm = getPackagesData | undefined
  