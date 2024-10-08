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
    if (id) {
      setViewIdForUpdate(id)
    }
  }, [id])

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
  return <></>
}

let InstallationViewWrapper = () => {
  return (
    <ListDataProvider>
      <InstallationsView />
    </ListDataProvider>
  )
}

export default InstallationViewWrapper
