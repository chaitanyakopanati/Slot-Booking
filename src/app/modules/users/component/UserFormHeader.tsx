import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import {CustomTooltip} from '../../../routing/customtooltip'
import {ListPageData} from '../UserContext'

const UserFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()
  const navigation = useNavigate()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <div className='d-flex align-items-center'>
          <span className='svg-icon svg-icon-2x' onClick={() => navigation('/master/users')}>
            <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
            {/* <KTSVG path='/media/icons/duotune/arrows/arr096.svg' /> */}
          </span>

          <h2 className='modal-title fw-bolder'>
            {itemIdForUpdate === 'add' ? 'Create User' : 'Edit User'}
          </h2>
        </div>
        {/* end::Modal title */}
      </div>
    </>
  )
}
export default UserFormHeader
