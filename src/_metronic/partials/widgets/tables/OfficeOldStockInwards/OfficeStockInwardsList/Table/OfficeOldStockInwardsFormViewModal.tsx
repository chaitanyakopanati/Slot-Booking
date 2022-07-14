import {Form, Formik} from 'formik'
import moment from 'moment'
import {FC, useEffect} from 'react'
import {CustomTooltip} from '../../../../../../../app/routing/customtooltip'
import {KTSVG} from '../../../../../../helpers'
import { ListPageData } from '../../OfficeOldStockInwardsContext'

type Props = {
  category: any
}

const OfficeOldStockInwardsFormViewModal: FC<Props> = ({category}) => {
  const {
    viewIdForUpdate,
    setItemIdForUpdate,
    setViewIdForUpdate,
    getDataAllTypeProduct,
    getDataAllTypeDeliveredBy,
    getDataAllTypeZone,
  } = ListPageData()

  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  const openEditModal = (inwardNo: any) => {
    setItemIdForUpdate(inwardNo)
  }

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }
  useEffect(() => {
    console.log('category', category)
    console.log(category.modifiedDate, '-----------')
    console.log(category.inwardNo, '======dddd')
    console.log('viewIdForUpdate', viewIdForUpdate)
  }, [category])
  return (
    <>
      {/* {console.log(category, "category")} */}
      {/* begin:: formik form */}
      <Formik
        enableReinitialize={true}
        initialValues={{
          id:category.id || '',
          inwardNo: category.inwardNo,
          inwardDate: moment(category.inwardDate).format('YYYY-MM-DD'),
          productId: category.productId || '',
          quantity: category.quantity || '',
          deliveredById: category.deliveredById || '',
          zoneId: category.zoneId || '',
          serialno: category.serialno || '',
          remark: category.remark || '',
          createByName: category.createByName || '',
          modifiedByName: category.modifiedByName || '',
          createdDate: moment(category.createdDate, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
          modifiedDate: moment(category.modifiedDate, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <Form
            id='kt_modal_add_user_form'
            onKeyDown={onKeyDown}
            className='form'
            onSubmit={props.handleSubmit}
            noValidate
          >
            <div
              className='modal fade show d-block'
              id='kt_modal_add_user'
              role='dialog'
              tabIndex={-1}
              aria-modal='true'
            >
              <div className='modal-dialog modal-dialog-centered modal-xl'>
                <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                  <div id='view-modal'>
                    <div className='modal-dialog modal-dialog-centered modal-xl mw-md-800px'>
                      <div className='modal-content'>
                        {/* begin:: View Modal Header */}
                        <div className='modal-header'>
                          <div className='d-flex align-items-center'>
                            <h5 className='modal-title'>View Office stock Inwards</h5>
                          </div>
                          <div className='ms-3'>
                            {/* begin::  Edit Bank button */}
                            <button
                              type='submit'
                              className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                              onClick={() => {
                                setViewIdForUpdate(undefined)

                                openEditModal(category.inwardNo)
                              }}
                            >
                              <KTSVG
                                path='/media/icons/duotune/art/art005.svg'
                                className='svg-icon-3'
                              />
                              Edit Office stock Inwards
                            </button>
                            {/* end::  Edit Bank button */}

                            {/* begin::  close icon */}
                            <CustomTooltip title='Close'>
                              <div
                                className='btn btn-icon btn-sm btn-active-icon-primary'
                                onClick={() => setViewIdForUpdate(undefined)}
                                style={{cursor: 'pointer'}}
                              >
                                <KTSVG
                                  path='/media/icons/duotune/arrows/arr061.svg'
                                  className='svg-icon-1'
                                />
                              </div>
                            </CustomTooltip>
                            {/* end::  close icon */}
                          </div>
                        </div>
                        {/* end:: View Modal Header */}

                        {/* begin:: View Modal body */}
                        <div className='modal-body'>
                          <div className='container-fluid p-0'>
                            <div className='row w-100 mx-0 mb-4 gy-4'>
                              <div className='col-md-6 col-12'>
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

                              <div className='col-md-6 col-12'>
                                <label className='form-label fw-bold'>Product</label>
                                <select
                                  className='form-select form-select-solid'
                                  {...props.getFieldProps('productId')}
                                  disabled
                                >
                                  <option value='' disabled>
                                    Select Product Type
                                  </option>
                                  {getDataAllTypeProduct.map((TypeData: any, index) => {
                                    return (
                                      <option key={index} value={TypeData.id}>
                                        {TypeData?.name}
                                      </option>
                                    )
                                  })}
                                </select>
                              </div>

                              <div className='col-md-6 col-12'>
                                <label className='form-label fw-bold'>Quantity</label>
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

                              <div className='col-md-6 col-12'>
                                <label className='form-label fw-bold'>Delivered by</label>
                                <select
                                  className='form-select form-select-solid'
                                  {...props.getFieldProps('deliveredById')}
                                  disabled
                                >
                                  <option value='' disabled>Select Delivered By</option>
                                  {getDataAllTypeDeliveredBy.map((TypeData, index) => {
                                    return (
                                      <option key={index} value={TypeData?.id}>
                                        {TypeData?.fullName}
                                      </option>
                                    )
                                  })}
                                </select>
                              </div>
                            </div>

                            <div className='col-lg-12'>
                              <label className='form-label fw-bold'>Zone </label>
                              <select
                                className='form-select form-select-solid'
                                {...props.getFieldProps('zoneId')}
                                disabled
                              >
                                <option value='' disabled>
                                  Select Zone Type
                                </option>
                                {getDataAllTypeZone.map((TypeData: any, index) => {
                                  //

                                  return (
                                    <option key={index} value={TypeData.id}>
                                      {TypeData?.name}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>

                            <div className='col-12 col-lg-12'>
                              <label className='form-label fw-bold'>Serial no</label>
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
                                <label className='form-label fw-bold'>Remark</label>
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
                              {/*begin:: Created By Filed */}
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold'>Created by</label>

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
                              {/*end:: Created By Filed */}

                              {/*begin:: Updated By Filed */}
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold'>Updated by</label>
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
                                <label className='form-label fw-bold'>Created at</label>
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
                                <label className='form-label fw-bold'>Updated at</label>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* begin:: View Modal Backdrop */}
            <div className='modal-backdrop fade show'></div>
            {/* end:: View Modal Backdrop */}
          </Form>
        )}
      </Formik>
      {/* begin:: formik form */}
    </>
  )
}
export default OfficeOldStockInwardsFormViewModal
