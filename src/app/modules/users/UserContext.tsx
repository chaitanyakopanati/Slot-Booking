import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Userservice from './helperUser/ApiDatarequestUser'
import {GetAllData, GetAllUserApi, getUserData, ID, ViewForm} from './helperUser/ModelUserType'

export interface ComplaintDataContextModel {
  getData: getUserData[]
  getDataAllType: GetAllData[]
  getDataAllTypeRole: GetAllData[]
  filterShow: boolean
  pageNo: number
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
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  searchByUsername: string
  setSearchText: Dispatch<SetStateAction<string>>
  setSearchByUsername: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTyperole: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  setRoleId: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  pageSize: 0,
  zoneId: 0,
  roleId: '',
  setPageSize: () => {},
  searchText: '',
  searchByUsername: '',
  setSearchText: () => {},
  setSearchByUsername: () => {},
  getDataAllType: [],
  getDataAllTypeRole: [],
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  fetchAllUser: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTyperole: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getUserData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeRole, setGetDataAllTypeRole] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [searchByUsername, setSearchByUsername] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [roleId, setRoleId] = useState('')
  let {LoderActions} = useLoader()

  {
    /* begin:: Fault:- get Faults Type Api call */
  }
  // const DataGetAllType = async () => {
  //   LoderActions(true)
  //   try {
  //     let payload: GetAllData = await Userservice.getFaultsTypes()
  //     //
  //     if (payload.success == true) {
  //       setGetDataAllType(payload.data)
  //     }
  //   } catch (error) {
  //   } finally {
  //     LoderActions(false)
  //   }
  // }
  {
    /* end:: Fault:- get Faults type Api call */
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
        createdById
      )
      console.log(response, 'response=========')

      if (response.success == true) {
        setGetData(response.data)
        LoderActions(false)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
      }
    } catch (error) {}
  }
  {
    /* end:: User:- getDynamicUser Api call */
  }

  {
    /* begin:: User:- getZoneTypes Api call */
  }
  const DataGetAllTypeZone = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Userservice.getZoneTypes()

      if (payload.success == true) {
        LoderActions(false)
        console.log(payload,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
        
        setGetDataAllType(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: User:- getZoneTypes Api call */
  }

  {
    /* begin:: User:- getroleTypes Api call */
  }
  const DataGetAllTyperole = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Userservice.getroleTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeRole(payload.data)
        console.log(payload.data,'oooooooooooo');
        
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: User:- getroleTypes Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    createdById,
    setCreatedById,
    searchByUsername,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
    setFilterShow,
    viewIdForUpdate,
    setViewIdForUpdate,
    getDataAllType,
    pageNo,
    roleId,
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
