import React from 'react'

export interface getComplaintsData {
  address: string
  assignToId: number
  assignTechnicianName: string
  complaintTypeId: number
  complaintTypeName: string
  createByName: string
  createdByUserId: number
  createdDate: string
  description: string
  faultId: number
  faultName: string
  id: number
  isnotifycustomer: boolean
  isnotifytechinician: boolean
  name: string
  packageCategorieId: number
  packageCategorieName: string
  remark: string
  statusId: number
  statusName: string
  userId: number
  username: string
  zoneId: number
  zoneName: string
  pageSize: any
}

export interface getAllgetComplaintsDataData {
  data: getComplaintsData[]
  message: string
  success: boolean
  pageSize: any
}
export interface postlistData {
  id: number
  complainttypeid: number
  username: string
  description: string
  status: number
  remark: string
  assigntechnicianid: number
  faultid: number
  isnotifycustomer: boolean
  isnotifytechinician: boolean
  userId: number
  ModifyBy: number
  CreatedBy: number
}

export interface GetAllData {
  fullName: string
  id: number
  name: string
  createdById: number
  createdByName: string
  username: string
  firstname: string
}

export interface GetAllData {
  data: GetAllData[]
  success: boolean
  message: string
}
export interface putgetComplaintsDatasmodel {
  zoneId: number
  remark: string
  id: number
  technicianId: number
  userId: number
  reason: string
  username: string
}
export interface putgetComplaintsDatamodel1 {
  data: getComplaintsData
  message: string
  success: boolean
}

export interface GetAllgetComplaintsDataApi {
  data: getComplaintsData[]
  message: string
  success: boolean
  pages: number
  TotalRecords: number
  page: number
  pageSize: number
  zoneId: number
  roleId: string
  searchByUsername: string
  complainttypeid: number
}

export interface getUserData {
  name: string
  createdAt: string
  createdby: number
  id: number
  faulttypeid: number
  faultTypeName: string
  username: string
  phone: string
  zoneName: string
  roleName: string
  firstname: string
  lastname: string
  roleId: string
  zoneId: number
  technician: string
  createdById: number
  createdByName: string
  modifyByName: string
  zoneid: number
  fullName: string
  remark: string
  createdBy: number
}

export type ID = undefined | null | string

export type username = undefined | null | string

export type ViewForm = getComplaintsData | undefined
