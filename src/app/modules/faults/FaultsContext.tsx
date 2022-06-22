import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Fautlservice from './helperFaults/ApiDatarequest'
import {
  getFaultsData,
  ID,
  ViewForm,
  GetAllData,
  GetAllFaulttApi,
} from './helperFaults/ModelFaultsType'

export interface ComplaintDataContextModel {
  getData: getFaultsData[]
  getDataFaults: getFaultsData[]
  getDataAllType: GetAllData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setCreatedById: Dispatch<SetStateAction<number>>
  pageSize: number
  setPageSize: Dispatch<SetStateAction<number>>
  setFilterShow: (filterShow: boolean) => void
  itemIdForUpdate: ID
  viewIdForUpdate: ViewForm
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => void
  setItemIdForUpdate: (_itemIdForUpdate: ID) => void
  DataGetAllType: () => void
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllFault: () => void
  getDataFaultsAllType: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataFaults: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  setCreatedById: () => {},
  pageSize: 0,
  setPageSize: () => {},
  searchText: '',
  setSearchText: () => {},
  getDataAllType: [],
  filterShow: false,
  setFilterShow: (filterShow: boolean) => {},
  setItemIdForUpdate: (_itemIdForUpdate: ID) => {},
  itemIdForUpdate: undefined,
  viewIdForUpdate: undefined,
  setViewIdForUpdate: (_setViewIdForUpdate: ViewForm) => {},
  DataGetAllType: () => {},
  fetchAllFault: () => {},
  getDataFaultsAllType: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getFaultsData[]>([])
  const [getDataFaults, setGetDataFaults] = useState<getFaultsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [createdById, setCreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  // const [getDataCreatedByAllType, setGetDataCreatedByAllType] = useState<getFaultsData[]>([])

  let {LoderActions} = useLoader()

  {
    /* begin:: Fault:- get Faults Type Api call */
  }
  const DataGetAllType = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await Fautlservice.getFaultsTypes()
      //
      if (payload.success == true) {
        LoderActions(false)
        setGetDataAllType(payload.data)
        // setGetDataCreatedByAllType(payload.data)
      }
    } catch (error) {
    } finally {
      LoderActions(false)
    }
  }
  {
    /* end:: Fault:- get Faults type Api call */
  }

  {
    /* begin:: Fault:- getDynamicFaults Api call */
  }
  let fetchAllFault = async () => {
    LoderActions(true)
    try {
      let response: GetAllFaulttApi = await Fautlservice.getDynamicFaults(
        pageNo,
        pageSize,
        searchText,
        createdById
      )
      console.log(response, 'response=========')

      if (response.success == true) {
        LoderActions(false)

        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
      }
    } catch (error) {}
  }
  {
    /* end:: Fault:- getDynamicFaults Api call */
  }

  {
    /* begin:: Api call */
  }
  let getDataFaultsAllType = async () =>{
    let response: GetAllFaulttApi = await Fautlservice.getFaults()
    console.log(response,"-==========");
    
    setGetDataFaults(response.data) 
  }
  {
    /* End:: Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataFaultsAllType,
    getDataFaults,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
    createdById,
    setCreatedById,
    setFilterShow,
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
    setSearchText,
    fetchAllFault,
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
