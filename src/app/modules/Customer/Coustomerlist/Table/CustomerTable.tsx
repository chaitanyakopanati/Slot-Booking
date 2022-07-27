import {useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ListPageData} from '../../CustomerContext'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import {toast} from 'react-toastify'
import {deleteCustomer} from '../../helperCustomer/ApiDataRequest'

const CustomerTable = () => {
  let {filter, fetchCustomer, customerTableData} = ListPageData()

  useEffect(() => {
    fetchCustomer()
  }, [filter])

  const navigate = useNavigate()

  const deletedCustomerData = (ID: number, username: string) => {
    Swal.fire({
      title: `Do you want to delete this records ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // LoderActions(true)
        let payload = await deleteCustomer(ID, username)
        if (payload.success === true) {
          // LoderActions(false)

          toast.success(` Data Deleted Successfully`)
          toast.dismiss('1s')
        } else {
          // LoderActions(false)

          toast.error(` Failed to Delete Data`)
          toast.dismiss('1s')
        }
        fetchCustomer()
      }
    })
  }

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border table-striped'>
          <thead>
            <tr className='fw-bolder text-muted bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>No</th>
              <th className='min-w-150px'>Username</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-100px'>package name</th>
              <th className='min-w-120px'>Expiry date</th>
              <th className='min-w-125px rounded-end'>Options</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {customerTableData.length === 0 && (
              <tr>
                <td colSpan={7} className='text-dark fw-bolder fs-6 ps-4 text-center'>
                  No records found{' '}
                </td>
              </tr>
            )}
            {customerTableData.map((customer, index) => {
              return (
                <tr key={customer.id}>
                  <td>
                    <div className='text-dark fw-bolder fs-6 ps-4'>{index + 1}</div>
                  </td>

                  <td className='text-dark fw-bold  fs-6'>{customer.userName}</td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5 d-none'>
                        <span className='symbol-label bg-light'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt='profile'
                          />
                        </span>
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <div className='text-dark fw-bold  fs-6'>{customer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className='text-dark fw-bold  fs-6'>{customer.address}</td>
                  <td className='text-dark fw-bold fs-6'>{customer.packageName}</td>
                  <td className='text-dark fw-bold fs-6'>{customer.expiryDate}</td>
                  <td>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_1'
                      onClick={() => {
                        navigate(`customersform/${customer.id}`)
                      }}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen055.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_3'
                      onClick={() => {
                        navigate(`customerviewform/${customer.id}`)
                      }}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen060.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                      onClick={() => deletedCustomerData(customer.id, customer.userName)}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                      onClick={() => {
                        navigate(`/forms/formsform/add`)
                      }}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen005.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                      onClick={() => {
                        navigate(`/installations/installationsform/add`)
                      }}
                    >
                      <KTSVG
                        path='/media/icons/duotune/electronics/elc008.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                      onClick={() => {
                        navigate(`/complaint/complaintform/add`)
                      }}
                    >
                      <KTSVG path='/media/icons/duotune/coding/cod009.svg' className='svg-icon-3' />
                    </a>
                  </td>
                </tr>
              )
            })}
            {/*  */}
          </tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>

      <div className='row g-5 d-flex d-lg-none py-3'>
        {customerTableData.length === 0 && (
          <div>
            <div>
              <div className='text-dark fw-bolder fs-6 ps-4 text-center'>No Records Found !</div>
            </div>
          </div>
          // <div className='col-md-12 p-5 my-2'>
          //   <div className='card card-custom border'>
          //     <div className='card-body p-4 '>
          //       <div className='py-1'>
          //         <div className='fw-bolder text-center'>No Data Found</div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        )}

        {customerTableData.map((customer) => {
          return (
            <div key={customer.id} className='col-md-6 mx-0 my-2'>
              <div className='card card-custom border'>
                <div className='card-body p-4'>
                  <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                    {/* <div className='text-dark fw-bolder fs-3 me-2'></div> */}
                    <div className='text-dark fw-bolder fs-3'>
                      {`${customer.firstName} ${customer.lastName}`}{' '}
                    </div>
                    <div className='text-muted fw-bold ms-2'>- {customer.name}</div>
                  </div>
                  <div className='text-dark fw-bold py-1'>
                    <span className='fw-bolder'>Package name: </span>
                    <span className='mx-2'>{'-'}</span>
                  </div>
                  <div id={`card-id-${customer.id}`} className='collapse'>
                    <div className='d-flex align-items-center justify-content-evenly py-1 my-1 flex-wrap d-none'>
                      <div className='d-flex align-items-center'>
                        <i className='text-dark bi bi-envelope-fill fs-5'></i>
                        <div className='text-dark fw-bold  ms-2'>{customer.email || '-'}</div>
                      </div>
                      <div className='d-flex align-items-center'>
                        <i className='text-dark bi bi-telephone-fill fs-5'></i>
                      </div>
                    </div>
                    <div className='py-1 d-flex'>
                      <div className='fw-bolder '>Address:</div>
                      <div className='text-dark fw-bold  ms-2'> {customer.address}</div>
                    </div>
                    <div className='py-1 d-flex align-items-cenetr'>
                      {/* <KTSVG path='/media/icons/duotune/general/gen014.svg' className='svg-icon-2 me-2' /> */}
                      <span className='fw-bolder'>Expiry date:</span>
                      <span className='text-dark fw-bold  ms-2'>{'-'}</span>
                    </div>
                  </div>
                  <div
                    className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                    data-bs-toggle='collapse'
                    data-bs-target={`#card-id-${customer.id}`}
                    aria-expanded='false'
                  >
                    <span>+ &nbsp;</span>More info
                  </div>
                </div>
                <div className='card-footer p-2 py-0 bg-light'>
                  <div className='d-flex align-items-center justify-content-evenly w-75 mx-auto'>
                    <a
                      href='#'
                      className='btn btn-icon btn-active-color-primary btn-sm me-1'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen055.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-active-color-success btn-sm me-1'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_3'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen060.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a href='#' className='btn btn-icon btn-active-color-danger btn-sm me-1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a href='#' className='btn btn-icon btn-active-color-danger btn-sm me-1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen005.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a href='#' className='btn btn-icon btn-active-color-danger btn-sm me-1'>
                      <KTSVG
                        path='/media/icons/duotune/electronics/elc008.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a href='#' className='btn btn-icon btn-active-color-danger btn-sm'>
                      <KTSVG path='/media/icons/duotune/coding/cod009.svg' className='svg-icon-3' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* end::Body */}
    </div>
  )
}
export default CustomerTable
