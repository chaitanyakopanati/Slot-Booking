import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../../helpers'

const ComplaintHeader = () => {
  const [filterShow, setFilterShow] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
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

            <div
              className='ms-3'
              // onClick={() => {
              //   navigate('dashboard/form')
              // }}
            >
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
    </div>
  )
}

export default ComplaintHeader
