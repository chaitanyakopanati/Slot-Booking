import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Zoneservice from './helperCompanies/ApiDatarequest'
import {
  GetAllData,
  GetAllComapniesApi,
  getCompaniesData,
  ID,
  ViewForm,
} from './helperCompanies/ModelCompanies'

export interface ComplaintDataContextModel {
  getData: getCompaniesData[]
  getDataAllTypeCreatedBy: getCompaniesData[]
  getDataCompanies: getCompaniesData[]
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
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllCompanies: () => void
  getDataCompaniesAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataCompanies: [],
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
  fetchAllCompanies: () => {},
  getDataCompaniesAllType: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getCompaniesData[]>([])
  const [getDataCompanies, setGetDataCompanies] = useState<getCompaniesData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getCompaniesData[]>([])
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
    /* begin:: Company:- getDynamicCompanies Api call */
  }
  let fetchAllCompanies = async () => {
    LoderActions(true)
    try {
      let response: GetAllComapniesApi = await Zoneservice.getDynamicCompanies(
        pageNo,
        pageSize,
        searchText,
        createdById
      )
      LoderActions(true)
      if (response.success == true) {
        LoderActions(false)

        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
        setTotalData(response.TotalRecords)
      }
    } catch (error) {
      LoderActions(false)
    }
  }
  {
    /* end:: Company:- getDynamicCompanies Api call */
  }

  let getDataCompaniesAllType = async () => {
    let response: GetAllComapniesApi = await Zoneservice.getCompanies()
    setGetDataCompanies(response.data)
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllComapniesApi = await Zoneservice.getCreatedByTypes()

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
    getDataCompanies,
    DataGetAllTypeCreatedByTypes,
    itemIdForUpdate,
    setItemIdForUpdate,
    getDataCompaniesAllType,
    filterShow,
    setFilterShow,
    viewIdForUpdate,
    getDataAllTypeCreatedBy,
    setViewIdForUpdate,
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
    fetchAllCompanies,
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
