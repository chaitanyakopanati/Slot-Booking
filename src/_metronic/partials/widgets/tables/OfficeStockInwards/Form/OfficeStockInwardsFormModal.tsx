import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import Inquiriesservice from '../helperOfficeStockInwards/ApiDataRequest'
import { ListPageData } from '../OfficeStockInwardsContext'

type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  address: Yup.string().required('This field is required'),
  contactno: Yup.string()
    //  .min(10, 'Min 10 digits are allowed')
    // .max(10, 'Max 10 digits are allowed')
    .min(10, 'Invalid Phone Number')
    .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
    .required('This field is required'),
  statusId: Yup.string().required('This fied is required'),
  salesexecutiveId: Yup.string().required('This fielld is required'),
  description: Yup.string().required('This field is required'),
  remark: Yup.string().required('This field is required'),
})

let validationSchemaEditForm = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  address: Yup.string().required('This field is required'),
  contactno: Yup.string()
    //  .min(10, 'Min 10 digits are allowed')
    // .max(10, 'Max 10 digits are allowed')
    .min(10, 'Invalid Phone Number')
    .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
    .required('This field is required'),
  statusId: Yup.string().required('This fied is required'),
  salesexecutiveId: Yup.string().required('This fied is required'),
  description: Yup.string().required('This field is required'),
  remark: Yup.string().required('This field is required'),
})

const OfficeStockInwardsFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate, statusData, getUserByRole} = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    name: '',
    address: '',
    contactno: '',
    statusId: '',
    salesexecutiveId: '',
    description: '',
    remark: '',
    status: '',
    username: '',
    isnotify: false,
  })

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id,
        name: category.data?.name || '',
        address: category.data?.address || '',
        contactno: category.data?.contactno || '',
        statusId: category.data?.statusId || '',
        status: category.data?.status || '',
        username: category.data?.username || '',
        salesexecutiveId: category.data?.salesexecutiveId || '',
        description: category.data?.description || '',
        remark: category.data?.remark || '',
        isnotify: category.data?.isnotify || false,
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id,
        name: category.data?.name || '',
        address: category.data?.address || '',
        contactno: category.data?.contactno || '',
        statusId: category.data?.statusId || '',
        status: category.data?.status || '',
        username: category.data?.username || '',
        salesexecutiveId: category.data?.salesexecutiveId || '',
        description: category.data?.description || '',
        remark: category.data?.remark || '',
        isnotify: category.data?.isnotify || false,
      })
    }
  }, [itemIdForUpdate])

  useEffect(() => {
    console.log('StatusData', statusData)
  }, [statusData])

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
    }
    setItemIdForUpdate(undefined)
  }

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  // useEffect(() => {}, [category, itemIdForUpdate])
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={
          itemIdForUpdate === 'add' ? validationSchemaNewForm : validationSchemaEditForm
        }
        onSubmit={async (values: any, {resetForm}) => {
          console.log('values', values)
          LoderActions(true)
          values.salesexecutiveId = +values.salesexecutiveId
          // values.phone = values.phone.toString()

          try {
            if (values.id) {
              // Edit Api Response
              let response = await Inquiriesservice.editInquiries(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/inquiries')
              // toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')

              resetForm({})
              cancel()
            } else {
              let response = await Inquiriesservice.postInquiries(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/inquiries')
              resetForm({})
              cancel()
            }
          } catch (error: any) {
            console.log(error, 'error')
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => (
          <>
            <Form
              id='kt_modal_add_user_form'
              onKeyDown={onKeyDown}
              className='form'
              onSubmit={props.handleSubmit}
            >
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
                <div className='modal-body'>
                  <div className='container-fluid p-0'>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-12'>
                        <label className='form-label fw-bold required'>Name</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          name='name'
                          placeholder='name'
                          value={props.values.name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          type='text'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='name' />
                        </div>
                      </div>
                      <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold'>Address</label>
                        <textarea
                          className='form-control form-control form-control-solid'
                          name='address'
                          value={props.values.address}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Address here'
                        ></textarea>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='address' />
                        </div>
                      </div>
                    </div>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-4'>
                        <label className='form-label fw-bold required'>Contact no.</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          name='contactno'
                          placeholder='contactno'
                          value={props.values.contactno}
                          onChange={(e) => {
                            if (+e.target.value > 9999999999) {
                              return
                            }
                            props.handleChange(e)
                          }}
                          onBlur={props.handleBlur}
                          type='text'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='contactno' />
                        </div>
                      </div>
                      {/* <div className='col-lg-4'>
                        <label className='form-label fw-bold'>Status</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('statusId')}
                        >
                          <option value='' disabled>
                            Select Status Type
                          </option>
                          {statusData?.map((row, index) => {
                            // console.log('rowwwwww', row)
                            // console.log('rowwwwww')
                            return (
                              <option key={index} value={row?.id}>
                                {row.status}
                              </option>
                            )
                          })}
                        </select>
                      </div> */}
                      {/* <div className='col-lg-4'>
                        <label className='form-label fw-bold'>Sales executive</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('salesexecutiveId')}
                        >
                          <option value='' disabled>
                            Select Sales executive
                          </option>
                          {getUserByRole?.map((row, index) => {
                            return (
                              <option key={index} value={row?.id}>
                                {row.username}
                              </option>
                            )
                          })}
                        </select>
                      </div> */}

                      <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold'>Description</label>
                        <textarea
                          className='form-control form-control form-control-solid'
                          name='description'
                          value={props.values.description}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Description here'
                        ></textarea>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='description' />
                        </div>
                      </div>

                      <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold'>Remark</label>
                        <textarea
                          className='form-control form-control form-control-solid'
                          name='remark'
                          value={props.values.remark}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Remark here'
                        ></textarea>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='remark' />
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col'>
                        <label className='form-label fw-bold'>Notification</label>
                        <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                          <input
                            className='form-check-input h-20px w-30px'
                            type='checkbox'
                            value={props.values.isnotify}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            name='isnotify'
                            //  value=''
                            checked={props.values.statusId === '2' ? true : false}
                          />
                          <label className='form-check-label'>Sales executive</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='modal-footer border-0 pb-0 pt-0'>
                {/* begin::close button */}
                <CustomTooltip title='Close form'>
                  <button type='reset' onClick={() => navigation(-1)} className='btn btn-light'>
                    Close
                  </button>
                </CustomTooltip>
                {/* end::close button */}

                {/* begin::create/update Button */}
                <CustomTooltip title='Submit form'>
                  <button type='submit' className='btn btn-primary'>
                    {itemIdForUpdate !== 'add' ? 'Update' : 'Create'}
                  </button>
                </CustomTooltip>
                {/* end::create/update Button */}
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}

export default OfficeStockInwardsFormModal



// import React from 'react'
// import {KTSVG} from '../../../../../helpers'

// const OfficeStockInwardsFormModal = () => {
//   return (
//     <div>
//       <div className='modal fade' id='create-inquiry-modal'>
//         <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5 className='modal-title'>Create office stock inward</h5>
//               <div
//                 className='btn btn-icon btn-sm btn-active-light-primary ms-2'
//                 data-bs-dismiss='modal'
//                 aria-label='Close'
//               >
//                 <span className='svg-icon svg-icon-2x'>
//                   <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-3' />
//                 </span>
//               </div>
//             </div>

//             <div className='modal-body'>
//               <div className='container-fluid p-0'>
//                 <div className='row w-100 mx-0 mb-4 gy-4'>
//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold '>Inward date </label>
//                     <input
//                       className='form-control form-control-lg form-control-solid'
//                       type='date'
//                       autoComplete='off'
//                     />
//                   </div>

//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>Product</label>
//                     <select className='form-select form-select-solid'>
//                       <option value='1'>Open</option>
//                       <option value='2'>Pending</option>
//                       <option value='3'>Done</option>
//                       <option value='4'>Cancel</option>
//                     </select>
//                   </div>

//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>Quantity</label>
//                     <input
//                       placeholder='Solved at'
//                       className='form-control form-control-lg form-control-solid'
//                       type='number'
//                       autoComplete='off'
//                     />
//                   </div>

//                   <div className='col-lg-3'>
//                     <label className='form-label fw-bold'>Delivered by</label>
//                     <select className='form-select form-select-solid'>
//                       <option value='1'>All</option>
//                       <option value='2'>Not described</option>
//                       <option value='3'>Abalkesh Soft</option>
//                       <option value='4'>Ajay Sulin</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className='col-lg-12'>
//                   <label className='form-label fw-bold'>Zone </label>
//                   <select className='form-select form-select-solid'>
//                     <option value='1'>All</option>
//                     <option value='2'>Katargam</option>
//                     <option value='3'>Abalkesh Soft</option>
//                     <option value='4'>Ajay Sulin</option>
//                   </select>
//                 </div>

//                 <div className='col-12 col-lg-12'>
//                   <label className='form-label fw-bold'>Serial no</label>
//                   <textarea
//                     className='form-control form-control form-control-solid'
//                     data-kt-autosize='true'
//                     placeholder='Remark here'
//                   ></textarea>
//                 </div>

//                 <div className='col-12 col-lg-12'>
//                   <div className='col'>
//                     <label className='form-label fw-bold'>Remark</label>
//                     <input
//                       placeholder='Solved at'
//                       className='form-control form-control-lg form-control-solid'
//                       type='number'
//                       autoComplete='off'
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className='modal-footer'>
//               <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
//                 Close
//               </button>
//               <button type='button' className='btn btn-primary'>
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OfficeStockInwardsFormModal
