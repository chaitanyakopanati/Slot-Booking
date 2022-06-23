import React from 'react'
import OfficeStockOutwardsFormHeader from '../Component/OfficeStockOutwardsFormHeader'
import OfficeStockOutwardsFormByCategory from './OfficeStockOutwardsFormByCategory'

const OfficeStockOutwardsFormWrapper = () => {
  return (
    <div>
      <div
        className='modal fade show d-block'
        id='kt_modal_add_user'
        role='dialog'
        tabIndex={-1}
        aria-modal='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-x1 mw-md-600px'>
          <div className='modal-content'>
            {/* begin::Form Header */}
            <OfficeStockOutwardsFormHeader />
            {/* end::Form Header */}

            {/* begin::Form Body */}
            <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
              <OfficeStockOutwardsFormByCategory />
            </div>
            {/* end::Form Body */}
          </div>
        </div>
      </div>
      {/* begin::Form Backdrop */}
      <div className='modal-backdrop fade show'></div>
      {/* end::Form Backdrop */}
    </div>
  )
}

export default OfficeStockOutwardsFormWrapper
