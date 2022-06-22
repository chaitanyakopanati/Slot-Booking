import React from 'react'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {KTSVG} from '../../../../../helpers'

const OfficeOldStockOutwardsFormHeader = () => {
  return (
    <div>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>
          Edit OfficeOldStockOutwards/Create OfficeOldStockOutwards
          {/* {itemIdForUpdate ? 'Edit Bank' : 'Create Bank'} */}
        </h2>
        {/* end::Modal title */}

        {/* begin::Close Icon */}
        <CustomTooltip title='Close'>
          <div
            className='btn btn-icon btn-sm btn-active-icon-primary'
            // onClick={() => setItemIdForUpdate(undefined)}
            style={{cursor: 'pointer'}}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </div>
        </CustomTooltip>
        {/* end::Close Icon*/}
      </div>
    </div>
  )
}

export default OfficeOldStockOutwardsFormHeader
