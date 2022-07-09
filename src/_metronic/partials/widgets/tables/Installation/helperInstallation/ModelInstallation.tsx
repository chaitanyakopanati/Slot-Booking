export interface getInstallationsData {
  name: string
  createdAt: string
  createdby: number
  id: number
  modifyAt: number
  modifyby: number
  roleName: string
  roleId: string
  createdById: number
  createdByName: string
  zoneId: number
  address: string
  contactno: string
  salesexecutiveName: string
  status: string
  statusId: number
  userName: string
  installerName: string
  connectionTypeId:number
  installerid:number
  zonepointid:number
}

export interface getAllInstallationsData {
  data: getInstallationsData[]
  message: string
  success: boolean
}
export interface postlistData {
  userName:string
  zonepointid:number
  connectiontype:string
  installerid:number
  cabletypeid:number
  cablelength:number
  iptype:string
  accesspointip:string
  stationip:string
  stationname:string
  stationMac:string
  status:string
  isnotifyinstaller:boolean
  remark:string
  userid:number
}

export interface GetAllData {
  fullName: string
  id: number
  name: string
  createdById: number
  createdByName: string
  userName: string
  status: string
  fullname:string
}

export interface GetAllDataApiSalesExecutve {
  fullName: string
  username: string
  salesexecutiveName: string
  id: string
  name: string
  userName: string
}
export interface GetAllDataApiSalesExecutve {
  data: GetAllDataApiSalesExecutve[]
  success: boolean
  message: string
}
export interface GetAllDataApi {
  data: GetAllData[]
  success: boolean
  message: string
}
export interface putInstallationsmodel {
  id: number
  connectiontype:string
  userName:string
  zonepointid:number
  installerid:number
  cabletypeid:number
  cablelength:number
  iptype:string
  accesspointip:string
  stationip:string
  stationname:string
  stationMac:string
  status:string
  isnotifyinstaller:boolean
  remark:string
  userid:number
  connectiontypeId:number
  iptypeId:number
  statusId:number
}
export interface putInstallationsmodel1 {
  data: getInstallationsData
  message: string
  success: boolean
}

export interface roleIdInstallations {
  roleId: string
}

export interface GetAllInstallationsApi {
  data: getInstallationsData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  zoneId: number
  roleId: string
  searchByUsername: string
  statusId: number
  startDate: string
  endDate: string
  salesexecutiveName: string
  connectionTypeId:number
  mainPointId:number
}

export type ID = undefined | null | string

export type USERNAME = undefined | null | string

export type ViewForm = getInstallationsData | undefined
