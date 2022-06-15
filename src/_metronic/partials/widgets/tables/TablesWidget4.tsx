/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { threadId } from 'worker_threads'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'

type Props = {
  className: string
}

const TablesWidget4: React.FC<Props> = ({ className }) => {
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
            <div className='ms-auto'>
              <a href='#' className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                <span className='svg-icon svg-icon-gray-500 me-0'>
                  <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-2 me-0' />
                </span>
                <span className='d-none d-sm-block ms-3'>
                  Download
                </span>
              </a>
            </div>
            {/* end::download */}

            {/* begin::filter */}

            <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
              <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                <span className='svg-icon svg-icon-gray-500 me-0'>
                  <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2 me-0' />
                </span>
                <span className='d-none d-sm-block ms-3'>
                  Filter
                </span>
              </div>
            </div>

            {/* end::filter btn */}

            {/* begin::add user btn */}
            <div className='ms-3'>
              <div
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                data-bs-toggle='modal'
                data-bs-target='#create-inquiry-modal'
              >
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                </span>
                Create Inquiry
              </div>
            </div>
            {/* end::add user btn */}
          </div>
        </div>

        {filterShow && (
          <>
            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Inquiry date</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>

              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Status</label>
                <select className='form-select form-select-solid'>
                  <option value='1'>All</option>
                  <option value='2'>Pending</option>
                  <option value='3'>Done</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Sales executive</label>
                <select className='form-select form-select-solid'>
                  <option value='1'>All</option>
                  <option value='2'>Not described</option>
                  <option value='3'>Abalkesh Soft</option>
                  <option value='4'>Ajay Sulin</option>
                </select>
              </div>

              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Created by</label>
                <select className='form-select form-select-solid'>
                  <option value='1'>All</option>
                  <option value='2'>Amit</option>
                  <option value='3'>Ajay</option>
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
        <div className='table-responsive d-none d-lg-block'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-dark'>
                <th className='max-w-60px min-w-40px rounded-start ps-4'>Inquiry No.</th>
                <th className='min-w-150px'>Name</th>
                <th className='min-w-200px'>Address</th>
                <th className='min-w-150px'>Contact no.</th>
                <th className='min-w-200px'>Sales Executive</th>
                <th className='min-w-150px'>Created at</th>
                <th className='min-w-100px'>Status</th>
                <th className='min-w-150px rounded-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
                <td className='text-dark fw-bold  fs-6'>Mahidhar Pura</td>
                <td className='text-dark fw-bold  fs-6'>7405648177</td>

                <td className='text-dark fw-bold fs-6'>Bhavesh Patel</td>
                <td className='text-dark fw-bold fs-6'>05-Mar-2021 05:27 PM</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>Open</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>2</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>Chirag</td>
                <td className='text-dark fw-bold  fs-6'>Amroli</td>
                <td className='text-dark fw-bold  fs-6'>9924471888</td>

                <td className='text-dark fw-bold fs-6'>Jatin Panesar</td>
                <td className='text-dark fw-bold fs-6'>03-Oct-2020 01:37 PM</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-success fs-6'>Done</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>3</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>Puna gam</td>
                <td className='text-dark fw-bold  fs-6'>Punagam</td>
                <td className='text-dark fw-bold  fs-6'>9924389000</td>

                <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
                <td className='text-dark fw-bold fs-6'>01-Oct-2020 04:49 PM</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-success fs-6'>Done</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>

        <div className='row g-5 d-flex d-lg-none py-3'>
          <div className='col-md-6 mx-0 my-2'>
            <div className="card card-custom border">
              <div className="card-body p-4">
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
                  <div className='fw-bolder fs-3'>Kiritbhai</div>
                  <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Sales Executive:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>

                <div id='card-id-1' className='collapse'>

                  <div className='py-1 d-flex align-items-cenetr'>
                    <div className='fw-bolder '>Created at:</div>
                    <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Address:</div>
                    <div className='text-dark fw-bold  ms-2'>Mahidar pura</div>
                  </div>
                  <div className='py-1 d-flex align-items-center'>
                    <i className="text-dark bi bi-telephone-fill fs-5"></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
                </div>

                <div className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                  data-bs-toggle='collapse'
                  data-bs-target='#card-id-1'
                  aria-expanded='false'>
                  <span>+ &nbsp;</span>More info
                </div>
              </div>

              <div className='card-footer p-2 py-0 bg-light'>
                <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mx-0 my-2'>
            <div className="card card-custom border">
              <div className="card-body p-4">
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>2.</div>
                  <div className='fw-bolder fs-3'>Kiritbhai</div>
                  <div className='fw-bold badge badge-light-success ms-auto'>Done</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Sales Executive:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>

                <div id='card-id-2' className='collapse'>

                  <div className='py-1 d-flex align-items-cenetr'>
                    <div className='fw-bolder '>Created at:</div>
                    <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Address:</div>
                    <div className='text-dark fw-bold  ms-2'>Mahidar pura</div>
                  </div>
                  <div className='py-1 d-flex align-items-center'>
                    <i className="text-dark bi bi-telephone-fill fs-5"></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
                </div>

                <div className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                  data-bs-toggle='collapse'
                  data-bs-target='#card-id-2'
                  aria-expanded='false'>
                  <span>+ &nbsp;</span>More info
                </div>
              </div>

              <div className='card-footer p-2 py-0 bg-light'>
                <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-inquiries-modal'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center justify-content-between py-2'>
          <div className='min-w-100px'>
            <div className='d-flex align-items-center' data-select2-id='show-enteries'>
              <label className='form-label fw-bold me-2 mb-0'>Show entries:</label>
              <select className='form-select form-select-solid h-40px py-2'>
                <option value='1'>10</option>
                <option value='2'>25</option>
                <option value='3'>50</option>
                <option value='4'>100</option>
              </select>
            </div>
          </div>
          <div className='form-label fw-bold px-4 text-end'>Showing 1-10 of 100 entries</div>
        </div>

        <ul className='pagination py-3'>
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
          <li className='page-item next'>
            <a href='#' className='page-link'>
              {/* Next */}
              <i className='next'></i>
            </a>
          </li>
        </ul>
        {/* end::Table container */}
      </div>
      {/* end::Body */}

      {/* begin::create inquiry Modal */}
      <div className='modal fade' id='create-inquiry-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create Inquiry</h5>
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
                    <label className='form-label fw-bold required'>Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold required'>Contact no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Status</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>Open</option>
                      <option value='2'>Pending</option>
                      <option value='3'>Done</option>
                      <option value='4'>Cancel</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Sales executive</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>Not described</option>
                      <option value='3'>Abalkesh Soft</option>
                      <option value='4'>Ajay Sulin</option>
                    </select>
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Address here'
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Description</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Description here'
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Remark here'
                    ></textarea>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Notification</label>
                    <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                      <input
                        className='form-check-input h-20px w-30px'
                        type='checkbox'
                        value=''
                        id='flexSwitch20x30'
                      />
                      <label className='form-check-label'>Sales executive</label>
                    </div>
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
      {/* end::create inquiry Modal */}

      {/* Edit Installation::Modal */}
      <div className='modal fade' id='edit-inquiries-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Edit Inquiry</h5>
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
                    <label className='form-label fw-bold required'>Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold required'>Contact no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Status</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>Open</option>
                      <option value='2'>Pending</option>
                      <option value='3'>Done</option>
                      <option value='4'>Cancel</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Sales executive</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>Not described</option>
                      <option value='3'>Abalkesh Soft</option>
                      <option value='4'>Ajay Sulin</option>
                    </select>
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Address here'
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Description</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Description here'
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Remark here'
                    ></textarea>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Notification</label>
                    <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                      <input
                        className='form-check-input h-20px w-30px'
                        type='checkbox'
                        value=''
                        id='flexSwitch20x30'
                      />
                      <label className='form-check-label'>Sales executive</label>
                    </div>
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
      {/* Edit Installation::Modal */}

      {/* View installation::Modal */}
      <div className='modal fade' id='view-inquiries-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>View Inquiry</h5>
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
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold required'>Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-4'>
                    <label className='form-label fw-bold required'>Contact no.</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Status</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>Open</option>
                      <option value='2'>Pending</option>
                      <option value='3'>Done</option>
                      <option value='4'>Cancel</option>
                    </select>
                  </div>


                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      className='form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Address here'
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Description</label>
                    <textarea
                      className='form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Description here'
                    ></textarea>
                  </div>

                  <div className='col-12 col-lg-4'>
                    <label className='form-label fw-bold'>Remark</label>
                    <textarea
                      className='form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Remark here'
                    ></textarea>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>

                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Sales executive</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>Not described</option>
                      <option value='3'>Abalkesh Soft</option>
                      <option value='4'>Ajay Sulin</option>
                    </select>
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Assign Date</label>
                    <input type="text" className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>End Date</label>
                    <input type="text" className='form-control form-control-solid' />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input type="text" className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input type="date" className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input type="text" className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input type="date" className='form-control form-control-solid' />
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
    </div>
  )
}

export { TablesWidget4 }
