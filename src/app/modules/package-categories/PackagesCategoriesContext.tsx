import {createContext, FC, useContext, useState, SetStateAction, Dispatch} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Complaintservice from './helperPackagesCategories/ApiDatarequest'
import {
  getAllPackagecategoriesData,
  GetAllPackagecategorietApi,
  getPackageCategoriesData,
  ID,
  ViewForm,
} from './helperPackagesCategories/ModelTypePackagesCategories'

export interface ComplaintDataContextModel {
  getData: getPackageCategoriesData[]
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
  DataGetApiPackagecategories: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllPackagecategories: () => void
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
  fetchAllPackagecategories: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApiPackagecategories: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getPackageCategoriesData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState<number>(100)
  const [lastIndex, setLastIndex] = useState<number>(0)
  let {LoderActions} = useLoader()

  {
    /* begin:: Package-Category:- getAllPackagecategoriesData Api call */
  }
  const DataGetApiPackagecategories = async () => {
    LoderActions(true)
    try {
      let payload: getAllPackagecategoriesData = await Complaintservice.getPackageCategories()
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
    /* end:: Package-Category:- getAllPackagecategoriesData Api call */
  }

  {
    /* begin:: Package-Category:- getDynamicPackageCategories Api call */
  }
  let fetchAllPackagecategories = async () => {
    // setLoading(true)
    try {
      let response: GetAllPackagecategorietApi = await Complaintservice.getDynamicPackageCategories(
        pageNo,
        pageSize,
        searchText
      )
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
  {
    /* end:: Package-Category:- getDynamicPackageCategories Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApiPackagecategories,
    filterShow,
    pageNo,
    pageSize,
    searchText,
    setSearchText,
    fetchAllPackagecategories,
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
