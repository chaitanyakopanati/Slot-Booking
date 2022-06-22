import React from 'react'
import {KTSVG} from '../../../../../helpers'

function FormsFormModal() {
  return (
    <div>
      <div className='modal fade' id='create-form-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create Form</h5>
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
                      <label
                        className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='change'
                      >
                        <i className='bi bi-pencil-fill fs-7'></i>
                        <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                        <input type='hidden' name='avatar_remove' />
                      </label>
                      <span
                        className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='remove'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                    </div>
                    <div className='form-text'>Choose an image</div>
                  </div>

                  <div className='col-md-9'>
                    <div className='row mb-6'>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold '>Username</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold '>Form no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold '>Form date</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='date'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold '>Form type</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>New`</option>
                          <option value='3'>Renew</option>
                        </select>
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Sales Executive</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Ajay Sulin</option>
                          <option value='3'>Amit soni</option>
                        </select>
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold '>Comapny</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Earth</option>
                          <option value='3'>Softnet</option>
                        </select>
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Package category</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Broadband</option>
                          <option value='3'>Cancel</option>
                        </select>
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Package type</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Limited</option>
                          <option value='3'>Unlimited</option>
                        </select>
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Package Name</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>1-2mbps</option>
                          <option value='3'>1000gb</option>
                        </select>
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Package Validity</label>
                        <div className='input-group'>
                          {/* <div className='input-group-prepend'> */}
                          <span className='input-group-text border-0'>Month</span>
                          {/* </div> */}
                          <input
                            type='number'
                            className='form-control form-control-solid'
                            placeholder='Package validity'
                          />
                        </div>
                      </div>
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
                    <label className='form-label fw-bold'>Reciever</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Ajay</option>
                      <option value='3'>Amit</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Dynmaic</option>
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

export default FormsFormModal
