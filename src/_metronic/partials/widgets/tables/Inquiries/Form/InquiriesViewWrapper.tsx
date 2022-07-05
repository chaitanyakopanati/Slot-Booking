import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { isNotEmpty, KTCard } from '../../../../../helpers'
import Inquiriesservice from '../helperInquiries/ApiDataRequest'
import { ListDataProvider, ListPageData } from '../InquiriesContext'
import InquiriesFormViewModal from '../InquiriesList/Table/InquiriesFormViewModal'


function InquiriesView() {
  let {id} = useParams()
  const {viewIdForUpdate, setViewIdForUpdate} = ListPageData()
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

let InquiriesViewWrapper = () => {
  return (
    <ListDataProvider>
      <InquiriesView />
    </ListDataProvider>
  )
}

export default InquiriesViewWrapper

