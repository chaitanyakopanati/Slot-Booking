import React, {useState} from 'react'
import {KTSVG} from '../../../../../../helpers'

const FormsHeader = () => {
  const [filterShow, setFilterShow] = useState(false)

  return (
    <div>
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

            {/* end::filter btn */}

            {/* begin::add user btn */}
            <div className='ms-3'>
              <div
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                data-bs-toggle='modal'
                data-bs-target='#create-form-modal'
              >
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                </span>
                Create Form
              </div>
            </div>
            {/* end::add user btn */}
          </div>
        </div>

        {filterShow && (
          <>
            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Username</label>
                <input
                  placeholder='Search username'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                />
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Zone</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Katargam</option>
                  <option value='3'>Ring Road</option>
                  <option value='4'>Varachha</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Company</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Earth</option>
                  <option value='3'>Softnet</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Sales executive</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Not described</option>
                  <option value='3'>Abalkesh Soft</option>
                  <option value='4'>Ajay Sulin</option>
                </select>
              </div>
            </div>

            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Payment</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Due</option>
                  <option value='3'>Clear</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Created at</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Form date</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>
              <div className='col-lg-3'>
                <div>
                  <label className='form-label fw-bold'>Expiry date</label>
                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='date'
                    autoComplete='off'
                  />
                </div>
              </div>
            </div>

            <div className='row w-100 mx-0 my-3'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Package Category</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option>All</option>
                  <option value='1'>Not described</option>
                  <option value='2'>Broadband</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Connection type</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option>All</option>
                  <option value='1'>Not described</option>
                  <option value='2'>Cable</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Form type</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>New</option>
                  <option value='3'>Renew</option>
                </select>
              </div>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Form submit</label>
                <select className='form-select form-select-solid'>
                  <option></option>
                  <option value='1'>All</option>
                  <option value='2'>Pending</option>
                  <option value='3'>Done</option>
                  <option value='4'>Cancel</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default FormsHeader
