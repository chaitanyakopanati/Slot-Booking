/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import OfficeStockOutwardsHeader from './OfficeStockOutwardsList/Table/OfficeStockOutwardsHeader'
import OfficeStockOutwardsTable from './OfficeStockOutwardsList/Table/OfficeStockOutwardsTable'
import OfficeStockOutwardsPagination from './OfficeStockOutwardsList/Table/OfficeStockOutwardsPagination'
import OfficeStockOutwardsFormModal from './Form/OfficeStockOutwardsFormModal'
import OfficeStockOutwardsFormViewModal from './OfficeStockOutwardsList/Table/OfficeStockOutwardsFormViewModal'

type Props = {
  className: string
}

const TablesWidget7: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: Complaint Header Component */}
            <OfficeStockOutwardsHeader />
            {/* end:: Complaint Header Component */}

            {/* begin:: Complaint Table Component */}
            <OfficeStockOutwardsTable />
            {/* end:: Complaint Table Component */}
          </KTCard>
          {/* begin:: Complaint Table-Pagination Component */}
          <OfficeStockOutwardsPagination />
          {/* end:: Complaint Table-Pagination Component */}
          {/* begin:: Complaint Add/Edit Form Component */}
          {/* <ComplaintFormWrapper /> */}
          <OfficeStockOutwardsFormModal />
          {/* {itemIdForUpdate !== undefined && <ComplaintFormWrapper />} */}
          {/* end:: Complaint Add/Edit Form Component */}
          {/* begin:: Complaint View Form Component */}
          <OfficeStockOutwardsFormViewModal />
          {/* {viewIdForUpdate && <ComplaintFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: Complaint View Form Component */}
        </div>
      </div>
    </div>
  )
}

export {TablesWidget7}
