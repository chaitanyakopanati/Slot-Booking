
export interface getFaultsData {
  name: string
  createdAt: string
  createdby: null
  id: number
  faulttypeid: number
  faultTypeName: string
  modifyAt: null
  modifyby: null
}

export interface getAllFaultsData {
  data: getFaultsData[]
  message: string
  success: boolean
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
    data:GetAllData[]
    success:boolean
  message: string

  }
export interface putFaultsmodel {
  name: string
  faulttypeid: number
  id: number | string
}
export interface putcomplaintsmodel1 {
  data: getFaultsData
  message: string
  success: boolean
}

export interface GetAllFaulttApi {
  data: getFaultsData[]
  message: string
  success: boolean
  pages:number
  TotalRecords:number
  page:number
  pageSize:number
}

export type ID = undefined | null | string

export type ViewForm = getFaultsData | undefined
