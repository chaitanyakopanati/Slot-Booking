import {KTCard} from '../../../../helpers'
import GodownStockInwardsFormWrapper from './Form/GodownStockInwardsFormWrapper'
import { ListDataProvider, ListPageData } from './GodownStockInwardsContext'
import GodownStockInwardsFormViewModal from './GodownStockInwardsList/Table/GodownStockInwardsFormViewModal'
import GodownStockInwardsHeader from './GodownStockInwardsList/Table/GodownStockInwardsHeader'
import GodownStockInwardsPagination from './GodownStockInwardsList/Table/GodownStockInwardsPagination'
import GodownStockInwardsTable from './GodownStockInwardsList/Table/GodownStockInwardsTable'


const Officestockinwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: OfficeStockInwards  Header Component */}
        <GodownStockInwardsHeader category={GodownStockInwardsHeader} />
        {/* end:: OfficeStockInwards  Header Component */}

        {/* begin:: OfficeStockInwards  Table Component */}
        <GodownStockInwardsTable />
        {/* end:: OfficeStockInwards  Table Component */}
      </KTCard>
      {/* begin:: OfficeStockInwards  Table-Pagination Component */}
      <GodownStockInwardsPagination />
      {/* end:: OfficeStockInwards  Table-Pagination Component */}
      {/* begin:: OfficeStockInwards  Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <GodownStockInwardsFormWrapper />}{' '}
      {/* end:: OfficeStockInwards  Add/Edit Form Component */}
      {/* begin:: OfficeStockInwards  View Form Component */}
      {viewIdForUpdate && <GodownStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
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
