/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTSVG, toAbsoluteUrl} from '../../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'

type Props = {
  className: string
}

const TablesWidget2: React.FC<Props> = ({className}) => {
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
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr091.svg'
                    className='svg-icon-2 me-0'
                  />
                </span>
                <span className='d-none d-sm-block ms-3'>Download</span>
              </a>
            </div>
            {/* end::download */}

            {/* begin::filter */}

            <div className='ms-3' onClick={() => setFilterShow(!filterShow)}>
              <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                <span className='svg-icon svg-icon-gray-500 me-0'>
                  <KTSVG
                    path='/media/icons/duotune/general/gen031.svg'
                    className='svg-icon-2 me-0'
                  />
                </span>
                <span className='d-none d-sm-block ms-3'>Filter</span>
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
                Create godown stock inwards
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
                  <label className='form-label fw-bold'>Inward date</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>

              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Product</label>
                <select className='form-select form-select-solid'>
                  <option value='1'>All</option>
                  <option value='2'>Pending</option>
                  <option value='3'>Done</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Supplier name</label>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder='All'
                  autoComplete='off'
                />
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
                <th className='max-w-60px min-w-40px rounded-start ps-4'>Inward no.</th>
                <th className='min-w-150px'>Inward date</th>
                <th className='min-w-200px'>Product</th>
                <th className='min-w-150px'>Quantity</th>
                <th className='min-w-150px'>Supplier name</th>
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
                <td className='text-dark fw-bold  fs-6'>14-Jun-2022</td>
                <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
                <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

                <td className='text-dark fw-bold fs-6'>Alambar cable</td>
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
                <td className='text-dark fw-bold  fs-6'>14-Jun-2022</td>
                <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
                <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

                <td className='text-dark fw-bold fs-6'>Alambar cable</td>

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
                <td className='text-dark fw-bold  fs-6'>14-Jun-2022</td>
                <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
                <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

                <td className='text-dark fw-bold fs-6'>Alambar cable</td>

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

        {/* responsive */}
        <div className='row g-5 d-flex d-lg-none py-3'>
          <div className='col-md-6 mx-0 my-2'>
            <div className='card card-custom border'>
              <div className='card-body p-4'>
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
                  <div className='fw-bolder fs-3'>bbjetani</div>
                  <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Supplier name:</div>
                  <div className='text-dark fw-bold  ms-2'>Alambar Cable</div>
                </div>

                <div id='card-id-1' className='collapse'>
                  <div className='py-1 d-flex align-items-cenetr'>
                    <div className='fw-bolder '>Inward date:</div>
                    <div className='text-dark fw-bold  ms-2'>03-Jun-2022</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Product:</div>
                    <div className='text-dark fw-bold  ms-2'>Fiber unarmoured-2f</div>
                  </div>

                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Quantity:</div>
                    <div className='text-dark fw-bold  ms-2'>2000 mtr</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Zone:</div>
                    <div className='text-dark fw-bold  ms-2'>Katargam</div>
                  </div>
                </div>

                <div
                  className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                  data-bs-toggle='collapse'
                  data-bs-target='#card-id-1'
                  aria-expanded='false'
                >
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
            <div className='card card-custom border'>
              <div className='card-body p-4'>
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>2.</div>
                  <div className='fw-bolder fs-3'>bbjetani</div>
                  <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Supplier name:</div>
                  <div className='text-dark fw-bold  ms-2'>Alambar Cable</div>
                </div>

                <div id='card-id-2' className='collapse'>
                  <div className='py-1 d-flex align-items-cenetr'>
                    <div className='fw-bolder '>Inward date:</div>
                    <div className='text-dark fw-bold  ms-2'>03-Jun-2022</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Product:</div>
                    <div className='text-dark fw-bold  ms-2'>Fiber unarmoured-2f</div>
                  </div>

                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Quantity:</div>
                    <div className='text-dark fw-bold  ms-2'>2000 mtr</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Zone:</div>
                    <div className='text-dark fw-bold  ms-2'>Katargam</div>
                  </div>
                </div>

                <div
                  className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                  data-bs-toggle='collapse'
                  data-bs-target='#card-id-2'
                  aria-expanded='false'
                >
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
        {/* responsive */}

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
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create godown stock inward</h5>
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
                    <label className='form-label fw-bold '>Inward date </label>
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
                    <div className='col'>
                      <label className='form-label fw-bold'>Supplier name</label>
                      <input
                        placeholder='Supplier name'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                      />
                    </div>
                  </div>
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
      {/* end::create inquiry Modal */}

      {/* Edit Installation::Modal */}
      <div className='modal fade' id='edit-inquiries-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Edit godown stock inward</h5>
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
                    <label className='form-label fw-bold '>Inward date </label>
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
                    <div className='col'>
                      <label className='form-label fw-bold'>Supplier name</label>
                      <input
                        placeholder='Supplier name'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                      />
                    </div>
                  </div>
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Installation::Modal */}

      {/* View installation::Modal */}
      <div className='modal fade' id='view-inquiries-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='d-flex align-items-center'>
                <h5 className='modal-title'>View godown stock inward</h5>
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
                  Edit godown stock inward
                </a>

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
            </div>

            <div className='modal-body'>
              <div className='container-fluid p-0'>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold '>Inward date </label>
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
                    <div className='col'>
                      <label className='form-label fw-bold'>Supplier name</label>
                      <input
                        placeholder='Supplier name'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        autoComplete='off'
                      />
                    </div>
                  </div>
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

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created by</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Created at</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated by</label>
                    <input type='text' className='form-control form-control-solid' />
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Updated at</label>
                    <input type='date' className='form-control form-control-solid' />
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
              {/* <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* view installation::Modal */}
    </div>
  )
}

export {TablesWidget2}
