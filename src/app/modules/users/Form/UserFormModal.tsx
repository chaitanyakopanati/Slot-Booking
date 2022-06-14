// import {Formik, ErrorMessage} from 'formik'
// import * as Yup from 'yup'
// import {FC, useEffect} from 'react'
// import {Form} from 'react-bootstrap'
// import {toast, ToastContainer} from 'react-toastify'
// import { useLoader } from '../../loader/LoaderContext'
// import { CustomTooltip } from '../../../routing/customtooltip'

// type Props = {
//   category: any
// }

// : FC<Props> = ({category}) => {
//   const {setItemIdForUpdate, DataGetApiPackagecategories,  fetchAllPackagecategories,itemIdForUpdate} = ListPageData()
//   let {LoderActions, open} = useLoader()

//   {
//     /* begin::button onclick function */
//   }
//   const cancel = (withRefresh?: boolean) => {
//     if (withRefresh) {
//     }
//     setItemIdForUpdate(undefined)
//   }

//   {
//     /* begin::form on keyDown */
//   }
//   function onKeyDown(keyEvent: any) {
//     if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
//       keyEvent.preventDefault()
//     }
//   }

//   useEffect(() => {
//     console.log('category', category)
//     console.log('itemIdForUpdate', itemIdForUpdate)
//   }, [category])

//   return (
//     <>
//       {/* begin::formik form */}

//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           id: category.data?.id,
//           name: category.data?.name || '',
//           etr: category.data?.etr || 1,
//         }}
//         validationSchema={Yup.object({
//           name: Yup.string()
//             .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
//             .required('This field is required'),
//           etr: Yup.number()
//             .min(1, 'Etr must be of 3digit ')
//             .required('This field is required'),

//         })}
//         onSubmit={async (values, {resetForm}) => {
//           LoderActions(true)

//           try {
//             if (values.id) {
//           console.log(values,"valuespost");

//               let response = await Complaintservice.editPackagesCategories(values)
//               console.log(response, 'res======')
//               toast.success(` Data Updated Successfully`)
//               toast.dismiss('1s')
//               fetchAllPackagecategories()
//               resetForm({})
//               cancel()
//             } else {
//           console.log(values,"valuespost");

//               let response = await Complaintservice.postPackageCategories(values)
//               console.log(response, 'res=----------====')
//               toast.success(` Data Added Successfully`)
//               toast.dismiss('1s')
//               fetchAllPackagecategories()
//               resetForm({})
//               cancel()
//             }
//           } catch (error: any) {
//             console.log(error, 'error')
//           }finally{
//             LoderActions(false)

//           }

//         }}
//       >
//         {(props) => (
//           <>
//             {console.log(category, 'category')}

//             <Form
//               id='kt_modal_add_user_form'
//               onKeyDown={onKeyDown}
//               className='form'
//               onSubmit={props.handleSubmit}
//               noValidate
//             >
//               {/* begin::Scroll */}
//               <div
//                 className='d-flex flex-column scroll-y me-n7 pe-7'
//                 id='kt_modal_add_user_scroll'
//                 data-kt-scroll='true'
//                 data-kt-scroll-activate='{default: false, lg: true}'
//                 data-kt-scroll-max-height='auto'
//                 data-kt-scroll-dependencies='#kt_modal_add_user_header'
//                 data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
//                 data-kt-scroll-offset='300px'
//               >
//                 {/* name Filed */}
//                 <div className='fv-row mb-7'>
//                   <label className=' fw-bold fs-6 mb-2'>Name</label>
//                   <input
//                     placeholder='Name'
//                     value={props.values.name}
//                     onChange={props.handleChange}
//                     type='text'
//                     name='name'
//                     className='form-control form-control-lg form-control-solid'
//                     autoComplete='off'
//                   />
//                   <div className='erro2' style={{color: 'red'}}>
//                     <ErrorMessage name='name' />
//                   </div>
//                 </div>
//                 {/* etr Filed */}
//                  {/* name email */}
//                  <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Email:</label>
//                                 <input
//                                   placeholder='Email'
//                                   className='form-control form-control-lg form-control-solid'
//                                   type='text'
//                                   autoComplete='off'
//                                 />
//                               </div>
//                             </div>

//                             {/* name phone no */}
//                             <div className='row w-100 mx-0 mb-4 gy-4'>
//                               <div className='col-lg-4'>
//                                 <label className='form-label fw-bold'>Mobile no:</label>
//                                 <input
//                                   placeholder='Mobile no.'
//                                   className='form-control form-control-lg form-control-solid'
//                                   type='number'
//                                   autoComplete='off'
//                                 />
//                               </div>

//                               {/* name Zone */}
//                               <div className='col-lg-4'>
//                                 <div data-select2-id='select-zone'>
//                                   <label className='form-label fw-bold'>Zone:</label>
//                                   <div data-select2-id='select-zone'>
//                                     <select className='form-select form-select-solid'>
//                                       <option></option>
//                                       <option value='1'>All</option>
//                                       <option value='2'>Katargam</option>
//                                       <option value='3'>Ring Road</option>
//                                       <option value='4'>Varachha</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                               </div>

//                               {/* name Role */}
//                               <div className='col-lg-4'>
//                                 <div data-select2-id='select-role'>
//                                   <label className='form-label fw-bold'>Role:</label>
//                                   <div data-select2-id='select-role'>
//                                     <select className='form-select form-select-solid'>
//                                       <option></option>
//                                       <option value='1'>All</option>
//                                       <option value='2'>Sales Executive</option>
//                                       <option value='3'>Technician</option>
//                                       <option value='4'>Customer</option>
//                                       <option value='4'>Stock Manager</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             {/* name Password */}
//                             <div className='row w-100 mx-0 mb-4 gy-4'>
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Password:</label>
//                                 <input
//                                   placeholder='Password'
//                                   className='form-control form-control-lg form-control-solid'
//                                   type='text'
//                                   autoComplete='off'
//                                 />
//                               </div>

//                               {/* name confirm password */}
//                               <div className='col-lg-6'>
//                                 <label className='form-label fw-bold'>Confirm Password:</label>
//                                 <input
//                                   placeholder='Confirm Password'
//                                   className='form-control form-control-lg form-control-solid'
//                                   type='text'
//                                   autoComplete='off'
//                                 />
//                               </div>
//                             </div>

//                             {/* begin::close button */}
//                             <div className='modal-footer border-0'>
//                               <CustomTooltip title='Close form'>
//                                 <button
//                                   type='reset'
//                                   onClick={() => cancel()}
//                                   className='btn btn-light'
//                                   data-kt-users-modal-action='cancel'
//                                 >
//                                   Close
//                                 </button>
//                               </CustomTooltip>

//                               {/* begin::create */}
//                               <CustomTooltip title='Submit form'>
//                                 <button
//                                   type='submit'
//                                   className='btn btn-primary'
//                                   data-bs-dismiss='modal'
//                                 >
//                                   {itemIdForUpdate ? 'Update' : 'Create'}
//                                 </button>
//                               </CustomTooltip>
//                             </div>
//               </div>
//             </Form>
//           </>
//         )}
//       </Formik>

//       {/* end::formik form */}
//     </>
//   )
// }

// export default export default UserFormModal

import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import {toast, ToastContainer} from 'react-toastify'
import {useLoader} from '../../loader/LoaderContext'
import {CustomTooltip} from '../../../routing/customtooltip'
import {ListPageData} from '../UserListContext'
import Userservice from '../helperUser/ApiDatarequestUser'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  category: any
}

const UserFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, DataGetApiUser, fetchAllUser, itemIdForUpdate} = ListPageData()
  let {LoderActions, open} = useLoader()
  const {id} = useParams()
  const navigation = useNavigate()

  {
    /* begin::button onclick function */
  }
  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
    }
    setItemIdForUpdate(undefined)
  }

  {
    /* begin::form on keyDown */
  }
  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  useEffect(() => {
    console.log('category', category)
    console.log('itemIdForUpdate', itemIdForUpdate)
  }, [category])

  return (
    <>
      {/* begin::formik form */}

      <Formik
        enableReinitialize={true}
        initialValues={{
          id: category.id,
          name: category.name || '',
          username: category.username || '',
          email: category.email || '',
          phone: category.phone || '',
          roleName: category.roleName || '',
          zoneName: category.zoneName || '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          username: Yup.string().required('This field is required'),
          email: Yup.string().required('This field is required'),
          phone: Yup.number().required('This field is required'),
          roleName: Yup.string().required('This field is required'),
          zoneName: Yup.string().required('This field is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          LoderActions(true)

          try {
            if (values.id) {
              //   console.log(values 'valuespost')

              let response = await Userservice.editUser(values)
              console.log(response, 'res======')
              toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')
              fetchAllUser()
              resetForm({})
              navigation('/users')
              cancel()
            } else {
              console.log(values, 'valuespost')

              let response = await Userservice.postUser(values)
              console.log(response, 'res=----------====')
              toast.success(` Data Added Successfully`)
              toast.dismiss('1s')
              fetchAllUser()
              navigation('/users')
              resetForm({})
              cancel()
            }
          } catch (error: any) {
            console.log(error, 'error')
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => (
          <>
            {console.log(category, 'category')}

            <Form
              id='kt_modal_add_user_form'
              onKeyDown={onKeyDown}
              className='form'
              onSubmit={props.handleSubmit}
              noValidate
            >
              {/* begin::Scroll */}
              <div
                className='d-flex flex-column scroll-y me-n7 pe-7'
                id='kt_modal_add_user_scroll'
                data-kt-scroll='true'
                data-kt-scroll-activate='{default: false, lg: true}'
                data-kt-scroll-max-height='auto'
                data-kt-scroll-dependencies='#kt_modal_add_user_header'
                data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
                data-kt-scroll-offset='300px'
              >
                {/* name Filed */}
                <div className='fv-row mb-7'>
                  <label className=' fw-bold fs-6 mb-2'>Name</label>
                  <input
                    placeholder='Name'
                    value={props.values.name}
                    onChange={props.handleChange}
                    type='text'
                    name='name'
                    className='form-control form-control-lg form-control-solid'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='name' />
                  </div>
                </div>

                {/* name email */}
                <div className='col-lg-6'>
                  <label className='form-label fw-bold'>Email:</label>
                  <input
                    placeholder='Email'
                    name='email'
                    value={props.values.email}
                    onChange={props.handleChange}
                    className='form-control form-control-lg form-control-solid'
                    type='text'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='email' />
                  </div>
                </div>
              </div>

              {/* name phone no */}
              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-lg-4'>
                  <label className='form-label fw-bold'>Mobile no:</label>
                  <input
                    placeholder='Mobile no.'
                    name='phone'
                    value={props.values.phone}
                    onChange={props.handleChange}
                    className='form-control form-control-lg form-control-solid'
                    type='number'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='phone' />
                  </div>
                </div>

                {/* name Zone */}
                <div className='col-lg-4'>
                  <div data-select2-id='select-zone'>
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
                </div>

                {/* name Role */}
                <div className='col-lg-4'>
                  <div data-select2-id='select-role'>
                    <label className='form-label fw-bold'>Role:</label>
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
              </div>

              {/* name Password */}
              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col-lg-6'>
                  <label className='form-label fw-bold'>Password:</label>
                  <input
                    placeholder='Password'
                    name='password'
                    value={props.values.password}
                    onChange={props.handleChange}
                    className='form-control form-control-lg form-control-solid'
                    type='text'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='password' />
                  </div>
                </div>

                {/* name confirm password */}
                <div className='col-lg-6'>
                  <label className='form-label fw-bold'>Confirm Password:</label>
                  <input
                    placeholder='Confirm Password'
                    className='form-control form-control-lg form-control-solid'
                    type='text'
                    autoComplete='off'
                  />
                </div>
              </div>

              {/* begin::close button */}
              <div className='modal-footer border-0'>
                <CustomTooltip title='Close form'>
                  <button
                    type='reset'
                    onClick={() => cancel()}
                    className='btn btn-light'
                    data-kt-users-modal-action='cancel'
                  >
                    Close
                  </button>
                </CustomTooltip>

                {/* begin::create */}
                <CustomTooltip title='Submit form'>
                  <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                    {itemIdForUpdate ? 'Update' : 'Create'}
                  </button>
                </CustomTooltip>
              </div>
            </Form>
          </>
        )}
      </Formik>

      {/* end::formik form */}
    </>
  )
}

export default UserFormModal
