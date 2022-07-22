import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../helpers'
import {ListPageData} from '../OfficeStockInwardsContext'

const OfficeStockInwardsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()
  const navigate = useNavigate()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>
        <span className='svg-icon svg-icon-2x' onClick={() => navigate(-1)}>
          <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
        </span>
          {itemIdForUpdate === 'add' ? 'Create Office stock inwards' : 'Edit Office stock inwards'}
        </h2>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default OfficeStockInwardsFormHeader
