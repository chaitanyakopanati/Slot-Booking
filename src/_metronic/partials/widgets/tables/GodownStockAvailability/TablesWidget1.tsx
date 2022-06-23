/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import GodownStockAvailabilityHeader from './GodownStockAvailabilityList/Table/GodownStockAvailabilityHeader'
import GodownStockAvailabilityTable from './GodownStockAvailabilityList/Table/GodownStockAvailabilityTable'
import GodownStockAvailabilityPagination from './GodownStockAvailabilityList/Table/GodownStockAvailabilityPagination'

type Props = {
  className: string
}

const TablesWidget1: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      <div className='overflow-hidden'>
        <KTCard className='ms-5 me-5'>
          {/* begin:: Complaint Header Component */}
          <GodownStockAvailabilityHeader />
          {/* end:: Complaint Header Component */}

          {/* begin:: Complaint Table Component */}
          <GodownStockAvailabilityTable />
          {/* end:: Complaint Table Component */}
        </KTCard>
        {/* begin:: Complaint Table-Pagination Component */}
        <GodownStockAvailabilityPagination />
        {/* end:: Complaint Table-Pagination Component */}
      </div>
    </div>
  )
}

export {TablesWidget1}
