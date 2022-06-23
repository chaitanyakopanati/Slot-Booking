// import {Form, Formik} from 'formik'
// import moment from 'moment'
// import {FC, useEffect} from 'react'
// import {KTSVG} from '../../../../../_metronic/helpers'
// import {CustomTooltip} from '../../../../routing/customtooltip'
// import {ListPageData} from '../../UserContext'

// type Props = {
//   category: any
// }

// const UserFormViewModal: FC<Props> = ({category}) => {
//   const {viewIdForUpdate, setItemIdForUpdate, setViewIdForUpdate, getDataAllType} = ListPageData()

//   useEffect(() => {
//     document.body.classList.add('modal-open')
//     return () => {
//       document.body.classList.remove('modal-open')
//     }
//   }, [])

//   const openEditModal = (id: any) => {
//     setItemIdForUpdate(id)
//   }

//   function onKeyDown(keyEvent: any) {
//     if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
//       keyEvent.preventDefault()
//     }
//   }
//   useEffect(() => {
//     console.log('category', category)
//     console.log(category.modifyAt, '-----------')
//     console.log(category.id, '======dddd')
//     console.log('viewIdForUpdate', viewIdForUpdate)
//   }, [category])
//   return (
//     <>
//       {/* {console.log(category, "category")} */}
//       {/* begin:: View form */}
//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           id: category.id,
//           fullName: category.data.fullName || '',
//           username: category.username || '',
//           email: category.email || '',
//           phone: category.phone || '',
//           createdby: category.createdby || '',
//           modifyby: category.modifyby || '',
//           zoneId: category.zoneName || '',
//           roleId: category.roleName || '',
//           createdAt: moment(category.createdAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
//           modifyAt: moment(category.modifyAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
//         }}
//         onSubmit={(values) => console.log(values)}
//       >
//         {(props) => (
//           <Form
//             id='kt_modal_add_user_form'
//             onKeyDown={onKeyDown}
//             className='form'
//             onSubmit={props.handleSubmit}
//             noValidate
//           >
//             <div
//               className='modal fade show d-block'
//               id='kt_modal_add_user'
//               role='dialog'
//               tabIndex={-1}
//               aria-modal='true'
//             >
//               <div className='modal-dialog modal-dialog-centered modal-xl'>
//                 <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
//                   <div id='view-modal'>
//                     <div className='modal-dialog modal-dialog-centered modal-xl'>
//                       <div className='modal-content'>
//                         {/* begin:: View Modal Header */}
//                         <div className='modal-header'>
//                           <div className='d-flex align-items-center'>
//                             <h5 className='modal-title'>View User</h5>
//                           </div>
//                           <div className='ms-3'>
//                             {/* begin::  Edit User button */}
//                             <button
//                               type='submit'
//                               className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
//                               onClick={() => {
//                                 setViewIdForUpdate(undefined)

//                                 openEditModal(category.id)
//                               }}
//                             >
//                               <KTSVG
//                                 path='/media/icons/duotune/art/art005.svg'
//                                 className='svg-icon-3'
//                               />
//                               Edit User
//                             </button>
//                             {/* end::  Edit User button */}

//                             {/* begin::  close icon */}
//                             <CustomTooltip title='Close'>
//                               <div
//                                 className='btn btn-icon btn-sm btn-active-icon-primary'
//                                 onClick={() => setViewIdForUpdate(undefined)}
//                                 style={{cursor: 'pointer'}}
//                               >
//                                 <KTSVG
//                                   path='/media/icons/duotune/arrows/arr061.svg'
//                                   className='svg-icon-1'
//                                 />
//                               </div>
//                             </CustomTooltip>
//                             {/* end::  close icon */}
//                           </div>
//                         </div>
//                         {/* end:: View Modal Header */}

//                         {/* begin:: View Modal body */}
//                         <div className='modal-body'>
//                           <div className='container-fluid p-0'>
//                             {/*begin:: fullName Filed */}
//                             <div className='row mb-4'>
//                               <label className='fw-bold fs-6 mb-2'>FullName</label>
//                               <div className='input-group'>
//                                 <input
//                                   placeholder='FullName'
//                                   value={initialvalues.fullName}
//                                   onChange={props.handleChange}
//                                   type='text'
//                                   name='fullName'
//                                   className='form-control form-control-lg'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>
//                             </div>
//                             {/*end:: fullName Filed */}

//                             {/*begin:: Username*/}
//                             <div className='row w-100 mx-0 mb-4 gy-4'>
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Username :</label>
//                                 <input
//                                   placeholder='Username'
//                                   className='form-control form-control-lg form-control-solid'
//                                   value={initialvalues.username}
//                                   onChange={props.handleChange}
//                                   type='text'
//                                   name='username'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>

//                             {/*begin:: Username*/}
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Email :</label>
//                                 <input
//                                   placeholder='Email'
//                                   className='form-control form-control-lg form-control-solid'
//                                   value={initialvalues.email}
//                                   onChange={props.handleChange}
//                                   type='text'
//                                   name='email'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>
//                             </div>

//                             {/*begin:: phone*/}
//                             <div className='row w-100 mx-0 mb-4 gy-4'>
//                               <div className='col-lg-12'>
//                                 <label className='form-label fw-bold'>Mobile no:</label>
//                                 <input
//                                   placeholder='Mobile no.'
//                                   className='form-control form-control-lg form-control-solid'
//                                   type='number'
//                                   value={initialvalues.phone}
//                                   onChange={props.handleChange}
//                                   name='phone'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>

//                             {/*begin:: Zone*/}
//                               <div>
//                                 <div className='row mb-4'>
//                                   <label className=' fw-bold fs-6 mb-2'>Zone</label>
//                                   <div className='input-group'>
//                                     <input
//                                       className='form-control form-control-lg'
//                                       type='text'
//                                       {...props.getFieldProps('zoneId')}
//                                       autoComplete='off'
//                                       disabled
//                                     />
//                                   </div>
//                                 </div>
//                               </div>

//                             {/*begin:: Role*/}

//                               <div className='row mb-4'>
//                                   <label className=' fw-bold fs-6 mb-2'>Role</label>
//                                   <div className='input-group'>
//                                     <input
//                                       className='form-control form-control-lg'
//                                       type='text'
//                                       {...props.getFieldProps('roleId')}
//                                       autoComplete='off'
//                                       disabled
//                                     />
//                                   </div>
//                                 </div>
//                             </div>
//                             {/*end:: User-Type Filed */}

//                             <div className='row mb-4'>
//                               {/*begin:: Created By Filed */}
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Created by</label>
//                                 <input
//                                   className='form-control form-control-lg'
//                                   type='text'
//                                   value={initialvalues.createdby}
//                                   onChange={props.handleChange}
//                                   name='createdby'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>
//                               {/*end:: Created By Filed */}

//                               {/*begin:: Updated By Filed */}
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Updated by</label>
//                                 <input
//                                   className='form-control form-control-lg'
//                                   type='text'
//                                   value={initialvalues.modifyby}
//                                   onChange={props.handleChange}
//                                   name='modifyby'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>
//                               {/*end:: Updated By Filed */}
//                             </div>

//                             <div className='row mb-4'>
//                               {/* begin:: Created At Filed */}
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Created at</label>
//                                 <input
//                                   className='form-control form-control-lg'
//                                   type='text'
//                                   value={initialvalues.createdAt}
//                                   onChange={props.handleChange}
//                                   name='createdAt'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>
//                               {/* end:: Created At Filed */}

//                               {/* begin:: Updated At Filed */}
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Updated at</label>
//                                 <input
//                                   className='form-control form-control-lg'
//                                   type='text'
//                                   value={initialvalues.modifyAt}
//                                   onChange={props.handleChange}
//                                   name='modifyAt'
//                                   autoComplete='off'
//                                   disabled
//                                 />
//                               </div>
//                               {/* end:: Updated At Filed */}
//                             </div>
//                           </div>
//                         </div>
//                         {/* end::View Modal body */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* begin:: View Modal Backdrop */}
//             <div className='modal-backdrop fade show'></div>
//             {/* end:: View Modal Backdrop */}
//           </Form>
//         )}
//       </Formik>
//       {/* end:: View form */}
//     </>
//   )
// }
// export default UserFormViewModal

import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import Userservice from '../../helperUser/ApiDatarequestUser'
import {useLoader} from '../../../loader/LoaderContext'
import {ListPageData} from '../../UserContext'
import {KTSVG} from '../../../../../_metronic/helpers'
import moment from 'moment'
import {CustomTooltip} from '../../../../routing/customtooltip'

type Props = {
  category: any
}

const UserFormViewModal: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    setViewIdForUpdate,
    itemIdForUpdate,
    getDataAllType,
    getDataAllTypeRole,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const [initialvalues, setInitialvalues] = useState<any>({
    ...category,
    id: category.data?.id,
    firstname: category.data?.firstname || '',
    lastname: category.data?.lastname || '',
    username: category.data?.username || '',
    email: category.data?.email || '',
    phone: category.data?.phone || '',
    zoneId: category.data?.zoneId || '',
    zoneName: category.data?.zoneName || '',
    roleId: category.data?.roleId || '',
    roleName: category.data?.roleName || '',
    createdby: category.createdby || '',
    modifyby: category.modifyby || '',
    createdAt: moment(category.createdAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
    modifyAt: moment(category.modifyAt, 'YYYY-MM-DD,h:mm a').format('YYYY-MM-DD,h:mm a'),
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
              <h5 className='modal-title'>View User</h5>
            </div>
            <div className='ms-3'>
              {/* begin::  Edit User button */}
              <button
                // type='submit'
                className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                onClick={() => {
                  setViewIdForUpdate(undefined)
                  navigate(`/master/users/form/${ category.data.id}`)
                }}
              >
                <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                Edit User
              </button>
              {/* end::  Edit User button */}

              {/* begin::  close icon */}
              <CustomTooltip title='Close'>
                <div
                  className='btn btn-icon btn-sm btn-active-icon-primary'
                  onClick={() => setViewIdForUpdate(undefined)}
                  style={{cursor: 'pointer'}}
                >
                  <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                </div>
              </CustomTooltip>
              {/* end::  close icon */}
            </div>
          </div>
          {/* end:: View Modal Header */}
          {/*  */}
          <div className='col-lg-12'>
            <label className='fw-bold fs-6 mb-2'>FullName</label>
            <div className='input-group'>
              <input
                placeholder='FullName'
                value={initialvalues.fullName}
                type='text'
                name='fullName'
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
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Username :</label>
            <input
              placeholder='username'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.username}
              type='text'
              disabled
              readOnly
            />
          </div>

          {/* begin: input email Filed */}
          <div className='col-lg-6'>
            <label className='form-label fw-bold'>Email :</label>
            <input
              placeholder='email'
              className='form-control form-control-lg form-control-solid'
              value={initialvalues.email}
              type='text'
              disabled
              readOnly
            />
          </div>
        </div>

        {/* begin: input phone Filed */}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold'>Mobile no:</label>
            <input
              placeholder='Mobile no.'
              className='form-control form-control-lg form-control-solid'
              type='number'
              value={initialvalues.phone}
              disabled
              readOnly
            />
          </div>
        </div>

        {/*begin:: Zone*/}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold'>Zone:</label>
            <input
              placeholder='Zone.'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.zoneName}
              disabled
              readOnly
            />
          </div>
        </div>

        {/*begin:: role*/}
        <div className='row w-100 mx-0 mb-4 gy-4'>
          <div className='col-lg-12'>
            <label className='form-label fw-bold'>Role:</label>
            <input
              placeholder='Role'
              className='form-control form-control-lg form-control-solid'
              type='text'
              value={initialvalues.roleName}
              disabled
              readOnly
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

export default UserFormViewModal
