/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../helpers'
import {KTCard} from '../../../../helpers'
import ComplaintFormViewModal from './ComplainList/Table/ComplaintFormViewModal'
import ComplaintHeader from './ComplainList/Table/ComplaintHeader'
import ComplaintPagination from './ComplainList/Table/ComplaintPagination'
import ComplaintTable from './ComplainList/Table/ComplaintTable'
import ComplaintFormModal from './Form/ComplaintFormModal'
import ComplaintFormWrapper from './Form/ComplaintFormWrapper'

type Props = {
  className: string
}

const TablesWidget13: React.FC<Props> = ({className}) => {
  return (
    <div>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: Complaint Header Component */}
            <ComplaintHeader />
            {/* end:: Complaint Header Component */}

            {/* begin:: Complaint Table Component */}
            <ComplaintTable />
            {/* end:: Complaint Table Component */}
          </KTCard>
          {/* begin:: Complaint Table-Pagination Component */}
          <ComplaintPagination />
          {/* end:: Complaint Table-Pagination Component */}
          {/* begin:: Complaint Add/Edit Form Component */}
          {/* <ComplaintFormWrapper /> */}
          <ComplaintFormModal />
          {/* {itemIdForUpdate !== undefined && <ComplaintFormWrapper />} */}
          {/* end:: Complaint Add/Edit Form Component */}
          {/* begin:: Complaint View Form Component */}
          <ComplaintFormViewModal />
          {/* {viewIdForUpdate && <ComplaintFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: Complaint View Form Component */}
        </div>
      </div>
    </div>
  )
}

export default TablesWidget13
