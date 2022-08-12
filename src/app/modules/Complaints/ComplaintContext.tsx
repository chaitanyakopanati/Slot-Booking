import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {saveAs} from 'file-saver'
import {
  GetAllData,
  ID,
  getComplaintsData,
  GetAllgetComplaintsDataApi,
} from './helperComplaint/ModelComplaint'
import {useLoader} from '../loader/LoaderContext'
import ComplaintsViewService from './helperComplaint/ApiDataRequest'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getComplaintsData[]
  getDataDownload: getComplaintsData[]
  getDataAllType: GetAllData[]
  getDataAllFault: GetAllData[]
  getUserNameData: GetAllData[]
  getDataAllTypeComplaint: GetAllData[]
  getDataAllTypeCreatedBy: GetAllData[]
  getDataAllTypeTechnician: GetAllData[]
  filterShow: boolean
  // showPasswordFields: boolean
  pageNo: number
  totalData: number
  TechnicianId: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setTechnicianId: Dispatch<SetStateAction<number>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  zoneId: number
  createdBy: number
  productId: number
  startDate: string
  setPageSize: Dispatch<SetStateAction<number>>
  setProductId: Dispatch<SetStateAction<number>>
  setcreatedById: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  // setShowPasswordFields: (filterShow: boolean) => void
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
  fetchAllComplaint: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTypeCreatedByTypes: () => void
  fetchAllDownload: () => void
  DataGetAllTypeTechnician: () => void
  DataGetAllTypeComplaint: () => void
  DataGetAllFault: () => void

  complainttypeid: string
  setComplainttypeid: Dispatch<SetStateAction<string>>
  status: number
  setStatus: Dispatch<SetStateAction<number>>
  createdDate: string
  setCreatedDate: Dispatch<SetStateAction<string>>
  assignToId: number
  setassignToId: Dispatch<SetStateAction<any>>
  faultid: number
  setFaultid: Dispatch<SetStateAction<number>>
  companiesName: GetAllData[]
  DataGetCompaniesName: () => void
  CompanyId: number
  setCompanyId: Dispatch<SetStateAction<number>>
  DataGetPackagesName: () => void
  packagesName: GetAllData[]
  PackageCategoryId: number
  setPackageCategoryId: Dispatch<SetStateAction<number>>
  addComplaint: any[]
  setAddComplaint: Dispatch<SetStateAction<any>>
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataDownload: [],
  getDataAllTypeTechnician: [],
  getUserNameData: [],
  getDataAllTypeComplaint: [],
  pageNo: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  setProductId: () => {},
  setTechnicianId: () => {},
  // getDataAllTypeProduct: [],
  pageCount: 0,
  productId: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
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
  // showPasswordFields: false,
  setFilterShow: (filterShow: boolean) => {},
  // setShowPasswordFields: (filterShow: boolean) => { },
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => {},
  fetchAllComplaint: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTypeCreatedByTypes: () => {},
  fetchAllDownload: () => {},
  DataGetAllTypeTechnician: () => {},
  DataGetAllTypeComplaint: () => {},
  DataGetAllFault: () => {},
  getDataAllFault: [],

  complainttypeid: '',
  setComplainttypeid: () => {},
  status: 0,
  setStatus: () => {},
  createdDate: '',
  setCreatedDate: () => {},
  assignToId: 0,
  setassignToId: () => {},
  faultid: 0,
  setFaultid: () => {},
  companiesName: [],
  DataGetCompaniesName: () => {},
  CompanyId: 0,
  setCompanyId: () => {},
  DataGetPackagesName: () => {},
  packagesName: [],
  PackageCategoryId: 0,
  setPackageCategoryId: () => {},
  addComplaint: [],
  setAddComplaint: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getComplaintsData[]>([])
  const [getDataDownload, setGetDataDownload] = useState<getComplaintsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getDataAllTypeComplaint, setGetDataAllTypeComplaint] = useState<GetAllData[]>([])
  const [getDataAllFault, setGetDataAllFault] = useState<GetAllData[]>([])

  const [getDataAllTypeTechnician, setGetDataAllTypeTechnician] = useState<GetAllData[]>([])
  const [getDataAllTypeCreatedBy, setGetDataAllTypeCreatedBy] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ID>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  // const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [totalData, setTotalData] = useState<number>(100)
  const [pageCount, setPageCount] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [Username, setSearchByUsername] = useState('')
  const [productId, setProductId] = useState(0)
  const [TechnicianId, setTechnicianId] = useState(0)
  const [getUserNameData, setgetUserNameData] = useState<GetAllData[]>([])
  const [startDate, setStartDate] = useState<any>('')
  const [endDate, setEndDate] = useState<any>('')
  const [createdBy, setcreatedById] = useState<number>(0)
  const [suggestionUserText, setSuggestionUserText] = useState<string>('')

  const [complainttypeid, setComplainttypeid] = useState('')
  const [status, setStatus] = useState<number>(0)
  const [createdDate, setCreatedDate] = useState('')
  const [assignToId, setassignToId] = useState<any>('')
  const [zoneId, setZoneId] = useState(0)
  const [faultid, setFaultid] = useState<any>('')
  const [companiesName, setCompaniesName] = useState<GetAllData[]>([])
  const [CompanyId, setCompanyId] = useState<any>('')
  const [packagesName, setPackagesName] = useState<GetAllData[]>([])
  const [PackageCategoryId, setPackageCategoryId] = useState<any>('')
  const [addComplaint, setAddComplaint] = useState<any>([])

  let {LoderActions} = useLoader()

  // Download fill

  let fetchAllDownload = async () => {
    console.log('Enter')
    LoderActions(true)
    try {
      let response: any = await ComplaintsViewService.getDynamicDownloadFile(
        pageNo,
        pageSize,
        searchText,
        zoneId,
        Username,
        complainttypeid,
        status,
        createdDate,
        assignToId,
        faultid,
        CompanyId,
        createdBy,
        PackageCategoryId,
        startDate,
        endDate
      )
      saveAs(response.data, 'complaints.xlsx')
      toast.success('Requested File Downloaded Successfully')
    } catch (error) {
      console.log(`responsedddddddd`)
      toast.error('Something went wrong Please try again ')

      console.log('Error', error)
    } finally {
      LoderActions(false)
    }
  }

  {
    /* begin::  get DataGetAllTypeProduct Type Api call */
  }
  const DataGetAllTypeComplaint = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await ComplaintsViewService.getComplaintTypes()
      //
      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeComplaint(payload.data)
        console.log('kk', payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const DataGetAllFault = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await ComplaintsViewService.getAllFaults()
      //
      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllFault(payload.data)
        console.log('kddk', payload.data)
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
  let fetchAllComplaint = async () => {
    LoderActions(true)
    try {
      let response: GetAllgetComplaintsDataApi =
        await ComplaintsViewService.getDynamicComplaintData(
          pageNo,
          pageSize,
          searchText,
          zoneId,
          Username,
          complainttypeid,
          status,
          createdDate,
          assignToId,
          faultid,
          CompanyId,
          createdBy,
          PackageCategoryId,
          startDate,
          endDate
          // createdById,
          // TechnicianId
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
      let payload: GetAllData = await ComplaintsViewService.getZoneTypes()

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
      let payload: GetAllData = await ComplaintsViewService.getCreatedByTypes()

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
      let payload: GetAllData = await ComplaintsViewService.getTechnicianTypes()

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

  const DataGetCompaniesName = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await ComplaintsViewService.getAllCompanies()

      if (payload.success == true) {
        LoderActions(false)
        setCompaniesName(payload.data)
        console.log(payload.data, 'oooooooooooo')
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const DataGetPackagesName = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await ComplaintsViewService.getAllPackages()

      if (payload.success == true) {
        LoderActions(false)
        setPackagesName(payload.data)
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
          let payload: GetAllData = await ComplaintsViewService.getUserName(suggestionUserText)
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

  const value: ComplaintDataContextModel = {
    getData,
    getDataDownload,
    fetchAllDownload,
    createdById,
    setCreatedById,
    setTechnicianId,
    Username,
    productId,
    setProductId,
    createdBy,
    startDate,
    getDataAllTypeComplaint,
    DataGetAllTypeTechnician,
    itemIdForUpdate,
    setEndDate,
    setStartDate,
    TechnicianId,
    endDate,
    // setShowPasswordFields,
    setItemIdForUpdate,
    getDataAllTypeTechnician,
    filterShow,
    getUserNameData,
    setcreatedById,
    setFilterShow,
    DataGetAllTypeComplaint,
    DataGetAllTypeCreatedByTypes,
    viewIdForUpdate,
    setViewIdForUpdate,
    getDataAllType,
    getDataAllTypeCreatedBy,
    pageNo,
    // showPasswordFields,
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
    fetchAllComplaint,
    DataGetAllTypeZone,
    totalData,
    setTotalData,
    suggestionUserText,
    setSuggestionUserText,
    DataGetAllFault,
    getDataAllFault,

    complainttypeid,
    setComplainttypeid,
    status,
    setStatus,
    createdDate,
    setCreatedDate,
    assignToId,
    setassignToId,
    faultid,
    setFaultid,
    companiesName,
    DataGetCompaniesName,
    CompanyId,
    setCompanyId,
    DataGetPackagesName,
    packagesName,
    PackageCategoryId,
    setPackageCategoryId,
    addComplaint,
    setAddComplaint,
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
