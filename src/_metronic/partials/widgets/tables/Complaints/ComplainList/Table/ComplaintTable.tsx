import React from 'react'
import {KTSVG} from '../../../../../../helpers'

const ComplaintTable = () => {
  return (
    <div>
      <div className='table-responsive d-lg-block d-none'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              <th className='min-w-150px rounded-start ps-4'>Complaint no.</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-150px'>Username</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Package category</th>
              <th className='min-w-150px'>Complaint type</th>
              <th className='min-w-150px'>Assign to</th>
              <th className='min-w-100px'>Status</th>
              <th className='min-w-200px'>Complaint date</th>
              <th className='min-w-125px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            <tr>
              <td>
                <div className='text-dark fw-bolder fs-6 ps-4'>20971</div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='text-dark fw-bold  fs-6'>Ganesh Ahir</div>
                </div>
              </td>
              <td className='text-dark fw-bold  fs-6'>ganesh</td>
              <td className='text-dark fw-bold  fs-6'>Rajlaxmi Society Opp. Madhuvan Suma...</td>
              <td className='text-dark fw-bold fs-6'>Broadband</td>
              <td className='text-dark fw-bold fs-6'>Logout</td>
              <td className='text-dark fw-bold fs-6'>Manis solanki</td>
              <td className='text-dark fw-bold fs-6'>Unsolved</td>

              {/* <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>Unsolved</span>
                </td> */}
              <td className='text-dark fw-bold fs-6'>06-Jun-2022 09:50 AM</td>
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
                <div className='text-dark fw-bolder fs-6 ps-4'>20970</div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='text-dark fw-bold  fs-6'>Sanjaybhai</div>
                </div>
              </td>
              <td className='text-dark fw-bold  fs-6'>smgajera1</td>
              <td className='text-dark fw-bold  fs-6'>Shop-1, 841, New Gidc Katargam.</td>
              <td className='text-dark fw-bold fs-6'>Broadband</td>
              <td className='text-dark fw-bold fs-6'>Logout</td>
              <td className='text-dark fw-bold fs-6'>Hazif Shaikh</td>
              <td className='text-dark fw-bold fs-6'>Unsolved</td>
              {/* 
                <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>Unsolved</span>
                </td> */}
              <td className='text-dark fw-bold fs-6'>06-Jun-2022 09:50 AM</td>
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
                <div className='text-dark fw-bolder fs-6 ps-4'>20971</div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='text-dark fw-bold  fs-6'>Ganesh Ahir</div>
                </div>
              </td>
              <td className='text-dark fw-bold  fs-6'>ganesh</td>
              <td className='text-dark fw-bold  fs-6'>Rajlaxmi Society Opp. Madhuvan Suma...</td>
              <td className='text-dark fw-bold fs-6'>Broadband</td>
              <td className='text-dark fw-bold fs-6'>Logout</td>
              <td className='text-dark fw-bold fs-6'>Manis solanki</td>
              <td className='text-dark fw-bold fs-6'>Unsolved</td>
              {/* <td className='fw-bold fs-6'>
                  <span className='badge badge-light-danger fs-6'>Unsolved</span>
                </td> */}
              <td className='text-dark fw-bold fs-6'>06-Jun-2022 09:50 AM</td>
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
                  // data-bs-target='#edit-modal'
                  data-bs-target='#create-modal'
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

      <div className='row g-5 d-flex d-lg-none py-3'>
        <div className='col-md-6 mx-0 my-2'>
          <div className='card card-custom border'>
            <div className='card-body p-4'>
              <div className='py-1 d-flex align-items-center flex-wrap w-100'>
                <div className='text-dark fw-bolder fs-3 me-2'>20971.</div>
                {/* <div className='d-flex flex-column ms-2'> */}
                <div className='text-dark fw-bolder fs-3'>Ganesh Ahir</div>
                <div className='text-muted fw-bold ms-2'>- ganesh</div>
                <div className='fw-bold badge badge-light-danger ms-auto'>Unsolved</div>
                {/* </div> */}
              </div>
              <div className='text-dark fw-bold'>
                <span>PC issue</span>
                <span className='mx-2'>|</span>
                <span>Broadband</span>
              </div>
              <div id='card-id-1' className='collapse'>
                <div className='d-flex align-items-center justify-content-evenly py-1 my-1 flex-wrap d-none'>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-envelope-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-telephone-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Assigned to:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Address:</div>
                  <div className='text-dark fw-bold  ms-2'>
                    {' '}
                    Rajlaxmi Society Opp. Madhuvan Suma...
                  </div>
                </div>
                <div className='py-1 d-flex align-items-cenetr'>
                  <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2' />
                  <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
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
                  data-bs-target='#view-modal'
                >
                  <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                </a>
                <a
                  href='#'
                  className='btn btn-icon btn-active-color-primary btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#edit-modal'
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
              <div className='py-1 d-flex align-items-center flex-wrap w-100'>
                <div className='text-dark fw-bolder fs-3 me-2'>20971.</div>
                {/* <div className='d-flex flex-column ms-2'> */}
                <div className='text-dark fw-bolder fs-3'>Ganesh Ahir</div>
                <div className='text-muted fw-bold  ms-2'>- ganesh</div>
                <div className='fw-bold  badge badge-light-success ms-auto'>Solved</div>
                {/* </div> */}
              </div>
              <div className='text-dark fw-bold '>
                <span>Lan problem</span>
                <span className='mx-2'>|</span>
                <span>Broadband</span>
              </div>
              <div id='card-id-2' className='collapse'>
                <div className='d-flex align-items-center justify-content-evenly py-1 my-1 flex-wrap d-none'>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-envelope-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-telephone-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Assigned to:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Address:</div>
                  <div className='text-dark fw-bold  ms-2'>
                    {' '}
                    Rajlaxmi Society Opp. Madhuvan Suma...
                  </div>
                </div>
                <div className='py-1 d-flex align-items-cenetr'>
                  <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2' />
                  {/* <div className='fw-bolder'>date:</div> */}
                  <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
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
                  data-bs-target='#view-modal'
                >
                  <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                </a>
                <a
                  href='#'
                  className='btn btn-icon btn-active-color-primary btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#edit-modal'
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
              <div className='py-1 d-flex align-items-center flex-wrap w-100'>
                <div className='text-dark fw-bolder fs-3 me-2'>20971.</div>
                {/* <div className='d-flex flex-column ms-2'> */}
                <div className='text-dark fw-bolder fs-3'>Ganesh Ahir</div>
                <div className='text-muted fw-bold  ms-2'>- ganesh</div>
                <div className='fw-bold  badge badge-light-danger ms-auto'>Unsolved</div>
                {/* </div> */}
              </div>
              <div className='py-1 d-flex'>
                <div className='text-dark fw-bold '>
                  <span>Logout</span>
                  <span className='mx-2'>|</span>
                  <span>Broadband</span>
                </div>
              </div>
              <div id='card-id-3' className='collapse'>
                <div className='d-flex align-items-center justify-content-evenly py-1 my-1 flex-wrap d-none'>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-envelope-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='text-dark bi bi-telephone-fill fs-5'></i>
                    <div className='text-dark fw-bold  ms-2'>9099999676</div>
                  </div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Assigned to:</div>
                  <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '>Address:</div>
                  <div className='text-dark fw-bold  ms-2'>
                    {' '}
                    Rajlaxmi Society Opp. Madhuvan Suma...
                  </div>
                </div>
                <div className='py-1 d-flex align-items-cenetr'>
                  <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2' />
                  <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
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
                  data-bs-target='#view-modal'
                >
                  <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
                </a>
                <a
                  href='#'
                  className='btn btn-icon btn-active-color-primary btn-sm me-1'
                  data-bs-toggle='modal'
                  data-bs-target='#edit-modal'
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

export default ComplaintTable
