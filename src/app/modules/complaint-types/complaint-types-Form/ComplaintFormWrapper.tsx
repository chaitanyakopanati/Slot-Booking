import {useEffect} from 'react'
import ComplaintFormHeader from './form/ComplaintFormHeader'
import ComplaintFormByCategory from './form/ComplaintFormByCategory'

function ComplaintFormWrapper() {
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
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-500px'>
          <div className='modal-content'>
            {/* begin::Form Header */}
            <ComplaintFormHeader />
            {/* end::Form Header */}

            {/* begin::Form Body */}
            <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
              <ComplaintFormByCategory />
            </div>
            {/* end::Form Body */}
          </div>
        </div>
      </div>
      {/* begin::Form Backdrop */}
      <div className='modal-backdrop fade show'></div>
      {/* end::Form Backdrop */}
    </>
  )
}

export default ComplaintFormWrapper
