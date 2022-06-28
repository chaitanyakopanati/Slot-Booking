
export interface getComplainData {
    createdByName: string
    name: string,
    etr: number ,
    createdAt: string
    createdby: string
    id: number
    modifyAt: string
    modifyby: string
    createdById:number
    username:string
}

export interface getAllComplainData {
    data: getComplainData[]
    message: string
    success: boolean
}
export interface postlistData {
    name: string,
    etr: number
}
export interface putcomplaintsmodel {
    name: string,
    etr: number,
    id: number | string,
}
export interface putcomplaintsmodel1 {
    data: getComplainData
    message: string
    success: boolean
  
}

export interface GetAllComplaintApi {
    data: getComplainData[]
    message: string
    success: boolean
    pages:number
    TotalRecords:number
    page:number
    pageSize:number
    createdById:number
    username:string
}

export type ID = undefined | null | string 


export type ViewForm = getComplainData | undefined

