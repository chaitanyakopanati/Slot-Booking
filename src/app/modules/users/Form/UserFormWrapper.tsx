import React from 'react'
import UserFormHeader from '../component/UserFormHeader'
import UserFormByCategory from './UserFormByCategory'

function UserFormWrapper() {
  return (
    <div className='modal-content'>
            {/* begin::Form Header */}
            <UserFormHeader />
            {/* end::Form Header */}

            {/* begin::Form Body */}
            <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
              <UserFormByCategory />
            </div>
            {/* end::Form Body */}
          </div>
  )
}

export default UserFormWrapper