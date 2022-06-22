import {KTSVG} from '../../../../../helpers'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'

import React from 'react'

const ComplaintFormHeader = () => {
  return (
    <div>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>
          Edit Complaint/Create Complaint
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

export default ComplaintFormHeader
