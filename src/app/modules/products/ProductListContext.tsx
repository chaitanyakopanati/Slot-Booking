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
  DataGetApiProduct: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllProduct: () => void
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
  fetchAllProduct: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApiProduct: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getProductData[]>([])
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
    /* begin:: Product:- getProduct Api call */
  }
  const DataGetApiProduct = async () => {
    LoderActions(true)
    try {
      let payload: getAllProductData = await Complaintservice.getProduct()
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
        searchText
      )
      console.log(response, 'response=========Allll')
      if (response.success == true) {
        LoderActions(false)
        console.log(response)
        setGetData(response.data)
        setPageCount(response?.pages)
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
  {
    /* end:: Product:- getDynamicProduct Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApiProduct,
    filterShow,
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
