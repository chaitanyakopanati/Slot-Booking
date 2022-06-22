import React from 'react'
import {KTSVG} from '../../../../../../helpers'

const InquiriesTable = () => {
  return (
    <div>
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
          <div className='card card-custom border'>
            <div className='card-body p-4'>
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
                  <i className='text-dark bi bi-telephone-fill fs-5'></i>
                  <div className='text-dark fw-bold  ms-2'>9099999676</div>
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
                  <i className='text-dark bi bi-telephone-fill fs-5'></i>
                  <div className='text-dark fw-bold  ms-2'>9099999676</div>
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

export default InquiriesTable
