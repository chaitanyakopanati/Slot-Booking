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

          <h2 className='modal-title fw-bolder d-flex justify-content-between'>
            {itemIdForUpdate === 'add' ? 'Create User' : 'Edit User'}
          </h2>
        </div>
        {itemIdForUpdate === 'add' ? (
          ''
        ) : (
          <button
            className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
            onClick={() => {
              navigation('password')
            }}
          >
            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
            Edit Password
          </button>
        )}
        {/* end::Modal title */}
      </div>
    </>
  )
}
export default UserFormHeader
