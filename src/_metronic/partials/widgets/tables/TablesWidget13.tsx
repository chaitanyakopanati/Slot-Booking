/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget13: React.FC<Props> = ({className}) => {
  const [filterShow, setFilterShow] = useState(false)
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='card-title d-flex align-items-center justify-content-between w-100 mx-0'>
          <div className='d-flex align-items-center position-relative my-1 col-lg-3'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'>
              <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3' />
            </span>
            <input
              type='text'
              className='form-control form-control-solid ps-14'
              placeholder='Search'
            />
          </div>

          <div className='ms-auto'>
            <a href='#' className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-3' />
              </span>
              Download
            </a>
          </div>

          <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
            <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3' />
              </span>
              Filter
            </div>
          </div>

          <div className='ms-3'>
            <a
              href='#'
              className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_1'
            >
              <span className='svg-icon svg-icon-gray-500 me-1'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
              </span>
              Add User
            </a>
          </div>
        </div>

        {filterShow && (
          <div className='row w-100 mx-0 mt-5'>
            <div className='col-lg-3 ps-0'>
              <label className='form-label fw-bold'>Username:</label>
              <input
                placeholder='Search username'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-zone'>
                <label className='form-label fw-bold'>Zone:</label>
                <div data-select2-id='select-zone'>
                  <select className='form-select form-select-solid'>
                    <option></option>
                    <option value='1'>All</option>
                    <option value='2'>Katargam</option>
                    <option value='3'>Ring Road</option>
                    <option value='4'>Varachha</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-role'>
                <label className='form-label fw-bold'>Role:</label>
                <div data-select2-id='select-role'>
                  <select className='form-select form-select-solid'>
                    <option></option>
                    <option value='1'>All</option>
                    <option value='2'>Sales Executive</option>
                    <option value='3'>Technician</option>
                    <option value='4'>Customer</option>
                    <option value='4'>Stock Manager</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3 pe-0'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Created by:</label>
                <div data-select2-id='select-created-by'>
                  <select className='form-select form-select-solid'>
                    <option></option>
                    <option value='1'>All</option>
                    <option value='2'>A</option>
                    <option value='3'>B</option>
                    <option value='4'>C</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='card-toolbar d-none'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bolder px-3 py-4'>Quick Actions</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-start'
              data-kt-menu-flip='left-start, top'
            >
              {/* begin::Menu item */}
              <a href='#' className='menu-link px-3'>
                <span className='menu-title'>New Group</span>
                <span className='menu-arrow'></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='max-w-60px min-w-40px rounded-start ps-4'>No</th>
                <th className='min-w-150px'>Name</th>
                <th className='min-w-150px'>Username</th>
                <th className='min-w-200px'>Email</th>
                <th className='min-w-100px'>Mobile No.</th>
                <th className='min-w-120px'>Zone</th>
                <th className='min-w-150px'>Role</th>
                <th className='min-w-125px rounded-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5 d-none'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                          className='h-75 align-self-end'
                          alt='profile'
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <div className='text-dark fw-bold  fs-6'>Ganesh Ahir</div>
                    </div>
                  </div>
                </td>
                <td className='text-dark fw-bold  fs-6'>ganesh</td>
                <td className='text-dark fw-bold  fs-6'>ganesh@gmail.com</td>
                <td className='text-dark fw-bold fs-6'>9099999676</td>
                <td className='text-dark fw-bold fs-6'>Katargam</td>
                {/* <td>
                  <span className='badge badge-light-success'>Approved</span>
                </td> */}
                <td className='text-dark fw-bold fs-6'>Technician</td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_3'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_2'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>2</div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5 d-none'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                          className='h-75 align-self-end'
                          alt='profile'
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <div className='text-dark fw-bold  fs-6'>Hitesh Mistry</div>
                    </div>
                  </div>
                </td>
                <td className='text-dark fw-bold  fs-6'>hitesh</td>
                <td className='text-dark fw-bold  fs-6'>hitesh@gmail.com</td>
                <td className='text-dark fw-bold fs-6'>9898675764</td>
                <td className='text-dark fw-bold fs-6'>Varachha</td>
                {/* <td>
                  <span className='badge badge-light-success'>Approved</span>
                </td> */}
                <td className='text-dark fw-bold fs-6'>Sales executive</td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>3</div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5 d-none'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                          className='h-75 align-self-end'
                          alt='profile'
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <div className='text-dark fw-bold  fs-6'>Disha Sandipbhai</div>
                    </div>
                  </div>
                </td>
                <td className='text-dark fw-bold  fs-6'>sandipdisha</td>
                <td className='text-dark fw-bold  fs-6'>sandip.disha@gmail.com</td>
                <td className='text-dark fw-bold fs-6'>9099999672</td>
                <td className='text-dark fw-bold fs-6'>Katargam</td>
                {/* <td>
                  <span className='badge badge-light-success'>Approved</span>
                </td> */}
                <td className='text-dark fw-bold fs-6'>Sales executive</td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
        <div className='d-flex align-items-center justify-content-between pt-5'>
          <div className='min-w-100px'>
            <div className='mb-10 d-flex align-items-center' data-select2-id='show-enteries'>
              <label className='form-label fw-bold me-2 mb-0'>Show entries:</label>
              <div data-select2-id='show-enteries'>
                <select className='form-select form-select-solid h-40px py-2'>
                  <option></option>
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

      {/* begin::Modal */}
      <div className='modal fade' id='kt_modal_1'>
        <div className='modal-dialog mw-850px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create User</h5>
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
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>First Name:</label>
                    <input
                      placeholder='First name'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Last Name:</label>
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
                    <label className='form-label fw-bold'>Username:</label>
                    <input
                      placeholder='Username'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Email:</label>
                    <input
                      placeholder='Email'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Mobile no:</label>
                    <input
                      placeholder='Mobile no.'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-zone'>
                      <label className='form-label fw-bold'>Zone:</label>
                      <div data-select2-id='select-zone'>
                        <select className='form-select form-select-solid'>
                          <option></option>
                          <option value='1'>All</option>
                          <option value='2'>Katargam</option>
                          <option value='3'>Ring Road</option>
                          <option value='4'>Varachha</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Role:</label>
                      <div data-select2-id='select-role'>
                        <select className='form-select form-select-solid'>
                          <option></option>
                          <option value='1'>All</option>
                          <option value='2'>Sales Executive</option>
                          <option value='3'>Technician</option>
                          <option value='4'>Customer</option>
                          <option value='4'>Stock Manager</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Password:</label>
                    <input
                      placeholder='Password'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Confirm Password:</label>
                    <input
                      placeholder='Confirm Password'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
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
      {/* end::Modal */}
      {/* Edit Complain::Modal */}
      <div className='modal fade' id='kt_modal_2'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
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
                <h5 className='modal-title'>Edit complaint</h5>
              </div>

              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <span className='svg-icon svg-icon-2x'>
                  <KTSVG path='/media/icons/duotune/arrows/arr088.svg' />
                </span>
              </div>
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Username</label>
                    <input
                      placeholder='Name Here'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Complaint type</label>
                    <div data-select2-id='select-role'>
                      <select className='form-select form-select-solid'>
                        <option>Log out</option>
                        <option value='1'>Cable Issue</option>
                        <option value='2'>DVR Problem</option>
                        <option value='3'>Mac Reset</option>
                        <option value='4'>New Installation</option>
                        <option value='4'>Lan Problem</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Description</label>
                    <textarea
                      className='form-control form-control form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Description'
                    ></textarea>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Assign to</label>
                    <div data-select2-id='select-zone'>
                      <select className='form-select form-select-solid'>
                        <option></option>
                        <option value='1'>Hafiz Shaikh</option>
                        <option value='2'>Hafiz Shaikh</option>
                        <option value='3'>Hafiz Shaikh</option>
                        <option value='4'>Hafiz Shaikh</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-zone'>
                      <label className='form-label fw-bold'>Status</label>
                      <div data-select2-id='select-zone'>
                        <select className='form-select form-select-solid'>
                          <option></option>
                          <option value='1'>Unsolved</option>
                          <option value='2'>Solved</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-role'>
                      <label className='form-label fw-bold'>Fault</label>
                      <div data-select2-id='select-role'>
                        <select className='form-select form-select-solid'>
                          <option>Select Fault</option>
                          <option value='1'>Cable Change</option>
                          <option value='2'>Fiber Cut</option>
                          <option value='3'>Other Issue</option>
                          <option value='4'>Installation Done</option>
                          <option value='4'>Lan Problem</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Remark:</label>
                    <input
                      placeholder='Remark'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                  <label className='form-label fw-bold'>Notification</label>
                    <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                      <input
                        className='form-check-input h-20px w-30px'
                        type='checkbox'
                        value=''
                        id='flexSwitch20x30'
                      />
                      <label className='form-check-label'>Technician</label>
                    </div>
                    <div className='form-check form-switch form-check-custom form-check-solid me-10 mt-3'>
                      <input
                        className='form-check-input h-20px w-30px'
                        type='checkbox'
                        value=''
                        id='flexSwitch20x30'
                      />
                      <label className='form-check-label'>Customer</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Complain::Modal */}
      {/* View Complain::Modal */}
      <div className='modal fade' id='kt_modal_3'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
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
                <h5 className='modal-title'>View complaint</h5>
              </div>
              <div className='ms-3'>
                <a
                  href='#'
                  className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_2'
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

                    <div className='input-group mb-5'>
                      <span className='input-group-text' id='basic-addon1'>
                        @
                      </span>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                      />
                    </div>
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
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Complain::Modal */}
    </div>
  )
}

export {TablesWidget13}
