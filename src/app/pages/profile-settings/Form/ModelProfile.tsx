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

export interface editPasswordmodel {
  userName: string
  password: string
}

export type ID = undefined | null | string

export type username = undefined | null | string
