import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import Userservice from '../../helperUser/ApiDatarequestUser'
import {useLoader} from '../../../loader/LoaderContext'
import {ListPageData} from '../../UserContext'
import {KTSVG} from '../../../../../_metronic/helpers'
import moment from 'moment'
import {CustomTooltip} from '../../../../routing/customtooltip'

type Props = {
  category: any
}

const UserFormViewModal: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setViewIdForUpdate,
    viewIdForUpdate,
    itemIdForUpdate,
    getDataAllType,
    getDataAllTypeRole,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    fullName: category.data?.fullName || '',
    firstname: category.data?.firstname || '',
    lastname: category.data?.lastname || '',
    username: category.data?.username || '',
    email: category.data?.email || '',
    phone: category.data?.phone || '',
    zoneId: category.data?.zoneId || '',
    zoneName: category.data?.zoneName || '',
    roleId: category.data?.roleId || '',
    roleName: category.data?.roleName || '',
    createdby: category.data.createdByName || '',
    modifyby: category.data.modifyByName || '',
    createdAt: moment
      .utc(category.data.createdAt, 'YYYY-MM-DD,h:mm a')
      .local()
      .format('YYYY-MM-DD,h:mm a'),
    modifyAt: moment
      .utc(category.data.modifyAt, 'YYYY-MM-DD,h:mm a')
      .local()
      .format('YYYY-MM-DD,h:mm a'),
  })

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <div className='d-flex flex-column scroll-y me-n7 pe-7'>
        {/* begin: input firstname Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: View Modal Header */}
          <div className='modal-header'>
            <div className='d-flex align-items-center'>
              <span className='svg-icon svg-icon-2x' onClick={() => navigate('/master/users')}>
                <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
              </span>
              <h5 className='modal-title'>View User</h5>
            </div>
            <div className='ms-3'>
              {/* begin::  Edit User button */}
              <button
                // type='submit'
                className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                onClick={() => {
                  setViewIdForUpdate(undefined)
                  navigate(`/master/users/form/${category.data.id}`)
                }}
              >
                <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                Edit User
              </button>
            </div>
          </div>
          {/* end:: View Modal Header */}
          {/*  */}
          <div className='col-lg-12'>
            <label className='fw-bold fs-6 mb-2 required'>FullName</label>
            <div className='input-group'>
              <input
                placeholder='FullName'
                value={initialvalues.fullName}
                type='text'
                name='fullName'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>
          </div>

          {/* begin: input lastname Filed */}
        </div>

        {/* begin: input username Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Username :</label>
            <input
              placeholder='username'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.username}
              type='text'
              disabled
              readOnly
            />
          </div>

          {/* begin: input email Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Email :</label>
            <input
              placeholder='email'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.email}
              type='text'
              disabled
              readOnly
            />
          </div>
        </div>

        {/* begin: input phone Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold required'>Mobile no:</label>
            <input
              placeholder='Mobile no.'
              className='form-control form-control-lg form-control-solid'
              type='number'
              value={initialvalues.phone}
              disabled
              readOnly
            />
          </div>
        </div>

        {/*begin:: Zone*/}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold required'>Zone:</label>
            <input
              placeholder='Zone.'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.zoneName}
              disabled
              readOnly
            />
          </div>
        </div>

        {/*begin:: role*/}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold required'>Role:</label>
            <input
              placeholder='Role'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.roleName}
              disabled
              readOnly
            />
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/*begin:: Created By Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Created by</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.createdby}
              name='createdby'
              placeholder='CreatedBy'
              autoComplete='off'
              disabled
            />
          </div>
          {/*end:: Created By Filed */}

          {/*begin:: Updated By Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Updated by</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.modifyby}
              name='modifyby'
              placeholder='UpdatedBy'
              autoComplete='off'
              disabled
            />
          </div>
          {/*end:: Updated By Filed */}
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: Created At Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Created at</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.createdAt}
              name='createdAt'
              placeholder='CreatedAt'
              autoComplete='off'
              disabled
            />
          </div>
          {/* end:: Created At Filed */}

          {/* begin:: Updated At Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold required'>Updated at</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.modifyAt}
              name='modifyAt'
              placeholder='UpdatedAt'
              autoComplete='off'
              disabled
            />
          </div>
          {/* end:: Updated At Filed */}
        </div>
      </div>
    </>
  )
}

export default UserFormViewModal
