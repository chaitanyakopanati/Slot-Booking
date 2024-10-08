import {createContext, FC, useContext, useState, SetStateAction, Dispatch} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Complaintservice from './helperProduct/ApiDatarequestProduct'
import {
  getAllProductData,
  GetAllProductApi,
  getProductData,
  ID,
  ViewForm,
} from './helperProduct/ModelTypeProduct'

export interface ComplaintDataContextModel {
  getData: getProductData[]
  getDataAllTypeCreatedBy: getProductData[]
  getDataProduct: getProductData[]
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
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  DataGetApiProduct: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllProduct: () => void
  getDataProductAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
  connectionTypeId: any
  setConnectionTypeId: Dispatch<SetStateAction<number>>
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataProduct: [],
  getDataAllTypeCreatedBy: [],
  pageNo: 0,
  setPageNo: () => {},
  totalData: 0,
  setTotalData: () => {},
  lastIndex: 0,
  setLastIndex: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  pageSize: 0,
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
  fetchAllProduct: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApiProduct: () => {},
  getDataProductAllType: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
  connectionTypeId: 0,
  setConnectionTypeId: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getProductData[]>([])
  const [getDataProduct, setgetDataProduct] = useState<getProductData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<getProductData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState<number>(100)
  const [lastIndex, setLastIndex] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [connectionTypeId, setConnectionTypeId] = useState<any>('')

  let {LoderActions} = useLoader()

  {
    /* begin:: Product:- getProduct Api call */
  }
  const DataGetApiProduct = async () => {
    try {
      let payload: getAllProductData = await Complaintservice.getProduct()
      if (payload.success == true) {
      }
    } catch (error) {
    } finally {
    }
  }
  {
    /* end:: Product:- getProduct Api call */
  }

  {
    /* begin:: Product:- getDynamicProduct Api call */
  }
  let fetchAllProduct = async () => {
    LoderActions(true)

    try {
      let response: GetAllProductApi = await Complaintservice.getDynamicProduct(
        pageNo,
        pageSize,
        searchText,
        createdById,
        connectionTypeId
      )
      if (response.success == true) {
        setGetData(response.data)
        setTotalData(response.TotalRecords)
        setPageCount(response?.pages)
      }
    } catch (error) {}
    finally{
      LoderActions(false)
    }
  }
  {
    /* end:: Product:- getDynamicProduct Api call */
  }

  {
    /* begin::Get Api Call */
  }
  let getDataProductAllType = async () => {
    let response: GetAllProductApi = await Complaintservice.getProduct()

    setgetDataProduct(response.data)
  }
  {
    /* End::Get Api Call */
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    try {
      let payload: GetAllProductApi = await Complaintservice.getCreatedByTypes()

      if (payload.success == true) {
        setGetDataAllTypeCreatedBy(payload.data)
      }
    } catch (error) {
    } finally {
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataProduct,
    getDataProductAllType,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApiProduct,
    DataGetAllTypeCreatedByTypes,
    filterShow,
    getDataAllTypeCreatedBy,
    pageNo,
    pageSize,
    searchText,
    setSearchText,
    fetchAllProduct,
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
    createdById,
    setCreatedById,
    connectionTypeId,
    setConnectionTypeId,
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
