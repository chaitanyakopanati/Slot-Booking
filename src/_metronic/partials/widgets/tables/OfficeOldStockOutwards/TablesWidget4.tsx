/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../../app/images/error-profile.svg'
import OfficeOldStockOutwardsHeader from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsHeader'
import OfficeOldStockOutwardsTable from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsTable'
import OfficeOldStockOutwardsPagination from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsPagination'
import OfficeOldStockOutwardsFormModal from './Form/OfficeOldStockOutwardsFormModal'
import OfficeOldStockOutwardsFormViewModal from './OfficeOldStockOutwardsList/Table/OfficeOldStockOutwardsFormViewModal'

type Props = {
  className: string
}

const TablesWidget4: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: OfficeOldStockOutwards Header Component */}
            <OfficeOldStockOutwardsHeader />
            {/* end:: OfficeOldStockOutwards Header Component */}

            {/* begin:: OfficeOldStockOutwards Table Component */}
            <OfficeOldStockOutwardsTable />
            {/* end:: OfficeOldStockOutwards Table Component */}
          </KTCard>
          {/* begin:: OfficeOldStockOutwards Table-Pagination Component */}
          <OfficeOldStockOutwardsPagination />
          {/* end:: OfficeOldStockOutwards Table-Pagination Component */}
          {/* begin:: OfficeOldStockOutwards Add/Edit Form Component */}
          {/* <OfficeOldStockOutwardsFormWrapper /> */}
          <OfficeOldStockOutwardsFormModal />
          {/* {itemIdForUpdate !== undefined && <OfficeOldStockOutwardsFormWrapper />} */}
          {/* end:: OfficeOldStockOutwards Add/Edit Form Component */}
          {/* begin:: OfficeOldStockOutwards View Form Component */}
          <OfficeOldStockOutwardsFormViewModal />
          {/* {viewIdForUpdate && <OfficeOldStockOutwardsFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: OfficeOldStockOutwards View Form Component */}
        </div>
      </div>
    </div>
  )
}

export {TablesWidget4}
