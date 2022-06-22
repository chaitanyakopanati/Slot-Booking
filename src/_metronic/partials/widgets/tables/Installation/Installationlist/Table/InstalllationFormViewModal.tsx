import React from 'react'
import ImageSelect from '../../../../../../../app/images/error-profile.svg'
import {KTSVG} from '../../../../../../helpers'

function InstalllationFormViewModal() {
  return (
    <>
      {/* View installation::Modal */}
      <div className='modal fade' id='view-installation-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
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
                <h5 className='modal-title'>View Customer</h5>
              </div>
              <div className='ms-3'>
                <a
                  href='#'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_1'
                >
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </span>
                  Edit Installation
                </a>
              </div>
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Username</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Company name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Zone</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Mobile no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Contact no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Email</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Address</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Total amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        className='form-control form-control-solid'
                        placeholder='10620.00'
                      />
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold text-danger'>Remaining amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input
                        type='number'
                        className='form-control form-control-solid'
                        placeholder='10620.00'
                      />
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Installer</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Company</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Main point</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Connection type</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Cable type</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Cable length</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>m</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>IP type</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Acces point IP</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Station IP</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Station Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Station MAC</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Status</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                    />
                  </div>

                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      placeholder='Remark'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
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
            </div>
          </div>
        </div>
      </div>
      {/* view installation::Modal */}
    </>
  )
}

export default InstalllationFormViewModal
