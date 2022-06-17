export interface getUserData {
  name: string
  createdAt: string
  createdby: null
  id: number
  faulttypeid: number
  faultTypeName: string
  modifyAt: null
  modifyby: null
  username: string
  email: string
  phone: number
  zoneName: string
  roleName: string
  firstname: string
  lastname: string
  roleId:number
}

export interface getAllUserData {
  data: getUserData[]
  message: string
  success: boolean
}
export interface postlistData {
  name: string
  zoneId: number
  roleId:number

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
export interface putUsersmodel {
  name: string
  zoneId: number
  roleId:number

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

export type username = undefined | null | string

export type ViewForm = getUserData | undefined
