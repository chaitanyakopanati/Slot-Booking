import React from 'react'
import { KTSVG } from '../../../../../_metronic/helpers'

const ComplaintFormViewModal = () => {
  return (
    <div>
      {/* <div className='modal fade' id='view-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'> */}
      <div className='modal-header'>
        <div className='d-flex align-items-center'>
          <div
            className='btn btn-icon btn-sm btn-active-light-primary me-5'
            data-bs-dismiss='modal'
            aria-label='Close'
          >
            <span className='svg-icon svg-icon-2x'>
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
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-6'>
              <label className='form-label fw-bold'>Username</label>
              <input
                placeholder='Name Here'
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
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-4'>
              <label className='form-label fw-bold'>Fault</label>
              <input
                placeholder='Fault'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-4'>
              <label className='form-label fw-bold'>Solved at</label>
              <input
                placeholder='Solved at'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-4'>
              <label className='form-label fw-bold'>Remark</label>
              <input
                placeholder='Remark'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-4'>
              <label className='form-label fw-bold'>Created by</label>
              <input
                placeholder='Created by'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-4'>
              <label className='form-label fw-bold'>Created at</label>

              <input
                placeholder='Updated at'
                className='form-control form-control-lg form-control-solid'
                type='date'
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
                type='date'
                autoComplete='off'
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}
    </div>
  )
}

export default ComplaintFormViewModal
