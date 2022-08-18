import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../../helpers'
import OfficeStockOutwardsViewService from '../helperOfficeStockOutwards/ApiDataRequest'
import {ListDataProvider, ListPageData} from '../OfficeStockOutwardsContext'
import OfficeStockOutwardsFormViewModal from '../OfficeStockOutwardsList/Table/OfficeStockOutwardsFormViewModal'

function OfficeStockOutwardsView() {
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
    `ViewOfficeStockOutwardsById-${viewIdForUpdate}`,
    () => {
      return OfficeStockOutwardsViewService.GetOfficeStockOutwardsTypeById(viewIdForUpdate)
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
        {userDetails && <OfficeStockOutwardsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
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
