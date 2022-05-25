/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'

type Props = {
  className: string
}

const TablesWidget9: React.FC<Props> = ({className}) => {
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
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-dark'>
                <th className='max-w-60px min-w-40px rounded-start ps-4'>No</th>
                <th className='min-w-150px'>Username</th>
                <th className='min-w-150px'>Name</th>
                <th className='min-w-200px'>Address</th>
                <th className='min-w-250px'>Installer</th>
                <th className='min-w-150px'>Created at</th>
                <th className='min-w-100px'>Status</th>
                <th className='min-w-200px rounded-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>khitaliya</td>
                <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
                <td className='text-dark fw-bold  fs-6'>246, Platinum Point, Sudama Chok, M...</td>
                <td className='text-dark fw-bold fs-6'>Gaurang Sakhiya</td>
                <td className='text-dark fw-bold fs-6'> 25-May-2022 12:05 PM</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>Pending</span>
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
                  <div className='col'>
                    <label className='form-label fw-bold'>Address</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Address here'
                    ></textarea>
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
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
                      <label className='form-check-label'>Installer</label>
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
              <h5 className='modal-title'>Edit Installation</h5>
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
                    <label className='form-label fw-bold required'>Username</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Installer</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Amit</option>
                      <option value='3'>Ajay</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Main point</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Not described</option>
                      <option value='3'>Angel Square</option>
                      <option value='4'>Anjani Sayan</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Connection Type</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Not described</option>
                      <option value='3'>Cable</option>
                      <option value='4'>Wireless</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Cable type</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>2 pair - Single coating</option>
                      <option value='3'>2 pair - Double coating</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Cable length</label>
                    <div className='input-group'>
                      <span className='input-group-text'>m</span>
                      <input type='number' className='form-control' />
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>IP type</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Dynamic</option>
                      <option value='3'>Static</option>
                    </select>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Acces point IP</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold required'>Station IP</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold required'>Station Name</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold required'>Station MAC</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold required'>Status</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'></option>
                      <option value='2'>Pending</option>
                      <option value='3'>Done</option>
                    </select>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold required'>Remark</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                      placeholder='Remark'
                    />
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
                      <label className='form-check-label'>Installer</label>
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
              <h5 className='modal-title'>View Installation</h5>
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
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' placeholder='10620.00' />
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold text-danger'>Remaining amount</label>
                    <div className='input-group'>
                      <span className='input-group-text'>₹</span>
                      <input type='number' className='form-control' placeholder='10620.00' />
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
                      <span className='input-group-text'>m</span>
                      <input type='number' className='form-control' />
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
    </div>
  )
}

export {TablesWidget9}
