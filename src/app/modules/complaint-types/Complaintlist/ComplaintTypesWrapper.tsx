import {KTCard} from '../../../../_metronic/helpers'
import ComplaintFormWrapper from '../complaint-types-Form/ComplaintFormWrapper'
import {ListDataProvider, ListPageData} from '../ComplaintListContext'
import ComplaintFooter from './Table/ComplaintFooter'
import ComplaintTable from './Table/ComplaintTable'
import ComplaintTypeHeader from './Table/ComplaintTypeHeader'
import ViewComplaint from './Table/ViewComplaint'

const Complaintlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        <ComplaintTypeHeader /> {/* begin::  header functionlity */}
        <ComplaintTable /> {/* begin::  Table */}
      </KTCard>
      <ComplaintFooter /> {/* begin::  Footer */}
      {itemIdForUpdate !== undefined && <ComplaintFormWrapper />}{' '}
      {/* begin::  ComplaintFormWrapper*/}
      {viewIdForUpdate && <ViewComplaint category={viewIdForUpdate} />}{' '}
      {/* begin::  ViewComplaint*/}
    </div>
  )
}

function ComplaintTypesWrapper() {
  return (
    <ListDataProvider>
      <Complaintlist />
    </ListDataProvider>
  )
}

export default ComplaintTypesWrapper
