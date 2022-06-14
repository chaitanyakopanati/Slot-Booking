
import { useEffect } from 'react'
import UserFormModalHeader from '../User-Categories-Form/component/UserFormModalHeader'
import UserFormModalWrapper from './UserFormModalWrapper'


function UserFormWrapper() {
 
   {/* begin:: model open-close */}
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  return (
    <>
      <div
        className='modal fade show d-block'
        id='kt_modal_add_user'
        role='dialog'
        tabIndex={-1}
        aria-modal='true'
      >
        {/* begin::Modal dialog */}
        <div className='modal-dialog modal-dialog-centered mw-600px'>
          {/* begin::Modal content */}
          <div className='modal-content'>
            <UserFormModalHeader />
            {/* begin::Modal body */}
            <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
            <UserFormModalWrapper />
            </div>
            {/* end::Modal body */}     
          </div>
          {/* end::Modal content */}
        </div>
        {/* end::Modal dialog */}
      </div>
      {/* begin::Modal Backdrop */}
      <div className='modal-backdrop fade show'></div>

    </>
  )
}

export default UserFormWrapper
