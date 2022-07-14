// import React from 'react'
// import {KTSVG} from '../../../../../../helpers'

// const OfficeStockOutwardsTable = () => {
//   return (
//     <div>
//       <div className='table-responsive d-none d-lg-block'>
//         {/* begin::Table */}
//         <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border table-striped'>
//           {/* begin::Table head */}
//           <thead>
//             <tr className='fw-bolder text-muted bg-dark'>
//               <th className='max-w-60px min-w-40px rounded-start ps-4'>Outward no.</th>
//               <th className='min-w-150px'>Outward date</th>
//               <th className='min-w-200px'>Product</th>
//               <th className='min-w-150px'>Quantity</th>
//               <th className='min-w-200px'>Technician</th>
//               <th className='min-w-150px'>Zone</th>
//               <th className='min-w-150px'>Username</th>
//               <th className='min-w-150px rounded-end'>Actions</th>
//             </tr>
//           </thead>
//           {/* end::Table head */}
//           {/* begin::Table body */}
//           <tbody>
//             <tr>
//               <td>
//                 <div className='text-dark fw-bolder fs-6 ps-4'>1</div>
//               </td>
//               <td className='text-dark fw-bold  fs-6'>14-Jun-2022</td>
//               <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
//               <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

//               <td className='text-dark fw-bold fs-6'>Komal Tiwari</td>
//               <td className='text-dark fw-bold fs-6'>Varachha</td>
//               <td className='text-dark fw-bold fs-6'>Amit</td>
//               <td>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className='text-dark fw-bolder fs-6 ps-4'>2</div>
//               </td>
//               <td className='text-dark fw-bold  fs-6'>14-Jun-2022</td>
//               <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
//               <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

//               <td className='text-dark fw-bold fs-6'>Komal Tiwari</td>
//               <td className='text-dark fw-bold fs-6'>Varachha</td>
//               <td className='text-dark fw-bold fs-6'>Amit</td>
//               <td>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className='text-dark fw-bolder fs-6 ps-4'>3</div>
//               </td>
//               <td className='text-dark fw-bold  fs-6'>14-Jun-2022</td>
//               <td className='text-dark fw-bold  fs-6'>Media convertor-1310-giga</td>
//               <td className='text-dark fw-bold  fs-6'> 3 Pieces</td>

//               <td className='text-dark fw-bold fs-6'>Komal Tiwari</td>
//               <td className='text-dark fw-bold fs-6'>Varachha</td>
//               <td className='text-dark fw-bold fs-6'>Amit</td>
//               <td>
//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#view-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   // data-bs-target='#edit-inquiries-modal'
//                   data-bs-target='#create-inquiry-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
//                 >
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
//                 <div className='text-dark fw-bolder fs-3 me-2'>1.</div>
//                 <div className='fw-bolder fs-3'>Kiritbhai</div>
//                 <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
//               </div>
//               <div className='py-1 d-flex'>
//                 <div className='fw-bolder '>Technician:</div>
//                 <div className='text-dark fw-bold  ms-2'>Shiva Upadhyay</div>
//               </div>

//               <div id='card-id-1' className='collapse'>
//                 <div className='py-1 d-flex align-items-cenetr'>
//                   <div className='fw-bolder '>Outward date:</div>
//                   <div className='text-dark fw-bold  ms-2'>14-Jun-2022</div>
//                 </div>
//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Product:</div>
//                   <div className='text-dark fw-bold  ms-2'>2pair-double coat</div>
//                 </div>

//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Quantity:</div>
//                   <div className='text-dark fw-bold  ms-2'>80 mtr</div>
//                 </div>

//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Zone:</div>
//                   <div className='text-dark fw-bold  ms-2'>Katargam</div>
//                 </div>

//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Username:</div>
//                   <div className='text-dark fw-bold  ms-2'>rhpambhar</div>
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
//                   data-bs-target='#view-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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
//                 <div className='text-dark fw-bolder fs-3 me-2'>2.</div>
//                 <div className='fw-bolder fs-3'>Kiritbhai</div>
//                 <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
//               </div>
//               <div className='py-1 d-flex'>
//                 <div className='fw-bolder '>Technician:</div>
//                 <div className='text-dark fw-bold  ms-2'>Shiva Upadhyay</div>
//               </div>

//               <div id='card-id-2' className='collapse'>
//                 <div className='py-1 d-flex align-items-cenetr'>
//                   <div className='fw-bolder '>Outward date:</div>
//                   <div className='text-dark fw-bold  ms-2'>14-Jun-2022</div>
//                 </div>
//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Product:</div>
//                   <div className='text-dark fw-bold  ms-2'>2pair-double coat</div>
//                 </div>

//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Quantity:</div>
//                   <div className='text-dark fw-bold  ms-2'>80 mtr</div>
//                 </div>

//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Zone:</div>
//                   <div className='text-dark fw-bold  ms-2'>Katargam</div>
//                 </div>

//                 <div className='py-1 d-flex'>
//                   <div className='fw-bolder '>Username:</div>
//                   <div className='text-dark fw-bold  ms-2'>rhpambhar</div>
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
//                   data-bs-target='#view-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/general/gen060.svg' className='svg-icon-3' />
//                 </a>

//                 <a
//                   href='#'
//                   className='btn btn-icon btn-active-color-primary btn-sm me-1'
//                   data-bs-toggle='modal'
//                   data-bs-target='#edit-inquiries-modal'
//                 >
//                   <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
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

// export default OfficeStockOutwardsTable

import moment from 'moment'
import {useEffect} from 'react'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import {KTSVG} from '../../../../../../helpers'
import { getOfficetockOutwardsData } from '../../helperOfficeStockOutwards/ModelOfficeStockOutwards'
import { ListPageData } from '../../OfficeStockOutwardsContext'

const OfficeStockOutwardsTable = () => {
  const {
    setItemIdForUpdate,
    getData,
    pageNo,
    pageSize,
    setViewIdForUpdate,
    DataGetAllType,
    fetchAllofficestockOutward,
    DataGetAllTypeZone,
    DataGetAllTypeDeliveredByTypes,
    DataGetAllTypeProducts,
    setPageNo,
    DataGetAllTypeCreatedByTypes,
    setSearchText,
  } = ListPageData()
  let {LoderActions, open} = useLoader()

  const DataWiseIndex = (pageNo - 1) * pageSize

  const openEditModal = (inwardNo: any) => {
    setItemIdForUpdate(inwardNo)
  }

  const openViewModal = (inwardNo: any) => {
    setViewIdForUpdate(inwardNo)
  }

  useEffect(() => {
    DataGetAllType()
    fetchAllofficestockOutward()
    DataGetAllTypeCreatedByTypes()
    DataGetAllTypeZone()
    DataGetAllTypeProducts()
    DataGetAllTypeDeliveredByTypes()
    // LoderActions(false)
  }, [])

  const handlesearchange = (e: any) => {
    setPageNo(1)
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <>
      <div className='table-responsive'>
        {/* begin::Table */}
        <table className='d-none d-md-table table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-rounded border table-striped'>
          {/* begin::Table head */}
          <thead>
            <tr className='fw-bolder text-muted  bg-dark'>
              <th className='max-w-60px min-w-40px rounded-start ps-4'>Outward no.</th>
              <th className='min-w-150px'>Outward date</th>
              <th className='min-w-200px'>Product</th>
              <th className='min-w-150px'>Quantity</th>
              <th className='min-w-200px'>Technician </th>
              <th className='min-w-150px'>Zone</th>
              <th className='min-w-150px'>Username</th>
              <th className='min-w-150px rounded-end'>Actions</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
            {getData.length > 0 ? (
              getData?.map((row: getOfficetockOutwardsData, index: number) => {
                return (
                  <tr key={index}>
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

                    {/* begin:: inwardDate At Date & Time */}
                    <td className='text-dark fw-bold fs-6'>
                      {moment(row?.inwardDate).format('DD-MMMM-YYYY') || '-'}
                    </td>
                    {/* end:: inwardDate At Date & Time */}

                    {/* begin:: productName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.productName || '-'}</td>
                    {/* end:: productName Input */}

                    {/* begin:: quantity Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.quantity || '-'}</td>
                    {/* end:: quantity Input */}

                    {/* begin:: Technician Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.deliveredByName || '-'}</td>
                    {/* end:: Technician Input */}

                    {/* begin:: zoneName Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.zoneName || '-'}</td>
                    {/* end:: zoneName Input */}

                    {/* begin:: username Input */}
                    <td className='text-dark fw-bold  fs-6'>{row.username || '-'}</td>
                    {/* end:: username Input */}

                    {/* begin:: Action */}
                    <td>
                      {/* begin:: View Icon */}
                      <a
                        className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'
                        onClick={() => openViewModal(row)}
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
                        onClick={() => openEditModal(row.inwardNo)}
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </button>
                      {/* end:: Edit Icon */}
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

        {/* begin::Mobile Table */}
        <div className='row g-5 d-flex d-lg-none d-md-none py-3'>
          <div
            onChange={handlesearchange}
            className='form-control form-control-solid ps-14'
            placeholder='Search'
          />
          {getData.length > 0 ? (
            getData?.map((row: getOfficetockOutwardsData, index: number) => {
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
                          <div className='fw-bolder fs-3'>{row?.productName || '-'}</div>
                        <div className='fw-bold badge badge-light-danger ms-auto'>Open</div>
                      </div>
                      <div className='py-1 d-flex'>
                        <div className='fw-bolder '>OutwardDate:</div>
                        <div className='text-dark fw-bold  ms-2'>{row.inwardDate || '-'}</div>
                      </div>

                      <div id={`card-id-${DataWiseIndex + index + 1}`} className='collapse'>
                        <div className='py-1 d-flex align-items-cenetr'>
                          <div className='fw-bolder '>OutwardNo:</div>
                          <div className='text-dark fw-bold  ms-2'>{row.inwardNo || '-'}</div>
                        </div>
                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>quantity :</div>
                          <div className='text-dark fw-bold  ms-2'>{row.quantity || '-'}</div>
                        </div>

                        <div className='py-1 d-flex'>
                          <div className='fw-bolder '>Technician:</div>
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
                          <div className='text-dark fw-bold  ms-2'>{row.zoneName || '-'}</div>
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
                            onClick={() => openViewModal(row)}
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/gen060.svg'
                              className='svg-icon-3'
                            />
                          </a>

                          <button
                            className='btn btn-icon btn-active-color-primary btn-sm me-1'
                            onClick={() => openEditModal(row.inwardNo)}
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
        {/* End::Mobile Table */}
      </div>
    </>
  )
}
export default OfficeStockOutwardsTable

