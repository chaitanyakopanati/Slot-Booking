import {KTCard} from '../../../../helpers'
import GodownStockInwardsFormWrapper from './Form/GodownStockInwardsFormWrapper'
import {ListDataProvider, ListPageData} from './GodownStockInwardsContext'
import GodownStockInwardsFormViewModal from './GodownStockInwardsList/Table/GodownStockInwardsFormViewModal'
import GodownStockInwardsHeader from './GodownStockInwardsList/Table/GodownStockInwardsHeader'
import GodownStockInwardsPagination from './GodownStockInwardsList/Table/GodownStockInwardsPagination'
import GodownStockInwardsTable from './GodownStockInwardsList/Table/GodownStockInwardsTable'

const Officestockinwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: GodownStockInwards  Header Component */}
        <GodownStockInwardsHeader category={GodownStockInwardsHeader} />
        {/* end:: GodownStockInwards  Header Component */}

        {/* begin:: GodownStockInwards  Table Component */}
        <GodownStockInwardsTable />
        {/* end:: GodownStockInwards  Table Component */}
      </KTCard>
      {/* begin:: GodownStockInwards  Table-Pagination Component */}
      <GodownStockInwardsPagination />
      {/* end:: GodownStockInwards  Table-Pagination Component */}
      {/* begin:: GodownStockInwards  Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <GodownStockInwardsFormWrapper />}{' '}
      {/* end:: GodownStockInwards  Add/Edit Form Component */}
      {/* begin:: GodownStockInwards  View Form Component */}
      {viewIdForUpdate && <GodownStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: GodownStockInwards  View Form Component */}
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
