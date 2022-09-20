import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import OfficeStockOutwardservice from './helperOfficeOldStockAvailability/ApiDataRequest'
import {
  GetAllData,
  GetAlLlOfficetockAvailabilitApi,
  getOfficetockAvailabilityData,
  ID,
  ViewForm,
} from './helperOfficeOldStockAvailability/ModelOfficeOldStockAvailability'
import {saveAs} from 'file-saver'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getOfficetockAvailabilityData[]
  getDataAllTypeZone: GetAllData[]
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
  DataGetAllTypeZone: () => void
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
  getDataAllTypeZone: [],
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  fetchAllofficestockOutward: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTypeProducts: () => {},
  fetchAllDownload: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getOfficetockAvailabilityData[]>([])
  const [getDataAllTypeZone, setGetDataAllTypeZone] = useState<GetAllData[]>([])
  const [getDataAllTypeProduct, setGetDataAllTypeProduct] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
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
        zoneId,
        searchText
      )
      saveAs(response.data, 'officeOldstockavailabilities.xlsx')
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
      let response: GetAlLlOfficetockAvailabilitApi =
        await OfficeStockOutwardservice.getDynamicOfficeStockAvailabilit(
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
  const DataGetAllTypeZone = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockOutwardservice.getZoneTypes()

      if (payload.success == true) {
        LoderActions(false)

        setGetDataAllTypeZone(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: User:- getZoneTypes Api call */
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
    productId,
    setproductId,
    fetchAllDownload,
    filterShow,
    getDataAllTypeProduct,
    setFilterShow,
    getDataAllTypeZone,
    DataGetAllTypeZone,
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
