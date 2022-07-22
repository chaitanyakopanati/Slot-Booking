import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {saveAs} from 'file-saver'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import {
  GetAllData,
  GetAllGodownStockInwardsApi,
  getGodownStockInwardsData,
  ID,
} from './helperGodownStockInwards/ModelGodownStockInwards'
import OfficeStockInwardsService from './helperGodownStockInwards/ApiDataRequest'

export interface ComplaintDataContextModel {
  getData: getGodownStockInwardsData[]
  getDataDownload: getGodownStockInwardsData[]
  getDataAllType: GetAllData[]
  getUserNameData: GetAllData[]
  getDataAllTypeProduct: GetAllData[]
  getDataAllTypeCreatedBy: GetAllData[]
  getDataAllTypeTechnician: GetAllData[]
  getDataAllTypeDeliveredBy: GetAllData[]
  filterShow: boolean
  showPasswordFields: boolean
  pageNo: number
  totalData: number
  TechnicianId: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setTechnicianId: Dispatch<SetStateAction<number>>
  pageCount: number
  setPageCount: Dispatch<SetStateAction<number>>
  pageSize: number
  zoneId: number
  createdBy: number
  productId: number
  supplierName: string
  startDate: string
  setPageSize: Dispatch<SetStateAction<number>>
  setProductId: Dispatch<SetStateAction<number>>
  setcreatedById: Dispatch<SetStateAction<number>>
  setSupplierName: Dispatch<SetStateAction<string>>
  setFilterShow: (filterShow: boolean) => void
  setShowPasswordFields: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ID
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  suggestionUserText: string
  endDate: string
  setSearchText: Dispatch<SetStateAction<string>>
  setSuggestionUserText: Dispatch<SetStateAction<string>>
  setStartDate: Dispatch<SetStateAction<string>>
  setEndDate: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTypeCreatedByTypes: () => void
  fetchAllDownload: () => void
  DataGetAllTypeTechnician: () => void
  DataGetAllTypeProduct: () => void
  DataGetAllTypeDeliveredByTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataDownload: [],
  getDataAllTypeTechnician: [],
  getUserNameData: [],
  pageNo: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  setProductId: () => {},
  setTechnicianId: () => {},
  setSupplierName: () => {},
  getDataAllTypeProduct: [],
  getDataAllTypeDeliveredBy: [],
  pageCount: 0,
  productId: 0,
  setPageCount: () => {},
  setStartDate: () => {},
  totalData: 0,
  setTotalData: () => {},
  setcreatedById: () => {},
  pageSize: 0,
  zoneId: 0,
  createdBy: 0,
  TechnicianId: 0,
  supplierName: '',
  startDate: '',
  endDate: '',
  suggestionUserText: '',
  setPageSize: () => {},
  setSuggestionUserText: () => {},
  searchText: '',
  setSearchText: () => {},
  setEndDate: () => {},
  getDataAllType: [],
  getDataAllTypeCreatedBy: [],
  filterShow: false,
  showPasswordFields: false,
  setFilterShow: (filterShow: boolean) => {},
  setShowPasswordFields: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => {},
  fetchAllUser: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
  fetchAllDownload: () => {},
  DataGetAllTypeTechnician: () => {},
  DataGetAllTypeProduct: () => {},
  DataGetAllTypeDeliveredByTypes: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getGodownStockInwardsData[]>([])
  const [getDataDownload, setGetDataDownload] = useState<getGodownStockInwardsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeDeliveredBy, setGetDataAllTypeDeliveredBy] = useState<GetAllData[]>([])
  const [getDataAllTypeProduct, setGetDataAllTypeProduct] = useState<GetAllData[]>([])
  const [getDataAllTypeTechnician, setGetDataAllTypeTechnician] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ID>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [totalData, setTotalData] = useState<number>(100)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [productId, setProductId] = useState(0)
  const [TechnicianId, setTechnicianId] = useState(0)
  const [getUserNameData, setgetUserNameData] = useState<GetAllData[]>([])
  const [startDate, setStartDate] = useState<any>('')
  const [endDate, setEndDate] = useState<any>('')
  const [createdBy, setcreatedById] = useState<number>(0)
  const [supplierName, setSupplierName] = useState('')
  const [suggestionUserText, setSuggestionUserText] = useState<string>('')

  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    console.log('Enter')
    LoderActions(true)
    try {
      let response: any = await OfficeStockInwardsService.getDynamicDownloadFile(
        productId,
        zoneId,
        createdBy,
        searchText,
        startDate,
        endDate
      )
      saveAs(response.data, 'GodownstockInwards.xlsx')
    } catch (error) {
      console.log('Error', error)
    } finally {
      LoderActions(false)
    }
  }

  {
    /* begin::  get DataGetAllTypeProduct Type Api call */
  }
  const DataGetAllTypeProduct = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockInwardsService.getProducts()
      //
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
    /* end::  get DataGetAllTypeProduct Type Api call */
  }

  {
    /* begin:: User:- getDynamicGodownStockInwards Api call */
  }
  let fetchAllUser = async () => {
    LoderActions(true)
    try {
      let response: GetAllGodownStockInwardsApi =
        await OfficeStockInwardsService.getDynamicGodownStockInwards(
          pageNo,
          pageSize,
          searchText,
          createdBy,
          startDate,
          endDate,
          zoneId,
          productId,
          supplierName
        )
      console.log(response, 'response=========')

      if (response.success == true) {
        setGetData(response.data)
        LoderActions(false)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
        setTotalData(response.TotalRecords)
      } else {
        setGetData([])
        LoderActions(false)
        setPageCount(0)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* end:: User:- getDynamicGodownStockInwards Api call */
  }

  {
    /* begin:: User:- getZoneTypes Api call */
  }
  const DataGetAllTypeZone = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockInwardsService.getZoneTypes()

      if (payload.success == true) {
        LoderActions(false)
        console.log(payload, ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;')

        setGetDataAllType(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: User:- getZoneTypes Api call */
  }

  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockInwardsService.getCreatedByTypes()

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

  // Technician
  const DataGetAllTypeTechnician = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockInwardsService.getTechnicianTypes()

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

  useEffect(() => {
    console.log('suggestionUserText', suggestionUserText)
    if (suggestionUserText) {
      let fetchSuggestionUser = async () => {
        LoderActions(true)
        try {
          let payload: GetAllData = await OfficeStockInwardsService.getUserName(suggestionUserText)
          console.log(payload, 'getUserNamegetUserName')

          if (payload.success == true) {
            LoderActions(false)
            setgetUserNameData(payload?.data)
            console.log(payload.data, 'getUserName')
          } else if (payload.message === 'No records found') {
            setgetUserNameData([])
          }
        } catch (error) {
        } finally {
          LoderActions(false)
        }
      }
      fetchSuggestionUser()
    }
  }, [suggestionUserText])

  // delivery by
  const DataGetAllTypeDeliveredByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockInwardsService.getDeliveredByTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeDeliveredBy(payload.data)
        console.log(payload.data, 'oooooooooooo')
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataDownload,
    fetchAllDownload,
    setTechnicianId,
    supplierName,
    productId,
    DataGetAllTypeDeliveredByTypes,
    setProductId,
    createdBy,
    startDate,
    getDataAllTypeProduct,
    DataGetAllTypeTechnician,
    itemIdForUpdate,
    getDataAllTypeDeliveredBy,
    setEndDate,
    setStartDate,
    TechnicianId,
    endDate,
    setShowPasswordFields,
    setItemIdForUpdate,
    getDataAllTypeTechnician,
    filterShow,
    getUserNameData,
    setcreatedById,
    setFilterShow,
    DataGetAllTypeProduct,
    DataGetAllTypeCreatedByTypes,
    viewIdForUpdate,
    setViewIdForUpdate,
    getDataAllType,
    getDataAllTypeCreatedBy,
    pageNo,
    showPasswordFields,
    pageSize,
    zoneId,
    setZoneId,
    searchText,
    setPageSize,
    setPageNo,
    pageCount,
    setPageCount,
    setSearchText,
    fetchAllUser,
    setSupplierName,
    DataGetAllTypeZone,
    totalData,
    setTotalData,
    suggestionUserText,
    setSuggestionUserText,
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
