/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import OfficeStockAvailabilityHeader from './OfficeStockAvailabilityList/Table/OfficeStockAvailabilityHeader'
import OfficeStockAvailabilityTable from './OfficeStockAvailabilityList/Table/OfficeStockAvailabilityTable'
import OfficeStockAvailabilityPagination from './OfficeStockAvailabilityList/Table/OfficeStockAvailabilityPagination'

type Props = {
  className: string
}

const TablesWidget6: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      <div className='overflow-hidden'>
        <KTCard className='ms-5 me-5'>
          {/* begin:: Complaint Header Component */}
          <OfficeStockAvailabilityHeader />
          {/* end:: Complaint Header Component */}

          {/* begin:: Complaint Table Component */}
          <OfficeStockAvailabilityTable />
          {/* end:: Complaint Table Component */}
        </KTCard>
        {/* begin:: Complaint Table-Pagination Component */}
        <OfficeStockAvailabilityPagination />
        {/* end:: Complaint Table-Pagination Component */}
      </div>
    </div>
  )
}

export {TablesWidget6}
