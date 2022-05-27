import React, { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'

function BanksWrapper() {
  const [filterShow, setFilterShow] = useState(false)

  return (
    <div>
      <div className='row gy-5 gx-xl-8'>
        <div className='col-xl-12'>
          {/* <TablesWidget13 className='card-xxl-stretch mb-5 mb-xl-8' /> */}
          <div className='card card-xxl-stretch mb-5 mb-xl-8'>
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
                    data-bs-target='#create-modal'
                  >
                    <span className='svg-icon svg-icon-gray-500 me-1'>
                      <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                    </span>
                    Create bank
                  </a>
                </div>
              </div>

              {filterShow && (
                <div className='row w-100 mx-0 my-5'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <select className='form-select form-select-solid'>
                      <option value='1'>All</option>
                      <option value='2'>A</option>
                      <option value='3'>B</option>
                      <option value='4'>C</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            {/* end::Header */}

            {/* begin::Body */}
            <div className='card-body py-3'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border table-striped'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fw-bolder text-muted  bg-dark'>
                      <th className='max-w-60px min-w-40px rounded-start ps-4 text-center'>No</th>
                      <th className='min-w-150px'>Name</th>
                      <th className='min-w-200px'>Created at</th>
                      <th className='min-w-125px rounded-end'>Actions</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    <tr>
                      <td>
                        <div className='text-dark fw-bolder fs-6 ps-4 text-center'>1</div>
                      </td>
                      <td>
                        <div className='text-dark fw-bold  fs-6'>Equitas small finance bank</div>
                      </td>
                      <td className='text-dark fw-bold fs-6'>21-Jun-2020 04:57 PM</td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#view-modal'
                        >
                          <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                        </a>

                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#edit-modal'
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
                        <div className='text-dark fw-bolder fs-6 ps-4 text-center'>2</div>
                      </td>
                      <td>
                        <div className='text-dark fw-bold  fs-6'>Bandhan bank</div>
                      </td>
                      <td className='text-dark fw-bold fs-6'>21-Jun-2020 04:57 PM</td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#view-modal'
                        >
                          <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                        </a>

                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#edit-modal'
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
                        <div className='text-dark fw-bolder fs-6 ps-4 text-center'>3</div>
                      </td>
                      <td>
                        <div className='text-dark fw-bold  fs-6'>Online-snet</div>
                      </td>
                      <td className='text-dark fw-bold fs-6'>21-Jun-2020 04:57 PM</td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#view-modal'
                        >
                          <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                        </a>

                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#edit-modal'
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
                        <div className='text-dark fw-bolder fs-6 ps-4 text-center'>4</div>
                      </td>
                      <td>
                        <div className='text-dark fw-bold  fs-6'>The panchsheel mercahntile co-op. bank ltd</div>
                      </td>
                      <td className='text-dark fw-bold fs-6'>21-Jun-2020 04:57 PM</td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#view-modal'
                        >
                          <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                        </a>

                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#edit-modal'
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

            {/* begin::create Modal */}
            <div className='modal fade' id='create-modal'>
              <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'>Create bank</h5>
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
                        <div className='col'>
                          <label className='form-label fw-bold'>Name</label>
                          <input
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
            {/* end::create Modal */}
            {/* Edit  ::Modal */}
            <div className='modal fade' id='edit-modal'>
              <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                  <div className='modal-header'>

                    <h5 className='modal-title'>Edit bank</h5>
                    <div
                      className='btn btn-icon btn-sm btn-active-light-primary ms-auto'
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
                        <div className='col'>
                          <label className='form-label fw-bold'>Name</label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type='text'
                            autoComplete='off'
                          />
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
            {/* Edit ::Modal */}
            {/* View ::Modal */}
            <div className='modal fade' id='view-modal'>
              <div className='modal-dialog modal-dialog-centered modal-lg'>
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
                      <h5 className='modal-title'>View bank</h5>
                    </div>
                    <div className='ms-3'>
                      <a
                        href='#'
                        className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                        data-bs-toggle='modal'
                        data-bs-target='#edit-modal'
                      >
                        <span className='svg-icon svg-icon-gray-500 me-1'>
                          <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                        </span>
                        Edit bank
                      </a>
                    </div>
                  </div>

                  <div className='modal-body'>
                    <div className='container-fluid p-0'>
                      <div className='row w-100 mx-0 mb-4 gy-4'>
                        <div className='col'>
                          <label className='form-label fw-bold'>Name</label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type='text'
                            autoComplete='off'
                          />
                        </div>
                      </div>

                      <div className='row w-100 mx-0 mb-4 gy-4'>
                        <div className='col-lg-6'>
                          <label className='form-label fw-bold'>Created by</label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type='text'
                            autoComplete='off'
                          />
                        </div>
                        <div className='col-lg-6'>
                          <label className='form-label fw-bold'>Updated by</label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type='text'
                            autoComplete='off'
                          />
                        </div>
                      </div>

                      <div className='row w-100 mx-0 mb-4 gy-4'>
                        <div className='col-lg-6'>
                          <label className='form-label fw-bold'>Created at</label>
                          <input
                            className='form-control form-control-lg form-control-solid'
                            type='date'
                            autoComplete='off'
                          />
                        </div>
                        <div className='col-lg-6'>
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
                </div>
              </div>
            </div>
            {/* view ::Modal */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default BanksWrapper