/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import GodownStockInwardsHeader from './GodownStockInwardsList/Table/GodownStockInwardsHeader'
import GodownStockInwardsTable from './GodownStockInwardsList/Table/GodownStockInwardsTable'
import GodownStockInwardsPagination from './GodownStockInwardsList/Table/GodownStockInwardsPagination'
import GodownStockInwardsFormModal from './Form/GodownStockInwardsFormModal'
import GodownStockInwardsFormViewModal from './GodownStockInwardsList/Table/GodownStockInwardsFormViewModal'

type Props = {
  className: string
}

const TablesWidget2: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      <div className='overflow-hidden'>
        <KTCard className='ms-5 me-5'>
          {/* begin:: Complaint Header Component */}
          <GodownStockInwardsHeader />
          {/* end:: Complaint Header Component */}

          {/* begin:: Complaint Table Component */}
          <GodownStockInwardsTable />
          {/* end:: Complaint Table Component */}
        </KTCard>
        {/* begin:: Complaint Table-Pagination Component */}
        <GodownStockInwardsPagination />
        {/* end:: Complaint Table-Pagination Component */}
        {/* begin:: Complaint Add/Edit Form Component */}
        {/* <GodownStockInwardsFormWrapper /> */}
        <GodownStockInwardsFormModal />
        {/* {itemIdForUpdate !== undefined && <GodownStockInwardsFormWrapper />} */}
        {/* end:: Complaint Add/Edit Form Component */}
        {/* begin:: Complaint View Form Component */}
        <GodownStockInwardsFormViewModal />
        {/* {viewIdForUpdate && <GodownStockInwardsFormViewModal category={viewIdForUpdate} />}{' '} */}
        {/* end:: Complaint View Form Component */}
      </div>
    </div>
  )
}

export {TablesWidget2}
