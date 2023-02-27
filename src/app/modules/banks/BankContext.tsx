import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Zoneservice from './helperBank/ApiDatarequest'
import {GetAllBankApi, GetAllData, getBankData, ID, ViewForm} from './helperBank/ModelBank'

export interface ComplaintDataContextModel {
  getData: getBankData[]
  getDataBankType: getBankData[]
  getDataAllTypeCreatedBy: getBankData[]
  getDataAllType: GetAllData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  setTotalData: Dispatch<SetStateAction<number>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  totalData: number
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllBank: () => void
  getDataBankAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataBankType: [],
  getDataAllTypeCreatedBy: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  totalData: 0,
  createdById: 0,
  setPageCount: () => {},
  setTotalData: () => {},
  setCreatedById: () => {},
  pageSize: 0,
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
  fetchAllBank: () => {},
  getDataBankAllType: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getBankData[]>([])
  const [getDataBankType, setgetDataBankType] = useState<getBankData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getBankData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalData, setTotalData] = useState<number>(100)
  const [pageCount, setPageCount] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  let {LoderActions} = useLoader()

  {
    /* begin:: Bank:- getDynamicBank Api call */
  }
  let fetchAllBank = async () => {    
    LoderActions(true)
    try {
      let response: GetAllBankApi = await Zoneservice.getDynamicBank(
        pageNo,
        pageSize,
        searchText,
        createdById
      )

      if (response.success == true) {
        setTotalData(response.TotalRecords)
        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
      }
    } catch (error) {
    }finally{
      LoderActions(false)
    }
  }
  {
    /* end:: Bank:- getDynamicBank Api call */
  }

  {
    /* begin::Get Api Call*/
  }
  let getDataBankAllType = async () => {
    let response: GetAllBankApi = await Zoneservice.getBank()
    setgetDataBankType(response.data)
  }
  {
    /* End::Get Api Call*/
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    try {
      let payload: GetAllBankApi = await Zoneservice.getCreatedByTypes()

      if (payload.success == true) {
        setGetDataAllTypeCreatedBy(payload.data)
      }
    } catch (error) {
    } finally {
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataBankAllType,
    getDataBankType,
    itemIdForUpdate,
    setTotalData,
    DataGetAllTypeCreatedByTypes,
    setItemIdForUpdate,
    filterShow,
    getDataAllTypeCreatedBy,
    setFilterShow,
    totalData,
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
    fetchAllBank,
    createdById,
    setCreatedById,
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
