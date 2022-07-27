export interface zoneTypes {
  name: string
  modifyByName: string
  modifyById: any
  modifyAt: string
  id: number
  createdByName: string
  createdById: number
  createdAt: string
}

export interface zoneTypesApi {
  data: zoneTypes[]
  message: string
  success: boolean
}

export interface customerFormType {
  Id?: number | null | undefined
  UserName: string
  FirstName: string
  LastName: string
  Email: string
  MobileNo: string
  Middlename: string
  CompanyName: string
  Userid: number | string
  ZoneId: number | ''
  Gstno: string
  Contactno: string
  Address: string
  Remark: string
  Description: string
  IdproofImageFile: any
  AddressproofImageFile: FileList | ''
  GstcerificateImageFile: FileList | ''
  CreatedBy: number | ''
  ModifyBy: number | ''
  IsMasterUser: boolean
}

export interface filterTable {
  searchText: string
  orderByColumnName: string
  sortColumnDir: 'asc' | 'desc'
  installerId: number | ''
  salesExecutiveId: number | ''
  zoneId: number | ''
  companyId: number | ''
  mainPointId: number | ''
  connectionTypeId: number | ''
  userName: string
  createdById: number | ''
  // pageNo: number | ''
  // pageSize: number | ''
}

export interface customerType {
  address: string
  addressproofImage: string
  companyName: any
  connectionType: number
  contactno: any
  createdAt: string
  createdById: any
  createdby: string
  email: string
  firstName: string
  gstcerificateImage: string
  gstno: string
  id: number
  idproofImage: any
  installerId: number
  lastName: string
  mainPointId: number
  middlename: string
  mobileNo: string
  modifyAt: string
  modifyById: any
  modifyby: string
  name: string
  remark: any
  salesExecutiveId: any
  userName: string
  userid: number
  zoneId: number
  packageName: string
  expiryDate: string
}

export interface customerTypeApi {
  TotalRecords: number
  data: customerType[]
  message: string
  page: number
  pageSize: number
  pages: number
  success: boolean
}

export interface companiesTypes {
  id: number
  name: string
  createdAt: string
  createdByName: string
  createdById: number
  modifyAt: any
  modifyByName: string
  modifyById: number
}

export interface companiesTypesApi {
  data: companiesTypes[]
  message: string
  success: boolean
}

export interface userType {
  id: number
  fullName: string
  firstname: string
  lastname: string
  username: string
  role: string
  email: string
  phone: string
  zoneId: number
  zoneName: string
}

export interface userTypesApi {
  data: userType[]
  message: string
  success: boolean
}

export interface mainPointType {
  id: number
  name: string
  zoneName: string
  zoneid: number
  createdAt: string
  createdByName: string
  createdById: number
  modifyAt: string
  modifyByName: string
  modifyById: number
}

export interface mainPoinnTypesApi {
  data: mainPointType[]
  message: string
  success: boolean
}

export let formInitialValues: customerFormType = {
  Id: null,
  UserName: '',
  FirstName: '',
  LastName: '',
  Email: '',
  MobileNo: '',
  Middlename: '',
  CompanyName: '',
  Userid: '',
  ZoneId: '',
  Gstno: '',
  Contactno: '',
  Address: '',
  Remark: '',
  Description: '',
  IdproofImageFile: '',
  AddressproofImageFile: '',
  GstcerificateImageFile: '',
  CreatedBy: '',
  ModifyBy: '',
  IsMasterUser: false,
}

export type ID = undefined | null | string
