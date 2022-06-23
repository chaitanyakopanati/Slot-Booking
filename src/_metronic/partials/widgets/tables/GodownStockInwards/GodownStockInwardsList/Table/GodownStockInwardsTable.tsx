import React from 'react'
import {KTSVG} from '../../../../../../helpers'

const GodownStockInwardsTable = () => {
  return (
    <div>
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
                  // data-bs-target='#edit-inquiries-modal'
                  data-bs-target='#create-inquiry-modal'
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
    </div>
  )
}

export default GodownStockInwardsTable
