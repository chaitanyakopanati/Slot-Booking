import {ListPageData} from '../OfficeStockOutwardsContext'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'

const OfficeStockOutwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()
  const navigation = useNavigate()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <div className='d-flex align-items-center'>
          <span
            className='svg-icon svg-icon-2x'
            onClick={() => navigation('/stocks/office-stock-outwards')}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
          </span>
          <h2 className='modal-title fw-bolder'>
            {itemIdForUpdate === 'add'
              ? 'Create Office Stock Outward'
              : 'Edit Office Stock Outward'}
          </h2>
        </div>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default OfficeStockOutwardsFormHeader
