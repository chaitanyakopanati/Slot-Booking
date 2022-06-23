import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import {CustomTooltip} from '../../../routing/customtooltip'
import {ListPageData} from '../UserContext'

const UserFormHeader = () => {
  const {itemIdForUpdate} = ListPageData()

  return (
    <>
      <div className='modal-header'>
        {/* begin::Modal title */}
        <h2 className='fw-bolder'>{itemIdForUpdate ? 'Edit User' : 'Create User'}</h2>
        {/* end::Modal title */}
      </div>
    </>
  )
}
export default UserFormHeader
