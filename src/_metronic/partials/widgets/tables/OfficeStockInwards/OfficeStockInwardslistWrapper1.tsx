import { KTCard } from "../../../../helpers"
import { ListDataProvider, ListPageData } from "./OfficeStockInwardsContext"
import OfficeStockInwardsFormViewModal from "./OfficeStockInwardsList/Table/OfficeStockInwardsFormViewModal"
import OfficeStockInwardsHeader from "./OfficeStockInwardsList/Table/OfficeStockInwardsHeader"
import OfficeStockInwardsPagination from "./OfficeStockInwardsList/Table/OfficeStockInwardsPagination"
import OfficeStockInwardsTable from "./OfficeStockInwardsList/Table/OfficeStockInwardsTable"

const OfficeStockInwardslist = () => {
  const {viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: User Header Component */}
        <OfficeStockInwardsHeader category={OfficeStockInwardsHeader} />
        {/* end:: User Header Component */}

        {/* begin:: User Table Component */}
        <OfficeStockInwardsTable />
        {/* end:: User Table Component */}
      </KTCard>
      {/* begin:: User Table-Pagination Component */}
      <OfficeStockInwardsPagination />
      {/* begin:: User View Form Component */}
      {viewIdForUpdate && <OfficeStockInwardsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: User View Form Component */}
    </div>
  )
}

function OfficeStockInwardslistWrapper1() {
  return (
    <ListDataProvider>
      <OfficeStockInwardslist />
    </ListDataProvider>
  )
}

export default OfficeStockInwardslistWrapper1