import {KTCard} from '../../../_metronic/helpers'
import {ListDataProvider, ListPageData} from './CompaniesContext'
import CompaniesPagination from './Complaintlist/Table/CompaniesPagination'
import CompaniesTable from './Complaintlist/Table/CompaniesTable'
import CompaniesHeader from './Complaintlist/Table/CompaniesHeader'
import CompaniesFormViewModal from './Complaintlist/Table/CompaniesFormViewModal'
import CompaniesFormWrapper from './Form/CompaniesFormWrapper'

const Companieslist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Company Header Component */}
        <CompaniesHeader />
        {/* end:: Company Header Component */}

        {/* begin:: Company Table Component */}
        <CompaniesTable />
        {/* end:: Company Table Component */}
      </KTCard>
      {/* begin:: Company Table-Pagination Component */}
      <CompaniesPagination />
      {/* end:: Company Table-Pagination Component */}
      {/* begin:: Company Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <CompaniesFormWrapper />}{' '}
      {/* end:: Company Add/Edit Form Component */}
      {/* begin:: Company View Form Component */}
      {viewIdForUpdate && <CompaniesFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Company View Form Component */}
    </div>
  )
}

function CompaniesWrapper() {
  return (
    <ListDataProvider>
      <Companieslist />
    </ListDataProvider>
  )
}

export default CompaniesWrapper
