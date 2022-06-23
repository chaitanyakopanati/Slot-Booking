import React from 'react'
import {KTSVG} from '../../../../../../helpers'

const OfficeOldStockInwardsFormViewModal = () => {
  return (
    <div>
      <div className='modal fade' id='view-inquiries-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='d-flex align-items-center'>
                <h5 className='modal-title'>View office old stock inward</h5>
              </div>
              <div className='ms-3'>
                <a
                  href='#'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  data-bs-toggle='modal'
                  // data-bs-target='#kt_modal_1'
                  data-bs-target='#create-inquiry-modal'
                >
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </span>
                  Edit office old stock inward
                </a>

                <div
                  className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span className='svg-icon svg-icon-2x'>
                    <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-3' />
                  </span>
                </div>
              </div>
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold '>Inward date </label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Product</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>Open</option>
                      <option value='2'>Pending</option>
                      <option value='3'>Done</option>
                      <option value='4'>Cancel</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Quantity</label>
                    <input
                      placeholder='Solved at'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Delivered by</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>Not described</option>
                      <option value='3'>Abalkesh Soft</option>
                      <option value='4'>Ajay Sulin</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <label className='form-label fw-bold'>Zone</label>
                  <select className='form-select form-select-solid'>
                    <option value='1'>All</option>
                    <option value='2'>Not described</option>
                    <option value='3'>Abalkesh Soft</option>
                    <option value='4'>Ajay Sulin</option>
                  </select>
                </div>

                <div className='col-12 col-lg-12'>
                  <label className='form-label fw-bold'>Serial no</label>
                  <textarea
                    className='form-control form-control form-control-solid'
                    data-kt-autosize='true'
                    placeholder='Remark here'
                  ></textarea>
                </div>

                <div className='col-12 col-lg-12'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input
                      placeholder='Solved at'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
              {/* <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficeOldStockInwardsFormViewModal
