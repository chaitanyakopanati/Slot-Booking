import React, {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import { getCompaniesTypes, getCustomerList, getMainPoint, getUserByRoleName, getZoneTypes } from './helperCustomer/ApiDataRequest'
import {companiesTypes, companiesTypesApi, customerType, customerTypeApi, filterTable, mainPoinnTypesApi, mainPointType, userType, userTypesApi, zoneTypes, zoneTypesApi} from './helperCustomer/ModelCustomer'

export interface CustomerDataContextModel {
  fetchZone: () => void
  zoneType: zoneTypes[]
  filter:filterTable
  setFilter:Dispatch<SetStateAction<filterTable>>
  pageNo:number
  pageSize:number
  setPageNo:Dispatch<SetStateAction<number>>
  setPageSize:Dispatch<SetStateAction<number>>
  fetchCustomer:()=> void
  totalData:number
  customerTableData:customerType[]
  setPageCount:Dispatch<SetStateAction<number>>
  pageCount:number
  fetchCompanies:()=> void
  companies:companiesTypes[]
  createdBy:userType[]
  installer:userType[]
  salesExecutve:userType[]
  customer:userType[]
  fetchUserByRoleName:(value:string)=> void
  fetchMainPoint:()=> void
  mainPoint:mainPointType[]
}

let ListDataContext = createContext<CustomerDataContextModel>({
  fetchZone: () => {},
  zoneType: [],
  filter:{
    searchText:'',
    orderByColumnName:'firstName',
    sortColumnDir:'asc',
    installerId:'',
    salesExecutiveId:'',
    zoneId:'',
    companyId:'',
    mainPointId:'',
    connectionTypeId:'',
    userName:'',
    createdById:''
  },
  setFilter:(filterTable)=>{},
  pageNo:1,
  pageSize:5,
  setPageNo:(number)=>{},
  setPageSize:(number)=>{},
  fetchCustomer:()=>{},
  totalData:0,
  customerTableData:[],
  setPageCount:(number)=>{},
  pageCount:0,
  fetchCompanies:()=>{},
  companies:[],
  createdBy:[],
  installer:[],
  salesExecutve:[],
  fetchUserByRoleName:(string)=>{},
  fetchMainPoint:()=>{},
  mainPoint:[],
  customer:[]


})

const CustomerContext: FC = ({children}) => {
  const [zoneType, setZoneType] = useState<zoneTypes[]>([])
  const [filter, setFilter] = useState<filterTable>({
    searchText:'',
    orderByColumnName:'firstName',
    sortColumnDir:'asc',
    installerId:'',
    salesExecutiveId:'',
    zoneId:'',
    companyId:'',
    mainPointId:'',
    connectionTypeId:'',
    userName:'',
    createdById:''
  })
  const [customerTableData, setCustomerTableData] = useState<customerType[]>([])
  const [companies, setCompanies] = useState<companiesTypes[]>([])
  const [createdBy, setCreatedBy] = useState<userType[]>([])
  const [installer, setInstaller] = useState<userType[]>([])
  const [salesExecutve, setSalesExecutve] = useState<userType[]>([])
  const [mainPoint, setMainPoint] = useState<mainPointType[]>([])
  const [customer, setCustomer] = useState<userType[]>([])
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [totalData, setTotalData] = useState<number>(0)
  const [pageCount, setPageCount] = useState<number>(0)

  // fetch zone api
  let fetchZone = async () => {
    let response: zoneTypesApi = await getZoneTypes()
    if (response.success) {
      setZoneType(response.data)
    }
  }

  let fetchCustomer = async() =>{
    let response:customerTypeApi = await getCustomerList(filter)
    if(response.success){
      setTotalData(response.TotalRecords)
      setCustomerTableData(response.data)
    }
  }

  let fetchCompanies = async()=>{
    let response:companiesTypesApi = await getCompaniesTypes()
    if(response.success){
      setCompanies(response.data)
    }
  }

  let fetchUserByRoleName = async(rolename:string)=>{
    let response:userTypesApi = await getUserByRoleName(rolename)
    if(response.success){
      if(rolename==='Admin'){
        setCreatedBy(response.data)
        return
      }
      if(rolename==='Technician'){
        setInstaller(response.data)
        return
      }
      if(rolename==='SalesExecutve'){
        setSalesExecutve(response.data)
        return
      }
      if(rolename==='Customer'){
        setCustomer(response.data)
        return
      }
    }
  }


  let fetchMainPoint = async()=>{
    let response:mainPoinnTypesApi = await getMainPoint()
    if(response.success){
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
    customer
  }

  return <ListDataContext.Provider value={value}>{children}</ListDataContext.Provider>
}

function ListPageData() {
  return useContext(ListDataContext)
}

export {CustomerContext, ListPageData}
