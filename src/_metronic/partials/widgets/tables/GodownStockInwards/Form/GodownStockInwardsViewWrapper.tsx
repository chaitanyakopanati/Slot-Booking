import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../../helpers'
import {ListDataProvider, ListPageData} from '../GodownStockInwardsContext'
import GodownStockInwardsFormViewModal from '../GodownStockInwardsList/Table/GodownStockInwardsFormViewModal'
import OfficeStockInwardsService from '../helperGodownStockInwards/ApiDataRequest'

function GodownStockInwards() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate, DataGetAllTypeProduct} = ListPageData()
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

  useEffect(() => {
    DataGetAllTypeProduct()
  }, [])

  const {data: userDetails, error} = useQuery(
    `ViewGetGodownStockInwardsById-${viewIdForUpdate}`,
    () => {
      return OfficeStockInwardsService.GetGodownStockInwardsTypeById(viewIdForUpdate)
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
        {userDetails && <GodownStockInwardsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function OfficeStockInwardsFormViewHeader() {
  return <></>
}

let GodownStockInwardsViewWrapper = () => {
  return (
    <ListDataProvider>
      <GodownStockInwards />
    </ListDataProvider>
  )
}

export default GodownStockInwardsViewWrapper
