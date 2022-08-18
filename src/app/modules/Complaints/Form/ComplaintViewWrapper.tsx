import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../_metronic/helpers'
import ComplaintsViewService from '../helperComplaint/ApiDataRequest'
import {ListDataProvider, ListPageData} from '../ComplaintContext'
import ComplaintFormViewModal from '../ComplainList/Table/ComplaintFormViewModal'

function ComplaintView() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate, DataGetAllTypeTechnician} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(viewIdForUpdate)
  useEffect(() => {
    if (id) {
      setViewIdForUpdate(id)
    }
  }, [id])

  const {data: userDetails, error} = useQuery(
    `ViewOfficeStockOutwardsById-${viewIdForUpdate}`,
    () => {
      return ComplaintsViewService.GetComplaintsTypeById(viewIdForUpdate)
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

  useEffect(() => {
    DataGetAllTypeTechnician()
  }, [])
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <UserFormViewHeader />
        {userDetails && <ComplaintFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function UserFormViewHeader() {
  return <></>
}

let ComplaintViewWrapper = () => {
  return (
    <ListDataProvider>
      <ComplaintView />
    </ListDataProvider>
  )
}

export default ComplaintViewWrapper
