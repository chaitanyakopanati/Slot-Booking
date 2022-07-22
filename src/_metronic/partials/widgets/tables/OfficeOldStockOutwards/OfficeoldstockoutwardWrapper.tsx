import {KTCard} from '../../../../helpers'
import OfficeOldStockOutwardsFormWrapper from './Form/OfficeOldStockOutwardsFormWrapper'
import {ListDataProvider, ListPageData} from './OfficeOldStockOutwardsContext'
import OfficeOldStockOutwardsFormViewModal from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsFormViewModal'
import OfficeOldStockOutwardsHeader from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsHeader'
import OfficeOldStockOutwardsPagination from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsPagination'
import OfficeOldStockOutwardsTable from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsTable'

const OfficeOldstockOutwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: OfficeOldStockOutwards Header Component */}
        <OfficeOldStockOutwardsHeader category={OfficeOldStockOutwardsHeader} />
        {/* end:: OfficeOldStockOutwards Header Component */}

        {/* begin:: OfficeOldStockOutwards Table Component */}
        <OfficeOldStockOutwardsTable />
        {/* end:: OfficeOldStockOutwards Table Component */}
      </KTCard>
      {/* begin:: OfficeOldStockOutwards Table-Pagination Component */}
      <OfficeOldStockOutwardsPagination />
      {/* end:: OfficeOldStockOutwards Table-Pagination Component */}
      {/* begin:: OfficeOldStockOutwards Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeOldStockOutwardsFormWrapper />}{' '}
      {/* end:: OfficeOldStockOutwards Add/Edit Form Component */}
      {/* begin:: OfficeOldStockOutwards View Form Component */}
      {viewIdForUpdate && <OfficeOldStockOutwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: OfficeOldStockOutwards View Form Component */}
    </div>
  )
}

function OfficeoldstockoutwardWrapper() {
  return (
    <ListDataProvider>
      <OfficeOldstockOutwardlist />
    </ListDataProvider>
  )
}

export default OfficeoldstockoutwardWrapper
