import {KTSVG} from '../../../../_metronic/helpers'
import {CustomTooltip} from '../../../routing/customtooltip'

const ComplaintFormHeader = () => {
  return (
    <div>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>Edit Complaint/Create Complaint</h2>
        {/* end::Modal title */}

        {/* begin::Close Icon */}
        <CustomTooltip title='Close'>
          <div className='btn btn-icon btn-sm btn-active-icon-primary' style={{cursor: 'pointer'}}>
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </div>
        </CustomTooltip>
        {/* end::Close Icon*/}
      </div>
    </div>
  )
}

export default ComplaintFormHeader
