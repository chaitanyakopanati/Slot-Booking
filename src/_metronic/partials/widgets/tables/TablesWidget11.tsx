/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { threadId } from 'worker_threads'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({ className }) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='card-title d-flex flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
          {/* begin::Searchbar */}
          <div className='d-flex align-items-center position-relative my-1 col-12 col-md-3'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'>
              <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
            </span>
            <input
              type='text'
              className='form-control form-control-solid ps-14'
              placeholder='Search'
            />
          </div>
          {/* end::Searchbar */}

          <div className='d-flex align-items-center'>
            {/* begin::download */}
            <div>
              <a href='#' className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-3' />
                </span>
                Download
              </a>
            </div>
            {/* end::download */}

            {/* begin::filter btn */}
            <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
              <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3' />
                </span>
                Filter
              </div>
            </div>
            {/* end::filter btn */}

            {/* begin::add user btn */}
            <div className='ms-3'>
              <div
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                data-bs-toggle='modal'
                data-bs-target='#create-form-modal'
              >
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                </span>
                Create Form
              </div>
            </div>
            {/* end::add user btn */}
          </div>
        </div>

        {filterShow && (
          <>
            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Username</label>
                <input
                  placeholder='Search username'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                />
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Zone</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Katargam</option>
                  <option value='3'>Ring Road</option>
                  <option value='4'>Varachha</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Company</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Earth</option>
                  <option value='3'>Softnet</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Sales executive</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Not described</option>
                  <option value='3'>Abalkesh Soft</option>
                  <option value='4'>Ajay Sulin</option>
                </select>
              </div>
            </div>

            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Payment</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Due</option>
                  <option value='3'>Clear</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Created at</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Form date</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Expiry date</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>
            </div>

            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Package Category</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option>All</option>
                  <option value='1'>Not described</option>
                  <option value='2'>Broadband</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Connection type</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option>All</option>
                  <option value='1'>Not described</option>
                  <option value='2'>Cable</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Form type</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>New</option>
                  <option value='3'>Renew</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Form submit</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Pending</option>
                  <option value='3'>Done</option>
                  <option value='4'>Cancel</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-dark'>
                <th className='min-w-150px rounded-start ps-4'>File no.</th>
                <th className='min-w-150px'>Username</th>
                <th className='min-w-150px'>Name</th>
                <th className='min-w-200px'>Sales executive</th>
                <th className='min-w-150px'>Form date</th>
                <th className='min-w-100px'>Form type</th>
                <th className='min-w-200px rounded-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>2022-23/438</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>khitaliya</td>
                <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
                <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
                <td className='text-dark fw-bold fs-6'>25-May-2022</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>New</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-form-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-form-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-customer-modal'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com013.svg'
                      className='svg-icon-3'
                    />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>2022-23/438</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>khitaliya</td>
                <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
                <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
                <td className='text-dark fw-bold fs-6'>25-May-2022</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-info fs-6'>Shifting</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-form-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-form-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-customer-modal'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com013.svg'
                      className='svg-icon-3'
                    />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>2022-23/438</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>khitaliya</td>
                <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
                <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
                <td className='text-dark fw-bold fs-6'>25-May-2022</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-success fs-6'>Renew</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-form-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-form-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-customer-modal'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com013.svg'
                      className='svg-icon-3'
                    />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>

        <div className='d-flex align-items-center justify-content-between pt-8 pb-4'>
          <div className='min-w-100px'>
            <div className='d-flex align-items-center' data-select2-id='show-enteries'>
              <label className='form-label fw-bold me-2 mb-0'>Show entries:</label>
              <div data-select2-id='show-enteries'>
                <select className='form-select form-select-solid h-40px py-2'>
                  <option value='1'>10</option>
                  <option value='2'>25</option>
                  <option value='3'>50</option>
                  <option value='4'>100</option>
                </select>
              </div>
            </div>
          </div>

          <ul className='pagination'>
            <li className='page-item previous disabled'>
              <a href='#' className='page-link'>
                {/* Previous */}
                <i className='previous'></i>
              </a>
            </li>
            <li className='page-item active'>
              <a href='#' className='page-link'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                4
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                5
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                6
              </a>
            </li>
            <li className='page-item next'>
              <a href='#' className='page-link'>
                {/* Next */}
                <i className='next'></i>
              </a>
            </li>
          </ul>

          <div className='form-label fw-bold px-4'>Showing 1-10 of 100 entries</div>
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}

      {/* begin::create form Modal */}
      <div className='modal fade' id='create-form-modal'>
        <div className='modal-dialog modal-fullscreen'>
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
                        <label className='form-label fw-bold required'>Username</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold required'>Form no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold required'>Form date</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='date'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold required'>Form type</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>New`</option>
                          <option value='3'>Renew</option>
                        </select>
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Sales Executive</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Ajay Sulin</option>
                          <option value='3'>Amit soni</option>
                        </select>
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Comapny</label>
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
                          <span className='input-group-text'>Month</span>
                          {/* </div> */}
                          <input
                            type='number'
                            className='form-control'
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
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Installation cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Other Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Discount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>GST Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Total Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cash Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Remaining Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Bank Name</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Axis</option>
                      <option value='3'>HDFC</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque no.</label>
                    <input type='number' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Reciever</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Ajay</option>
                      <option value='3'>Amit</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Dynmaic</option>
                      <option value='3'>Static</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Note</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Third party</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form submit</label>
                    <select className='form-select form-select-outline'>
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
      {/* end::create form Modal */}

      {/* Edit form::Modal */}
      <div className='modal fade' id='edit-form-modal'>
        <div className='modal-dialog modal-fullscreen'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Edit Form</h5>
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
                        <label className='form-label fw-bold required'>Username</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold required'>Form no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold required'>Form date</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='date'
                          autoComplete='off'
                        />
                      </div>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold required'>Form type</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>New`</option>
                          <option value='3'>Renew</option>
                        </select>
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Sales Executive</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Ajay Sulin</option>
                          <option value='3'>Amit soni</option>
                        </select>
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Comapny</label>
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
                          <span className='input-group-text'>Month</span>
                          <input
                            type='number'
                            className='form-control'
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
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Installation cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Other Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Discount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>GST Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Total Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cash Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Remaining Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Bank Name</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Axis</option>
                      <option value='3'>HDFC</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque no.</label>
                    <input type='number' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Reciever</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Ajay</option>
                      <option value='3'>Amit</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Dynmaic</option>
                      <option value='3'>Static</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Note</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Third party</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form submit</label>
                    <select className='form-select form-select-outline'>
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit form::Modal */}

      {/* View form::Modal */}
      <div className='modal fade' id='view-form-modal'>
        <div className='modal-dialog modal-fullscreen'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>View Form</h5>
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
                        <label className='form-label fw-bold required'>Name</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Company name</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>GST no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Mobile no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Contact no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>
                    </div>

                    <div className='row mb-6 gy-4'>
                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Address</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Email</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                        />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold required'>Zone</label>
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
                      className='form-control form-control-lg'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package type</label>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Name</label>
                    <input
                      className='form-control form-control-lg'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Validity</label>
                    <div className='input-group'>
                      <span className='input-group-text'>Month</span>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Package validity'
                      />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Package Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Installation cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Other Cost</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Discount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>GST Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Total Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cash Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Remaining Amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Bank Name</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Axis</option>
                      <option value='3'>HDFC</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque no.</label>
                    <input type='number' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Cheque date</label>
                    <input type='date' className='form-control' />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Receiver</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Ajay</option>
                      <option value='3'>Amit</option>
                    </select>
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Activation date</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Expiry date</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <select className='form-select form-select-outline'>
                      <option value='1'></option>
                      <option value='2'>Dynamic</option>
                      <option value='3'>Static</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Note</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Third party</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-2'>
                    <label className='form-label fw-bold'>Form submit</label>
                    <select className='form-select form-select-outline'>
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
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input type='date' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input type='text' className='form-control' />
                  </div>

                  <div className='col-md-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input type='date' className='form-control' />
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
      {/* view form::Modal */}

      {/* View customer::Modal */}
      <div className='modal fade' id='view-customer-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create Customer</h5>
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
                      style={{ backgroundImage: `url(${ImageSelect})` }}
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
                      style={{ backgroundImage: `url(${ImageSelect})` }}
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
                      style={{ backgroundImage: `url(${ImageSelect})` }}
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
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* view customer::Modal */}
    </div>
  )
}

export { TablesWidget11 }
