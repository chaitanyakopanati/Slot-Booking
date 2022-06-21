import {KTCard} from '../../../_metronic/helpers'
import FaultsPagination from './Complaintlist/Table/FaultsPagination'
import FaultsTable from './Complaintlist/Table/FaultsTable'
import FaultsHeader from './Complaintlist/Table/FaultsHeader'
import FaultsFormViewModal from './Complaintlist/Table/FaultsFormViewModal'
import {ListDataProvider, ListPageData} from './FaultsContext'
import FaultsFormWrapper from './form/FaultsFormWrapper'

const Faultlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Fault Header Component */}
        <FaultsHeader category={FaultsHeader} />
        {/* end:: Fault Header Component */}

        {/* begin:: Fault Table Component */}
        <FaultsTable />
        {/* end:: Fault Table Component */}
      </KTCard>
      {/* begin:: Fault Table-Pagination Component */}
      <FaultsPagination />
      {/* end:: Fault Table-Pagination Component */}
      {/* begin:: Fault Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <FaultsFormWrapper />}
      {/* end:: Fault Add/Edit Form Component */}
      {/* begin:: Fault View Form Component */}
      {viewIdForUpdate && <FaultsFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Fault View Form Component */}
    </div>
  )
}

function FaultsWrapper() {
  return (
    <ListDataProvider>
      <Faultlist />
    </ListDataProvider>
  )
}

export default FaultsWrapper
