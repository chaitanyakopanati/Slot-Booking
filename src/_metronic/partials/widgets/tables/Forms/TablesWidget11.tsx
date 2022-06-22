/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTCard, KTSVG, toAbsoluteUrl} from '../../../../helpers'
// import ImageSelect from '../../../../app/images/error-profile.svg'
import ImageSelect from '../../../../../app/images/error-profile.svg'
import FormsHeader from './FormList/Table/FormsHeader'
import FormsTable from './FormList/Table/FormsTable'
import FormsPagination from './FormList/Table/FormsPagination'
import FormsFormWrapper from './Form/FormsFormWrapper'
import FormsFormModal from './Form/FormsFormModal'
import FormsFormViewModal from './FormList/Table/FormsFormViewModal'
import FormsCustomerViewModal from './FormList/Table/FormsCustomerViewModal'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  return (
    <div>
      <div className={`card ${className}`}>
        <div className='overflow-hidden'>
          <KTCard className='ms-5 me-5'>
            {/* begin:: Forms Header Component */}
            <FormsHeader />
            {/* end:: Forms Header Component */}

            {/* begin:: Forms Table Component */}
            <FormsTable />
            {/* end:: Forms Table Component */}
          </KTCard>
          {/* begin:: Forms Table-Pagination Component */}
          <FormsPagination />
          {/* end:: Forms Table-Pagination Component */}
          {/* begin:: Forms Add/Edit Form Component */}
          {/* <FormsFormWrapper /> */}
          <FormsFormModal />
          {/* {itemIdForUpdate !== undefined && <FormsFormWrapper />} */}
          {/* end:: Forms Add/Edit Form Component */}
          {/* begin:: Forms View Form Component */}
          <FormsFormViewModal />
          {/* {viewIdForUpdate && <FormsFormViewModal category={viewIdForUpdate} />}{' '} */}
          {/* end:: Forms View Form Component */}
          <FormsCustomerViewModal />
        </div>
      </div>
    </div>
  )
}

export {TablesWidget11}
