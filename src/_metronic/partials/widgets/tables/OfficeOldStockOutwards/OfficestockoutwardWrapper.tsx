import { KTCard } from "../../../../helpers"
import OfficeOldStockOutwardsFormWrapper from "./Form/OfficeOldStockOutwardsFormWrapper"
import { ListDataProvider, ListPageData } from "./OfficeOldStockOutwardsContext"
import OfficeOldStockOutwardsFormViewModal from "./OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsFormViewModal"
import OfficeOldStockOutwardsHeader from "./OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsHeader"
import OfficeOldStockOutwardsPagination from "./OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsPagination"
import OfficeOldStockOutwardsTable from "./OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsTable"

const Officestockoutward = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Header Component */}
        <OfficeOldStockOutwardsHeader category={OfficeOldStockOutwardsHeader} />
        {/* end:: Header Component */}

        {/* begin:: Table Component */}
        <OfficeOldStockOutwardsTable />
        {/* end:: Table Component */}
      </KTCard>
      {/* begin:: Table-Pagination Component */}
      <OfficeOldStockOutwardsPagination />
      {/* end:: Table-Pagination Component */}
      {/* begin:: Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <OfficeOldStockOutwardsFormWrapper />}{' '}
      {/* end:: Add/Edit Form Component */}
      {/* begin:: View Form Component */}
      {viewIdForUpdate && <OfficeOldStockOutwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: View Form Component */}
    </div>
  )
}

function OfficestockoutwardWrapper() {
  return (
    <ListDataProvider>
      <Officestockoutward />
    </ListDataProvider>
  )
}

export default OfficestockoutwardWrapper
