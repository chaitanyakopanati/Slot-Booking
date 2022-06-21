import {createContext, FC, useContext, useState, SetStateAction, Dispatch} from 'react'
import {
  getComplainData,
  getAllComplainData,
  ID,
  ViewForm,
  GetAllComplaintApi,
} from './helper/ModelType'
import Complaintservice from './helper/ApiDatarequest'
import {useLoader} from '../loader/LoaderContext'

export interface ComplaintDataContextModel {
  getData: getComplainData[]
  getDataComplaint: getComplainData[]
  getDataCreatedByAllType: getComplainData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  createdById: number
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
  DataGetApi: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllComplaint: () => void
  getDataComplaintAllType: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataComplaint: [],
  getDataCreatedByAllType:[],
  createdById: 0,
  setCreatedById: () => {},
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
  fetchAllComplaint: () => {},
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetApi: () => {},
  getDataComplaintAllType: () => {},
})

const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getComplainData[]>([])
  const [getDataComplaint, setgetDataComplaint] = useState<getComplainData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState<number>(100)
  const [lastIndex, setLastIndex] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [getDataCreatedByAllType, setGetDataCreatedByAllType] = useState<getComplainData[]>([])
  let {LoderActions} = useLoader()

  {
    /* begin:: Complaint Type:- get Api call */
  }
  const DataGetApi = async () => {
    LoderActions(true)
    try {
      let payload: getAllComplainData = await Complaintservice.getComplaints()
      console.log(payload, 'payload')
      if (payload.success == true) {
        console.log(payload)
        setGetDataCreatedByAllType(payload.data)
        // setGetData(payload.data)
      }
    } catch (error) {
      console.log(error, 'error')
    } finally {
      LoderActions(false)
    }
  }
  {
    /* end:: Complaint Type:- get Api call */
  }

  {
    /* begin:: Complaint Type:- getDynamicComplaints Api call */
  }
  let fetchAllComplaint = async () => {
    LoderActions(true)
    // setLoading(true)
    try {
      let response: GetAllComplaintApi = await Complaintservice.getDynamicComplaints(
        pageNo,
        pageSize,
        searchText,
        createdById
      )
      LoderActions(true)
      console.log(response, 'response=========Allll')
      if (response.success == true) {
        LoderActions(false)

        console.log(response)
        setGetData(response.data)
        setPageCount(response?.pages)
      }
    } catch (error) {
      LoderActions(false)

      console.log(error, 'error')
    }
  }
  {
    /* end:: Complaint Type:- getDynamicComplaints Api call */
  }

  let getDataComplaintAllType = async() =>{
    let response: GetAllComplaintApi = await Complaintservice.getComplaints()
    console.log(response,"responseppppppp");
    setgetDataComplaint(response.data)
    
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataComplaintAllType,
    getDataComplaint,
    itemIdForUpdate,
    setItemIdForUpdate,
    DataGetApi,
    filterShow,
    getDataCreatedByAllType,
    pageNo,
    pageSize,
    searchText,
    setSearchText,
    fetchAllComplaint,
    setPageSize,
    setPageNo,
    setFilterShow,
    pageCount,
    setPageCount,
    lastIndex,
    setLastIndex,
    totalData,
    createdById,
    setCreatedById,
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
