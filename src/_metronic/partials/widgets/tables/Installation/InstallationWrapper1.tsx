import { KTCard } from "../../../../helpers"
import { ListDataProvider, ListPageData } from "./InstallationContext"
import InstallationHeader from "./Installationlist/Table/InstallationHeader"
import Installationpagination from "./Installationlist/Table/Installationpagination"
import InstallationTable from "./Installationlist/Table/InstallationTable"
import InstalllationFormViewModal from "./Installationlist/Table/InstalllationFormViewModal"


const InstallationWrapper1 = () => {
  const {viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: User Header Component */}
        <InstallationHeader category={InstallationHeader} />
        {/* end:: User Header Component */}

        {/* begin:: User Table Component */}
        <InstallationTable />
        {/* end:: User Table Component */}
      </KTCard>
      {/* begin:: User Table-Pagination Component */}
      <Installationpagination />
      {/* begin:: User View Form Component */}
      {viewIdForUpdate && <InstalllationFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: User View Form Component */}
    </div>
  )
}

function InstallationWrapper() {
  return (
    <ListDataProvider>
      <InstallationWrapper1 />
    </ListDataProvider>
  )
}

export { InstallationWrapper }
