import {createContext, FC, useContext, useState, SetStateAction, Dispatch} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Supplierservice from './helperSupplier/ApiDatarequest'
import {
  getAllSuppliersData,
  GetAllSuppliersApi,
  getSuppliersData,
  ID,
  ViewForm,
} from './helperSupplier/ModelTypeSupplier'

export interface ComplaintDataContextModel {
  getData: getSuppliersData[]
  getDataAllTypeCreatedBy: getSuppliersData[]
  getDataSupplier: getSuppliersData[]
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
  DataGetApiSuppliers: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllSuppliers: () => void
  getDataSupplierDataAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataAllTypeCreatedBy: [],
  getDataSupplier: [],
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
  fetchAllSuppliers: () => {},
  getDataSupplierDataAllType: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApiSuppliers: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getSuppliersData[]>([])
  const [getDataSupplier, setGetDataSupplier] = useState<getSuppliersData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getSuppliersData[]>([])
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
  }
  const DataGetApiSuppliers = async () => {
    LoderActions(true)
    try {
      let payload: getAllSuppliersData = await Supplierservice.getAllSuppliers()
      LoderActions(true)
      if (payload.success == true) {
        LoderActions(false)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
  }

  {
  }
  let fetchAllSuppliers = async () => {
    LoderActions(true)
    try {
      let response: GetAllSuppliersApi = await Supplierservice.getDynamicSuppliers(
        pageNo,
        pageSize,
        searchText,
        createdById
      )
      if (response.success == true) {
        LoderActions(false)
        setTotalData(response.TotalRecords)
        setGetData(response.data)
        setPageCount(response?.pages)
      }
    } catch (error) {}
  }
  {
  }

  {
    /* begin::Get Api call */
  }
  const getDataSupplierDataAllType = async () => {
    let response: GetAllSuppliersApi = await Supplierservice.getAllSuppliers()
    setGetDataSupplier(response.data)
  }
  {
    /* End::Get Api call */
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllSuppliersApi = await Supplierservice.getCreatedByTypes()

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
    getDataSupplier,
    createdById,
    getDataAllTypeCreatedBy,
    setcreatedById,
    DataGetAllTypeCreatedByTypes,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApiSuppliers,
    getDataSupplierDataAllType,
    filterShow,
    pageNo,
    pageSize,
    searchText,
    setSearchText,
    fetchAllSuppliers,
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
