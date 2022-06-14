import {KTCard} from '../../../_metronic/helpers'
import PackagesPagination from './Complaintlist/Table/PackagesPagination'
import PackagesFormViewModal from './Complaintlist/Table/PackagesFormViewModal'
import {ListDataProvider, ListPageData} from './PackageContext'
import PackagesHeader from './Complaintlist/Table/PackagesHeader'
import PackagesTable from './Complaintlist/Table/PackagesTable'
import PackagesFormWrapper from './Form/PackagesFormWrapper'

const Packageslist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Packages Header Component */}
        <PackagesHeader />
        {/* end:: Packages Header Component */}

        {/* begin:: Packages Table Component */}
        <PackagesTable />
        {/* end:: Packages Table Component */}
      </KTCard>
      {/* begin:: Packages Table-Pagination Component */}
      <PackagesPagination />
      {/* end:: Packages Table-Pagination Component */}
      {/* begin:: Packages Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <PackagesFormWrapper />}{' '}
      {/* end:: Packages Add/Edit Form Component */}
      {/* begin:: Packages View Form Component */}
      {viewIdForUpdate && <PackagesFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Packages View Form Component */}
    </div>
  )
}

function PackagesWrapper() {
  return (
    <ListDataProvider>
      <Packageslist />
    </ListDataProvider>
  )
}

export default PackagesWrapper
