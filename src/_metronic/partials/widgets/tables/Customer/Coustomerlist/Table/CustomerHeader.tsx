import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {KTSVG} from '../../../../../../helpers'

function CustomerHeader() {
  const [filterShow, setFilterShow] = useState(false)
  const navigation = useNavigate()
  return (
    <>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='card-title d-flex flex-md-row flex-column gap-3 align-items-center justify-content-between w-100 mx-0'>
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
            <div className='d-flex'>
              <div onClick={() => setFilterShow(!filterShow)}>
                <div className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'>
                  <span className='svg-icon svg-icon-gray-500 me-1'>
                    <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-3' />
                  </span>
                  Filter
                </div>
              </div>
            </div>

            <div className='ms-5'>
              <a
                // href='#'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bold'
                // data-bs-toggle='modal'
                // data-bs-target='#kt_modal_1'
                onClick={() =>{
                  navigation('customers/form')
                }}
              >
                <span className='svg-icon svg-icon-gray-500 me-1'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                </span>
                Create Customer
              </a>
            </div>
          </div>
        </div>

        {filterShow && (
          <div className='row w-100 mx-0 mt-5'>
            <div className='col-lg-3'>
              <label className='form-label fw-bold'>Username</label>
              <input
                placeholder='All'
                className='form-control form-control-lg form-control-solid'
                type='text'
                autoComplete='off'
              />
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-zone'>
                <label className='form-label fw-bold'>Zone</label>
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
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-role'>
                <label className='form-label fw-bold'>Company</label>
                <div data-select2-id='select-role'>
                  <select className='form-select form-select-solid'>
                    <option></option>
                    <option value='1'>All</option>
                    <option value='2'>Sales Executive</option>
                    <option value='3'>Technician</option>
                    <option value='4'>Customer</option>
                    <option value='4'>Stock Manager</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Created by</label>
                <div data-select2-id='select-created-by'>
                  <select className='form-select form-select-solid'>
                    <option>All</option>
                    <option value='1'>A</option>
                    <option value='2'>B</option>
                    <option value='3'>C</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Installer</label>
                <div data-select2-id='select-created-by'>
                  <select className='form-select form-select-solid'>
                    <option>All</option>
                    <option value='1'>A</option>
                    <option value='2'>B</option>
                    <option value='3'>C</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Sales Executive</label>
                <div data-select2-id='select-created-by'>
                  <select className='form-select form-select-solid'>
                    <option>All</option>
                    <option value='1'>A</option>
                    <option value='2'>B</option>
                    <option value='3'>C</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Main point</label>
                <div data-select2-id='select-created-by'>
                  <select className='form-select form-select-solid'>
                    <option>All</option>
                    <option value='1'>A</option>
                    <option value='2'>B</option>
                    <option value='3'>C</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='mb-10' data-select2-id='select-created-by'>
                <label className='form-label fw-bold'>Connection type</label>
                <div data-select2-id='select-created-by'>
                  <select className='form-select form-select-solid'>
                    <option>All</option>
                    <option value='1'>A</option>
                    <option value='2'>B</option>
                    <option value='3'>C</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* end::Header */}
    </>
  )
}

export default CustomerHeader
