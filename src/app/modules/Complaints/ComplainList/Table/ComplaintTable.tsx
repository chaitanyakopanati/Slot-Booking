import React from 'react'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../_metronic/helpers'

const ComplaintTable = () => {
  let navigate = useNavigate()

  const openViewPage = () => {
    navigate('complaintviewform')
  }

  const openEditPage = () => {
    navigate('complaintform/add')
  }
  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
          <tr className='fw-bolder text-muted  bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>no.</th>
              <th className='max-w-60px '>Username</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Package category</th>
              <th className='min-w-200px'>Complaint type</th>
              <th className='min-w-150px'>Assign to</th>
              <th className='min-w-150px'>Status</th>
              <th className='min-w-150px'>Complaint date</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {[].length > 0 ? (
              []?.map((row: any, index: number) => {
                return (
                  <tr key={index}>
                  <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {/* {DataWiseIndex + index + 1} */}
                      </div>
                    </td>
                    {/* begin:: Name Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold  fs-6'>
                            {row?.inwardNo ? row?.inwardNo : '-'}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* end:: Name Input */}

                    
                    <td className='text-dark fw-bold  fs-6'>{row.productName || '-'}</td>
                    

                    <td className='text-dark fw-bold  fs-6'>{row.quantityDisplay || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.deliveredByName || '-'}</td>

                    <td className='text-dark fw-bold  fs-6'>{row.zoneName || '-'}</td>

                     <td className='text-dark fw-bold  fs-6'>{row.username || '-'}</td>

                    <td>
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`office-stock-inwardsOldviewform/${row.id}`)}
                        // onClick={() => openViewModal(row.id)}
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>

                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        onClick={() => {
                          navigate(`inwardsOldform/${row.id}`)
                        }}
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={8}>
                  <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                    No Records Found !
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* begin::Mobile Table */}

      <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
        <div
          // onChange={handlesearchange}
          className='form-control form-control-solid ps-14'
          placeholder='Search'
        />
        {[].length > 0 ? (
          []?.map((row: any, index: number) => {
            return (
              // <div key={DataWiseIndex + index + 1}>
              <div key={index}>
              <div className='col-md-6 mx-0 my-2'>
                <div className='card card-custom border'>
                  <div className='card-body p-4'>
                    <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                      <div className='text-dark fw-bolder fs-3 me-2'>
                        {/* {DataWiseIndex + index + 1} */}
                      </div>
                      <div className='fw-bolder fs-3'>{row?.productName || '-'}</div>
                    <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                  </div>
                  <div className='py-1 d-flex'>
                    <div className='fw-bolder '>InwardDate:</div>
                    <div className='text-dark fw-bold  ms-2'>{row.inwardDate || '-'}</div>
                  </div>

                  {/* <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'> */}
                  <div id={`card-id-${index}`} className='collapse'>
                    <div className='py-1 d-flex align-items-cenetr'>
                      <div className='fw-bolder '>inwardNo:</div>
                      <div className='text-dark fw-bold  ms-2'>{row.inwardNo || '-'}</div>
                    </div>
                    <div className='py-1 d-flex'>
                      <div className='fw-bolder '>quantity :</div>
                      <div className='text-dark fw-bold  ms-2'>{row.quantityDisplay || '-'}</div>
                    </div>

                    <div className='py-1 d-flex'>
                      <div className='fw-bolder '>deliveredByName:</div>
                      <div className='text-dark fw-bold  ms-2'>
                        {row.deliveredByName || '-'}
                      </div>
                    </div>

                    <div className='py-1 d-flex'>
                      <div className='fw-bolder '>zoneName:</div>
                      <div className='text-dark fw-bold  ms-2'>{row.zoneName || '-'}</div>
                    </div>

                    <div className='py-1 d-flex'>
                      <div className='fw-bolder '>UserName:</div>
                      <div className='text-dark fw-bold  ms-2'>{row.username || '-'}</div>
                    </div>
                  </div>

                      <div
                        className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                        data-bs-toggle='collapse'
                        // data-bs-target={`#card-id-${DataWiseIndex + index + 1}`}
                        data-bs-target={`#card-id-${index}`}
                        aria-expanded='false'
                      >
                        <span>+ &nbsp;</span>More info
                      </div>
                    </div>

                    <div className='card-footer p-2 py-0 bg-light'>
                      <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
                        <a
                          className='btn btn-icon btn-active-color-success btn-sm me-1'
                          onClick={() => navigate(`office-stock-inwardsOldviewform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen060.svg'
                            className='svg-icon-3'
                          />
                        </a>

                        <button
                          className='btn btn-icon btn-active-color-primary btn-sm me-1'
                          onClick={() => navigate(`inwardsOldform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div>
            <div>
              <div className='text-dark fw-bolder fs-6 ps-4 text-center'>No Records Found !</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ComplaintTable
