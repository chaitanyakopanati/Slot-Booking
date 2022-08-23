import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import OfficeStockOutwardservice from './helperGodownStockAvailability/ApiDataRequest'
import {
  GetAllData,
  GetAlLlGodownstockavailabilitiesApi,
  getGodownstockavailabilitiesData,
  ID,
  ViewForm,
} from './helperGodownStockAvailability/ModelGodownStockAvailability'
import {saveAs} from 'file-saver'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getGodownstockavailabilitiesData[]
  getDataAllTypeProduct: GetAllData[]
  filterShow: boolean
  pageNo: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  pageCount: number
  productId: number
  zoneId: number
  setPageCount: Dispatch<SetStateAction<number>>
  setproductId: Dispatch<SetStateAction<number>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllofficestockOutward: () => void
  DataGetAllTypeProducts: () => void
  fetchAllDownload: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  setPageCount: () => {},
  setZoneId: () => {},
  setproductId: () => {},
  pageSize: 0,
  zoneId: 0,
  totalData: 0,
  productId: 0,
  setTotalData: () => {},
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
  getDataAllTypeProduct: [],
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  fetchAllofficestockOutward: () => {},
  DataGetAllTypeProducts: () => {},
  fetchAllDownload: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getGodownstockavailabilitiesData[]>([])
  const [getDataAllTypeProduct, setGetDataAllTypeProduct] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(100)
  const [searchText, setSearchText] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [productId, setproductId] = useState(0)
  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    LoderActions(true)
    try {
      let response: any = await OfficeStockOutwardservice.getDynamicDownloadFile(
        productId,
        searchText
      )
      saveAs(response.data, 'GodownstockAvailability.xlsx')
      toast.success('Requested File Downloaded Successfully')
    } catch (error) {
      toast.error('Something went wrong Please try again ')
    } finally {
      LoderActions(false)
    }
  }

  {
    /* begin::  fetchAllofficestockOutward Api call */
  }
  let fetchAllofficestockOutward = async () => {
    LoderActions(true)
    try {
      let response: GetAlLlGodownstockavailabilitiesApi =
        await OfficeStockOutwardservice.getDynamicGodownstockavailabilities(
          pageNo,
          pageSize,
          searchText,
          zoneId,
          productId
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
    /* end::  fetchAllofficestockOutward Api call */
  }

  {
    /* begin:: User:- getZoneTypes Api call */
  }
  const DataGetAllTypeProducts = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockOutwardservice.getProducts()

      if (payload.success == true) {
        LoderActions(false)

        setGetDataAllTypeProduct(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: User:- getZoneTypes Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    DataGetAllTypeProducts,
    setItemIdForUpdate,
    zoneId,
    setZoneId,
    fetchAllDownload,
    productId,
    setproductId,
    filterShow,
    getDataAllTypeProduct,
    setFilterShow,
    viewIdForUpdate,
    setViewIdForUpdate,
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
    fetchAllofficestockOutward,
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
