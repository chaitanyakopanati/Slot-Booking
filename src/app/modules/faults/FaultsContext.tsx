import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Fautlservice from './helperFaults/ApiDatarequest'
import {
  getFaultsData,
  ID,
  ViewForm,
  GetAllData,
  GetAllFaulttApi,
} from './helperFaults/ModelFaultsType'

export interface ComplaintDataContextModel {
  getData: getFaultsData[]
  getDataFaults: getFaultsData[]
  getDataAllTypeCreatedBy: getFaultsData[]
  getDataAllType: GetAllData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  pageCount: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  DataGetAllType: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllFault: () => void
  getDataFaultsAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataFaults: [],
  getDataAllTypeCreatedBy: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  pageSize: 0,
  totalData: 0,
  setTotalData: () => {},
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
  getDataAllType: [],
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetAllType: () => {},
  fetchAllFault: () => {},
  getDataFaultsAllType: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getFaultsData[]>([])
  const [getDataFaults, setGetDataFaults] = useState<getFaultsData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getFaultsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [pageCount, setPageCount] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(100)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')

  let {LoderActions} = useLoader()

  {
    /* begin:: Fault:- get Faults Type Api call */
  }
  const DataGetAllType = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Fautlservice.getFaultsTypes()
      //
      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllType(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* end:: Fault:- get Faults type Api call */
  }

  {
    /* begin:: Fault:- getDynamicFaults Api call */
  }
  let fetchAllFault = async () => {
    LoderActions(true)
    try {
      let response: GetAllFaulttApi = await Fautlservice.getDynamicFaults(
        pageNo,
        pageSize,
        searchText,
        createdById
      )

      if (response.success == true) {
        LoderActions(false)

        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
        setTotalData(response.TotalRecords)
      }
    } catch (error) {}
  }
  {
    /* end:: Fault:- getDynamicFaults Api call */
  }

  {
    /* begin:: Api call */
  }
  let getDataFaultsAllType = async () => {
    let response: GetAllFaulttApi = await Fautlservice.getFaults()

    setGetDataFaults(response.data)
  }
  {
    /* End:: Api call */
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllFaulttApi = await Fautlservice.getCreatedByTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeCreatedBy(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataFaultsAllType,
    getDataFaults,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
    createdById,
    setCreatedById,
    DataGetAllTypeCreatedByTypes,
    getDataAllTypeCreatedBy,
    setFilterShow,
    viewIdForUpdate,
    setViewIdForUpdate,
    DataGetAllType,
    getDataAllType,
    pageNo,
    pageSize,
    searchText,
    setPageSize,
    setPageNo,
    pageCount,
    setPageCount,
    totalData,
    setTotalData,
    setSearchText,
    fetchAllFault,
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
