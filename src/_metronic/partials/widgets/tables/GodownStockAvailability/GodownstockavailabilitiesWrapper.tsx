import { KTCard } from "../../../../helpers"
import { ListDataProvider, ListPageData } from "./GodownStockAvailabilityContext"
import GodownStockAvailabilityHeader from "./GodownStockAvailabilityList/Table/GodownStockAvailabilityHeader"
import GodownStockAvailabilityPagination from "./GodownStockAvailabilityList/Table/GodownStockAvailabilityPagination"
import GodownStockAvailabilityTable from "./GodownStockAvailabilityList/Table/GodownStockAvailabilityTable"

const GodownstockavailabilitiesList = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Header Component */}
        <GodownStockAvailabilityHeader category={GodownStockAvailabilityHeader} />
        {/* end:: Header Component */}

        {/* begin:: Table Component */}
        <GodownStockAvailabilityTable />
        {/* end:: Table Component */}
      </KTCard>
      {/* begin:: Table-Pagination Component */}
      <GodownStockAvailabilityPagination />
      {/* end:: Table-Pagination Component */}
    </div>
  )
}

function GodownstockavailabilitiesWrapper() {
  return (
    <ListDataProvider>
      <GodownstockavailabilitiesList />
    </ListDataProvider>
  )
}

export default GodownstockavailabilitiesWrapper
