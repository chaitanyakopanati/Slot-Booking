import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { isNotEmpty, KTCard } from '../../../../../helpers'
import OfficeStockOutwardsViewService from '../helperOfficeStockOutwards/ApiDataRequest'
import { ListDataProvider, ListPageData } from '../OfficeStockOutwardsContext'
import OfficeStockOutwardsFormViewModal from '../OfficeStockOutwardsList/Table/OfficeStockOutwardsFormViewModal'

function OfficeStockOutwardsView() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate,  DataGetAllTypeProduct,DataGetAllTypeTechnician} = ListPageData()
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

  const {data: userDetails, error} = useQuery(
    `ViewOfficeStockOutwardsById-${viewIdForUpdate}`,
    () => {
      return OfficeStockOutwardsViewService.GetOfficeStockOutwardsTypeById(viewIdForUpdate)
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

  useEffect(() =>{
    DataGetAllTypeProduct()
    DataGetAllTypeTechnician()
  },[])
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <UserFormViewHeader />
        {userDetails && <OfficeStockOutwardsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function UserFormViewHeader() {
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
      <OfficeStockOutwardsView />
    </ListDataProvider>
  )
}

export default OfficeStockOutwardsViewWrapper
