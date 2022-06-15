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
  getDataAllType: GetAllData[]
  filterShow: boolean
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
  pageCount: number
  setPageCount: Dispatch<SetStateAction<number>>
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
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  setPageCount: () => {},
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
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getFaultsData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
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
        searchText
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

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
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
