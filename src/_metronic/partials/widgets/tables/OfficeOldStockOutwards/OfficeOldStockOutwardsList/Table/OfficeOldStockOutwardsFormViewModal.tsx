import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {Formik} from 'formik'
import { ListPageData } from '../../OfficeOldStockOutwardsContext'

type Props = {
  category: any
}
function onKeyDown(keyEvent: any) {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault()
  }
}

const OfficeOldStockOutwardsFormViewModal: FC<Props> = ({category}) => {
  const {
    setViewIdForUpdate
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          id: category.data?.id || '',
          outwardDate: moment(category.outwardDate).format('YYYY-MM-DD'),
          productName: category.data?.productName || 0,
          quantity: category.data?.quantity || '',
          zoneName: category.data?.zoneName || '',
          username: category.data?.username || '',
          reason: category.data?.reason || '',
          technicianName: category.data?.technicianName || '',
          serialno: category.data?.serialno || '',
          remark: category.data?.remark || '',
          createByName: category.data?.createByName || '',
          modifiedByName: category.data?.modifiedByName || '',
          createdDate: moment(category.data?.createdDate, 'YYYY-MM-DD,h:mm a').format(
            'YYYY-MM-DD,h:mm a'
          ),
          modifiedDate: moment(category.data?.modifiedDate, 'YYYY-MM-DD,h:mm a').format(
            'YYYY-MM-DD,h:mm a'
          ),
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <form
            id='kt_modal_add_user_form'
            onKeyDown={onKeyDown}
            className='form'
            onSubmit={props.handleSubmit}
            noValidate
          >
            {/* begin::formik Add/Edit form */}
            <div className='d-flex flex-column scroll-y me-n7 pe-7'>
              {/* begin: input firstname Filed */}
              <div className='row w-100 mx-0 mb-4 gy-4'>
                {/* begin:: View Modal Header */}
                <div className='modal-header'>
                  <div className='d-flex align-items-center'>
                    <span className='svg-icon svg-icon-2x' onClick={() => navigate(-1)}>
                      <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                    </span>
                    <h5 className='modal-title'>View Old office stock outwards</h5>
                  </div>
                  <div className='ms-3'>
                    {/* begin::  Edit User button */}
                    <button
                      // type='submit'
                      className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                      onClick={() => {
                        setViewIdForUpdate(undefined)
                        console.log('tttttttttttttttttttttttttttt', category)
                        console.log('tttttttttttttttttttttttttttt', category.data.id)
                        navigate(`/stocks/office-old-stock-outwards/OutwardsOldform/${category.data.id}`)
                        // openEditModal(category.id)
                      }}
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      Edit Old office stock outwards
                    </button>
                    {/* end::  Edit User button */}
                  </div>
                </div>
                {/* end:: View Modal Header */}
              </div>

              {/* begin:: View Modal body */}
              <div className='modal-body'>
                <div className='container-fluid p-0'>
                  <div className='row w-100 mx-0 mb-4 gy-4'>
                    <div className='col-md-6 col-12'>
                      <label className='form-label fw-bold required'>Outward date </label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='date'
                        value={props.values.outwardDate}
                        onBlur={props.handleBlur}
                        name='outwardDate'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className='col-md-6 col-12'>
                      <label className='form-label fw-bold required'>Product</label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.productName}
                        onBlur={props.handleBlur}
                        name='productName'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className='col-md-6 col-12'>
                      <label className='form-label fw-bold required'>Quantity</label>
                      <input
                        placeholder='Quantity'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.quantity}
                        onBlur={props.handleBlur}
                        name='quantity'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className='col-lg-6'>
                    <label className='form-label fw-bold required'>Technician</label>
                    <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.technicianName}
                        onBlur={props.handleBlur}
                        name='technicianName'
                        autoComplete='off'
                        disabled
                      />
                  </div>
                  </div>

                  <div className='row w-100 mx-0 mb-4 gy-4'>
                    <div className='col-6'>
                      <label className='form-label fw-bold required'>Username</label>
                      <input
                        placeholder='Solved at'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.username}
                        onBlur={props.handleBlur}
                        name='username'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className='col-6'>
                      <label className='form-label fw-bold required'>reason</label>
                      <input
                        placeholder='reason'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.reason}
                        onBlur={props.handleBlur}
                        name='reason'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <label className='form-label fw-bold required'>Zone </label>
                    <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.zoneName}
                        onBlur={props.handleBlur}
                        name='zoneName'
                        autoComplete='off'
                        disabled
                      />
                  </div>

                  <div className='col-12 col-lg-12'>
                    <label className='form-label fw-bold required'>Serial no</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      value={props.values.serialno}
                      onBlur={props.handleBlur}
                      name='serialno'
                      placeholder='Serial no'
                      disabled
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-12'>
                    <div className='col'>
                      <label className='form-label fw-bold '>Remark</label>
                      <input
                        placeholder='Remark'
                        className='form-control form-control-lg form-control-solid'
                        value={props.values.remark}
                        onBlur={props.handleBlur}
                        type='text'
                        name='remark'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>

                  <div className='row mb-4'>
                    {/*begin:: Created By Filed */}
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold '>Created by</label>

                      <input
                        className='form-control form-control-lg'
                        type='text'
                        placeholder='createByName'
                        value={props.values.createByName}
                        name='createByName'
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
                        placeholder='modifiedByName'
                        value={props.values.modifiedByName}
                        name='modifiedByName'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                    {/*end:: Updated By Filed */}
                  </div>

                  <div className='row mb-4'>
                    {/* begin:: Created At Filed */}

                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>Created at</label>
                      <input
                        className='form-control form-control-lg'
                        type='text'
                        placeholder='createdDate'
                        value={props.values.createdDate}
                        name='createdDate'
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
                        placeholder='modifiedDate'
                        value={props.values.modifiedDate}
                        name='modifiedDate'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                    {/* end:: Updated At Filed */}
                  </div>
                </div>
              </div>
              {/* end:: View Modal body */}
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default OfficeOldStockOutwardsFormViewModal
