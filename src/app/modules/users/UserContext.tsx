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
  pageCount: number
  setPageCount: Dispatch<SetStateAction<number>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTyperole: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  setPageCount: () => {},
  pageSize: 0,
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
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
  const [searchText, setSearchText] = useState('')
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
    /* begin:: Fault:- getDynamicFaults Api call */
  }
  let fetchAllUser = async () => {
    LoderActions(true)
    try {
      let response: GetAllUserApi = await Userservice.getDynamicUser(pageNo, pageSize, searchText)
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
    /* end:: Fault:- getDynamicFaults Api call */
  }

  const DataGetAllTypeZone = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Userservice.getZoneTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllType(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const DataGetAllTyperole = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Userservice.getroleTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeRole(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
    setFilterShow,
    viewIdForUpdate,
    setViewIdForUpdate,
    getDataAllType,
    pageNo,
    pageSize,
    searchText,
    setPageSize,
    setPageNo,
    pageCount,
    setPageCount,
    setSearchText,
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
