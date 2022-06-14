
export interface getPackageCategoriesData {
    name: string,
    etr: number ,
    createdAt: string
    createdby: string
    id: number
    modifyAt: string
    modifyby: string
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
}

export type ID = undefined | null | string 


export type ViewForm = getPackageCategoriesData | undefined

