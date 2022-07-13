import {KTCard} from '../../../../helpers'
import OfficeStockInwardsFormWrapper from './Form/OfficeStockInwardsFormWrapper'
import {ListDataProvider, ListPageData} from './OfficeStockInwardsContext'
import OfficeStockInwardsFormViewModal from './OfficeStockInwardsList/Table/OfficeStockInwardsFormViewModal'
import OfficeStockInwardsHeader from './OfficeStockInwardsList/Table/OfficeStockInwardsHeader'
import OfficeStockInwardsPagination from './OfficeStockInwardsList/Table/OfficeStockInwardsPagination'
import OfficeStockInwardsTable from './OfficeStockInwardsList/Table/OfficeStockInwardsTable'

const Officestockinwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: OfficeInwards Header Component */}
        <OfficeStockInwardsHeader category={OfficeStockInwardsHeader} />
        {/* end:: OfficeInwards Header Component */}

        {/* begin:: OfficeInwards Table Component */}
        <OfficeStockInwardsTable />
        {/* end:: OfficeInwards Table Component */}
      </KTCard>
      {/* begin:: OfficeInwards Table-Pagination Component */}
      <OfficeStockInwardsPagination />
      {/* end:: OfficeInwards Table-Pagination Component */}
      {/* begin:: OfficeInwards Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeStockInwardsFormWrapper />}{' '}
      {/* end:: OfficeInwards Add/Edit Form Component */}
      {/* begin:: OfficeInwards View Form Component */}
      {viewIdForUpdate && <OfficeStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: OfficeInwards View Form Component */}
    </div>
  )
}

function OfficestockinwardWrapper() {
  return (
    <ListDataProvider>
      <Officestockinwardlist />
    </ListDataProvider>
  )
}

export default OfficestockinwardWrapper
