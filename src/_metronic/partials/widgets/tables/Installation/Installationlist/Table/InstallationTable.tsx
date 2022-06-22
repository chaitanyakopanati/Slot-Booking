import React from 'react'
import { KTSVG } from '../../../../../../helpers'

function InstallationTable() {
  return (
    <>
            {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive d-none d-lg-block'>
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
                <th className='min-w-200px'>Created at</th>
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
                    data-bs-target='#view-installation-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    // data-bs-target='#edit-installation-modal'
                    data-bs-target='#create-installation-modal'
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
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/arrows/arr065.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>2</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>mmsorathiya_jainam</td>
                <td className='text-dark fw-bold  fs-6'>Mukesh</td>
                <td className='text-dark fw-bold  fs-6'>246, 247, Avadh Viceroy Sarthana Ja...</td>
                <td className='text-dark fw-bold fs-6'>Anil Sabhadiya</td>
                <td className='text-dark fw-bold fs-6'>25-May-2022 11:54 AM</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>Pending</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-installation-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-installation-modal'
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
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/arrows/arr065.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='text-dark fw-bolder fs-6 ps-4'>3</div>
                </td>
                <td className='text-dark fw-bold  fs-6'>hmkalathiya</td>
                <td className='text-dark fw-bold  fs-6'>Hasmukhbhai</td>
                <td className='text-dark fw-bold  fs-6'>824/25, 8th Floor, Rajhans Heights,...</td>
                <td className='text-dark fw-bold fs-6'>Amit Rana</td>
                <td className='text-dark fw-bold fs-6'>23-May-2022 11:43 AM</td>
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-success fs-6'>Done</span>
                </td>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-installation-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-installation-modal'
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
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/arrows/arr065.svg' className='svg-icon-2' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}

        <div className='row g-5 d-flex d-lg-none py-3'>
          <div className='col-md-6 mx-0 my-2'>
            <div className="card card-custom border">
              <div className="card-body p-4">
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
                  <div className='text-dark fw-bolder fs-3'>Kiritbhai</div>
                  <div className='text-muted fw-bold ms-2'>- khitaliya</div>
                  <div className='fw-bold  badge badge-light-danger ms-auto'>Pending</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder'>Installer:</div>
                  <div className='text-dark fw-bold  ms-2'>Gaurang Sakhiya</div>
                </div>

                <div id='card-id-1' className='collapse'>
                  <div className='d-flex align-items-center justify-content-evenly py-1 my-1 flex-wrap d-none'>
                    <div className='d-flex align-items-center'>
                      <i className="text-dark bi bi-envelope-fill fs-5"></i>
                      <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                    </div>
                    <div className='d-flex align-items-center'>
                      <i className="text-dark bi bi-telephone-fill fs-5"></i>
                      <div className='text-dark fw-bold  ms-2'>9099999676</div>
                    </div>
                  </div>

                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Address:</div>
                    <div className='text-dark fw-bold  ms-2'>246, Platinum Point, Sudama Chok, M...</div>
                  </div>
                  <div className='py-1 d-flex align-items-cenetr'>
                    {/* <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2 me-2' /> */}
                    <span className='fw-bolder'>Created at:</span>
                    <span className='text-dark fw-bold  ms-2'>25-May-2022 12:05 PM</span>
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
                <div className='d-flex align-items-center justify-content-evenly w-75 mx-auto'>
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-installation-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-installation-modal'
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
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/arrows/arr065.svg' className='svg-icon-2' />
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 mx-0 my-2'>
            <div className="card card-custom border">
              <div className="card-body p-4">
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
                  <div className='text-dark fw-bolder fs-3'>Mukesh</div>
                  <div className='text-muted fw-bold ms-2'>- mmsorathiya_jainam</div>
                  <div className='fw-bold  badge badge-light-danger ms-auto'>Pending</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder'>Installer:</div>
                  <div className='text-dark fw-bold  ms-2'>Anil Sabhadiya</div>
                </div>

                <div id='card-id-2' className='collapse'>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Address:</div>
                    <div className='text-dark fw-bold  ms-2'>246, 247, Avadh Viceroy Sarthana Ja...</div>
                  </div>
                  <div className='py-1 d-flex align-items-cenetr'>
                    {/* <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2 me-2' /> */}
                    <span className='fw-bolder'>Created at:</span>
                    <span className='text-dark fw-bold  ms-2'>25-May-2022 12:05 PM</span>
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
                <div className='d-flex align-items-center justify-content-evenly w-75 mx-auto'>
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-installation-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-installation-modal'
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
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/arrows/arr065.svg' className='svg-icon-2' />
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 mx-0 my-2'>
            <div className="card card-custom border">
              <div className="card-body p-4">
                <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                  <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
                  <div className='text-dark fw-bolder fs-3'>Hasmukhbhai</div>
                  <div className='text-muted fw-bold ms-2'>- hmkalathiya</div>
                  <div className='fw-bold  badge badge-light-success ms-auto'>Done</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder'>Installer:</div>
                  <div className='text-dark fw-bold  ms-2'>Amit rana</div>
                </div>

                <div id='card-id-3' className='collapse'>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>Address:</div>
                    <div className='text-dark fw-bold  ms-2'>246, 247, Avadh Viceroy Sarthana Ja...</div>
                  </div>
                  <div className='py-1 d-flex align-items-cenetr'>
                    {/* <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2 me-2' /> */}
                    <span className='fw-bolder'>Created at:</span>
                    <span className='text-dark fw-bold  ms-2'>25-May-2022 12:05 PM</span>
                  </div>
                </div>

                <div className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                  data-bs-toggle='collapse'
                  data-bs-target='#card-id-3'
                  aria-expanded='false'>
                  <span>+ &nbsp;</span>More info
                </div>
              </div>

              <div className='card-footer p-2 py-0 bg-light'>
                <div className='d-flex align-items-center justify-content-evenly w-75 mx-auto'>
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-success btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#view-installation-modal'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-primary btn-sm me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#edit-installation-modal'
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
                  <a
                    href='#'
                    className='btn btn-icon btn-active-color-danger btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/arrows/arr065.svg' className='svg-icon-2' />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::Body */}
    </>
  )
}

export default InstallationTable