import {KTCard} from '../../../_metronic/helpers'
import ZonesPagination from './Complaintlist/Table/ZonesPagination'
import ZonesTable from './Complaintlist/Table/ZonesTable'
import ZonesHeader from './Complaintlist/Table/ZonesHeader'
import ZonesView from './Complaintlist/Table/ZonesFormViewModal'
import ZonesFormWrapper from './form/ZonesFormWrapper'
import {ListDataProvider, ListPageData} from './ZonesContext'

const Zoneslist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Zone Header Component */}
        <ZonesHeader />
        {/* end:: Zone Header Component */}

        {/* begin:: Zone Table Component */}
        <ZonesTable />
        {/* end:: Zone Table Component */}
      </KTCard>
      {/* begin:: Zone Table-Pagination Component */}
      <ZonesPagination />
      {/* end:: Zone Table-Pagination Component */}

      {/* begin:: Zone Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <ZonesFormWrapper />}
      {/* end:: Zone Add/Edit Form Component */}

      {/* begin:: Zone View Form Component */}
      {viewIdForUpdate && <ZonesView category={viewIdForUpdate} />}
      {/* end:: Zone View Form Component */}
    </div>
  )
}

function ZonesWrapper() {
  return (
    <ListDataProvider>
      <Zoneslist />
    </ListDataProvider>
  )
}

export default ZonesWrapper
