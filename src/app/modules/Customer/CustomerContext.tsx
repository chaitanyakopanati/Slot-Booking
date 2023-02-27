import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import {
  getCompaniesTypes,
  getCustomerList,
  getMainPoint,
  getUserByRoleName,
  getZoneTypes,
} from './helperCustomer/ApiDataRequest'
import {
  companiesTypes,
  companiesTypesApi,
  customerType,
  customerTypeApi,
  filterTable,
  mainPoinnTypesApi,
  mainPointType,
  userType,
  userTypesApi,
  zoneTypes,
  zoneTypesApi,
  ID,
} from './helperCustomer/ModelCustomer'
import { useLoader } from '../loader/LoaderContext'


export interface CustomerDataContextModel {
  fetchZone: () => void
  zoneType: zoneTypes[]
  filter: filterTable
  setFilter: Dispatch<SetStateAction<filterTable>>
  pageNo: number
  pageSize: number
  setPageNo: Dispatch<SetStateAction<number>>
  setPageSize: Dispatch<SetStateAction<number>>
  fetchCustomer: () => void
  totalData: number
  customerTableData: customerType[]
  setPageCount: Dispatch<SetStateAction<number>>
  pageCount: number
  fetchCompanies: () => void
  companies: companiesTypes[]
  createdBy: userType[]
  installer: userType[]
  salesExecutve: userType[]
  customer: userType[]
  fetchUserByRoleName: (value: string) => void
  fetchMainPoint: () => void
  fetchUsetByRoleNameWithSearch: (text: string) => void
  mainPoint: mainPointType[]
  viewIdForUpdate: ID
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => void
  itemIdForUpdate: ID
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  setCustomerTableData: Dispatch<SetStateAction<any>>
  setDueDate: Dispatch<SetStateAction<any>>
  dueDate: any
}

let ListDataContext = createContext<CustomerDataContextModel>({
  fetchZone: () => { },
  zoneType: [],
  filter: {
    searchText: '',
    installerId: '',
    salesExecutiveId: '',
    zoneId: '',
    companyId: '',
    mainPointId: '',
    connectionTypeId: '',
    userName: '',
    createdById: '',
    dueDate: '',
    orderByColumnName: 'createdAt',
    sortColumnDir: 'desc',
  },
  setFilter: (filterTable) => { },
  pageNo: 1,
  pageSize: 10,
  setPageNo: (number) => { },
  setPageSize: (number) => { },
  fetchCustomer: () => { },
  totalData: 0,
  customerTableData: [],
  setPageCount: (number) => { },
  pageCount: 0,
  fetchCompanies: () => { },
  companies: [],
  createdBy: [],
  installer: [],
  salesExecutve: [],
  fetchUserByRoleName: (string) => { },
  fetchMainPoint: () => { },
  mainPoint: [],
  customer: [],
  fetchUsetByRoleNameWithSearch: (string) => { },
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => { },
  setItemIdForUpdate: (_itemIdForUpdate: ID) => { },
  itemIdForUpdate: undefined,
  setCustomerTableData: () => { },
  dueDate: 0,
  setDueDate: () => { },
})

const CustomerContext: FC = ({ children }) => {
  const [zoneType, setZoneType] = useState<zoneTypes[]>([])
  const [filter, setFilter] = useState<filterTable>({
    searchText: '',
    installerId: '',
    salesExecutiveId: '',
    zoneId: '',
    companyId: '',
    mainPointId: '',
    connectionTypeId: '',
    userName: '',
    createdById: '',
    dueDate: '',
    orderByColumnName: 'createdAt',
    sortColumnDir: 'desc',
  })
  const [customerTableData, setCustomerTableData] = useState<customerType[]>([])
  const [companies, setCompanies] = useState<companiesTypes[]>([])
  const [createdBy, setCreatedBy] = useState<userType[]>([])
  const [installer, setInstaller] = useState<userType[]>([])
  const [salesExecutve, setSalesExecutve] = useState<userType[]>([])
  const [mainPoint, setMainPoint] = useState<mainPointType[]>([])
  const [customer, setCustomer] = useState<userType[]>([])
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalData, setTotalData] = useState<number>(0)
  const [pageCount, setPageCount] = useState<number>(0)
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [dueDate, setDueDate] = useState(null)

  const [viewIdForUpdate, setViewIdForUpdate] = useState<ID>(undefined)
  let { LoderActions } = useLoader()

  // fetch zone api
  let fetchZone = async () => {
    let response: zoneTypesApi = await getZoneTypes()
    if (response.success) {
      setZoneType(response.data)
    }
  }

  let fetchCustomer = async () => {
    try{
    LoderActions(true)
    let response: customerTypeApi = await getCustomerList(filter, pageNo, pageSize)
    if (response.success == true) {
      setCustomerTableData(response.data)
      const PageCout = response?.pages

      setPageCount(Math.floor(PageCout))
      setTotalData(response.TotalRecords)

    } else {
      setCustomerTableData([])
      setPageCount(0)
    }
  }catch(err){}
  finally{
    console.log("************");
    
    LoderActions(false)

  }
  }

  let fetchCompanies = async () => {
    let response: companiesTypesApi = await getCompaniesTypes()
    if (response.success) {
      setCompanies(response.data)
    }
  }

  let fetchUsetByRoleNameWithSearch = async (searchText: string) => {
    let response: userTypesApi = await getUserByRoleName('Customer', searchText)
    if (response.success) {
      setCustomer(response.data)
    }
  }

  let fetchUserByRoleName = async (rolename: string) => {
    let response: userTypesApi = await getUserByRoleName(rolename)
    if (response.success) {
      if (rolename === 'Admin') {
        setCreatedBy(response.data)
        return
      }
      if (rolename === 'Technician') {
        setInstaller(response.data)
        return
      }
      if (rolename === 'SalesExecutve') {
        setSalesExecutve(response.data)
        return
      }
    }
  }

  let fetchMainPoint = async () => {
    let response: mainPoinnTypesApi = await getMainPoint()
    if (response.success) {
      setMainPoint(response.data)
    }
  }
  // provider value
  const value: CustomerDataContextModel = {
    fetchZone,
    zoneType,
    filter,
    setFilter,
    pageNo,
    setPageNo,
    pageSize,
    setPageSize,
    fetchCustomer,
    totalData,
    customerTableData,
    pageCount,
    setPageCount,
    fetchCompanies,
    companies,
    createdBy,
    installer,
    salesExecutve,
    fetchUserByRoleName,
    fetchMainPoint,
    mainPoint,
    customer,
    fetchUsetByRoleNameWithSearch,
    viewIdForUpdate,
    setViewIdForUpdate,
    setItemIdForUpdate,
    itemIdForUpdate,
    setCustomerTableData,
    dueDate,
    setDueDate,
  }

  return <ListDataContext.Provider value={value}>{children}</ListDataContext.Provider>
}

function ListPageData() {
  return useContext(ListDataContext)
}

export { CustomerContext, ListPageData }
