import { KTCard } from '../../../_metronic/helpers'
import FaultsFooter from './Complaintlist/Table/FaultsFooter'
import FaultsTable from './Complaintlist/Table/FaultsTable'
import FaultsTypeHeader from './Complaintlist/Table/FaultsTypeHeader'
import ViewFaults from './Complaintlist/Table/ViewFaults'
import { ListDataProvider, ListPageData } from './FaultsContext'
import FaultsFormWrapper from './form/FaultsFormWrapper'

const Complaintlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <FaultsTypeHeader /> {/* begin::  header functionlity */}
        <FaultsTable /> {/* begin::  Table */}
      </KTCard>
      <FaultsFooter /> {/* begin::  Footer */}
      {itemIdForUpdate !== undefined && <FaultsFormWrapper />}{' '}
      {/* begin::  ComplaintFormWrapper*/}
      {viewIdForUpdate && <ViewFaults category={viewIdForUpdate} />}{' '}
      {/* begin::  ViewComplaint*/}
    </div>
  )
}

function FaultsWrapper() {
  return (
    <ListDataProvider>
      <Complaintlist />
    </ListDataProvider>
  )
}

export default FaultsWrapper



