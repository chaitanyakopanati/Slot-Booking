import React from 'react'

const OfficeStockAvailabilityTable = () => {
  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'> no.</th>
              <th className='min-w-200px'>Product</th>
              <th className='min-w-150px'>Quantity</th>
              <th className='min-w-150px'>Zone</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            <tr>
              <td>
                <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
              </td>
              <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
              <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

              <td className='text-dark fw-bold fs-6'>Varachha</td>
            </tr>
            <tr>
              <td>
                <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
              </td>
              <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
              <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

              <td className='text-dark fw-bold fs-6'>Varachha</td>
            </tr>
            <tr>
              <td>
                <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
              </td>
              <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
              <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

              <td className='text-dark fw-bold fs-6'>Varachha</td>
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
                <div className='fw-bolder '>Product:</div>
                <div className='text-dark fw-bold  ms-2'> Power beam400</div>
              </div>

              <div id='card-id-1' className='collapse'>
                <div className='py-1 d-flex align-items-cenetr'>
                  <div className='fw-bolder '>Quantity:</div>
                  <div className='text-dark fw-bold  ms-2'>2 Pieces</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '> Zone:</div>
                  <div className='text-dark fw-bold  ms-2'>Varachha</div>
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
          </div>
        </div>
        <div className='col-md-6 mx-0 my-2'>
          <div className='card card-custom border'>
            <div className='card-body p-4'>
              <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                <div className='text-dark fw-bolder fs-3 me-2'>2.</div>
                <div className='fw-bolder fs-3'>Kiritbhai</div>
                <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
              </div>
              <div className='py-1 d-flex'>
                <div className='fw-bolder '>Product:</div>
                <div className='text-dark fw-bold  ms-2'> Power beam400</div>
              </div>

              <div id='card-id-2' className='collapse'>
                <div className='py-1 d-flex align-items-cenetr'>
                  <div className='fw-bolder '>Quantity:</div>
                  <div className='text-dark fw-bold  ms-2'>2 Pieces</div>
                </div>
                <div className='py-1 d-flex'>
                  <div className='fw-bolder '> Zone:</div>
                  <div className='text-dark fw-bold  ms-2'>Varachha</div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficeStockAvailabilityTable
