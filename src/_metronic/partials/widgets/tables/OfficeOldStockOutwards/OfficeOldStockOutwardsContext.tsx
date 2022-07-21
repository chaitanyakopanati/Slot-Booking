import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react' 
import  {saveAs}  from 'file-saver'
import { useLoader } from '../../../../../app/modules/loader/LoaderContext'
import { GetAllData, GetAllgetOfficeStockOutwardsDataApi, getOfficeOldStockOutwardsData, ID } from './helperOfficeOldStockOutwards/ModelOfficeOldStocksOutwards'
import OfficeStockOutwardsViewService from './helperOfficeOldStockOutwards/ApiDataRequest'


export interface ComplaintDataContextModel {
  getData: getOfficeOldStockOutwardsData[]
  getDataDownload: getOfficeOldStockOutwardsData[]
  getDataAllType: GetAllData[]
  getUserNameData: GetAllData[]
  getDataAllTypeProduct: GetAllData[]
  getDataAllTypeCreatedBy: GetAllData[]
  getDataAllTypeTechnician: GetAllData[]
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
  startDate: string
  setPageSize: Dispatch<SetStateAction<number>>
  setProductId: Dispatch<SetStateAction<number>>
  setcreatedById: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  setShowPasswordFields: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ID
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  suggestionUserText: string
  Username: string
  endDate: string
  setSearchText: Dispatch<SetStateAction<string>>
  setSearchByUsername: Dispatch<SetStateAction<string>>
  setSuggestionUserText: Dispatch<SetStateAction<string>>
  setStartDate: Dispatch<SetStateAction<string>>
  setEndDate: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTypeCreatedByTypes: () => void
  fetchAllDownload: () => void
  DataGetAllTypeTechnician: () => void
  DataGetAllTypeProduct: () => void
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
  getDataAllTypeProduct: [],
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
  startDate: '',
  endDate: '',
  suggestionUserText: '',
  setPageSize: () => {},
  setSuggestionUserText: () => {},
  searchText: '',
  Username: '',
  setSearchText: () => {},
  setSearchByUsername: () => {},
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
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getOfficeOldStockOutwardsData[]>([])
  const [getDataDownload, setGetDataDownload] = useState<getOfficeOldStockOutwardsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
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
  const [Username, setSearchByUsername] = useState('')
  const [zoneId, setZoneId] = useState(0)
   const [productId, setProductId] = useState(0)
  const [TechnicianId, setTechnicianId] = useState(0)
  const [getUserNameData, setgetUserNameData] = useState<GetAllData[]>([])
  const [startDate, setStartDate] = useState<any>('')
  const [endDate, setEndDate] = useState<any>('')
  const [createdBy, setcreatedById] = useState<number>(0)
  const [suggestionUserText, setSuggestionUserText] = useState<string>('')

  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    console.log("Enter")
    LoderActions(true)
    try {
      let response:any = await OfficeStockOutwardsViewService.getDynamicDownloadFile(productId,
        zoneId,
        TechnicianId,
        searchText,
        Username,
        startDate,
        endDate,
        createdBy,
        )
      saveAs(response.data,"OfficeOldStockOutwards.xlsx")
    } catch (error) {
      console.log("Error",error)
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
      let payload: GetAllData = await OfficeStockOutwardsViewService.getProducts()
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
    /* begin:: User:- getDynamicOfficeStockOutwards Api call */
  }
  let fetchAllUser = async () => {
    LoderActions(true)
    try {
      let response: GetAllgetOfficeStockOutwardsDataApi = await OfficeStockOutwardsViewService.getDynamicOfficeOldStockOutwards(
        pageNo,
        pageSize,
        searchText,
        zoneId,
        Username,
        createdBy,
        productId,
        TechnicianId,
        startDate,
        endDate
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
    /* end:: User:- getDynamicOfficeStockOutwards Api call */
  }

  {
    /* begin:: User:- getZoneTypes Api call */
  }
  const DataGetAllTypeZone = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await OfficeStockOutwardsViewService.getZoneTypes()

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
      let payload: GetAllData = await OfficeStockOutwardsViewService.getCreatedByTypes()

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
      let payload: GetAllData = await OfficeStockOutwardsViewService.getTechnicianTypes()

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
    console.log("suggestionUserText",suggestionUserText)
    if (suggestionUserText) {
      let fetchSuggestionUser = async() => {
        LoderActions(true)
        try {
          let payload: GetAllData = await OfficeStockOutwardsViewService.getUserName(suggestionUserText)
          console.log(payload, 'getUserNamegetUserName')

          if (payload.success == true) {
            LoderActions(false)
            setgetUserNameData(payload?.data)
            console.log(payload.data, 'getUserName')
          }else if(payload.message==='No records found'){
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

  const value: ComplaintDataContextModel = {
    getData,
    getDataDownload,
    fetchAllDownload,
    setTechnicianId,
    Username,
    productId,
    setProductId,
    createdBy,
    startDate,
    getDataAllTypeProduct,
    DataGetAllTypeTechnician,
    itemIdForUpdate,
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
    setSearchByUsername,
    fetchAllUser,
    DataGetAllTypeZone,
    totalData,
    setTotalData,
    suggestionUserText,
setSuggestionUserText
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

