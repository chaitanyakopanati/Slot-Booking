import {KTCard} from '../../../../helpers'
import OfficeOldStockInwardsFormWrapper from './Form/OfficeOldStockInwardsFormWrapper'
import { ListDataProvider, ListPageData } from './OfficeOldStockInwardsContext'
import OfficeOldStockInwardsFormViewModal from './OfficeStockInwardsList/Table/OfficeOldStockInwardsFormViewModal'
import OfficeOldStockInwardsHeader from './OfficeStockInwardsList/Table/OfficeOldStockInwardsHeader'
import OfficeStockInwardsHeader from './OfficeStockInwardsList/Table/OfficeOldStockInwardsHeader'
import OfficeOldStockInwardsPagination from './OfficeStockInwardsList/Table/OfficeOldStockInwardsPagination'
import OfficeOldStockInwardsTable from './OfficeStockInwardsList/Table/OfficeOldStockInwardsTable'

const OfficeOldstockinwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: OfficeInwards Header Component */}
        <OfficeOldStockInwardsHeader category={OfficeStockInwardsHeader} />
        {/* end:: OfficeInwards Header Component */}

        {/* begin:: OfficeInwards Table Component */}
        <OfficeOldStockInwardsTable />
        {/* end:: OfficeInwards Table Component */}
      </KTCard>
      {/* begin:: OfficeInwards Table-Pagination Component */}
      <OfficeOldStockInwardsPagination />
      {/* end:: OfficeInwards Table-Pagination Component */}
      {/* begin:: OfficeInwards Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeOldStockInwardsFormWrapper />}{' '}
      {/* end:: OfficeInwards Add/Edit Form Component */}
      {/* begin:: OfficeInwards View Form Component */}
      {viewIdForUpdate && <OfficeOldStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: OfficeInwards View Form Component */}
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
