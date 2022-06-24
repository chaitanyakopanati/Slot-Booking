import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {useLoader} from '../loader/LoaderContext'
import MainPointservice from './helperMainPoint/ApiDatarequest'
import {
  GetAllData,
  GetAllMainPointApi,
  getMainPointData,
  ID,
  ViewForm,
} from './helperMainPoint/ModelMainPoint'

export interface ComplaintDataContextModel {
  getData: getMainPointData[]
  getDataMainPoint: getMainPointData[]
  getDataAllType: GetAllData[]
  filterShow: boolean
  pageNo: number
  totalData: number
  setTotalData: Dispatch<SetStateAction<number>>
  setPageNo: Dispatch<SetStateAction<number>>
  pageCount: number
  createdById: number
  setPageCount: Dispatch<SetStateAction<number>>
  setcreatedById: Dispatch<SetStateAction<number>>
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
  fetchAllMainPoint: () => void
  getDataMainPointAllType: () => void
}

const ListDataContext = createContext<ComplaintDataContextModel>({
  getData: [],
  getDataMainPoint: [],
  pageNo: 0,
  setPageNo: () => {},
  pageCount: 0,
  createdById: 0,
  setPageCount: () => {},
  pageSize: 0,
  totalData: 0,
  setTotalData: () => {},
  setPageSize: () => {},
  setcreatedById: () => {},
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
  fetchAllMainPoint: () => {},
  getDataMainPointAllType: () => {},
})
const ListDataProvider: FC = ({children}) => {
  const [getData, setGetData] = useState<getMainPointData[]>([])
  const [getDataMainPoint, setGetDataMainPoint] = useState<getMainPointData[]>([])
  const [getDataAllType, setGetDataAllType] = useState<GetAllData[]>([])
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(undefined)
  const [viewIdForUpdate, setViewIdForUpdate] = useState<ViewForm>(undefined)
  const [filterShow, setFilterShow] = useState<boolean>(false)
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const [pageCount, setPageCount] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(100)
  const [createdById, setcreatedById] = useState<number>(0)
  const [searchText, setSearchText] = useState('')
  let {LoderActions} = useLoader()

  {
    /* begin:: MainPoint:- get zone Type Api call */
  }
  const DataGetAllType = async () => {
    LoderActions(true)
    try {
      let payload: GetAllData = await MainPointservice.getMainPointTypes()
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
    /* end:: MainPoint:- get zone Type Api call */
  }

  {
    /* begin:: MainPoint:- getDynamicMainPoint Api call */
  }
  let fetchAllMainPoint = async () => {
    LoderActions(true)
    try {
      let response: GetAllMainPointApi = await MainPointservice.getDynamicMainPoint(
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
        setTotalData(response.TotalRecords)
      }
    } catch (error) {}
  }
  {
    /* end:: MainPoint:- getDynamicMainPoint Api call */
  }

  {
    /* begin:: Get Api call */
  }
  let getDataMainPointAllType = async () => {
    let response: GetAllMainPointApi = await MainPointservice.getMainPoint()
    console.log(response, '-==-------====s')
    setGetDataMainPoint(response.data)
  }
  {
    /* End:: Get Api call */
  }

  const value: ComplaintDataContextModel = {
    getData,
    getDataMainPoint,
    itemIdForUpdate,
    setItemIdForUpdate,
    getDataMainPointAllType,
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
    totalData,
    setTotalData,
    setSearchText,
    fetchAllMainPoint,
    createdById,
    setcreatedById,
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
