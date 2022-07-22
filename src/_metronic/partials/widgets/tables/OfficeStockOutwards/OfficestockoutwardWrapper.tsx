import {KTCard} from '../../../../helpers'
import OfficeStockOutwardsFormWrapper from './Form/OfficeStockOutwardsFormWrapper'
import {ListDataProvider, ListPageData} from './OfficeStockOutwardsContext'
import OfficeStockOutwardsFormViewModal from './OfficeStockOutwardsList/Table/OfficeStockOutwardsFormViewModal'
import OfficeStockOutwardsHeader from './OfficeStockOutwardsList/Table/OfficeStockOutwardsHeader'
import OfficeStockOutwardsPagination from './OfficeStockOutwardsList/Table/OfficeStockOutwardsPagination'
import OfficeStockOutwardsTable from './OfficeStockOutwardsList/Table/OfficeStockOutwardsTable'

const OfficestockOutwardlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: OfficeStockOutwards Header Component */}
        <OfficeStockOutwardsHeader category={OfficeStockOutwardsHeader} />
        {/* end:: OfficeStockOutwards Header Component */}

        {/* begin:: OfficeStockOutwards Table Component */}
        <OfficeStockOutwardsTable />
        {/* end:: OfficeStockOutwards Table Component */}
      </KTCard>
      {/* begin:: OfficeStockOutwards Table-Pagination Component */}
      <OfficeStockOutwardsPagination />
      {/* end:: OfficeStockOutwards Table-Pagination Component */}
      {/* begin:: OfficeStockOutwards Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeStockOutwardsFormWrapper />}{' '}
      {/* end:: OfficeStockOutwards Add/Edit Form Component */}
      {/* begin:: OfficeStockOutwards View Form Component */}
      {viewIdForUpdate && <OfficeStockOutwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: OfficeStockOutwards View Form Component */}
    </div>
  )
}

function OfficestockoutwardWrapper() {
  return (
    <ListDataProvider>
      <OfficestockOutwardlist />
    </ListDataProvider>
  )
}

export default OfficestockoutwardWrapper
