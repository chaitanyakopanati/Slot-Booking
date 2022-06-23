import {Form, Formik} from 'formik'
import moment from 'moment'
import {FC, useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {CustomTooltip} from '../../../../routing/customtooltip'
import {ListPageData} from '../../UserContext'

type Props = {
  category: any
}

const UserFormViewModal: FC<Props> = ({category}) => {
  const {viewIdForUpdate, setItemIdForUpdate, setViewIdForUpdate, getDataAllType} = ListPageData()

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
  useEffect(() => {
    console.log('category', category)
    console.log(category.modifyAt, '-----------')
    console.log(category.id, '======dddd')
    console.log('viewIdForUpdate', viewIdForUpdate)
  }, [category])
  return (
    <>
      {/* {console.log(category, "category")} */}
      {/* begin:: View form */}
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.id,
          fullName: category.data.fullName || '',
          username: category.username || '',
          email: category.email || '',
          phone: category.phone || '',
          createdby: category.createdby || '',
          modifyby: category.modifyby || '',
          zoneId: category.zoneName || '',
          roleId: category.roleName || '',
          createdAt: moment(category.createdAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
          modifyAt: moment(category.modifyAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
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
                    <div className='modal-dialog modal-dialog-centered modal-xl'>
                      <div className='modal-content'>
                        {/* begin:: View Modal Header */}
                        <div className='modal-header'>
                          <div className='d-flex align-items-center'>
                            <h5 className='modal-title'>View User</h5>
                          </div>
                          <div className='ms-3'>
                            {/* begin::  Edit User button */}
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
                              Edit User
                            </button>
                            {/* end::  Edit User button */}

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
                            {/*begin:: fullName Filed */}
                            <div className='row mb-4'>
                              <label className='fw-bold fs-6 mb-2'>FullName</label>
                              <div className='input-group'>
                                <input
                                  placeholder='FullName'
                                  value={props.values.fullName}
                                  onChange={props.handleChange}
                                  type='text'
                                  name='fullName'
                                  className='form-control form-control-lg'
                                  autoComplete='off'
                                  disabled
                                />
                              </div>
                            </div>
                            {/*end:: fullName Filed */}

                            {/*begin:: Username*/}
                            <div className='row w-100 mx-0 mb-4 gy-4'>
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold'>Username :</label>
                                <input
                                  placeholder='Username'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.username}
                                  onChange={props.handleChange}
                                  type='text'
                                  name='username'
                                  autoComplete='off'
                                  disabled
                                />
                              </div>

                            {/*begin:: Username*/}
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold'>Email :</label>
                                <input
                                  placeholder='Email'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.email}
                                  onChange={props.handleChange}
                                  type='text'
                                  name='email'
                                  autoComplete='off'
                                  disabled
                                />
                              </div>
                            </div>

                            {/*begin:: phone*/}
                            <div className='row w-100 mx-0 mb-4 gy-4'>
                              <div className='col-lg-12'>
                                <label className='form-label fw-bold'>Mobile no:</label>
                                <input
                                  placeholder='Mobile no.'
                                  className='form-control form-control-lg form-control-solid'
                                  type='number'
                                  value={props.values.phone}
                                  onChange={props.handleChange}
                                  name='phone'
                                  autoComplete='off'
                                  disabled
                                />
                              </div>

                            {/*begin:: Zone*/}
                              <div>
                                <div className='row mb-4'>
                                  <label className=' fw-bold fs-6 mb-2'>Zone</label>
                                  <div className='input-group'>
                                    <input
                                      className='form-control form-control-lg'
                                      type='text'
                                      {...props.getFieldProps('zoneId')}
                                      autoComplete='off'
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>

                            {/*begin:: Role*/}
                          
                              <div className='row mb-4'>
                                  <label className=' fw-bold fs-6 mb-2'>Role</label>
                                  <div className='input-group'>
                                    <input
                                      className='form-control form-control-lg'
                                      type='text'
                                      {...props.getFieldProps('roleId')}
                                      autoComplete='off'
                                      disabled
                                    />
                                  </div>
                                </div>
                            </div>
                            {/*end:: User-Type Filed */}

                            <div className='row mb-4'>
                              {/*begin:: Created By Filed */}
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold'>Created by</label>
                                <input
                                  className='form-control form-control-lg'
                                  type='text'
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
                                <label className='form-label fw-bold'>Updated by</label>
                                <input
                                  className='form-control form-control-lg'
                                  type='text'
                                  value={props.values.modifyby}
                                  onChange={props.handleChange}
                                  name='modifyby'
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
                                <label className='form-label fw-bold'>Updated at</label>
                                <input
                                  className='form-control form-control-lg'
                                  type='text'
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
export default UserFormViewModal
