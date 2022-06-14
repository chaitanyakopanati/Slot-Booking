import {createContext, FC, useContext, useState, SetStateAction, Dispatch} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Userservice from './helperUser/ApiDatarequestUser'
import {getAllUserData, GetAllUserApi, getUserData, ID, ViewForm} from './helperUser/ModelTypeUser'

export interface ComplaintDataContextModel {
  getData: getUserData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  lastIndex: number
  setLastIndex: Dispatch<SetStateAction<number>>
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  pageCount: number
  setPageCount: Dispatch<SetStateAction<number>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  DataGetApiUser: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  setPageNo: () => {},
  totalData: 0,
  setTotalData: () => {},
  lastIndex: 0,
  setLastIndex: () => {},
  pageCount: 0,
  setPageCount: () => {},
  pageSize: 0,
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
  fetchAllUser: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApiUser: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getUserData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState<number>(100)
  const [lastIndex, setLastIndex] = useState<number>(0)
  let {LoderActions, open} = useLoader()

  {
    /* begin:: DataGetApi */
  }
  const DataGetApiUser = async () => {
    LoderActions(true)
    try {
      let payload: getAllUserData = await Userservice.getUser()
      console.log(payload, 'payload')
      if (payload.success == true) {
        console.log(payload)
        // setGetData(payload.data)
      }
    } catch (error) {
      console.log(error, 'error')
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: DataGetApi */
  }

  let fetchAllUser = async () => {
    // setLoading(true)
    try {
      let response: GetAllUserApi = await Userservice.getDynamicUser(pageNo, pageSize, searchText)
      console.log(response, 'response=========Allll')
      if (response.success == true) {
        console.log(response)
        setGetData(response.data)
        setPageCount(response?.pages)
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApiUser,
    filterShow,
    pageNo,
    pageSize,
    searchText,
    setSearchText,
    fetchAllUser,
    setPageSize,
    setPageNo,
    setFilterShow,
    pageCount,
    setPageCount,
    lastIndex,
    setLastIndex,
    totalData,
    setTotalData,
    viewIdForUpdate,
    setViewIdForUpdate,
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
