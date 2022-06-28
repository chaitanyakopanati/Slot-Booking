import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Zoneservice from './helperPackage/ApiDatarequest'
import {
  GetAllPackagesApi,
  GetAllData,
  getPackagesData,
  ID,
  ViewForm,
} from './helperPackage/ModelPackages'

export interface ComplaintDataContextModel {
  getData: getPackagesData[]
  getDataAllTypeCreatedBy: getPackagesData[]
  getDatapackages: getPackagesData[]
  getDataAllType: GetAllData[]
  filterShow: boolean
  pageNo: number
  totalData: number
  setPageNo: Dispatch<SetStateAction<number>>
  setTotalData: Dispatch<SetStateAction<number>>
  pageCount: number
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
  fetchAllBank: () => void
  getPackagesAllData: () => void
  DataGetAllTypeCreatedByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataAllTypeCreatedBy: [],
  getDatapackages: [],
  pageNo: 0,
  setPageNo: () => {},
  setTotalData: () => {},
  pageCount: 0,
  createdById: 0,
  totalData: 0,
  setPageCount: () => {},
  pageSize: 0,
  setPageSize: () => {},
  setCreatedById: () => {},
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
  getPackagesAllData: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getPackagesData[]>([])
  const [getDatapackages, setGetDatapackages] = useState<getPackagesData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getPackagesData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(100)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  let {LoderActions} = useLoader()

  {
    /* begin:: Package:- getDynamicPackages Api call */
  }
  let fetchAllBank = async () => {
    LoderActions(true)
    try {
      let response: GetAllPackagesApi = await Zoneservice.getDynamicPackages(
        pageNo,
        pageSize,
        searchText,
        createdById
      )
      console.log(response, 'response=========')
      LoderActions(true)

      if (response.success == true) {
        LoderActions(false)
        setTotalData(response.TotalRecords)
        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
      }
    } catch (error) {
      LoderActions(false)
    }
  }
  {
    /* end:: Package:- getDynamicPackages Api call */
  }

  {
    /* begin::Get API Call */
  }
  const getPackagesAllData = async () => {
    let response: GetAllPackagesApi = await Zoneservice.getPackages()
    console.log(response, '=========-----+++++')

    setGetDatapackages(response.data)
  }
  {
    /* End::Get API Call */
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllPackagesApi = await Zoneservice.getCreatedByTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeCreatedBy(payload.data)
        console.log(payload.data, 'oooooooooooo')
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }


  const value: ComplaintDataContextModel = {
    getData,
    getDataAllTypeCreatedBy,
    getDatapackages,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
    setFilterShow,
    setTotalData,
    viewIdForUpdate,
    totalData,
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
    DataGetAllTypeCreatedByTypes,
    fetchAllBank,
    createdById,
    getPackagesAllData,
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
