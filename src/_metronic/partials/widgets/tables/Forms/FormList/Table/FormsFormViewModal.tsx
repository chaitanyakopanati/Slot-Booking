import React from 'react'
import {KTSVG} from '../../../../../../helpers'

const FormsFormViewModal = () => {
  return (
    <div>
      <div className='modal fade' id='view-form-modal'>
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
                <h5 className='modal-title'>View Form</h5>
              </div>
              <div className='ms-3'>
                <a
                  href='#'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  data-bs-toggle='modal'
                  data-bs-target='#create-form-modal'
                >
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </span>
                  Edit Form
                </a>
              </div>
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3 d-flex flex-column align-items-center justify-content-center'>
                    <div
                      className='image-input image-input-outline mx-auto'
                      data-kt-image-input='true'
                      style={{
                        backgroundImage:
                          "url('/metronic8/demo1/assets/media/svg/avatars/blank.svg')",
                      }}
                    >
                      <div
                        className='image-input-wrapper w-125px h-125px'
                        style={{
                          backgroundImage: 'url(/metronic8/demo1/assets/media/avatars/300-1.jpg)',
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className='col-md-9'>
                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Username</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Name</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Company name</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>GST no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Mobile no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Contact no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Address</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Email</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Zone</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-6 gy-4'>
                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>File no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form date</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form type</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Sales Executive</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Comapny</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row mb-6 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package category</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package type</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Validity</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>Month</span>
                      <input
                        type='number'
                        className='form-control form-control-solid'
                        placeholder='Package validity'
                      />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Installation cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Other Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Discount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>GST Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Total Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cash Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Remaining Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>₹</span>
                      <input type='number' className='form-control form-control-solid' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Bank Name</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Axis</option>
                      <option value='3'>HDFC</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque no.</label>
                    <input type='number' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Receiver</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Ajay</option>
                      <option value='3'>Amit</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Activation date</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Expiry date</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Dynamic</option>
                      <option value='3'>Static</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Note</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Third party</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form submit</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Done</option>
                      <option value='3'>Pending</option>
                      <option value='4'>Cancel</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input type='date' className='form-control form-control-solid' />
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
    </div>
  )
}

export default FormsFormViewModal
