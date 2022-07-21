import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { isNotEmpty, KTCard } from '../../../../../helpers'
import OfficeStockInwardsService from '../helperOfficeStockInwards/ApiDataRequest'
import { ListDataProvider, ListPageData } from '../OfficeOldStockInwardsContext'
import OfficeStockOutwardsFormViewModal from '../OfficeStockInwardsList/Table/OfficeOldStockInwardsFormViewModal'


function OfficeOldStockInwards() {
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
    `ViewGetOfficeOldStockInwardsById-${viewIdForUpdate}`,
    () => {
      return OfficeStockInwardsService.GetOfficeOldStockInwardsTypeById(viewIdForUpdate)
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
        <OfficeOldStockInwardsFormViewHeader />
        {userDetails && <OfficeStockOutwardsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function OfficeOldStockInwardsFormViewHeader() {
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

let OfficeOldStockInwardsViewWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeOldStockInwards />
    </ListDataProvider>
  )
}

export default OfficeOldStockInwardsViewWrapper
