import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import { isNotEmpty, KTCard } from '../../../../../helpers'
import InstallationsService from '../helperInstallation/ApiDatarequest'
import { ListDataProvider, ListPageData } from '../InstallationContext'
import InstalllationFormViewModal from '../Installationlist/Table/InstalllationFormViewModal'


function InstallationViewWrapper() {
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
    `ViewGetInstallationById-${viewIdForUpdate}`,
    () => {
      return InstallationsService.GetInstallationsTypeById(viewIdForUpdate)
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
        <InstallationFormHeader />
        {userDetails && <InstalllationFormViewModal category={userDetails} />}
      </KTCard>
    </div>
  )
}

function InstallationFormHeader() {
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
      <InstallationViewWrapper />
    </ListDataProvider>
  )
}

export default InstallationViewWrapper