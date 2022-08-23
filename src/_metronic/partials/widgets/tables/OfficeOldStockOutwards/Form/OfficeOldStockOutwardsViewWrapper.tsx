import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../../helpers'
import OfficeStockOutwardsViewService from '../helperOfficeOldStockOutwards/ApiDataRequest'
import {ListDataProvider, ListPageData} from '../OfficeOldStockOutwardsContext'
import OfficeOldStockOutwardsFormViewModal from '../OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsFormViewModal'

function OfficeOldStockOutwardsView() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate, DataGetAllTypeProduct, DataGetAllTypeTechnician} =
    ListPageData()
  const enabledQuery: boolean = isNotEmpty(viewIdForUpdate)
  useEffect(() => {
    if (id) {
      setViewIdForUpdate(id)
    }
  }, [id])

  const {data: userDetails, error} = useQuery(
    `ViewGetOfficeOldStockOutwardsById-${viewIdForUpdate}`,
    () => {
      return OfficeStockOutwardsViewService.GetOfficeOldStockOutwardsTypeById(viewIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setViewIdForUpdate(undefined)
      },
    }
  )

  useEffect(() => {
    DataGetAllTypeProduct()
    DataGetAllTypeTechnician()
  }, [])
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {userDetails && <OfficeOldStockOutwardsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

let OfficeOldStockOutwardsViewWrapper = () => {
  return (
    <ListDataProvider>
      <OfficeOldStockOutwardsView />
    </ListDataProvider>
  )
}

export default OfficeOldStockOutwardsViewWrapper
