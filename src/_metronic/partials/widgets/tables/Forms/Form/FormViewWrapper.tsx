import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../../helpers'
import FormsFormViewModal from '../FormList/Table/FormsFormViewModal'
import {ListDataProvider, ListPageData} from '../FormsContext'
import Inquiriesservice from '../helperForms/ApiDataRequest'

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
    `ViewGetFormById-${viewIdForUpdate}`,
    () => {
      return Inquiriesservice.GetFormsTypeById(viewIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setViewIdForUpdate(undefined)
      },
    }
  )

  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <FormViewHeader />
        {userDetails && <FormsFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function FormViewHeader() {
  return <></>
}

let FormViewWrapper = () => {
  return (
    <ListDataProvider>
      <InquiriesView />
    </ListDataProvider>
  )
}
export default FormViewWrapper
