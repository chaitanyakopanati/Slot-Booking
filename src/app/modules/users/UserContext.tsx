import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Userservice from './helperUser/ApiDatarequestUser'
import {GetAllData, GetAllUserApi, getUserData, ID, ViewForm} from './helperUser/ModelUserType'
import {saveAs} from 'file-saver'
import axios from 'axios'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getUserData[]
  getDataDownload: getUserData[]
  getDataAllType: GetAllData[]
  getDataAllTypeCreatedBy: GetAllData[]
  getDataAllTypeRole: GetAllData[]
  filterShow: boolean
  showPasswordFields: boolean
  pageNo: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setRoleId: Dispatch<SetStateAction<string>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  zoneId: number
  roleId: string
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  setShowPasswordFields: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ID
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  searchByUsername: string
  orderByColumnName: string
  setSearchText: Dispatch<SetStateAction<string>>
  setSearchByUsername: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTyperole: () => void
  DataGetAllTypeCreatedByTypes: () => void
  fetchAllDownload: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataDownload: [],
  pageNo: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  setRoleId: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  totalData: 0,
  setTotalData: () => {},
  pageSize: 0,
  zoneId: 0,
  roleId: '',
  orderByColumnName: '',
  setPageSize: () => {},
  searchText: '',
  searchByUsername: '',
  setSearchText: () => {},
  setSearchByUsername: () => {},
  getDataAllType: [],
  getDataAllTypeCreatedBy: [],
  getDataAllTypeRole: [],
  filterShow: false,
  showPasswordFields: false,
  setFilterShow: (filterShow: boolean) => {},
  setShowPasswordFields: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => {},
  fetchAllUser: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTyperole: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
  fetchAllDownload: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getUserData[]>([])
  const [getDataDownload, setGetDataDownload] = useState<getUserData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<GetAllData[]>([])
  const [getDataAllTypeRole, setGetDataAllTypeRole] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ID>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalData, setTotalData] = useState<number>(100)
  const [pageCount, setPageCount] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [searchByUsername, setSearchByUsername] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [roleId, setRoleId] = useState('')
  const [orderByColumnName, setorderByColumnName] = useState('')
  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    LoderActions(true)
    try {
      let response: any = await Userservice.getDynamicDownloadFile(
        zoneId,
        roleId,
        createdById,
        searchText,
        searchByUsername
      )
      saveAs(response.data, 'users.xlsx')
      toast.success('Requested File Downloaded Successfully')
    } catch (error) {
      toast.error('Something went wrong Please try again ')
    } finally {
      LoderActions(false)
    }
  }

  {
    /* begin:: User:- getDynamicUser Api call */
  }
  let fetchAllUser = async () => {
    LoderActions(true)
    try {
      let response: GetAllUserApi = await Userservice.getDynamicUser(
        pageNo,
        pageSize,
        searchText,
        zoneId,
        roleId,
        searchByUsername,
        createdById,
        orderByColumnName
      )

      if (response.success == true) {
        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
        setTotalData(response.TotalRecords)
      } else {
        setGetData([])
        setPageCount(0)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* end:: User:- getDynamicUser Api call */
  }

  {
    /* begin:: User:- getZoneTypes Api call */
  }
  const DataGetAllTypeZone = async () => {
    try {
      let payload: GetAllData = await Userservice.getZoneTypes()

      if (payload.success == true) {
        setGetDataAllType(payload.data)
      }
    } catch (error) {
    } finally {
    }
  }
  {
    /* End:: User:- getZoneTypes Api call */
  }

  {
    /* begin:: User:- getroleTypes Api call */
  }
  const DataGetAllTyperole = async () => {
    try {
      let payload: GetAllData = await Userservice.getroleTypes()

      if (payload.success == true) {
        setGetDataAllTypeRole(payload.data)
      }
    } catch (error) {
    } finally {
    }
  }
  {
    /* End:: User:- getroleTypes Api call */
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    try {
      let payload: GetAllData = await Userservice.getCreatedByTypes()

      if (payload.success == true) {
        setGetDataAllTypeCreatedBy(payload.data)
      }
    } catch (error) {
    } finally {
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataDownload,
    fetchAllDownload,
    createdById,
    setCreatedById,
    searchByUsername,
    orderByColumnName,
    itemIdForUpdate,
    setShowPasswordFields,
    setItemIdForUpdate,
    filterShow,
    setFilterShow,
    DataGetAllTypeCreatedByTypes,
    viewIdForUpdate,
    setViewIdForUpdate,
    getDataAllType,
    getDataAllTypeCreatedBy,
    pageNo,
    roleId,
    showPasswordFields,
    pageSize,
    zoneId,
    setRoleId,
    setZoneId,
    searchText,
    setPageSize,
    setPageNo,
    pageCount,
    setPageCount,
    setSearchText,
    setSearchByUsername,
    fetchAllUser,
    DataGetAllTypeZone,
    DataGetAllTyperole,
    getDataAllTypeRole,
    totalData,
    setTotalData,
  }
  return (
    <>
      <ListDataContext.Provider value={value}>{children}</ListDataContext.Provider>
    </>
  )
}
function ListPageData() {
  return useContext(ListDataContext)
}

export {ListDataProvider, ListPageData}
