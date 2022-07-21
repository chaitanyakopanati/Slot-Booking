// import React from 'react'
// import {KTSVG} from '../../../../../../helpers'

// const FormsTable = () => {
//   return (
//     <div>
//       <div className='table-responsive d-none d-lg-block'>
//         {/* begin::Table */}
//         <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
//           {/* begin::Table head */}
//           <thead>
//             <tr className='fw-bolder text-muted bg-dark'>
//               <th className='min-w-150px rounded-start ps-4'>File no.</th>
//               <th className='min-w-150px'>Username</th>
//               <th className='min-w-150px'>Name</th>
//               <th className='min-w-200px'>Sales executive</th>
//               <th className='min-w-150px'>Form date</th>
//               <th className='min-w-100px'>Form type</th>
//               <th className='min-w-200px rounded-end'>Actions</th>
//             </tr>
//           </thead>
//           {/* end::Table head */}
//           {/* begin::Table body */}
//           <tbody>
//             <tr>
//               <td>
//                 <div className='text-dark fw-bolder fs-6 ps-4'>2022-23/438</div>
//               </td>
//               <td className='text-dark fw-bold  fs-6'>khitaliya</td>
//               <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
//               <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
//               <td className='text-dark fw-bold fs-6'>25-May-2022</td>
//               <td className='fw-bold fs-6'>
//                 <span className='badge badge-light-danger fs-6'>New</span>
//               </td>
//               <td>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-customer-modal'
//                 >
//                   <KTSVG
//                     path='/media/icons/duotune/communication/com013.svg'
//                     className='svg-icon-3'
//                   />
//                 </a>
//                 <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className='text-dark fw-bolder fs-6 ps-4'>2022-23/438</div>
//               </td>
//               <td className='text-dark fw-bold  fs-6'>khitaliya</td>
//               <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
//               <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
//               <td className='text-dark fw-bold fs-6'>25-May-2022</td>
//               <td className='fw-bold fs-6'>
//                 <span className='badge badge-light-info fs-6'>Shifting</span>
//               </td>
//               <td>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-customer-modal'
//                 >
//                   <KTSVG
//                     path='/media/icons/duotune/communication/com013.svg'
//                     className='svg-icon-3'
//                   />
//                 </a>
//                 <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className='text-dark fw-bolder fs-6 ps-4'>2022-23/438</div>
//               </td>
//               <td className='text-dark fw-bold  fs-6'>khitaliya</td>
//               <td className='text-dark fw-bold  fs-6'>Kirtibhai</td>
//               <td className='text-dark fw-bold fs-6'>Dharmeshbhai Patel</td>
//               <td className='text-dark fw-bold fs-6'>25-May-2022</td>
//               <td className='fw-bold fs-6'>
//                 <span className='badge badge-light-success fs-6'>Renew</span>
//               </td>
//               <td>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   // data-bs-target='#edit-form-modal'
//                   data-bs-target='#create-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-customer-modal'
//                 >
//                   <KTSVG
//                     path='/media/icons/duotune/communication/com013.svg'
//                     className='svg-icon-3'
//                   />
//                 </a>
//                 <a href='#' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'>
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </td>
//             </tr>
//           </tbody>
//           {/* end::Table body */}
//         </table>
//         {/* end::Table */}
//       </div>

//       <div className='row g-5 d-flex d-lg-none py-3'>
//         <div className='col-md-6 mx-0 my-2'>
//           <div className='card card-custom border'>
//             <div className='card-body p-4'>
//               <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
//                 <div className='text-dark fw-bolder fs-3 me-2'>File no.</div>
//                 <div className='fw-bolder fs-3'>2022-23/438</div>
//                 <div className='fw-bold badge badge-light-danger ms-auto'>New</div>
//               </div>
//               <div className='text-dark fw-bolder py-1'>
//                 <span>Kiritbhai</span>
//                 <span className='text-muted'>- khitaliya</span>
//               </div>

//               <div id='card-id-1' className='collapse'>
//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Sales Executive:</div>
//                   <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
//                 </div>
//                 <div className='py-1 d-flex align-items-cenetr'>
//                   <div className='fw-bolder '>Form date:</div>
//                   <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
//                 </div>
//                 <div className='d-flex align-items-center justify-content-start py-1 my-1 flex-wrap'>
//                   <div className='d-flex align-items-center d-none'>
//                     <i className='text-dark bi bi-envelope-fill fs-5'></i>
//                     <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
//                   </div>
//                   <div className='d-flex align-items-center'>
//                     <i className='text-dark bi bi-telephone-fill fs-5'></i>
//                     <div className='text-dark fw-bold  ms-2'>9099999676</div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
//                 data-bs-toggle='collapse'
//                 data-bs-target='#card-id-1'
//                 aria-expanded='false'
//               >
//                 <span>+ &nbsp;</span>More info
//               </div>
//             </div>

//             <div className='card-footer p-2 py-0 bg-light'>
//               <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-warning btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-customer-modal'
//                 >
//                   <KTSVG
//                     path='/media/icons/duotune/communication/com013.svg'
//                     className='svg-icon-3'
//                   />
//                 </a>
//                 <a href='#' className='btn btn-icon btn-active-color-danger btn-sm'>
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='col-md-6 mx-0 my-2'>
//           <div className='card card-custom border'>
//             <div className='card-body p-4'>
//               <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
//                 <div className='text-dark fw-bolder fs-3 me-2'>File no.</div>
//                 <div className='fw-bolder fs-3'>2022-23/438</div>
//                 <div className='fw-bold badge badge-light-info ms-auto'>Shifting</div>
//               </div>
//               <div className='text-dark fw-bolder py-1'>
//                 <span>Kiritbhai</span>
//                 <span className='text-muted'>- khitaliya</span>
//               </div>

//               <div id='card-id-2' className='collapse'>
//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Sales Executive:</div>
//                   <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
//                 </div>
//                 <div className='py-1 d-flex align-items-cenetr'>
//                   <div className='fw-bolder '>Form date:</div>
//                   <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
//                 </div>
//                 <div className='d-flex align-items-center justify-content-start py-1 my-1 flex-wrap'>
//                   <div className='d-flex align-items-center d-none'>
//                     <i className='text-dark bi bi-envelope-fill fs-5'></i>
//                     <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
//                   </div>
//                   <div className='d-flex align-items-center'>
//                     <i className='text-dark bi bi-telephone-fill fs-5'></i>
//                     <div className='text-dark fw-bold  ms-2'>9099999676</div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
//                 data-bs-toggle='collapse'
//                 data-bs-target='#card-id-2'
//                 aria-expanded='false'
//               >
//                 <span>+ &nbsp;</span>More info
//               </div>
//             </div>

//             <div className='card-footer p-2 py-0 bg-light'>
//               <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-warning btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-customer-modal'
//                 >
//                   <KTSVG
//                     path='/media/icons/duotune/communication/com013.svg'
//                     className='svg-icon-3'
//                   />
//                 </a>
//                 <a href='#' className='btn btn-icon btn-active-color-danger btn-sm'>
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='col-md-6 mx-0 my-2'>
//           <div className='card card-custom border'>
//             <div className='card-body p-4'>
//               <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
//                 <div className='text-dark fw-bolder fs-3 me-2'>File no.</div>
//                 <div className='fw-bolder fs-3'>2022-23/438</div>
//                 <div className='fw-bold badge badge-light-success ms-auto'>Renew</div>
//               </div>
//               <div className='text-dark fw-bolder py-1'>
//                 <span>Kiritbhai</span>
//                 <span className='text-muted'>- khitaliya</span>
//               </div>

//               <div id='card-id-3' className='collapse'>
//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Sales Executive:</div>
//                   <div className='text-dark fw-bold  ms-2'>Manis Solanki</div>
//                 </div>
//                 <div className='py-1 d-flex align-items-cenetr'>
//                   <div className='fw-bolder '>Form date:</div>
//                   <div className='text-dark fw-bold  ms-2'>06-Jun-2022 09:50 AM</div>
//                 </div>
//                 <div className='d-flex align-items-center justify-content-start py-1 my-1 flex-wrap'>
//                   <div className='d-flex align-items-center d-none'>
//                     <i className='text-dark bi bi-envelope-fill fs-5'></i>
//                     <div className='text-dark fw-bold  ms-2'>ganesh@gmail.com</div>
//                   </div>
//                   <div className='d-flex align-items-center'>
//                     <i className='text-dark bi bi-telephone-fill fs-5'></i>
//                     <div className='text-dark fw-bold  ms-2'>9099999676</div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
//                 data-bs-toggle='collapse'
//                 data-bs-target='#card-id-3'
//                 aria-expanded='false'
//               >
//                 <span>+ &nbsp;</span>More info
//               </div>
//             </div>

//             <div className='card-footer p-2 py-0 bg-light'>
//               <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-form-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-warning btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-customer-modal'
//                 >
//                   <KTSVG
//                     path='/media/icons/duotune/communication/com013.svg'
//                     className='svg-icon-3'
//                   />
//                 </a>
//                 <a href='#' className='btn btn-icon btn-active-color-danger btn-sm'>
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FormsTable


import Swal from 'sweetalert2'
import {useEffect} from 'react'
import moment from 'moment'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import { ListPageData } from '../../FormsContext'
import { useLoader } from '../../../../../../../app/modules/loader/LoaderContext'
import Inquiriesservice from '../../helperForms/ApiDataRequest'
import { getInquiriesData } from '../../helperForms/ModelForms'
import { KTSVG } from '../../../../../../helpers'



const FormsTable = () => {
  const {
    setItemIdForUpdate,
    pageNo,
    getData,
    pageSize,
    setViewIdForUpdate,
    fetchAllUser,
    statusId,
    setPageNo,
    setSearchText,
    DataGetAllTypeSalesExecutve,
    DataGetAllTypeSalesExecutveUserByRole,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const DataWiseIndex = (pageNo - 1) * pageSize

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  const openViewModal = (id: any) => {
    setViewIdForUpdate(id)
  }

  {
    /* begin:: Delete functionlity */
  }
  const deleteFaults = (ID: number) => {
    Swal.fire({
      title: `Do you want to delete this records ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        LoderActions(true)
        let payload = await Inquiriesservice.deleteInquiries(ID)
        if (payload.success === true) {
          LoderActions(false)

          toast.success(` Data Deleted Successfully`)
          toast.dismiss('1s')
        } else {
          LoderActions(false)

          toast.error(` Failed to Delete Data`)
          toast.dismiss('1s')
        }
        fetchAllUser()
      }
    })
  }
  {
    /* end:: Delete functionlity */
  }

  useEffect(() => {
    fetchAllUser()
    DataGetAllTypeSalesExecutve()
    DataGetAllTypeSalesExecutveUserByRole()
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <div>
      <div className='table-responsive d-none d-lg-block'>
        {/* begin::Table */}
        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>Inquiry No.</th>
              <th className='min-w-150px'>Name</th>
              <th className='min-w-200px'>Address</th>
              <th className='min-w-150px'>Contact no.</th>
              <th className='min-w-200px'>Sales Executive</th>
              <th className='min-w-150px'>Created at</th>
              <th className='min-w-100px'>Status</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData.map((row: getInquiriesData, index: number) => {
                // console.log("wertyuiop[",row);

                return (
                  <tr key={index}>
                    {/* begin:: Index No */}
                    <td>
                      <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                        {DataWiseIndex + index + 1}
                      </div>
                    </td>
                    {/* end:: Index No */}

                    {/* begin:: Name Input */}
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bold  fs-6'>{row?.name || '-'}</div>
                        </div>
                      </div>
                    </td>
                    {/* end:: Name Input */}

                    {/* begin:: User Type Input username */}
                    <td className='text-dark fw-bold  fs-6'>{row.address || '-'}</td>
                    {/* end:: User Type Input  username */}

                    {/* begin:: User Type Input email */}
                    <td className='text-dark fw-bold  fs-6'>{row.contactno || '-'}</td>
                    {/* end:: User Type Input  email*/}

                    {/* begin:: User Type Input phone*/}
                    <td className='text-dark fw-bold  fs-6'>{row.salesexecutiveName || '-'}</td>
                    {/* end:: User Type Input  phone*/}

                    {/* begin:: User Type Input zoneName */}
                    <td className='text-dark fw-bold  fs-6'>
                      {' '}
                      {moment(row?.createdAt).format('DD-MMMM-YYYY, h:mm a') || '-'}
                    </td>
                    {/* end:: User Type Input  zoneName*/}

                    {/* begin:: User Type Input roleName*/}
                    <td className='text-dark fw-bold  fs-6'>{row.status || '-'}</td>
                    {/* end:: User Type Input  roleName*/}

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => navigate(`inquiriesviewform/${row.id}`)}
                        // onClick={() => openViewModal(row.id)}
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen060.svg'
                          className='svg-icon-3'
                        />
                      </a>
                      {/* end:: View Icon */}

                      {/* begin:: Edit Icon */}
                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        onClick={() => {
                          navigate(`inquiriesform/${row.id}`)
                        }}
                        // onClick={()=>openEditModal(row.id)}
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </button>
                      {/* end:: Edit Icon */}

                      {/* begin:: Delete Icon */}
                      <button
                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
                        onClick={() => deleteFaults(row.id)}
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen027.svg'
                          className='svg-icon-3'
                        />
                      </button>
                      {/* end:: Delete Icon */}
                    </td>
                    {/* end:: Action */}
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
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>

      {/* begin::Mobile Table */}

      <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
        <div
          onChange={handlesearchange}
          className='form-control form-control-solid ps-14'
          placeholder='Search'
        />
        {getData.length > 0 ? (
          getData?.map((row: getInquiriesData, index: number) => {
            return (
              <div key={DataWiseIndex + index + 1}>
                <div className='col-md-6 mx-0 my-2'>
                  <div className='card card-custom border'>
                    <div className='card-body p-4'>
                      <div className='py-1 pb-3 d-flex align-items-center flex-wrap w-100'>
                        <div className='text-dark fw-bolder fs-3 me-2'>
                          {' '}
                          {DataWiseIndex + index + 1}
                        </div>
                        <div className='fw-bolder fs-3'>{row?.name || '-'}</div>
                        <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>Address:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.address || '-'}</div>
                      </div>

                      <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>Contact no:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.contactno || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Sales Executive:</div>
                          <div className='text-dark fw-bold  ms-2'>
                            {row.salesexecutiveName || '-'}
                          </div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Created at:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.createdAt || '-'}</div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Status:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.status || '-'}</div>
                        </div>
                      </div>

                      <div
                        className='cursor-pointer py-1 d-flex justify-content-start fw-bold fs-7 text-muted'
                        data-bs-toggle='collapse'
                        data-bs-target={`#card-id-${DataWiseIndex + index + 1}`}
                        aria-expanded='false'
                      >
                        <span>+ &nbsp;</span>More info
                      </div>
                    </div>

                    <div className='card-footer p-2 py-0 bg-light'>
                      <div className='d-flex align-items-center justify-content-evenly w-50 mx-auto'>
                        <a
                          className='btn btn-icon btn-active-color-success btn-sm me-1'
                          // onClick={() => openViewModal(row)}
                          onClick={() => navigate(`viewform/${row.id}`)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen060.svg'
                            className='svg-icon-3'
                          />
                        </a>

                        <button
                          className='btn btn-icon btn-active-color-primary btn-sm me-1'
                          // onClick={() => openEditModal(row.id)}
                          onClick={() => {
                            navigate(`form/${row.id}`)
                          }}
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>

                        <button
                          className='btn btn-icon btn-active-color-danger btn-sm'
                          onClick={() => deleteFaults(row.id)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen027.svg'
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
      {/* End::Mobile Table */}
    </div>
  )
}

export default FormsTable
