import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import InstallationsService from './helperInstallation/ApiDatarequest'
import {
  GetAllData,
  GetAllDataApi,
  GetAllDataApiSalesExecutve,
  GetAllInstallationsApi,
  getInstallationsData,
  ID,
  roleIdInstallations,
} from './helperInstallation/ModelInstallation'
import {saveAs} from 'file-saver'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getInstallationsData[]
  statusData: GetAllData[]
  getMainPoint: GetAllData[]
  getcableTypeData: GetAllData[]
  getCompanyTypeData: GetAllData[]
  getInstallations: GetAllData[]
  getUserNameData: GetAllData[]
  salesExecutveAllData: GetAllDataApiSalesExecutve[]
  getUserByRole: GetAllDataApiSalesExecutve[]
  getDataAllTypeZone: GetAllData[]
  filterShow: boolean
  showPasswordFields: boolean
  pageNo: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setConnectionTypeId: Dispatch<SetStateAction<number>>
  setSalesExecutiveId: Dispatch<SetStateAction<number>>
  setStatusId: Dispatch<SetStateAction<number>>
  setMainPointId: Dispatch<SetStateAction<number>>
  setRoleId: Dispatch<SetStateAction<string>>
  setCreatedAt: Dispatch<SetStateAction<string>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  setCompanyId: Dispatch<SetStateAction<number>>
  setInstallerId: Dispatch<SetStateAction<any>>
  pageSize: number
  zoneId: number
  installerId: number
  connectionTypeId: number
  salesExecutiveId: number
  statusId: number
  mainPointId: number
  companyId: number
  roleId: string
  createdAt: string
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  setShowPasswordFields: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ID
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  startDate: string
  endDate: string
  searchByUsername: string
  setSearchText: Dispatch<SetStateAction<string>>
  setSearchByUsername: Dispatch<SetStateAction<string>>
  setStartDate: Dispatch<SetStateAction<string>>
  setEndDate: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypegetZoneTypes: () => void
  DataGetAllTypeStatus: () => void
  DataGetAllTypeSalesExecutve: () => void
  DataGetAllTypeSalesExecutveUserByRole: () => void
  DataGetAllTypeInstallation: () => void
  DataGetAllTypeMainPoint: () => void
  DataGetAllTypeCableType: () => void
  DataGetAllTypeCompany: () => void
  fetchAllDownload: () => void
  suggestionUserText: string
  setSuggestionUserText: Dispatch<SetStateAction<string>>
  getDataAllTypeWireless: any[]
  setGetDataAllTypeWireless: Dispatch<SetStateAction<any>>
  DataGetAllTypegetWirelessTypes: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  mainPointId: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  setConnectionTypeId: () => {},
  setSalesExecutiveId: () => {},
  setInstallerId: () => {},
  setStatusId: () => {},
  setRoleId: () => {},
  setCreatedAt: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  totalData: 0,
  setTotalData: () => {},
  setMainPointId: () => {},
  setCompanyId: () => {},
  installerId: 0,
  pageSize: 0,
  zoneId: 0,
  companyId: 0,
  connectionTypeId: 0,
  salesExecutiveId: 0,
  statusId: 0,
  roleId: '',
  createdAt: '',
  startDate: '',
  endDate: '',
  setStartDate: () => {},
  setEndDate: () => {},
  setPageSize: () => {},
  searchText: '',
  searchByUsername: '',
  setSearchText: () => {},
  setSearchByUsername: () => {},
  getUserByRole: [],
  statusData: [],
  getMainPoint: [],
  getUserNameData: [],
  getcableTypeData: [],
  getCompanyTypeData: [],
  getInstallations: [],
  salesExecutveAllData: [],
  getDataAllTypeZone: [],
  filterShow: false,
  showPasswordFields: false,
  setFilterShow: (filterShow: boolean) => {},
  setShowPasswordFields: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => {},
  fetchAllUser: () => {},
  DataGetAllTypegetZoneTypes: () => {},
  DataGetAllTypeStatus: () => {},
  DataGetAllTypeSalesExecutve: () => {},
  DataGetAllTypeSalesExecutveUserByRole: () => {},
  DataGetAllTypeInstallation: () => {},
  DataGetAllTypeMainPoint: () => {},
  DataGetAllTypeCableType: () => {},
  DataGetAllTypeCompany: () => {},
  suggestionUserText: '',
  setSuggestionUserText: () => {},
  fetchAllDownload: () => {},
  getDataAllTypeWireless: [],
  setGetDataAllTypeWireless: () => {},
  DataGetAllTypegetWirelessTypes: () => {},
})

const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getInstallationsData[]>([])
  const [getDataAllTypeZone, setGetDataAllTypeZone] = useState<GetAllData[]>([])
  const [statusData, setStatusData] = useState<GetAllData[]>([])
  const [getInstallations, setGetInstallations] = useState<GetAllData[]>([])
  const [getMainPoint, setGetMainPoint] = useState<GetAllData[]>([])
  const [getcableTypeData, setGetcableTypeData] = useState<GetAllData[]>([])
  const [getCompanyTypeData, setGetCompanyTypeData] = useState<GetAllData[]>([])
  const [getUserNameData, setgetUserNameData] = useState<GetAllData[]>([])
  const [salesExecutveAllData, setSalesExecutveAllData] = useState<GetAllDataApiSalesExecutve[]>([])
  const [getUserByRole, setGetUserByRole] = useState<GetAllDataApiSalesExecutve[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ID>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [totalData, setTotalData] = useState<number>(100)
  const [pageCount, setPageCount] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [searchByUsername, setSearchByUsername] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [salesExecutiveId, setSalesExecutiveId] = useState<any>('')
  const [roleId, setRoleId] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [statusId, setStatusId] = useState<number>(0)
  const [installerId, setInstallerId] = useState<any>('')
  const [connectionTypeId, setConnectionTypeId] = useState<number>(0)
  const [mainPointId, setMainPointId] = useState<any>('')
  const [companyId, setCompanyId] = useState<any>('')
  const [suggestionUserText, setSuggestionUserText] = useState<string>('')
  const [getDataAllTypeWireless, setGetDataAllTypeWireless] = useState<any[]>([])

  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    LoderActions(true)
    try {
      let response: any = await InstallationsService.getDynamicDownloadFile(
        searchText,
        startDate,
        endDate,
        createdById,
        statusId,
        salesExecutiveId,
        installerId,
        zoneId,
        companyId,
        mainPointId,
        connectionTypeId
      )
      saveAs(response.data, 'Installations.xlsx')
      toast.success('Requested File Downloaded Successfully')
    } catch (error) {
      toast.error('Something went wrong Please try again ')
    } finally {
      LoderActions(false)
    }
  }

  {
    /* begin:: User:- getDynamicUser Api call */
  }
  let fetchAllUser = async () => {
    LoderActions(true)
    try {
      let response: GetAllInstallationsApi = await InstallationsService.getDynamicInstallations(
        pageNo,
        pageSize,
        searchText,
        zoneId,
        statusId,
        roleId,
        salesExecutiveId,
        startDate,
        endDate,
        connectionTypeId,
        mainPointId,
        installerId,
        companyId
      )
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
    /* end:: User:- getDynamicUser Api call */
  }

  // getZoneTypes
  const DataGetAllTypegetZoneTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getZoneTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeZone(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const DataGetAllTypegetWirelessTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getAllWirelessTypeProducts()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeWireless(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  // status
  const DataGetAllTypeStatus = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getStatusByTypes()
      if (payload.success == true) {
        LoderActions(false)
        setStatusData(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  //SalesExecutve
  const DataGetAllTypeSalesExecutve = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApiSalesExecutve = await InstallationsService.getSalesExecutveByTypes()
      if (payload.success == true) {
        const salesData = payload.data.filter((e) => {
          return e.name === 'SalesExecutve'
        })
        let a: any = salesData[0].id
        LoderActions(false)
        setSalesExecutveAllData(a)
        setRoleId(a)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  //SalesExecutveUserByRole

  const DataGetAllTypeSalesExecutveUserByRole = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApiSalesExecutve =
        await InstallationsService.getSalesExecutveByGetUserByRoleTypes()
      if (payload.success == true) {
        setGetUserByRole(payload.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  // Technician Installation

  const DataGetAllTypeInstallation = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getInstallationsByTypes()
      if (payload.success == true) {
        LoderActions(false)
        setGetInstallations(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  // main point

  const DataGetAllTypeMainPoint = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getMainPoint()
      if (payload.success == true) {
        LoderActions(false)
        setGetMainPoint(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  // cable Type

  const DataGetAllTypeCableType = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getcableType()
      if (payload.success == true) {
        LoderActions(false)
        setGetcableTypeData(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  //UserName

  useEffect(() => {
    if (suggestionUserText) {
      let fetchSuggestionUser = async () => {
        LoderActions(true)
        try {
          let payload: GetAllDataApi = await InstallationsService.getUserName(suggestionUserText)

          if (payload.success == true) {
            LoderActions(false)
            setgetUserNameData(payload?.data)
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

  //Company
  const DataGetAllTypeCompany = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await InstallationsService.getCompany()

      if (payload.success == true) {
        LoderActions(false)
        setGetCompanyTypeData(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const value: ComplaintDataContextModel = {
    getData,
    createdById,
    setCreatedById,
    getUserByRole,
    setMainPointId,
    DataGetAllTypeCompany,
    connectionTypeId,
    setCompanyId,
    getInstallations,
    fetchAllDownload,
    getCompanyTypeData,
    installerId,
    setConnectionTypeId,
    setInstallerId,
    companyId,
    mainPointId,
    searchByUsername,
    DataGetAllTypeCableType,
    itemIdForUpdate,
    salesExecutiveId,
    getUserNameData,
    getMainPoint,
    createdAt,
    setStartDate,
    setEndDate,
    DataGetAllTypeMainPoint,
    startDate,
    endDate,
    DataGetAllTypeInstallation,
    setShowPasswordFields,
    setItemIdForUpdate,
    filterShow,
    getcableTypeData,
    setCreatedAt,
    setSalesExecutiveId,
    DataGetAllTypeSalesExecutve,
    setFilterShow,
    DataGetAllTypegetZoneTypes,
    viewIdForUpdate,
    salesExecutveAllData,
    setViewIdForUpdate,
    statusData,
    statusId,
    getDataAllTypeZone,
    DataGetAllTypeSalesExecutveUserByRole,
    pageNo,
    roleId,
    DataGetAllTypeStatus,
    showPasswordFields,
    pageSize,
    zoneId,
    setRoleId,
    setZoneId,
    setStatusId,
    searchText,
    setPageSize,
    setPageNo,
    pageCount,
    setPageCount,
    setSearchText,
    setSearchByUsername,
    fetchAllUser,
    totalData,
    setTotalData,
    suggestionUserText,
    setSuggestionUserText,
    getDataAllTypeWireless,
    setGetDataAllTypeWireless,
    DataGetAllTypegetWirelessTypes,
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
