import {useEffect} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {isNotEmpty, KTCard} from '../../../../../helpers'
import InstallationsService from '../helperInstallation/ApiDatarequest'
import {ListDataProvider, ListPageData} from '../InstallationContext'
import InstallationCustomerViewModel from '../Installationlist/Table/InstalllationFormViewModal'

function InstallationsView() {
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
    `ViewInstallationById-${viewIdForUpdate}`,
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
        <InstallationsFormViewHeader />
        {userDetails && <InstallationCustomerViewModel category={userDetails} />}
      </KTCard>
    </div>
  )
}

function InstallationsFormViewHeader() {
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

let InstallationViewWrapper = () => {
  return (
    <ListDataProvider>
      <InstallationsView />
    </ListDataProvider>
  )
}

export default InstallationViewWrapper
