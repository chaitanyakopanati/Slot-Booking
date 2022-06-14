export interface getUserData {
  name: string
  etr: number
  createdAt: string
  createdby: string
  id: number
  modifyAt: string
  modifyby: string
  username: string
  email: string
  phone:number
  zoneName:number
  roleName:string
  profileimage:string
  roleId:number
  status:string
}

export interface getAllUserData {
  data: getUserData[]
  message: string
  success: boolean
}
export interface postlistData {
  name: string
  etr: number
}
export interface putUsermodel {
  name: string
  etr: number
  id: number | string
}
export interface putUsermodel1 {
  data: getUserData
  message: string
  success: boolean
}

export interface GetAllUserApi {
  data: getUserData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
}

export type ID = undefined | null | string

export type ViewForm = getUserData | undefined
