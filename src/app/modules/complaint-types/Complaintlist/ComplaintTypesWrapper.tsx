import {KTCard} from '../../../../_metronic/helpers'
import ComplaintFormWrapper from '../complaint-types-Form/ComplaintFormWrapper'
import {ListDataProvider, ListPageData} from '../ComplaintListContext'
import ComplaintTypePagination from './Table/ComplaintTypePagination'
import ComplaintTypeTable from './Table/ComplaintTypeTable'
import ComplaintTypeHeader from './Table/ComplaintTypeHeader'
import ComplaintFormViewModal from '../complaint-types-Form/form/ComplaintFormViewModal'

const Complaintlist = () => {
  const {itemIdForUpdate, viewIdForUpdate} = ListPageData()
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin::  Complaint Type Header Component */}
        <ComplaintTypeHeader category={ComplaintTypeHeader} />
        {/* end::  Complaint Type Header Component */}

        {/* begin:: Complaint Type Table Component */}
        <ComplaintTypeTable />
        {/* end:: Complaint Type Table Component */}
      </KTCard>
      {/* begin:: Complaint Type Table-Pagination Component */}
      <ComplaintTypePagination />
      {/* begin:: Complaint Type Table-Pagination Component */}
      {/* begin:: Complaint Type Add/Edit Form Component */}
      {itemIdForUpdate !== undefined && <ComplaintFormWrapper />}{' '}
      {/* end:: Complaint Type Add/Edit Form Component */}
      {/* begin:: Complaint Type View Form Component */}
      {viewIdForUpdate && <ComplaintFormViewModal category={viewIdForUpdate} />}{' '}
      {/* end:: Complaint Type View Form Component */}
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
