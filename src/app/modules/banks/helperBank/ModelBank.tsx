export interface getBankData {
    fullName: string
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
  export interface getAllBankData {
    data: getBankData[]
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
  export interface putBankmodel {
    createdby: any
    modifyby: any
    name: string
    faulttypeid: number
    id: number | string
  }
  export interface putBankmodel1 {
    data: getBankData
    message: string
    success: boolean
  }
  
  export interface GetAllBankApi {
    data: getBankData[]
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
  
  export type ViewForm = getBankData | undefined
  