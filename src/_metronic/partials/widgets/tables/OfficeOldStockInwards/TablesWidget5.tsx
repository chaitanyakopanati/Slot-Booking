/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import OfficeOldStockInwardsHeader from './OfficeOldStockInwardsList/Table/OfficeOldStockInwardsHeader'
import OfficeOldStockInwardsTable from './OfficeOldStockInwardsList/Table/OfficeOldStockInwardsTable'
import OfficeOldStockInwardsPagination from './OfficeOldStockInwardsList/Table/OfficeOldStockInwardsPagination'
import OfficeOldStockInwardsFormModal from './Form/OfficeOldStockInwardsFormModal'
import OfficeOldStockInwardsFormViewModal from './OfficeOldStockInwardsList/Table/OfficeOldStockInwardsFormViewModal'

type Props = {
  className: string
}

const TablesWidget5: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: OfficeOldStockInwards Header Component */}
            <OfficeOldStockInwardsHeader />
            {/* end:: OfficeOldStockInwards Header Component */}

            {/* begin:: OfficeOldStockInwards Table Component */}
            <OfficeOldStockInwardsTable />
            {/* end:: OfficeOldStockInwards Table Component */}
          </KTCard>
          {/* begin:: OfficeOldStockInwards Table-Pagination Component */}
          <OfficeOldStockInwardsPagination />
          {/* end:: OfficeOldStockInwards Table-Pagination Component */}
          {/* begin:: OfficeOldStockInwards Add/Edit Form Component */}
          {/* <OfficeOldStockInwardsFormWrapper /> */}
          <OfficeOldStockInwardsFormModal />
          {/* {itemIdForUpdate !== undefined && <OfficeOldStockInwardsFormWrapper />} */}
          {/* end:: OfficeOldStockInwards Add/Edit Form Component */}
          {/* begin:: OfficeOldStockInwards View Form Component */}
          <OfficeOldStockInwardsFormViewModal />
          {/* {viewIdForUpdate && <OfficeOldStockInwardsFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: OfficeOldStockInwards View Form Component */}
        </div>
      </div>
    </div>
  )
}

export {TablesWidget5}
