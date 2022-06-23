/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'
import OfficeStockInwardsHeader from './OfficeStockInwardsList/Table/OfficeStockInwardsHeader'
import OfficeStockInwardsTable from './OfficeStockInwardsList/Table/OfficeStockInwardsTable'
import OfficeStockInwardsPagination from './OfficeStockInwardsList/Table/OfficeStockInwardsPagination'
import OfficeStockInwardsFormModal from './Form/OfficeStockInwardsFormModal'
import OfficeStockInwardsFormViewModal from './OfficeStockInwardsList/Table/OfficeStockInwardsFormViewModal'

type Props = {
  className: string
}

const TablesWidget8: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: OfficeStockInwards Header Component */}
            <OfficeStockInwardsHeader />
            {/* end:: OfficeStockInwards Header Component */}

            {/* begin:: OfficeStockInwards Table Component */}
            <OfficeStockInwardsTable />
            {/* end:: OfficeStockInwards Table Component */}
          </KTCard>
          {/* begin:: OfficeStockInwards Table-Pagination Component */}
          <OfficeStockInwardsPagination />
          {/* end:: OfficeStockInwards Table-Pagination Component */}
          {/* begin:: OfficeStockInwards Add/Edit Form Component */}
          {/* <OfficeStockInwardsFormWrapper /> */}
          <OfficeStockInwardsFormModal />
          {/* {itemIdForUpdate !== undefined && <OfficeStockInwardsFormWrapper />} */}
          {/* end:: OfficeStockInwards Add/Edit Form Component */}
          {/* begin:: OfficeStockInwards View Form Component */}
          <OfficeStockInwardsFormViewModal />
          {/* {viewIdForUpdate && <OfficeStockInwardsFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: OfficeStockInwards View Form Component */}
        </div>
      </div>
    </div>
  )
}

export {TablesWidget8}
