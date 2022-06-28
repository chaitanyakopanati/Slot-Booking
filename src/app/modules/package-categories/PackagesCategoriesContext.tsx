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
  getDataAllTypeCreatedBy: getPackageCategoriesData[]
  getDataPackageCategory: getPackageCategoriesData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  lastIndex: number
  setLastIndex: Dispatch<SetStateAction<number>>
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setcreatedById: Dispatch<SetStateAction<number>>
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
  getDataPackageCategoryDataAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataAllTypeCreatedBy: [],
  getDataPackageCategory: [],
  pageNo: 0,
  setPageNo: () => {},
  totalData: 0,
  setTotalData: () => {},
  lastIndex: 0,
  setLastIndex: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setcreatedById: () => {},
  pageSize: 0,
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
  fetchAllPackagecategories: () => {},
  getDataPackageCategoryDataAllType: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApiPackagecategories: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getPackageCategoriesData[]>([])
  const [getDataPackageCategory, setGetDataPackageCategory] = useState<getPackageCategoriesData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getPackageCategoriesData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState<number>(100)
  const [lastIndex, setLastIndex] = useState<number>(0)
  const [createdById, setcreatedById] = useState<number>(0)
  let {LoderActions} = useLoader()

  {
    /* begin:: Package-Category:- getAllPackagecategoriesData Api call */
  }
  const DataGetApiPackagecategories = async () => {
    LoderActions(true)
    try {
      let payload: getAllPackagecategoriesData = await Complaintservice.getPackageCategories()
      LoderActions(true)
      console.log(payload, 'payload')
      if (payload.success == true) {
        LoderActions(false)
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
    LoderActions(true)
    try {
      let response: GetAllPackagecategorietApi = await Complaintservice.getDynamicPackageCategories(
        pageNo,
        pageSize,
        searchText,
        createdById
      )
      console.log(response, 'response=========Allll')
      if (response.success == true) {
        console.log(response)
        LoderActions(false)
        setTotalData(response.TotalRecords)
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

   {/* begin::Get Api call */}
  const getDataPackageCategoryDataAllType = async() =>{
    let response: GetAllPackagecategorietApi = await Complaintservice.getPackageCategories()
    console.log(response,"respo//////////");
    setGetDataPackageCategory(response.data)
  }
   {/* End::Get Api call */}

   const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllPackagecategorietApi = await Complaintservice.getCreatedByTypes()

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
    getDataPackageCategory,
    createdById,
    getDataAllTypeCreatedBy,
    setcreatedById,
    DataGetAllTypeCreatedByTypes,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApiPackagecategories,
    getDataPackageCategoryDataAllType,
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
