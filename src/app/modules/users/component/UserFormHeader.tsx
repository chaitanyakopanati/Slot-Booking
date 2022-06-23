import {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
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

        <h2 className='fw-bolder'>
        <span className='svg-icon svg-icon-2x'
         onClick={() =>navigation(-1)}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
        </span>
        <h2 className='fw-bolder'>{itemIdForUpdate ? 'Edit User' : 'Create User'}</h2>
        </h2>
        {/* end::Modal title */}
      </div>
    </>
  )
}
export default UserFormHeader
