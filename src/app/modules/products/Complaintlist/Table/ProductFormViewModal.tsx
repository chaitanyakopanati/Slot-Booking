import {Form, Formik} from 'formik'
import moment from 'moment'
import {FC, useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {CustomTooltip} from '../../../../routing/customtooltip'
import {ListPageData} from '../../ProductListContext'

type Props = {
  category: any
}
const ProductFormViewModal: FC<Props> = ({category}) => {
  const {viewIdForUpdate, setItemIdForUpdate, setViewIdForUpdate} = ListPageData()

  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.id,
          name: category.name || '',
          unit: category.unit || '',
          createdby: category.createdByName || '',
          modifyby: category.modifyByName || '',
          createdAt: moment
            .utc(category.createdAt, 'YYYY-MM-DD,h:mm a')
            .local()
            .format('YYYY-MM-DD,h:mm a'),
          modifyAt: moment
            .utc(category.modifyAt, 'YYYY-MM-DD,h:mm a')
            .local()
            .format('YYYY-MM-DD,h:mm a'),
        }}
        onSubmit={(values) => {}}
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
                    <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
                      <div className='modal-content'>
                        {/* begin:: View Modal Header */}
                        <div className='modal-header'>
                          <div className='d-flex align-items-center'>
                            <h5 className='modal-title'>View product</h5>
                          </div>
                          <div className='ms-3'>
                            {/* begin::  Edit Product button */}
                            <button
                              type='submit'
                              className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                              onClick={() => {
                                setViewIdForUpdate(undefined)

                                openEditModal(category.id)
                              }}
                            >
                              <KTSVG
                                path='/media/icons/duotune/art/art005.svg'
                                className='svg-icon-3'
                              />
                              Edit product
                            </button>
                            {/* end::  Edit Product button */}

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
                            {/*begin:: Name Filed */}
                            <div className='row mb-4'>
                              <div className='col-lg-12'>
                                <label className=' fw-bold fs-6 mb-2 required'>Name</label>
                                <input
                                  placeholder='Name'
                                  value={props.values.name}
                                  onChange={props.handleChange}
                                  type='text'
                                  name='name'
                                  className='form-control form-control-lg'
                                  autoComplete='off'
                                  disabled
                                />
                              </div>
                            </div>
                            {/*end:: Name Filed */}

                            {/*begin:: Unit Filed */}
                            <div>
                              <div className='row mb-4'>
                                <div className='col-lg-12'>
                                  <label className=' fw-bold fs-6 mb-2 required'>unit</label>
                                  <div className='input-group'>
                                    <input
                                      className='form-control form-control-lg'
                                      type='string'
                                      placeholder='unit'
                                      value={props.values.unit}
                                      onChange={props.handleChange}
                                      name='unit'
                                      autoComplete='off'
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*begin:: Unit Filed */}

                            {/*begin:: Created By Filed */}
                            <div className='row mb-4'>
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold required'>Created by</label>
                                <input
                                  className='form-control form-control-lg'
                                  type='text'
                                  placeholder='createdby'
                                  value={props.values.createdby}
                                  onChange={props.handleChange}
                                  name='createdby'
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
                                  value={props.values.modifyby}
                                  onChange={props.handleChange}
                                  name='modifyby'
                                  placeholder='modifyby'
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
                                  placeholder='createdAt'
                                  value={props.values.createdAt}
                                  onChange={props.handleChange}
                                  name='createdAt'
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
                                  placeholder='modifyAt'
                                  value={props.values.modifyAt}
                                  onChange={props.handleChange}
                                  name='modifyAt'
                                  autoComplete='off'
                                  disabled
                                />
                              </div>
                              {/* end:: Updated At Filed */}
                            </div>
                          </div>
                        </div>
                        {/* end::View Modal body */}
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
      {/* end:: View form */}
    </>
  )
}

export default ProductFormViewModal
