import {KTCard} from '../../../../helpers'
import {ListDataProvider, ListPageData} from './OfficeStockAvailabilityContext'
import OfficeStockAvailabilityHeader from './OfficeStockAvailabilityList/Table/OfficeStockAvailabilityHeader'
import OfficeStockAvailabilityPagination from './OfficeStockAvailabilityList/Table/OfficeStockAvailabilityPagination'
import OfficeStockAvailabilityTable from './OfficeStockAvailabilityList/Table/OfficeStockAvailabilityTable'

const OfficeAvailabilityList = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Header Component */}
        <OfficeStockAvailabilityHeader category={OfficeStockAvailabilityHeader} />
        {/* end:: Header Component */}

        {/* begin:: Table Component */}
        <OfficeStockAvailabilityTable />
        {/* end:: Table Component */}
      </KTCard>
      {/* begin:: Table-Pagination Component */}
      <OfficeStockAvailabilityPagination />
      {/* end:: Table-Pagination Component */}
    </div>
  )
}

function OfficeStockAvailabilityWrapper() {
  return (
    <ListDataProvider>
      <OfficeAvailabilityList />
    </ListDataProvider>
  )
}

export default OfficeStockAvailabilityWrapper
