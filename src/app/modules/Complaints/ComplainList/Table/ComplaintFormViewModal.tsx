import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Formik} from 'formik'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'

type Props = {
  category: any
}

const ComplaintFormViewModal: FC<Props> = ({category}) => {
  console.log('hh', category)
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          id: category.data[0]?.id || 0,
          complaintTypeId: category.data[0]?.complaintTypeId || 0,
          username: category.data[0]?.username || 0,
          name: category.data[0]?.name || 0,
          complaintTypeName: category.data[0]?.complaintTypeName || 0,
          address: category.data[0]?.address || ' ',
          description: category.data[0]?.description || 0,
          assignTechnicianName: category.data[0]?.assignTechnicianName || 0,
          statusName: category.data[0]?.statusName || 0,
          faultName: category.data[0]?.faultName || 0,
          remark: category.data[0]?.remark || 0,
          createByName: category.data[0]?.createByName || 0,
          mobileNo: category.data[0]?.mobileNo || 0,
          companyName: category.data[0]?.companyName || ' ',
          contactNo: category.data[0]?.contactNo || 0,
          solvedAt:
            moment(category.data[0]?.solvedAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a') ||
            '',
          createdDate: moment(category.data[0]?.createdDate, 'YYYY-MM-DD,h:mm a').format(
            'YYYY-MM-DD,h:mm a'
          ),
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <form
            id='kt_modal_add_user_form'
            // onKeyDown={onKeyDown}
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
              <div className='ms-3'>
                <a
                  href='#'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  data-bs-toggle='modal'
                  // data-bs-target='#kt_modal_2'
                  data-bs-target='#create-modal'
                  onClick={() => navigate(`/complaint/complaintform/${props.values.id}`)}
                >
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </span>
                  Edit Complaint
                </a>
              </div>
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Complaint no.</label>
                    <input
                      placeholder='123456'
                      value={props.values.id}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Username</label>
                    <input
                      placeholder='Name Here'
                      value={props.values.username}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
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
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Company name</label>
                    <input
                      placeholder='Name Here'
                      value={props.values.companyName}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
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
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Complaint type</label>
                      <input
                        placeholder='Complaint Type'
                        value={props.values.complaintTypeName}
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
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
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Solved at</label>
                    <input
                      placeholder='Solved at'
                      value={props.values?.solvedAt}
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
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
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Created at</label>

                    <input
                      value={props.values.createdDate}
                      placeholder='Updated at'
                      className='form-control form-control-lg form-control-solid'
                      // type='date'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input
                      placeholder='Updated by'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input
                      placeholder='Updated at'
                      className='form-control form-control-lg form-control-solid'
                      // type='date'
                      autoComplete='off'
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
