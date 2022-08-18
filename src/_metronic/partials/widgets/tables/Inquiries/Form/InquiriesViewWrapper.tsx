import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../../helpers'
import Inquiriesservice from '../helperInquiries/ApiDataRequest'
import {ListDataProvider, ListPageData} from '../InquiriesContext'
import InquiriesFormViewModal from '../InquiriesList/Table/InquiriesFormViewModal'

function InquiriesView() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate} = ListPageData()
  const enabledQuery: boolean = isNotEmpty(viewIdForUpdate)
  useEffect(() => {
    if (id) {
      setViewIdForUpdate(id)
    }
  }, [id])

  const {data: userDetails, error} = useQuery(
    `ViewInquiriesbyId-${viewIdForUpdate}`,
    () => {
      return Inquiriesservice.GetInquiriesTypeById(viewIdForUpdate)
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
        <InquiriesFormViewHeader />
        {userDetails && <InquiriesFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function InquiriesFormViewHeader() {
  return <></>
}

let InquiriesViewWrapper = () => {
  return (
    <ListDataProvider>
      <InquiriesView />
    </ListDataProvider>
  )
}

export default InquiriesViewWrapper
