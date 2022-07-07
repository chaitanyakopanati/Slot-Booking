
import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../../app/modules/loader/LoaderContext'
import moment from 'moment'
import {KTSVG} from '../../../../../../helpers'
import { ListPageData } from '../../InstallationContext'

type Props = {
  category: any
}

const InstallationCustomerViewModel: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, setViewIdForUpdate} = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    name: category.data?.name || '',
    address: category.data?.address || '',
    contactno: category.data?.contactno || '',
    status: category.data?.status || '',
    salesexecutiveName: category.data?.salesexecutiveName || '',
    description: category.data?.description || '',
    remark: category.data?.remark || '',

    createdby: category.data.createdByName || '',
    modifyby: category.data.modifyByName || '',
    createdAt: moment(category.data.createdAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
    modifyAt: moment(category.data.modifyAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
    assignDate: moment(category.data.createdAt, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    endDate: moment(category.data.modifyAt, 'YYYY-MM-DD').format('YYYY-MM-DD'),
  })

  const openEditModal = (id: any) => {
    setItemIdForUpdate(id)
  }

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <div className='d-flex flex-column scroll-y me-n7 pe-7'>
        {/* begin: input firstname Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: View Modal Header */}
          <div className='modal-header'>
            <div className='d-flex align-items-center'>
              <span className='svg-icon svg-icon-2x' onClick={() => navigate(-1)}>
                <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
              </span>
              <h5 className='modal-title'>View Inquiries</h5>
            </div>
            <div className='ms-3'>
              {/* begin::  Edit User button */}
              <button
                // type='submit'
                className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                onClick={() => {
                  setViewIdForUpdate(undefined)
                  console.log('tttttttttttttttttttttttttttt', category)
                  console.log('tttttttttttttttttttttttttttt', category.data.id)
                  navigate(`/inquiries/inquiriesform/${category.data.id}`)
                  // openEditModal(category.id)
                }}
              >
                <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                Edit Inquiries
              </button>
              {/* end::  Edit User button */}
            </div>
          </div>
          {/* end:: View Modal Header */}
          {/*  */}
          <div className='col-lg-12'>
            <label className='fw-bold fs-6 mb-2'>Name</label>
            <div className='input-group'>
              <input
                placeholder='name'
                value={initialvalues.name}
                type='text'
                name='name'
                className='form-control form-control-lg form-control-solid'
                disabled
                readOnly
              />
            </div>
          </div>

          {/* begin: input lastname Filed */}
        </div>

        {/* begin: input username Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold'>Address :</label>
            <textarea
              placeholder='address'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.address}
              // type='text'
              disabled
              readOnly
            />
          </div>
        </div>

<div className='row mx-0 w-100'>
          {/* begin: input email Filed */}
          <div className='col-lg-4  mb-4 gy-4 '>
          <div className=''>
            <label className='form-label fw-bold'>Contact No :</label>
            <input
              placeholder='contactno'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.contactno}
              type='text'
              disabled
              readOnly
            />
          </div>
          </div>

        {/* begin: input phone Filed */}
        <div className='col-lg-4 mb-4 gy-4'>
          <div className=''>
            <label className='form-label fw-bold'>Status :</label>
            <input
              placeholder='Mobile no.'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.status}
              disabled
              readOnly
            />
          </div>
        </div>

        {/*begin:: Zone*/}
        <div className='col-lg-4 mb-4 gy-4'>
          <div className=''>
            <label className='form-label fw-bold'>Sales ExecutiveName:</label>
            <input
              placeholder='Zone.'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.salesexecutiveName}
              disabled
              readOnly
            />
          </div>
        </div>
        </div>

        {/*begin:: role*/}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold'>Remark:</label>
            <input
              placeholder='Role'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.remark}
              disabled
              readOnly
            />
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Assign Date</label>
            <input
              type='text'
              value={initialvalues.assignDate}
              name='assignDate'
              placeholder='Assign Date'
              className='form-control form-control-solid'
            />
          </div>

          <div className='col-lg-6'>
            <label className='form-label fw-bold'>End Date</label>
            <input
              type='text'
              value={initialvalues.endDate}
              name='endDate'
              placeholder='End Date'
              className='form-control form-control-solid'
            />
          </div>
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/*begin:: Created By Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Created by</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.createdby}
              name='createdby'
              placeholder='CreatedBy'
              autoComplete='off'
              disabled
            />
          </div>
          {/*end:: Created By Filed */}

          {/*begin:: Updated By Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Updated by</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.modifyby}
              name='modifyby'
              placeholder='UpdatedBy'
              autoComplete='off'
              disabled
            />
          </div>
          {/*end:: Updated By Filed */}
        </div>

        <div className='row w-100 mx-0 mb-4 gy-4'>
          {/* begin:: Created At Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Created at</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.createdAt}
              name='createdAt'
              placeholder='CreatedAt'
              autoComplete='off'
              disabled
            />
          </div>
          {/* end:: Created At Filed */}

          {/* begin:: Updated At Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Updated at</label>
            <input
              className='form-control form-control-lg'
              type='text'
              value={initialvalues.modifyAt}
              name='modifyAt'
              placeholder='UpdatedAt'
              autoComplete='off'
              disabled
            />
          </div>
          {/* end:: Updated At Filed */}
        </div>
      </div>
    </>
  )
}

export default InstallationCustomerViewModel


// import React from 'react'
// import ImageSelect from '../../../../../../../app/images/error-profile.svg'
// import {KTSVG} from '../../../../../../helpers'

// function InstallationCustomerViewModel() {
//   return (
//     <>
//       {/* View customer::Modal */}
//       <div className='modal fade' id='view-customer-modal'>
//         <div className='modal-dialog modal-dialog-centered modal-xl '>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <div className='d-flex align-items-center'>
//                 <div
//                   className='btn btn-icon btn-sm btn-active-light-primary me-5'
//                   data-bs-dismiss='modal'
//                   aria-label='Close'
//                 >
//                   <span className='svg-icon svg-icon-2x'>
//                     <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
//                   </span>
//                 </div>
//                 <h5 className='modal-title'>View Customer</h5>
//                   </div>

//                 <div className='ms-3'>
//                   <a
//                     href='#'
//                     className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
//                     data-bs-toggle='modal'
//                     data-bs-target='#kt_modal_1'
//                   >
//                     <span className='svg-icon svg-icon-gray-500 me-1'>
//                       <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
//                     </span>
//                     Edit Customer
//                   </a>
//                 </div>
             
//             </div>

//             <div className='modal-body'>
//               <div className='container-fluid p-0'>
//                 <div className='row w-100 mx-0 mb-4 gy-4'>
//                   <div className='col-lg-4 text-center'>
//                     <div className='pb-5'>
//                       <h5 className='m-0'>ID Proof</h5>
//                     </div>
//                     <div
//                       className='image-input image-input-empty'
//                       data-kt-image-input='true'
//                       style={{backgroundImage: `url(${ImageSelect})`}}
//                     >
//                       <div className='image-input-wrapper w-125px h-125px'></div>

//                       <label
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='change'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Change avatar'
//                       >
//                         <i className='bi bi-pencil-fill fs-7'></i>

//                         <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
//                         <input type='hidden' name='avatar_remove' />
//                       </label>

//                       <span
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='cancel'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Cancel avatar'
//                       >
//                         <i className='bi bi-x fs-2'></i>
//                       </span>
//                       <span
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='remove'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Remove avatar'
//                       >
//                         <i className='bi bi-x fs-2'></i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className='col-lg-4 text-center'>
//                     <div className='pb-5'>
//                       <h5 className='m-0'>Address Proof</h5>
//                     </div>
//                     <div
//                       className='image-input image-input-empty'
//                       data-kt-image-input='true'
//                       style={{backgroundImage: `url(${ImageSelect})`}}
//                     >
//                       <div className='image-input-wrapper w-125px h-125px'></div>

//                       <label
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='change'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Change avatar'
//                       >
//                         <i className='bi bi-pencil-fill fs-7'></i>

//                         <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
//                         <input type='hidden' name='avatar_remove' />
//                       </label>

//                       <span
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='cancel'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Cancel avatar'
//                       >
//                         <i className='bi bi-x fs-2'></i>
//                       </span>
//                       <span
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='remove'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Remove avatar'
//                       >
//                         <i className='bi bi-x fs-2'></i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className='col-lg-4 text-center'>
//                     <div className='pb-5'>
//                       <h5 className='m-0'>GST Certificate</h5>
//                     </div>
//                     <div
//                       className='image-input image-input-empty'
//                       data-kt-image-input='true'
//                       style={{backgroundImage: `url(${ImageSelect})`}}
//                     >
//                       <div className='image-input-wrapper w-125px h-125px'></div>

//                       <label
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='change'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Change avatar'
//                       >
//                         <i className='bi bi-pencil-fill fs-7'></i>

//                         <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
//                         <input type='hidden' name='avatar_remove' />
//                       </label>

//                       <span
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='cancel'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Cancel avatar'
//                       >
//                         <i className='bi bi-x fs-2'></i>
//                       </span>
//                       <span
//                         className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
//                         data-kt-image-input-action='remove'
//                         data-bs-toggle='tooltip'
//                         data-bs-dismiss='click'
//                         title='Remove avatar'
//                       >
//                         <i className='bi bi-x fs-2'></i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className='col-lg-4'>
//                     <label className='form-label fw-bold'>First Name</label>
//                     <input
//                       placeholder='First name'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       autoComplete='off'
//                     />
//                   </div>
//                   <div className='col-lg-4'>
//                     <label className='form-label fw-bold'>Middle name</label>
//                     <input
//                       placeholder='Middle name'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       autoComplete='off'
//                     />
//                   </div>
//                   <div className='col-lg-4'>
//                     <label className='form-label fw-bold'>Last Name</label>
//                     <input
//                       placeholder='Last name'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       autoComplete='off'
//                     />
//                   </div>
//                 </div>

//                 <div className='row w-100 mx-0 mb-4 gy-4'>
//                   <div className='col-lg-6'>
//                     <label className='form-label fw-bold'>Company name</label>
//                     <input
//                       placeholder='Company name'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       autoComplete='off'
//                     />
//                   </div>
//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>GST no.</label>
//                     <input
//                       placeholder='GST no.'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       autoComplete='off'
//                     />
//                   </div>
//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>Email</label>
//                     <input
//                       placeholder='Email'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       autoComplete='off'
//                     />
//                   </div>
//                 </div>

//                 <div className='row w-100 mx-0 mb-4 gy-4'>
//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>Username</label>
//                     <input
//                       placeholder='Username'
//                       className='form-control form-control-lg form-control-solid'
//                       type='number'
//                       autoComplete='off'
//                     />
//                   </div>
//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>Mobile no.</label>
//                     <input
//                       placeholder='Mobile no.'
//                       className='form-control form-control-lg form-control-solid'
//                       type='number'
//                       autoComplete='off'
//                     />
//                   </div>
//                   <div className='col-lg-3'>
//                     <div data-select2-id='select-role'>
//                       <label className='form-label fw-bold'>Contact no.</label>
//                       <input
//                         placeholder='Contact no.'
//                         className='form-control form-control-lg form-control-solid'
//                         type='number'
//                         autoComplete='off'
//                       />
//                     </div>
//                   </div>
//                   <div className='col-lg-3'>
//                     <div data-select2-id='select-zone'>
//                       <label className='form-label fw-bold'>Zone</label>
//                       <div data-select2-id='select-zone'>
//                         <select className='form-select form-select-solid'>
//                           <option>Select Zone</option>
//                           <option value='1'>All</option>
//                           <option value='2'>Katargam</option>
//                           <option value='3'>Ring Road</option>
//                           <option value='4'>Varachha</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='col-lg-12'>
//                     <label className='form-label fw-bold'>Address</label>
//                     <textarea
//                       className='form-control form-control form-control-solid'
//                       data-kt-autosize='true'
//                       placeholder='Address here'
//                     ></textarea>
//                   </div>
//                   <div className='col-lg-12'>
//                     <label className='form-label fw-bold'>Remark</label>
//                     <textarea
//                       className='form-control form-control form-control-solid'
//                       data-kt-autosize='true'
//                       placeholder='Remark here'
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className='modal-footer'>
//               <button
//                 type='button'
//                 className='btn btn-secondary'
//                 data-bs-dismiss='modal'
//                 aria-label='Close'
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* view customer::Modal */}
//     </>
//   )
// }

// export default InstallationCustomerViewModel
