import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { isNotEmpty, KTCard } from '../../../../../helpers'
import OfficeStockInwardsService from '../helperOfficeStockInwards/ApiDataRequest'
import { ListDataProvider, ListPageData } from '../OfficeStockInwardsContext'
import OfficeStockInwardsFormViewModal from '../OfficeStockInwardsList/Table/OfficeStockInwardsFormViewModal'


function OfficeStockInwards() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate,DataGetAllTypeProduct} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(viewIdForUpdate)
  useEffect(() => {
    console.log('id', id)
    if (id) {
      setViewIdForUpdate(id)
    }
  }, [id])

  useEffect(() => {
    console.log('viewIdForUpdate', viewIdForUpdate)
  }, [viewIdForUpdate])

 useEffect(() =>{
  DataGetAllTypeProduct()
 },[])

  const {data: userDetails, error} = useQuery(
    `ViewGetOfficeStockInwardsTypeById-${viewIdForUpdate}`,
    () => {
      return OfficeStockInwardsService.GetOfficeStockInwardsTypeById(viewIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setViewIdForUpdate(undefined)
        console.error(err)
      },
    }
  )
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <OfficeStockInwardsFormViewHeader />
        {userDetails && <OfficeStockInwardsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function OfficeStockInwardsFormViewHeader() {
  return (
    <>
      {/* <div className='modal-header'> */}
        {/* begin::Modal title */}
        {/* <h2 className='fw-bolder'>View User</h2> */}
        {/* end::Modal title */}
      {/* </div> */}
    </>
  )
}

let OfficeStockOutwardsViewWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeStockInwards />
    </ListDataProvider>
  )
}

export default OfficeStockOutwardsViewWrapper
