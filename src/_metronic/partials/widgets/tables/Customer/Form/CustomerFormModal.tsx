import { KTSVG } from '../../../../../helpers'
import ImageSelect from '../../../../../../app/images/error-profile.svg'


const CustomerFormModal = () =>{
    return(
        <>
            {/* Create Customer start::Modal */}
      <div className='modal fade' id='kt_modal_1'>
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
                <h5 className='modal-title'>Create Customer</h5>
              </div>
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
                  <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>ID Proof</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                      style={{backgroundImage: `url(${ImageSelect})`}}
                    >
                      <div className='image-input-wrapper w-125px h-125px'></div>

                      <label
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='change'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Change avatar'
                      >
                        <i className='bi bi-pencil-fill fs-7'></i>

                        <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                        <input type='hidden' name='avatar_remove' />
                      </label>

                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='cancel'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Cancel avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='remove'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Remove avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                    </div>
                  </div>
                  <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>Address Proof</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                      style={{backgroundImage: `url(${ImageSelect})`}}
                    >
                      <div className='image-input-wrapper w-125px h-125px'></div>

                      <label
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='change'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Change avatar'
                      >
                        <i className='bi bi-pencil-fill fs-7'></i>

                        <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                        <input type='hidden' name='avatar_remove' />
                      </label>

                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='cancel'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Cancel avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='remove'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Remove avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                    </div>
                  </div>
                  <div className='col-lg-4 text-center'>
                    <div className='pb-5'>
                      <h5 className='m-0'>GST Certificate</h5>
                    </div>
                    <div
                      className='image-input image-input-empty'
                      data-kt-image-input='true'
                      style={{backgroundImage: `url(${ImageSelect})`}}
                    >
                      <div className='image-input-wrapper w-125px h-125px'></div>

                      <label
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='change'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Change avatar'
                      >
                        <i className='bi bi-pencil-fill fs-7'></i>

                        <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                        <input type='hidden' name='avatar_remove' />
                      </label>

                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='cancel'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Cancel avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                      <span
                        className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='remove'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        title='Remove avatar'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>First Name</label>
                    <input
                      placeholder='First name'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Middle name</label>
                    <input
                      placeholder='Middle name'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Last Name</label>
                    <input
                      placeholder='Last name'
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
                      placeholder='Company name'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>GST no.</label>
                    <input
                      placeholder='GST no.'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Email</label>
                    <input
                      placeholder='Email'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Username</label>
                    <input
                      placeholder='Username'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Mobile no.</label>
                    <input
                      placeholder='Mobile no.'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-3'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Contact no.</label>
                      <input
                        placeholder='Contact no.'
                        className='form-control form-control-lg form-control-solid'
                        type='number'
                        autoComplete='off'
                      />
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div data-select2-id='select-zone'>
                      <label className='form-label fw-bold'>Zone</label>
                      <div data-select2-id='select-zone'>
                        <select className='form-select form-select-solid'>
                          <option>Select Zone</option>
                          <option value='1'>All</option>
                          <option value='2'>Katargam</option>
                          <option value='3'>Ring Road</option>
                          <option value='4'>Varachha</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Address here'
                    ></textarea>
                  </div>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Remark</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Remark here'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary'>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Create Customer end::Modal */}
        </>
    )
}
export default CustomerFormModal