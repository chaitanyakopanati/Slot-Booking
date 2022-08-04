import {ListPageData} from '../OfficeOldStockInwardsContext'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'

const OfficeOldStockInwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()
  const navigation = useNavigate()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <div className='d-flex align-items-center'>
          <span
            className='svg-icon svg-icon-2x'
            onClick={() => navigation('/stocks/office-old-stock-inwards')}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
            {/* <KTSVG path='/media/icons/duotune/arrows/arr096.svg' /> */}
          </span>

          <h2 className='modal-title fw-bolder'>
            {itemIdForUpdate === 'add'
              ? 'Create Office Old Stock Inward'
              : 'Edit Office Old Stock Inward'}
          </h2>
        </div>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default OfficeOldStockInwardsFormHeader
