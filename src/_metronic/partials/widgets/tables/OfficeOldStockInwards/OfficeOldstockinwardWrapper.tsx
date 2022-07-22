import {KTCard} from '../../../../helpers'
import OfficeOldStockInwardsFormWrapper from './Form/OfficeOldStockInwardsFormWrapper'
import {ListDataProvider, ListPageData} from './OfficeOldStockInwardsContext'
import OfficeOldStockInwardsFormViewModal from './OfficeStockInwardsList/Table/OfficeOldStockInwardsFormViewModal'
import OfficeOldStockInwardsHeader from './OfficeStockInwardsList/Table/OfficeOldStockInwardsHeader'
import OfficeOldStockInwardsPagination from './OfficeStockInwardsList/Table/OfficeOldStockInwardsPagination'
import OfficeOldStockInwardsTable from './OfficeStockInwardsList/Table/OfficeOldStockInwardsTable'

const OfficeOldstockinwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: OfficeOldStockInwards  Header Component */}
        <OfficeOldStockInwardsHeader category={OfficeOldStockInwardsHeader} />
        {/* end:: OfficeOldStockInwards  Header Component */}

        {/* begin:: OfficeOldStockInwards  Table Component */}
        <OfficeOldStockInwardsTable />
        {/* end:: OfficeOldStockInwards  Table Component */}
      </KTCard>
      {/* begin:: OfficeOldStockInwards  Table-Pagination Component */}
      <OfficeOldStockInwardsPagination />
      {/* end:: OfficeOldStockInwards  Table-Pagination Component */}
      {/* begin:: OfficeOldStockInwards  Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeOldStockInwardsFormWrapper />}{' '}
      {/* end:: OfficeOldStockInwards  Add/Edit Form Component */}
      {/* begin:: OfficeOldStockInwards  View Form Component */}
      {viewIdForUpdate && <OfficeOldStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: OfficeOldStockInwards  View Form Component */}
    </div>
  )
}

function OfficeOldstockinwardWrapper() {
  return (
    <ListDataProvider>
      <OfficeOldstockinwardlist />
    </ListDataProvider>
  )
}

export default OfficeOldstockinwardWrapper
