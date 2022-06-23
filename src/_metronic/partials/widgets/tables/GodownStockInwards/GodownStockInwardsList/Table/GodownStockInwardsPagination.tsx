import React from 'react'

const GodownStockInwardsPagination = () => {
  return (
    <div>
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
    </div>
  )
}

export default GodownStockInwardsPagination
