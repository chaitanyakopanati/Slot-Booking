export interface getUserData {
  name: string
  createdAt: string
  createdby: number
  id: number
  faulttypeid: number
  faultTypeName: string
  modifyAt: number
  modifyby: number
  username: string
  email: string
  phone: string
  zoneName: string
  roleName: string
  firstname: string
  lastname: string
  roleId: string
  fullName: string
  createdById: number
  createdByName: string
  zoneId: number
}

export interface getAllUserData {
  data: getUserData[]
  message: string
  success: boolean
}
export interface postlistData {
  name: string
  zoneId: number
  roleId: string
  firstname: string
  lastname: string
  username: string
  email: string
  phone: string
  password: string
}

export interface GetAllData {
  id: number
  name: string
  createdById: number
  createdByName: string
}

export interface GetAllData {
  data: GetAllData[]
  success: boolean
  message: string
}
export interface putUsersmodel {
  name: string
  zoneId: number 
  roleId: string
  firstname: string
  lastname: string
  username: string
  email: string
  phone: string
  password: string
  id: number | string
  createdById: number
  createdByName: string
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
  zoneId: number 
  roleId: string
  searchByUsername: string
}

export type ID = undefined | null | string

export type username = undefined | null | string

export type ViewForm = getUserData | undefined
