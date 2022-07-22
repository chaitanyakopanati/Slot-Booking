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
        {/* begin:: OfficeStockInwards  Header Component */}
        <OfficeStockInwardsHeader category={OfficeStockInwardsHeader} />
        {/* end:: OfficeStockInwards  Header Component */}

        {/* begin:: OfficeStockInwards  Table Component */}
        <OfficeStockInwardsTable />
        {/* end:: OfficeStockInwards  Table Component */}
      </KTCard>
      {/* begin:: OfficeStockInwards  Table-Pagination Component */}
      <OfficeStockInwardsPagination />
      {/* end:: OfficeStockInwards  Table-Pagination Component */}
      {/* begin:: OfficeStockInwards  Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeStockInwardsFormWrapper />}{' '}
      {/* end:: OfficeStockInwards  Add/Edit Form Component */}
      {/* begin:: OfficeStockInwards  View Form Component */}
      {viewIdForUpdate && <OfficeStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: OfficeStockInwards  View Form Component */}
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
