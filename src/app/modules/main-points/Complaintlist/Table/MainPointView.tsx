import {Form, Formik} from 'formik'
import moment from 'moment'
import {FC, useEffect} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {CustomTooltip} from '../../../../routing/customtooltip'
import {ListPageData} from '../../MainPointContext'

type Props = {
  category: any
}

const MainPointView: FC<Props> = ({category}) => {
  const {viewIdForUpdate, setItemIdForUpdate, setViewIdForUpdate} = ListPageData()

  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  {
    /* begin:: Edit functionlity */
  }
  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  {
    /* begin:: form onkey Down functionlity */
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
      {/* begin:: formik form */}
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.id,
          name: category.name || '',
          zoneid: category.zoneName || '',
          createdby: category.createdByName || '',
          modifyby: category.modifyByName || '',
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
              {/* begin::Modal dialog */}
              <div className='modal-dialog modal-dialog-centered modal-xl'>
                {/* begin::Modal body */}
                <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                  <div id='view-modal'>
                    <div className='modal-dialog modal-dialog-centered modal-xl'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <div className='d-flex align-items-center'>
                            <h5 className='modal-title'>View main point</h5>
                          </div>
                          <div className='ms-3'>
                            {/* begin::  Edit complaint type */}
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
                              Edit main point
                            </button>
                            {/* end::  Edit complaint type */}
                            {/* begin::  view button */}
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
                            {/* end::  view button */}
                          </div>
                        </div>

                        <div className='modal-body'>
                          <div className='container-fluid p-0'>
                            {/* name Filed */}
                            <div className='row mb-4'>
                              <label className='fw-bold fs-6 mb-2'>Name</label>
                              <div className='input-group'>
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
                            {/* name faultTypeName */}
                            <div>
                              <div className='row mb-4'>
                                <label className=' fw-bold fs-6 mb-2'>Zone</label>
                                <div className='input-group'>
                                  <input
                                    className='form-control form-control-lg'
                                    type='text'
                                    {...props.getFieldProps('zoneid')}
                                    autoComplete='off'
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            {/* name created by */}
                            <div className='row mb-4'>
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

                              {/* name updated by */}
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
                            </div>

                            {/* name created at */}
                            <div className='row mb-4'>
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

                              {/* name updated at */}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end::Modal body */}
              </div>
              {/* end::Modal dialog */}
            </div>
            {/* begin::Modal Backdrop */}
            <div className='modal-backdrop fade show'></div>
          </Form>
        )}
      </Formik>
      {/* begin:: formik form */}
    </>
  )
}
export default MainPointView
