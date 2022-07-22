import {KTCard} from '../../../../helpers'
import {ListDataProvider, ListPageData} from './OfficeOldStockAvailabilityContext'
import OfficeOldStockAvailabilityHeader from './OfficeOldStockAvailabilityList/Table/OfficeOldStockAvailabilityHeader'
import OfficeOldStockAvailabilityPagination from './OfficeOldStockAvailabilityList/Table/OfficeOldStockAvailabilityPagination'
import OfficeOldStockAvailabilityTable from './OfficeOldStockAvailabilityList/Table/OfficeOldStockAvailabilityTable'

const OfficeOldAvailabilityList = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Header Component */}
        <OfficeOldStockAvailabilityHeader category={OfficeOldStockAvailabilityHeader} />
        {/* end:: Header Component */}

        {/* begin:: Table Component */}
        <OfficeOldStockAvailabilityTable />
        {/* end:: Table Component */}
      </KTCard>
      {/* begin:: Table-Pagination Component */}
      <OfficeOldStockAvailabilityPagination />
      {/* end:: Table-Pagination Component */}
    </div>
  )
}

function OfficeOldStockAvailabilityWrapper() {
  return (
    <ListDataProvider>
      <OfficeOldAvailabilityList />
    </ListDataProvider>
  )
}

export default OfficeOldStockAvailabilityWrapper
