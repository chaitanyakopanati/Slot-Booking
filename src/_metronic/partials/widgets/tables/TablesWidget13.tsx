/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
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
        <div className='card-title d-flex  flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
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

          <div className='d-flex align-items-center'>
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
                Create Complaint
              </a>
            </div>
          </div>
        </div>

        {filterShow && (
          <div className='row gy-2 w-100 mx-0 mt-5'>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Status:</label>
              <div data-select2-id='select-zone'>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Solved</option>
                  <option value='3'>Unsolved</option>
                </select>
              </div>
            </div>
            <div className='col-lg-3'>
              <div>
                <label className='form-label fw-bold'>Complaint date</label>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='date'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Assign to:</label>
              <div data-select2-id='select-zone'>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>A</option>
                  <option value='3'>B</option>
                  <option value='4'>C</option>
                </select>
              </div>
            </div>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Complaint type:</label>
              <div data-select2-id='select-zone'>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>A</option>
                  <option value='3'>B</option>
                  <option value='4'>C</option>
                </select>
              </div>
            </div>
            <div className='col-lg-3'>
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
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Company:</label>
              <div data-select2-id='select-zone'>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>A</option>
                  <option value='3'>B</option>
                  <option value='4'>C</option>
                </select>
              </div>
            </div>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Fault:</label>
              <div data-select2-id='select-zone'>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>A</option>
                  <option value='3'>B</option>
                  <option value='4'>C</option>
                </select>
              </div>
            </div>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Package category:</label>
              <div data-select2-id='select-zone'>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>A</option>
                  <option value='3'>B</option>
                  <option value='4'>C</option>
                </select>
              </div>
            </div>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Created by:</label>
              <select className='form-select form-select-solid'>
                <option></option>
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

      {/* begin::Modal */}
      <div className='modal fade' id='create-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Create Complaint</h5>
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
      <div className='modal fade' id='edit-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
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
      <div className='modal fade' id='view-modal'>
        <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
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

                    <input
                      placeholder='Updated at'
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      autoComplete='off'
                    />
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
      {/* View Complain::Modal */}
    </div>
  )
}

export {TablesWidget13}
