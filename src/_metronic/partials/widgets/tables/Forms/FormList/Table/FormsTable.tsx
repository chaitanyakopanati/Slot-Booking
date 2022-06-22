import React from 'react'
import {KTSVG} from '../../../../../../helpers'

const FormsTable = () => {
  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
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
                  // data-bs-target='#edit-form-modal'
                  data-bs-target='#create-form-modal'
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

      <div className='row g-5 d-flex d-lg-none py-3'>
        <div className='col-md-6 mx-0 my-2'>
          <div className='card card-custom border'>
            <div className='card-body p-4'>
              <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                <div className='text-dark fw-bolder fs-3 me-2'>File no.</div>
                <div className='fw-bolder fs-3'>2022-23/438</div>
                <div className='fw-bold badge badge-light-danger ms-auto'>New</div>
              </div>
              <div className='text-dark fw-bolder py-1'>
                <span>Kiritbhai</span>
                <span className='text-muted'>- khitaliya</span>
              </div>

              <div id='card-id-1' className='collapse'>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Sales Executive:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>
                <div className='py-1 d-flex align-items-cenetr'>
                  <div className='fw-bolder '>Form date:</div>
                  <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
                </div>
                <div className='d-flex align-items-center justify-content-start py-1 my-1 flex-wrap'>
                  <div className='d-flex align-items-center d-none'>
                    <i className='text-dark bi bi-envelope-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-telephone-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
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
                  data-bs-target='#view-form-modal'
                >
                  <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                </a>

                <a
                  href='#'
                  className='btn btn-icon btn-active-color-primary btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#edit-form-modal'
                >
                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                </a>
                <a
                  href='#'
                  className='btn btn-icon btn-active-color-warning btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#view-customer-modal'
                >
                  <KTSVG
                    path='/media/icons/duotune/communication/com013.svg'
                    className='svg-icon-3'
                  />
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
                <div className='text-dark fw-bolder fs-3 me-2'>File no.</div>
                <div className='fw-bolder fs-3'>2022-23/438</div>
                <div className='fw-bold badge badge-light-info ms-auto'>Shifting</div>
              </div>
              <div className='text-dark fw-bolder py-1'>
                <span>Kiritbhai</span>
                <span className='text-muted'>- khitaliya</span>
              </div>

              <div id='card-id-2' className='collapse'>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Sales Executive:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>
                <div className='py-1 d-flex align-items-cenetr'>
                  <div className='fw-bolder '>Form date:</div>
                  <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
                </div>
                <div className='d-flex align-items-center justify-content-start py-1 my-1 flex-wrap'>
                  <div className='d-flex align-items-center d-none'>
                    <i className='text-dark bi bi-envelope-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-telephone-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
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
                  data-bs-target='#view-form-modal'
                >
                  <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                </a>

                <a
                  href='#'
                  className='btn btn-icon btn-active-color-primary btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#edit-form-modal'
                >
                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                </a>
                <a
                  href='#'
                  className='btn btn-icon btn-active-color-warning btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#view-customer-modal'
                >
                  <KTSVG
                    path='/media/icons/duotune/communication/com013.svg'
                    className='svg-icon-3'
                  />
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
                <div className='text-dark fw-bolder fs-3 me-2'>File no.</div>
                <div className='fw-bolder fs-3'>2022-23/438</div>
                <div className='fw-bold badge badge-light-success ms-auto'>Renew</div>
              </div>
              <div className='text-dark fw-bolder py-1'>
                <span>Kiritbhai</span>
                <span className='text-muted'>- khitaliya</span>
              </div>

              <div id='card-id-3' className='collapse'>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Sales Executive:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>
                <div className='py-1 d-flex align-items-cenetr'>
                  <div className='fw-bolder '>Form date:</div>
                  <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
                </div>
                <div className='d-flex align-items-center justify-content-start py-1 my-1 flex-wrap'>
                  <div className='d-flex align-items-center d-none'>
                    <i className='text-dark bi bi-envelope-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-telephone-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
                </div>
              </div>

              <div
                className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                data-bs-toggle='collapse'
                data-bs-target='#card-id-3'
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
                  data-bs-target='#view-form-modal'
                >
                  <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                </a>

                <a
                  href='#'
                  className='btn btn-icon btn-active-color-primary btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#edit-form-modal'
                >
                  <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                </a>
                <a
                  href='#'
                  className='btn btn-icon btn-active-color-warning btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#view-customer-modal'
                >
                  <KTSVG
                    path='/media/icons/duotune/communication/com013.svg'
                    className='svg-icon-3'
                  />
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

export default FormsTable
