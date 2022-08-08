// import React from 'react'

// export const SupplierWrapper = () => {
//   return <div>SupplierWrapper</div>
// }

import {KTCard} from '../../../_metronic/helpers'
// import PackagescategoriesPagination from './Complaintlist/Table/PackagescategoriesPagination'
// import PackagescategoriesTable from './Complaintlist/Table/PackagescategoriesTable'
// import PackagesCategoriesTypeHeader from './Complaintlist/Table/PackagesCategoriesTypeHeader'
// import PackagesCategoriesFormViewModal from './Complaintlist/Table/PackagesCategoriesFormViewModal'
// import PackagescategoriesFormWrapper from './Form/PackagescategoriesFormWrapper'
// import {ListDataProvider, ListPageData} from './PackagesCategoriesContext'

import SupplierPagination from './SupplierTableView/SupplierPagination'
import SupplierTable from './SupplierTableView/SupplierTable'
import {ListDataProvider, ListPageData} from './SupplierContext'
import SupplierFormWrapper from './Form/SupplierFormWrapper'
import SupplierFormViewModal from './SupplierTableView/SupplierFormViewModal'
import SupplierHeader from './SupplierTableView/SupplierHeader'

const SupplierList = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Package-Category Header Component */}
        <SupplierHeader category={SupplierHeader} />
        {/* end:: Package-Category Header Component */}

        {/* begin:: Package-Category Table Component */}
        <SupplierTable />
        {/* end:: Package-Category Table Component */}
      </KTCard>
      {/* begin:: Package-Category Table-Pagination Component */}
      <SupplierPagination />
      {/* end:: Package-Category Table-Pagination Component */}
      {/* begin:: Package-Category Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <SupplierFormWrapper />}{' '}
      {/* end:: Package-Category Add/Edit Form Component */}
      {/* begin:: Package-Category View Form Component */}
      {viewIdForUpdate && <SupplierFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Package-Category View Form Component */}
    </div>
  )
}

function SupplierWrapper() {
  return (
    <ListDataProvider>
      <SupplierList />
    </ListDataProvider>
  )
}

export default SupplierWrapper
