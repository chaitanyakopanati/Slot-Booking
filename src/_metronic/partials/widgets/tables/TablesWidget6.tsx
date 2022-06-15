/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {threadId} from 'worker_threads'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import ImageSelect from '../../../../app/images/error-profile.svg'

type Props = {
  className: string
}

const TablesWidget6: React.FC<Props> = ({className}) => {
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
          </div>
        </div>

        {filterShow && (
          <>
            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Product</label>
                <select className='form-select form-select-solid'>
                  <option value='1'>All</option>
                  <option value='2'>Pending</option>
                  <option value='3'>Done</option>
                </select>
              </div>

              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Zone</label>
                <select className='form-select form-select-solid'>
                  <option value='1'>All</option>
                  <option value='2'>Not described</option>
                  <option value='3'>Abalkesh Soft</option>
                  <option value='4'>Ajay Sulin</option>
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
                <th className='max-w-60px min-w-40px rounded-start ps-4'> no.</th>
                <th className='min-w-200px'>Product</th>
                <th className='min-w-150px'>Quantity</th>
                <th className='min-w-150px'>Zone</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
                <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

                <td className='text-dark fw-bold fs-6'>Varachha</td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
                <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

                <td className='text-dark fw-bold fs-6'>Varachha</td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
                <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

                <td className='text-dark fw-bold fs-6'>Varachha</td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>

        <div className='row g-5 d-flex d-lg-none py-3'>
          <div className='col-md-6 mx-0 my-2'>
            <div className='card card-custom border'>
              <div className='card-body p-4'>
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
                  <div className='fw-bolder fs-3'>Kiritbhai</div>
                  <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Product:</div>
                  <div className='text-dark fw-bold  ms-2'> Power beam400</div>
                </div>

                <div id='card-id-1' className='collapse'>
                  <div className='py-1 d-flex align-items-cenetr'>
                    <div className='fw-bolder '>Quantity:</div>
                    <div className='text-dark fw-bold  ms-2'>2 Pieces</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '> Zone:</div>
                    <div className='text-dark fw-bold  ms-2'>Varachha</div>
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
                  <div className='fw-bolder fs-3'>Kiritbhai</div>
                  <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Product:</div>
                  <div className='text-dark fw-bold  ms-2'> Power beam400</div>
                </div>

                <div id='card-id-2' className='collapse'>
                  <div className='py-1 d-flex align-items-cenetr'>
                    <div className='fw-bolder '>Quantity:</div>
                    <div className='text-dark fw-bold  ms-2'>2 Pieces</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '> Zone:</div>
                    <div className='text-dark fw-bold  ms-2'>Varachha</div>
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
    </div>
  )
}

export {TablesWidget6}
