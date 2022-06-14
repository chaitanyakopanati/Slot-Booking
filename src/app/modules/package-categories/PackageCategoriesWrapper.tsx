import {KTCard} from '../../../_metronic/helpers'
import PackagescategoriesPagination from './Complaintlist/Table/PackagescategoriesPagination'
import PackagescategoriesTable from './Complaintlist/Table/PackagescategoriesTable'
import PackagesCategoriesTypeHeader from './Complaintlist/Table/PackagesCategoriesTypeHeader'
import PackagesCategoriesFormViewModal from './Complaintlist/Table/PackagesCategoriesFormViewModal'
import PackagescategoriesFormWrapper from './Form/PackagescategoriesFormWrapper'
import {ListDataProvider, ListPageData} from './PackagesCategoriesContext'

const PackagesCategorieslist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Package-Category Header Component */}
        <PackagesCategoriesTypeHeader />
        {/* end:: Package-Category Header Component */}

        {/* begin:: Package-Category Table Component */}
        <PackagescategoriesTable />
        {/* end:: Package-Category Table Component */}
      </KTCard>
      {/* begin:: Package-Category Table-Pagination Component */}
      <PackagescategoriesPagination />
      {/* end:: Package-Category Table-Pagination Component */}
      {/* begin:: Package-Category Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <PackagescategoriesFormWrapper />}{' '}
      {/* end:: Package-Category Add/Edit Form Component */}
      {/* begin:: Package-Category View Form Component */}
      {viewIdForUpdate && <PackagesCategoriesFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Package-Category View Form Component */}
    </div>
  )
}

function PackageCategoriesWrapper() {
  return (
    <ListDataProvider>
      <PackagesCategorieslist />
    </ListDataProvider>
  )
}

export default PackageCategoriesWrapper
