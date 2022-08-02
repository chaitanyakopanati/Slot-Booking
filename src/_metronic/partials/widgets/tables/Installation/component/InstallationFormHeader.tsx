import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../helpers'
import {ListPageData} from '../InstallationContext'

const InstallationFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()
  const navigation = useNavigate()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <div className='d-flex align-items-center'>
          <span className='svg-icon svg-icon-2x' onClick={() => navigation('/installations')}>
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
          </span>
          <h2 className='modal-title fw-bolder'>
            {itemIdForUpdate === 'add' ? 'Create installations' : 'Edit installations'}
          </h2>
        </div>

        {/* end::Modal title */}
      </div>
    </>
  )
}
export default InstallationFormHeader
