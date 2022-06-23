/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import OfficeOldStockAvailabilityHeader from './OfficeOldStockAvailabilityList/Table/OfficeOldStockAvailabilityHeader'
import OfficeOldStockAvailabilityTable from './OfficeOldStockAvailabilityList/Table/OfficeOldStockAvailabilityTable'
import OfficeOldStockAvailabilityPagination from './OfficeOldStockAvailabilityList/Table/OfficeOldStockAvailabilityPagination'

type Props = {
  className: string
}

const TablesWidget3: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: Complaint Header Component */}
            <OfficeOldStockAvailabilityHeader />
            {/* end:: Complaint Header Component */}

            {/* begin:: Complaint Table Component */}
            <OfficeOldStockAvailabilityTable />
            {/* end:: Complaint Table Component */}
          </KTCard>
          {/* begin:: Complaint Table-Pagination Component */}
          <OfficeOldStockAvailabilityPagination />
          {/* end:: Complaint Table-Pagination Component */}
        </div>
      </div>
    </div>
  )
}

export {TablesWidget3}
