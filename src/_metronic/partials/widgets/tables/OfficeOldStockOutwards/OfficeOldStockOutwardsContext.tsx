import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import OfficeStockOutwardservice from './helperOfficeOldStockOutwards/ApiDataRequest'
import {
  GetAllData,
  GetAlLlOfficetockOutwardsApi,
  getOfficetockOutwardsData,
  ID,
  ViewForm,
} from './helperOfficeOldStockOutwards/ModelOfficeOldStocksOutwards'

export interface ComplaintDataContextModel {
  getData: getOfficetockOutwardsData[]
  getDataMainPoint: getOfficetockOutwardsData[]
  getDataAllTypeCreatedBy: getOfficetockOutwardsData[]
  getDataAllType: GetAllData[]
  getDataAllTypeZone: GetAllData[]
  getDataAllTypeProduct: GetAllData[]
  getDataAllTypeTechnician: GetAllData[]
  filterShow: boolean
  pageNo: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  pageCount: number
  createdBy: number
  productId: number
  zoneId: number
  startDate: string
  endDate: string
  setPageCount: Dispatch<SetStateAction<number>>
  setcreatedById: Dispatch<SetStateAction<number>>
  setproductId: Dispatch<SetStateAction<number>>
  setEndDate: Dispatch<SetStateAction<string>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setStartDate: Dispatch<SetStateAction<string>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  DataGetAllType: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllofficestockOutward: () => void
  getDataofficestockOutwardAllType: () => void
  DataGetAllTypeCreatedByTypes: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTypeProducts: () => void
  DataGetAllTypegetTechnicianTypesTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataMainPoint: [],
  getDataAllTypeCreatedBy: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  createdBy: 0,
  setPageCount: () => {},
  setStartDate: () => {},
  setZoneId: () => {},
  setproductId: () => {},
  pageSize: 0,
  zoneId: 0,
  totalData: 0,
  productId: 0,
  startDate: '',
  endDate: '',
  setTotalData: () => {},
  setPageSize: () => {},
  setcreatedById: () => {},
  searchText: '',
  setSearchText: () => {},
  setEndDate: () => {},
  getDataAllType: [],
  getDataAllTypeTechnician: [],
  getDataAllTypeProduct: [],
  getDataAllTypeZone: [],
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetAllType: () => {},
  fetchAllofficestockOutward: () => {},
  getDataofficestockOutwardAllType: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTypeProducts: () => {},
  DataGetAllTypegetTechnicianTypesTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getOfficetockOutwardsData[]>([])
  const [getDataMainPoint, setGetDataMainPoint] = useState<getOfficetockOutwardsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeZone, setGetDataAllTypeZone] = useState<GetAllData[]>([])
  const [getDataAllTypeProduct, setGetDataAllTypeProduct] = useState<GetAllData[]>([])
  const [getDataAllTypeTechnician, setGetDataAllTypeTechnician] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<
    getOfficetockOutwardsData[]
  >([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(100)
  const [createdBy, setcreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [productId, setproductId] = useState(0)
  let {LoderActions} = useLoader()

  {
    /* begin::  get zone Type Api call */
  }
  const DataGetAllType = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockOutwardservice.getOfficeStockOutwardsTypes()
      //
      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllType(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* end::  get zone Type Api call */
  }

  {
    /* begin::  fetchAllofficestockOutward Api call */
  }
  let fetchAllofficestockOutward = async () => {
    LoderActions(true)
    try {
      let response: GetAlLlOfficetockOutwardsApi =
        await OfficeStockOutwardservice.getDynamicOfficeStockOutwards(
          pageNo,
          pageSize,
          searchText,
          createdBy,
          startDate,
          endDate,
          zoneId,
          productId
        )
      console.log(response, 'response=========')

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
    /* begin:: Get Api call */
  }
  let getDataofficestockOutwardAllType = async () => {
    let response: GetAlLlOfficetockOutwardsApi =
      await OfficeStockOutwardservice.getOfficeStockOutwardsTypes()
    console.log(response, '-==-------====s')
    setGetDataMainPoint(response.data)
  }
  {
    /* End:: Get Api call */
  }

  // created by
  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAlLlOfficetockOutwardsApi =
        await OfficeStockOutwardservice.getCreatedByTypes()

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

  // Delivery by
  const DataGetAllTypegetTechnicianTypesTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockOutwardservice.getTechnicianTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeTechnician(payload.data)
        console.log(payload.data, 'oooooooooooo')
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
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
        console.log(payload, ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')

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
        console.log(payload, ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')

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
    getDataMainPoint,
    itemIdForUpdate,
    DataGetAllTypeProducts,
    setItemIdForUpdate,
    startDate,
    zoneId,
    setZoneId,
    productId,
    setproductId,
    getDataAllTypeTechnician,
    getDataAllTypeCreatedBy,
    DataGetAllTypegetTechnicianTypesTypes,
    getDataofficestockOutwardAllType,
    DataGetAllTypeCreatedByTypes,
    filterShow,
    endDate,
    getDataAllTypeProduct,
    setFilterShow,
    getDataAllTypeZone,
    setStartDate,
    setEndDate,
    DataGetAllTypeZone,
    viewIdForUpdate,
    setViewIdForUpdate,
    DataGetAllType,
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
    fetchAllofficestockOutward,
    createdBy,
    setcreatedById,
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
