import {CustomTooltip} from '../../../routing/customtooltip'
import {KTSVG} from '../../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'

const CustomerFormHeader = () => {
  // const {itemIdForUpdate, setItemIdForUpdate} = ListPageData()
  const navigation = useNavigate()
  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}

        <div className='d-flex align-items-center'>
          <div
            className='btn btn-icon btn-sm btn-active-light-primary me-5'
            data-bs-dismiss='modal'
            aria-label='Close'
          >
            <span className='svg-icon svg-icon-2x' onClick={() => navigation('/customers')}>
              <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
            </span>
          </div>
          <h5 className='modal-title'>Customer Form</h5>
        </div>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default CustomerFormHeader
