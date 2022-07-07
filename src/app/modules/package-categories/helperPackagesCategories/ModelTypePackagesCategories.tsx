
export interface getPackageCategoriesData {
    fullName:string
    name: string,
    etr: number ,
    createdAt: string
    createdby: string
    id: number
    modifyAt: string
    modifyby: string
    createdById:number
    createdByName:string
    username:string
}

export interface getAllPackagecategoriesData {
    data: getPackageCategoriesData[]
    message: string
    success: boolean
}
export interface postlistData {
    name: string,
    etr: number
}
export interface putPackagecategoriesmodel {
    name: string,
    etr: number,
    id: number | string,
}
export interface putPackagecategoriemodel1 {
    data: getPackageCategoriesData
    message: string
    success: boolean
  
}

export interface GetAllPackagecategorietApi {
    data: getPackageCategoriesData[]
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


export type ViewForm = getPackageCategoriesData | undefined

