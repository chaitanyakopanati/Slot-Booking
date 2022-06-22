/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import InquiriesHeader from './InquiriesList/Table/InquiriesHeader'
import InquiriesTable from './InquiriesList/Table/InquiriesTable'
import InquiriesPagination from './InquiriesList/Table/InquiriesPagination'
import InquiriesFormModal from './Form/InquiriesFormModal'
import InquiriesFormViewModal from './InquiriesList/Table/InquiriesFormViewModal'
import InquiriesFormWrapper from './Form/InquiriesFormWrapper'

type Props = {
  className: string
}

const TablesWidget9: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: Inquiries Header Component */}
            <InquiriesHeader />
            {/* end:: Inquiries Header Component */}

            {/* begin:: Inquiries Table Component */}
            <InquiriesTable />
            {/* end:: Inquiries Table Component */}
          </KTCard>
          {/* begin:: Inquiries Table-Pagination Component */}
          <InquiriesPagination />
          {/* end:: Inquiries Table-Pagination Component */}
          {/* begin:: Inquiries Add/Edit Form Component */}
          {/* <InquiriesFormWrapper/> */}
          <InquiriesFormModal />
          {/* {itemIdForUpdate !== undefined && <InquiriesFormWrapper />} */}
          {/* end:: Inquiries Add/Edit Form Component */}
          {/* begin:: Inquiries View Form Component */}
          <InquiriesFormViewModal />
          {/* {viewIdForUpdate && <InquiriesFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: Inquiries View Form Component */}
        </div>
      </div>
    </div>
  )
}

export {TablesWidget9}
