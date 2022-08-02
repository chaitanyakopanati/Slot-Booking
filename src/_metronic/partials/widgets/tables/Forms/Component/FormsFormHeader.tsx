import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../helpers'
import {ListPageData} from '../FormsContext'

const FormsFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()
  const navigation = useNavigate()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <div className='d-flex align-items-center'>
          <span className='svg-icon svg-icon-2x' onClick={() => navigation('/forms')}>
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
          </span>
          <h2 className='modal-title fw-bolder'>
            {itemIdForUpdate === 'add' ? 'Create Forms' : 'Edit Forms'}
          </h2>
        </div>

        {/* end::Modal title */}
      </div>
    </>
  )
}

export default FormsFormHeader
