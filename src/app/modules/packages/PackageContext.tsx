import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import Zoneservice from './helperPackage/ApiDatarequest'
import {
  GetAllPackagesApi,
  GetAllData,
  getPackagesData,
  ID,
  ViewForm,
} from './helperPackage/ModelPackages'

export interface ComplaintDataContextModel {
  getData: getPackagesData[]
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
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  fetchAllBank: () => void
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
  fetchAllBank: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getPackagesData[]>([])
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
    /* begin:: Package:- getDynamicPackages Api call */
  }
  let fetchAllBank = async () => {
    LoderActions(true)
    try {
      let response: GetAllPackagesApi = await Zoneservice.getDynamicPackages(
        pageNo,
        pageSize,
        searchText
      )
      console.log(response, 'response=========')
      LoderActions(true)

      if (response.success == true) {
        LoderActions(false)

        setGetData(response.data)
        const PageCout = response?.pages
        setPageCount(Math.floor(PageCout))
      }
    } catch (error) {
      LoderActions(false)
    }
  }
  {
    /* end:: Package:- getDynamicPackages Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    itemIdForUpdate,
    setItemIdForUpdate,
    filterShow,
    setFilterShow,
    viewIdForUpdate,
    setViewIdForUpdate,
    getDataAllType,
    pageNo,
    pageSize,
    searchText,
    setPageSize,
    setPageNo,
    pageCount,
    setPageCount,
    setSearchText,
    fetchAllBank,
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
