import { KTCard } from "../../../../helpers"
import { ListDataProvider, ListPageData } from "./InquiriesContext"
import InquiriesFormViewModal from "./InquiriesList/Table/InquiriesFormViewModal"
import InquiriesHeader from "./InquiriesList/Table/InquiriesHeader"
import InquiriesPagination from "./InquiriesList/Table/InquiriesPagination"
import InquiriesTable from "./InquiriesList/Table/InquiriesTable"

const Inquirieslist = () => {
  const {viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: User Header Component */}
        <InquiriesHeader category={InquiriesHeader} />
        {/* end:: User Header Component */}

        {/* begin:: User Table Component */}
        <InquiriesTable />
        {/* end:: User Table Component */}
      </KTCard>
      {/* begin:: User Table-Pagination Component */}
      <InquiriesPagination />
      {/* begin:: User View Form Component */}
      {viewIdForUpdate && <InquiriesFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: User View Form Component */}
    </div>
  )
}

function InquiriesWrapper1() {
  return (
    <ListDataProvider>
      <Inquirieslist />
    </ListDataProvider>
  )
}

export default InquiriesWrapper1