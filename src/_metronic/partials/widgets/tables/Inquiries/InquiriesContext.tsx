import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import Inquiriesservice from './helperInquiries/ApiDataRequest'
import {
  GetAllData,
  GetAllDataApi,
  GetAllInquiriesApi,
  getInquiriesData,
  ID,
  GetAllDataApiSalesExecutve,
} from './helperInquiries/ModelInquiries'
import {saveAs} from 'file-saver'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getInquiriesData[]
  getDataAllType: GetAllData[]
  statusData: GetAllData[]
  salesExecutveAllData: GetAllDataApiSalesExecutve[]
  getUserByRole: GetAllDataApiSalesExecutve[]
  getDataAllTypeCreatedBy: GetAllData[]
  filterShow: boolean
  showPasswordFields: boolean
  pageNo: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setSalesExecutiveId: Dispatch<SetStateAction<any>>
  setStatusId: Dispatch<SetStateAction<number>>
  setRoleId: Dispatch<SetStateAction<string>>
  setCreatedAt: Dispatch<SetStateAction<string>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  zoneId: number
  salesExecutiveId: number
  statusId: number
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
  DataGetAllTypeCreatedByTypes: () => void
  DataGetAllTypeStatus: () => void
  DataGetAllTypeSalesExecutve: () => void
  DataGetAllTypeSalesExecutveUserByRole: () => void
  fetchAllDownload: () => void
  setSuggestionUserText: Dispatch<SetStateAction<string>>
  getUserNameData: GetAllDataApiSalesExecutve[]
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  setSalesExecutiveId: () => {},
  setStatusId: () => {},
  setRoleId: () => {},
  setCreatedAt: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  totalData: 0,
  setTotalData: () => {},
  pageSize: 0,
  zoneId: 0,
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
  getDataAllType: [],
  getUserByRole: [],
  statusData: [],
  salesExecutveAllData: [],
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
  DataGetAllTypeCreatedByTypes: () => {},
  DataGetAllTypeStatus: () => {},
  DataGetAllTypeSalesExecutve: () => {},
  DataGetAllTypeSalesExecutveUserByRole: () => {},
  fetchAllDownload: () => {},
  setSuggestionUserText: () => {},
  getUserNameData: [],
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getInquiriesData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<GetAllData[]>([])
  const [statusData, setStatusData] = useState<GetAllData[]>([])
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
  const [suggestionUserText, setSuggestionUserText] = useState<string>('')
  const [getUserNameData, setgetUserNameData] = useState<GetAllDataApiSalesExecutve[]>([])

  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    LoderActions(true)
    try {
      let response: any = await Inquiriesservice.getDynamicDownloadFile(
        searchText,
        startDate,
        endDate,
        createdById,
        statusId,
        salesExecutiveId
      )
      saveAs(response.data, 'Inquiries.xlsx')
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
      let response: GetAllInquiriesApi = await Inquiriesservice.getDynamicInquiries(
        pageNo,
        pageSize,
        searchText,
        createdById,
        statusId,
        roleId,
        salesExecutiveId,
        startDate,
        endDate
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

  // Createdby Type
  const DataGetAllTypeCreatedByTypes = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await Inquiriesservice.getCreatedByTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeCreatedBy(payload.data)
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
      let payload: GetAllDataApi = await Inquiriesservice.getStatusByTypes()

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
      let payload: GetAllDataApiSalesExecutve = await Inquiriesservice.getSalesExecutveByTypes()

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
        await Inquiriesservice.getSalesExecutveByGetUserByRoleTypes()

      if (payload.success == true) {
        setGetUserByRole(payload?.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  useEffect(() => {
    if (suggestionUserText) {
      let fetchSuggestionUser = async () => {
        LoderActions(true)
        try {
          let payload: GetAllDataApiSalesExecutve = await Inquiriesservice.getUserName(
            suggestionUserText
          )

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

  const value: ComplaintDataContextModel = {
    getData,
    createdById,
    setCreatedById,
    getUserByRole,
    searchByUsername,
    itemIdForUpdate,
    salesExecutiveId,
    createdAt,
    setStartDate,
    fetchAllDownload,
    setEndDate,
    startDate,
    endDate,
    setShowPasswordFields,
    setItemIdForUpdate,
    filterShow,
    setCreatedAt,
    setSalesExecutiveId,
    DataGetAllTypeSalesExecutve,
    setFilterShow,
    DataGetAllTypeCreatedByTypes,
    viewIdForUpdate,
    salesExecutveAllData,
    setViewIdForUpdate,
    getDataAllType,
    statusData,
    statusId,
    getDataAllTypeCreatedBy,
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
    setSuggestionUserText,
    getUserNameData,
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
