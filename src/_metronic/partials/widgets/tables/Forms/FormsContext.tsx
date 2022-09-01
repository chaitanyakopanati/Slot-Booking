import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {useLoader} from '../../../../../app/modules/loader/LoaderContext'
import Inquiriesservice from './helperForms/ApiDataRequest'
import {
  GetAllData,
  GetAllDataApi,
  GetAllDataApiSalesExecutve,
  GetAllInquiriesApi,
  getInquiriesData,
  ID,
} from './helperForms/ModelForms'
import {saveAs} from 'file-saver'
import {toast} from 'react-toastify'

export interface ComplaintDataContextModel {
  getData: getInquiriesData[]
  getDataAllType: GetAllData[]
  getDataAllTypeCompany: GetAllData[]
  getPackagesCategory: GetAllData[]
  getUserNameData: GetAllData[]
  getPackages: GetAllData[]
  getBank: GetAllData[]
  getReciever: GetAllData[]
  salesExecutveAllData: GetAllDataApiSalesExecutve[]
  getUserByRole: GetAllDataApiSalesExecutve[]
  filterShow: boolean
  showPasswordFields: boolean
  pageNo: number
  totalData: number
  companyId: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  setZoneId: Dispatch<SetStateAction<number>>
  setSalesExecutiveId: Dispatch<SetStateAction<number>>
  setStatusId: Dispatch<SetStateAction<number>>
  setRoleId: Dispatch<SetStateAction<string>>
  setCreatedAt: Dispatch<SetStateAction<string>>
  setCreatedStartDate: Dispatch<SetStateAction<string>>
  setSuggestionUserText: Dispatch<SetStateAction<string>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  setFormSubmitTypeId: Dispatch<SetStateAction<number>>
  pageSize: number
  zoneId: number
  salesExecutiveId: any
  paymentTypeId: number
  packageCategoryId: number
  statusId: number
  formTypeId: number
  connectionTypeId: number
  formSubmitTypeId: number
  roleId: string
  createdAt: string
  createdStartDate: string
  setPageSize: Dispatch<SetStateAction<number>>
  setCompanyId: Dispatch<SetStateAction<number>>
  setPaymentTypeId: Dispatch<SetStateAction<number>>
  setPackageCategoryId: Dispatch<SetStateAction<number>>
  setConnectionTypeId: Dispatch<SetStateAction<number>>
  setFormTypeId: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  setShowPasswordFields: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ID
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  searchText: string
  createdEndDate: string
  searchByUserName: string
  formStartDate: string
  formEndDate: string
  expiryStartDate: string
  expiryEndDate: string
  suggestionUserText: string
  setSearchText: Dispatch<SetStateAction<string>>
  setSearchByUsername: Dispatch<SetStateAction<string>>
  setExpiryEndDate: Dispatch<SetStateAction<string>>
  setCreatedEndDate: Dispatch<SetStateAction<string>>
  setFormStartDate: Dispatch<SetStateAction<string>>
  setFormEndDate: Dispatch<SetStateAction<string>>
  setExpiryStartDate: Dispatch<SetStateAction<string>>
  fetchAllUser: () => void
  DataGetAllTypeSalesExecutve: () => void
  DataGetAllTypeSalesExecutveUserByRole: () => void
  DataGetAllTypeZone: () => void
  DataGetAllTypeCompany: () => void
  DataGetAllTypePackagesCategory: () => void
  fetchAllDownload: () => void
  DataGetAllTypePackages: () => void
  DataGetAllTypeBank: () => void
  DataGetAllTypeReciever: () => void
  getSalesExcutiveData: any[]
  setGetSalesExcutiveData: Dispatch<SetStateAction<any>>
  DataGetAllsalesExcutive: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getPackagesCategory: [],
  getUserNameData: [],
  getBank: [],
  getReciever: [],
  pageNo: 0,
  setPageNo: () => {},
  setZoneId: () => {},
  getPackages: [],
  setSalesExecutiveId: () => {},
  setStatusId: () => {},
  setRoleId: () => {},
  setCreatedAt: () => {},
  setPaymentTypeId: () => {},
  setFormStartDate: () => {},
  setSuggestionUserText: () => {},
  getDataAllTypeCompany: [],
  pageCount: 0,
  createdById: 0,
  companyId: 0,
  paymentTypeId: 0,
  formSubmitTypeId: 0,
  packageCategoryId: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  setFormEndDate: () => {},
  setFormSubmitTypeId: () => {},
  formEndDate: '',
  setCompanyId: () => {},
  setCreatedStartDate: () => {},
  setPackageCategoryId: () => {},
  setFormTypeId: () => {},
  totalData: 0,
  formTypeId: 0,
  setTotalData: () => {},
  setExpiryStartDate: () => {},
  setExpiryEndDate: () => {},
  setConnectionTypeId: () => {},
  pageSize: 0,
  connectionTypeId: 0,
  zoneId: 0,
  salesExecutiveId: 0,
  statusId: 0,
  roleId: '',
  suggestionUserText: '',
  createdAt: '',
  expiryEndDate: '',
  expiryStartDate: '',
  createdStartDate: '',
  createdEndDate: '',
  formStartDate: '',
  setCreatedEndDate: () => {},
  setPageSize: () => {},
  searchText: '',
  searchByUserName: '',
  setSearchText: () => {},
  setSearchByUsername: () => {},
  getDataAllType: [],
  getUserByRole: [],
  salesExecutveAllData: [],
  filterShow: false,
  showPasswordFields: false,
  setFilterShow: (filterShow: boolean) => {},
  setShowPasswordFields: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ID) => {},
  fetchAllUser: () => {},
  DataGetAllTypeSalesExecutve: () => {},
  DataGetAllTypeSalesExecutveUserByRole: () => {},
  DataGetAllTypeZone: () => {},
  DataGetAllTypeCompany: () => {},
  DataGetAllTypePackagesCategory: () => {},
  fetchAllDownload: () => {},
  DataGetAllTypePackages: () => {},
  DataGetAllTypeBank: () => {},
  DataGetAllTypeReciever: () => {},
  getSalesExcutiveData: [],
  setGetSalesExcutiveData: () => {},
  DataGetAllsalesExcutive: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getInquiriesData[]>([])
  const [salesExecutveAllData, setSalesExecutveAllData] = useState<GetAllDataApiSalesExecutve[]>([])
  const [getDataAllTypeCompany, setGetDataAllTypeCompany] = useState<GetAllData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [getPackagesCategory, setGetPackagesCategory] = useState<GetAllData[]>([])
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
  const [searchByUserName, setSearchByUsername] = useState('')
  const [zoneId, setZoneId] = useState(0)
  const [salesExecutiveId, setSalesExecutiveId] = useState<any>('')
  const [roleId, setRoleId] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [createdStartDate, setCreatedStartDate] = useState('')
  const [createdEndDate, setCreatedEndDate] = useState('')
  const [formStartDate, setFormStartDate] = useState('')
  const [formEndDate, setFormEndDate] = useState('')
  const [expiryStartDate, setExpiryStartDate] = useState('')
  const [expiryEndDate, setExpiryEndDate] = useState('')
  const [statusId, setStatusId] = useState<number>(0)
  const [companyId, setCompanyId] = useState<number>(0)
  const [paymentTypeId, setPaymentTypeId] = useState<number>(0)
  const [packageCategoryId, setPackageCategoryId] = useState<any>('')
  const [connectionTypeId, setConnectionTypeId] = useState<number>(0)
  const [formTypeId, setFormTypeId] = useState<number>(0)
  const [formSubmitTypeId, setFormSubmitTypeId] = useState<number>(0)
  const [suggestionUserText, setSuggestionUserText] = useState<string>('')
  const [getUserNameData, setgetUserNameData] = useState<GetAllData[]>([])
  const [getPackages, setGetPackages] = useState<GetAllData[]>([])
  const [getBank, setGetBank] = useState<GetAllData[]>([])
  const [getReciever, setGetReciever] = useState<GetAllData[]>([])
  const [getSalesExcutiveData, setGetSalesExcutiveData] = useState<any[]>([])
  let {LoderActions} = useLoader()

  {
    /* begin:: User:- getDynamicUser Api call */
  }
  let fetchAllUser = async () => {
    LoderActions(true)
    try {
      let response: GetAllInquiriesApi = await Inquiriesservice.getDynamicForm(
        pageNo,
        pageSize,
        searchText,
        createdById,
        statusId,
        roleId,
        salesExecutiveId,
        zoneId,
        companyId,
        paymentTypeId,
        createdStartDate,
        createdEndDate,
        formStartDate,
        formEndDate,
        expiryStartDate,
        expiryEndDate,
        packageCategoryId,
        connectionTypeId,
        formTypeId,
        searchByUserName,
        formSubmitTypeId
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

  // Download fill

  let fetchAllDownload = async () => {
    LoderActions(true)
    try {
      let response: any = await Inquiriesservice.getDynamicDownloadFile(
        searchText,
        salesExecutiveId,
        zoneId,
        companyId,
        connectionTypeId,
        formTypeId,
        paymentTypeId,
        createdStartDate,
        createdEndDate,
        formStartDate,
        formEndDate,
        expiryStartDate,
        expiryEndDate,
        packageCategoryId,
        formSubmitTypeId
      )
      saveAs(response.data, 'Forms.xlsx')
      toast.success('Requested File Downloaded Successfully')
    } catch (error) {
      toast.error('Something went wrong Please try again ')
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
      let payload: GetAllData = await Inquiriesservice.getZoneTypes()

      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllType(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* End:: User:- getZoneTypes Api call */
  }

  //Company
  const DataGetAllTypeCompany = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await Inquiriesservice.getCompany()
      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllTypeCompany(payload?.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }

  const DataGetAllsalesExcutive = async () => {
    LoderActions(true)
    try {
      let payload: GetAllDataApi = await Inquiriesservice.GetTechnicianUsers()
      if (payload.success == true) {
        LoderActions(false)
        setGetSalesExcutiveData(payload?.data)
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
        setGetUserByRole(payload.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  //packages category

  const DataGetAllTypePackagesCategory = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Inquiriesservice.getPackagesCategory()
      if (payload.success == true) {
        setGetPackagesCategory(payload?.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  //packages

  const DataGetAllTypePackages = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Inquiriesservice.getPackage()
      if (payload.success == true) {
        setGetPackages(payload?.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  //Bank

  const DataGetAllTypeBank = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Inquiriesservice.getBank()
      if (payload.success == true) {
        setGetBank(payload?.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  //Reciever

  const DataGetAllTypeReciever = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Inquiriesservice.getReciever()
      if (payload.success == true) {
        setGetReciever(payload?.data)
      }
    } catch (error) {
      LoderActions(false)
    } finally {
      LoderActions(false)
    }
  }

  //User name

  useEffect(() => {
    if (suggestionUserText) {
      let fetchSuggestionUser = async () => {
        LoderActions(true)
        try {
          let payload: GetAllData = await Inquiriesservice.getUserName(suggestionUserText)
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
    searchByUserName,
    DataGetAllTypeBank,
    DataGetAllTypeReciever,
    itemIdForUpdate,
    createdEndDate,
    getReciever,
    salesExecutiveId,
    setCreatedStartDate,
    DataGetAllTypePackages,
    createdAt,
    getPackagesCategory,
    suggestionUserText,
    packageCategoryId,
    setExpiryStartDate,
    setSuggestionUserText,
    setConnectionTypeId,
    DataGetAllTypeCompany,
    getPackages,
    setFormSubmitTypeId,
    getBank,
    formSubmitTypeId,
    formTypeId,
    setExpiryEndDate,
    connectionTypeId,
    setCreatedEndDate,
    DataGetAllTypeZone,
    expiryEndDate,
    setPackageCategoryId,
    setFormEndDate,
    DataGetAllTypePackagesCategory,
    formEndDate,
    setFormTypeId,
    getUserNameData,
    companyId,
    paymentTypeId,
    setCompanyId,
    getDataAllTypeCompany,
    setPaymentTypeId,
    setFormStartDate,
    createdStartDate,
    expiryStartDate,
    setShowPasswordFields,
    setItemIdForUpdate,
    filterShow,
    formStartDate,
    setCreatedAt,
    setSalesExecutiveId,
    DataGetAllTypeSalesExecutve,
    setFilterShow,
    viewIdForUpdate,
    salesExecutveAllData,
    setViewIdForUpdate,
    getDataAllType,
    statusId,
    DataGetAllTypeSalesExecutveUserByRole,
    pageNo,
    roleId,
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
    fetchAllDownload,
    getSalesExcutiveData,
    setGetSalesExcutiveData,
    DataGetAllsalesExcutive,
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
