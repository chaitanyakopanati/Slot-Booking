import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ListPageData} from '../../OfficeStockInwardsContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import {Formik} from 'formik'

type Props = {
  category: any
}
function onKeyDown(keyEvent: any) {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault()
  }
}

const OfficeStockOutwardsFormViewModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, setViewIdForUpdate} = ListPageData()
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          id: category.data?.id || '',
          inwardNo: category.data?.inwardNo || '',
          inwardDate: moment(category.data?.inwardDate).format('YYYY-MM-DD'),
          productName: category.data?.productName || 0,
          quantity: category.data?.quantity || '',
          deliveredByName: category.data?.deliveredByName || '',
          zoneName: category.data?.zoneName || '',
          serialno: category.data?.serialno || '',
          remark: category.data?.remark || '',
          createByName: category.data?.createByName || '',
          modifiedByName: category.data?.modifiedByName || '',
          createdDate: moment
            .utc(category.data?.createdDate, 'YYYY-MM-DD,h:mm a')
            .local()
            .format('YYYY-MM-DD,h:mm a'),
          modifiedDate: moment
            .utc(category.data?.modifiedDate, 'YYYY-MM-DD,h:mm a')
            .local()
            .format('YYYY-MM-DD,h:mm a'),
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
                    <span
                      className='svg-icon svg-icon-2x'
                      onClick={() => navigate('/stocks/office-stock-inwards')}
                    >
                      <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                    </span>
                    <h5 className='modal-title'>View Office Stock Inward</h5>
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
                        navigate(`/stocks/office-stock-inwards/inwardsform/${category.data.id}`)
                        // openEditModal(category.id)
                      }}
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      Edit office stock inward
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
                    <div className='col-md-3'>
                      <label className='form-label fw-bold '>Inward date </label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='date'
                        value={props.values.inwardDate}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        name='inwardDate'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>Product</label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.productName}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        name='productName'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className='col-md-3'>
                      <label className='form-label fw-bold required'>Quantity</label>
                      <input
                        placeholder='Quantity'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.quantity}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        name='quantity'
                        autoComplete='off'
                        disabled
                      />
                    </div>

                    <div className=' col-md-3'>
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

                    <div className='col-12'>
                      <label className='form-label fw-bold required'>Delivered by</label>
                      <input
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.deliveredByName}
                        onBlur={props.handleBlur}
                        name='deliveredByName'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>

                  <div className='col-12 col-lg-12'>
                    <label className='form-label fw-bold '>Serial no</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      value={props.values.serialno}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='serialno'
                      placeholder='Serial no'
                      disabled
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-12'>
                    <div className='col'>
                      <label className='form-label fw-bold required'>Remark</label>
                      <input
                        placeholder='Remark'
                        className='form-control form-control-lg form-control-solid'
                        value={props.values.remark}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        type='text'
                        name='remark'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>

                  <div className='row mb-4'>
                    {props.values.createByName ? (
                      <div className='col-lg-6'>
                        <label className='form-label fw-bold required'>Created by</label>
                        <input
                          className='form-control form-control-lg'
                          type='text'
                          placeholder='createByName'
                          value={props.values.createByName}
                          onChange={props.handleChange}
                          name='createByName'
                          autoComplete='off'
                          disabled
                        />
                      </div>
                    ) : (
                      <div className='col-lg-6'>
                        <label className='form-label fw-bold required'>Created by</label>
                        <input
                          className='form-control form-control-lg'
                          type='text'
                          placeholder='createByName'
                          onChange={props.handleChange}
                          name='createByName'
                          autoComplete='off'
                          disabled
                        />
                      </div>
                    )}
                    {/*end:: Created By Filed */}

                    {/*begin:: Updated By Filed */}
                    <div className='col-lg-6'>
                      <label className='form-label fw-bold required'>Updated by</label>
                      <input
                        className='form-control form-control-lg'
                        type='text'
                        placeholder='modifiedByName'
                        value={props.values.modifiedByName}
                        onChange={props.handleChange}
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
                        onChange={props.handleChange}
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
                        onChange={props.handleChange}
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

export default OfficeStockOutwardsFormViewModal
