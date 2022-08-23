import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Formik} from 'formik'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../../auth'

type Props = {
  category: any
}

const ComplaintFormViewModal: FC<Props> = ({category}) => {
  const navigate = useNavigate()
  const {currentUser, auth} = useAuth()

  return (
    <>
      <Formik
        initialValues={{
          id: category.data?.id || 0,
          complaintTypeId: category.data?.complaintTypeId || 0,
          username: category.data?.username || 0,
          name: category.data?.name || 0,
          complaintTypeName: category.data?.complaintTypeName || 0,
          address: category.data?.address || ' ',
          description: category.data?.description || 0,
          assignTechnicianName: category.data?.assignTechnicianName || 0,
          statusName: category.data?.statusName || 0,
          faultName: category.data?.faultName || 0,
          remark: category.data?.remark || 0,
          createByName: category.data?.createByName || 0,
          mobileNo: category.data?.mobileNo || 0,
          companyName: category.data?.companyName || ' ',
          contactNo: category.data?.contactNo || 0,
          solvedAt: category.data?.solvedAt
            ? moment
                .utc(category.data?.solvedAt, 'YYYY-MM-DD,h:mm a')
                .local()
                .format('YYYY-MM-DD,h:mm a')
            : '',

          createdDate: category.data?.createdDate
            ? moment
                .utc(category.data?.createdDate, 'YYYY-MM-DD,h:mm a')
                .local()
                .format('YYYY-MM-DD,h:mm a')
            : '',

          modifiedDate: category.data?.modifiedDate
            ? moment
                .utc(category.data?.modifiedDate, 'YYYY-MM-DD,h:mm a')
                .local()
                .format('YYYY-MM-DD,h:mm a')
            : '',

          modifiedByName: category.data?.modifiedByName || ' ',
        }}
        onSubmit={(values) => console.log()}
      >
        {(props) => (
          <form
            id='kt_modal_add_user_form'
            className='form'
            onSubmit={props.handleSubmit}
            noValidate
          >
            <div className='modal-header'>
              <div className='d-flex align-items-center'>
                <div
                  className='btn btn-icon btn-sm btn-active-light-primary me-5'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span
                    className='svg-icon svg-icon-2x'
                    onClick={() => {
                      navigate('/complaint')
                    }}
                  >
                    <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                  </span>
                </div>
                <h5 className='modal-title'>View complaint</h5>
              </div>

              {auth?.roleId != 2 &&
              auth?.roleId != 3 &&
              auth?.roleId != 5 &&
              auth?.roleId !== 6 &&
              auth?.roleId !== 7 ? (
                <div className='ms-3'>
                  <a
                    href='#'
                    className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                    data-bs-toggle='modal'
                    data-bs-target='#create-modal'
                    onClick={() => navigate(`/complaint/complaintform/${props.values.id}`)}
                  >
                    <span className='svg-icon svg-icon-gray-500 me-1'>
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </span>
                    Edit Complaint
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Complaint no.</label>
                    <input
                      placeholder='123456'
                      disabled
                      value={props.values.id}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>User Name</label>
                    <input
                      placeholder='Name Here'
                      value={props.values.username}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Name</label>
                    <input
                      placeholder='Name Here'
                      value={props.values.name}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Company Name</label>
                    <input
                      placeholder='Name Here'
                      value={props.values.companyName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-6'>
                    <div data-select2-id='select-zone'>
                      <label className='form-label fw-bold'>Mobile no.</label>
                      <input
                        placeholder='0123456789'
                        value={props.values.mobileNo}
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Contact no.</label>
                      <input
                        placeholder='Contact no.'
                        value={props.values.contactNo}
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Complaint Type</label>
                      <input
                        placeholder='Complaint Type'
                        value={props.values.complaintTypeName}
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      value={props.values.address}
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='address here'
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Description</label>
                    <textarea
                      value={props.values.description}
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='description here'
                      disabled
                    ></textarea>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Assign to</label>
                    <input
                      value={props.values.assignTechnicianName}
                      placeholder='Hafiz Shaikh'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Status</label>
                    <input
                      placeholder='Unsolved'
                      value={props.values.statusName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Fault</label>
                    <input
                      placeholder='Fault'
                      value={props.values.faultName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Solved at</label>
                    <input
                      placeholder='Solved at'
                      value={props.values.solvedAt}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input
                      placeholder='Remark'
                      value={props.values.remark}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input
                      value={props.values.createByName}
                      placeholder='Created by'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Created at</label>

                    <input
                      value={props.values.createdDate}
                      placeholder='Updated at'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input
                      placeholder='Updated by'
                      value={props.values.modifiedByName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input
                      placeholder='Updated at'
                      value={props.values.modifiedDate}
                      className='form-control form-control-lg form-control-solid'
                      autoComplete='off'
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default ComplaintFormViewModal
