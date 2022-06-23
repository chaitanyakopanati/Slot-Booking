import React from 'react'
import {KTSVG} from '../../../../../helpers'

const OfficeStockOutwardsFormModal = () => {
  return (
    <div>
      <div className='modal fade' id='create-inquiry-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create office stock Outwards</h5>
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

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold '>Outward date </label>
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
                    <label className='form-label fw-bold'>Technician</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>Not described</option>
                      <option value='3'>Abalkesh Soft</option>
                      <option value='4'>Ajay Sulin</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='col-6'>
                    <label className='form-label fw-bold'>Username</label>
                    <input
                      placeholder='Solved at'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-6'>
                    <label className='form-label fw-bold'>Reason</label>
                    <input
                      placeholder='Solved at'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='col-lg-12'>
                  <label className='form-label fw-bold'>Zone </label>
                  <select className='form-select form-select-solid'>
                    <option value='1'>All</option>
                    <option value='2'>Katargam</option>
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
              </div>
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficeStockOutwardsFormModal
