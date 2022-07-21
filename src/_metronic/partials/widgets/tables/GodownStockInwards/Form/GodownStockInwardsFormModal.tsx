// import {Formik, ErrorMessage} from 'formik'
// import * as Yup from 'yup'
// import {FC, useEffect} from 'react'
// import {Form} from 'react-bootstrap'
// import {toast} from 'react-toastify'
// import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
// import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
// import moment from 'moment'
// import { ListPageData } from '../GodownStockInwardsContext'
// import OfficeStockInwardservice from '../helperGodownStockInwards/ApiDataRequest'

// type Props = {
//   category: any
// }

// const GodownStockInwardsFormModal: FC<Props> = ({category}) => {
//   const {
//     setItemIdForUpdate,
//     itemIdForUpdate,
//     fetchAllofficestockOutward,
//     getDataAllTypeProduct,
//   } = ListPageData()
//   let {LoderActions} = useLoader()

//   const cancel = (withRefresh?: boolean) => {
//     if (withRefresh) {
//     }
//     setItemIdForUpdate(undefined)
//   }

//   function onKeyDown(keyEvent: any) {
//     if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
//       keyEvent.preventDefault()
//     }
//   }

//   useEffect(() => {
//     category && console.log('category', category)

//     console.log('itemIdForUpdate', itemIdForUpdate)
//   }, [category])

//   return (
//     <>
//       {/* begin::formik Add/Edit form */}

//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           id:category.data?.id || '',
//           inwardNo: category.data?.inwardNo,
//           inwardDate: moment(category.inwardDate).format('YYYY-MM-DD'),
//           productId: category.data?.productId || 0,
//           quantity: category.data?.quantity || '',
//           // supplierName: category.data?.supplierName || '',
//           serialno: category.data?.serialno || '',
//           remark: category.data?.remark || '',
//         }}
//         validationSchema={Yup.object({
//           inwardDate: Yup.string().required('This field is required'),
//           productId: Yup.number().required('This field is required'),
//           quantity: Yup.string().required('This field is required'),
//           //  supplierName: Yup.number().required('This fied is required'),
//            serialno: Yup.string().required('This field is required'),
//            remark: Yup.string().required('This field is required'),
//         })}
//         onSubmit={async (values: any, {resetForm}) => {
//           LoderActions(true)
//           console.log(values, 'values')

//           try {
//             if (values.id) {
//               console.log(values, 'valuesput')

//               // Edit Api Response
//               let response = await OfficeStockInwardservice.editGodownstockinwards(values)
//               console.log(response, 'res======')
//               toast.success(` Data Updated Successfully`)
//               toast.dismiss('1s')
//               fetchAllofficestockOutward()
//               resetForm({})
//               cancel()
//             } else {
//               console.log(values, 'valuespost')

//               // Create Api Response
//               let response = await OfficeStockInwardservice.postGodownstockinwards(values)
//               console.log(response, 'res=----------====')
//               toast.success(` Data Added Successfully`)
//               toast.dismiss('1s')
//               fetchAllofficestockOutward()
//               resetForm({})
//               cancel()
//             }
//           } catch (error: any) {
//             console.log(error, 'error')
//             toast.error(error.data.message)
//           } finally {
//             LoderActions(false)
//           }
//         }}
//       >
//         {(props) => (
//           <>
//             {/* {console.log(category, 'category')} */}

//             <Form
//               id='kt_modal_add_user_form'
//               onKeyDown={onKeyDown}
//               className='form'
//               onSubmit={props.handleSubmit}
//               noValidate
//             >
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
//                 {/* begin: input name Filed */}
//                 <div className='row w-100 mx-0 mb-4 gy-4'>
//                   <div className=' col-md-6 col-12'>
//                     <label className='form-label fw-bold '>Inward date </label>
//                     <input
//                       className='form-control form-control-lg form-control-solid'
//                       type='date'
//                       value={props.values.inwardDate}
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       name='inwardDate'
//                       autoComplete='off'
//                     />
//                     <div className='erro2' style={{color: 'red'}}>
//                       <ErrorMessage name='inwardDate' />
//                     </div>
//                   </div>

//                   <div className=' col-md-6 col-12'>
//                     <label className='form-label fw-bold'>Product</label>
//                     <select
//                       className='form-select form-select-solid'
//                       {...props.getFieldProps('productId')}
//                     >
//                       <option value='' >
//                         Select Product Type
//                       </option>
//                       {getDataAllTypeProduct.map((TypeData: any, index) => {
//                         return (
//                           <option key={index} value={TypeData.id}>
//                             {TypeData?.name}
//                           </option>
//                         )
//                       })}
//                     </select>
//                     <div className='erro2' style={{color: 'red'}}>
//                       <ErrorMessage name='productId' />
//                     </div>
//                   </div>

//                   <div className=' col-md-6 col-12'>
//                     <label className='form-label fw-bold'>Quantity</label>
//                     <input
//                       placeholder='quantity'
//                       className='form-control form-control-lg form-control-solid'
//                       type='text'
//                       value={props.values.quantity}
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       name='quantity'
//                       autoComplete='off'
//                     />
//                     <div className='erro2' style={{color: 'red'}}>
//                       <ErrorMessage name='quantity' />
//                     </div>
//                   </div>

// <div className='col-lg-6'>
//   <div className='col'>
//     <label className='form-label fw-bold'>Supplier name</label>
//     <input
//       placeholder='Supplier name'
//       className='form-control form-control-lg form-control-solid'
//       type='text'
//       autoComplete='off'
//     />
//   </div>
//                   </div>
//                 </div>

//                 <div className='col-12 col-lg-12'>
//                   <label className='form-label fw-bold'>Serial no</label>
//                   <textarea
//                     className='form-control form-control form-control-solid'
//                     value={props.values.serialno}
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                     name='serialno'
//                     placeholder='Serial no'
//                   ></textarea>
//                   <div className='erro2' style={{color: 'red'}}>
//                     <ErrorMessage name='serialno' />
//                   </div>
//                 </div>

//                 <div className='col-12 col-lg-12'>
//                   <div className='col'>
//                     <label className='form-label fw-bold'>Remark</label>
//                     <input
//                       placeholder='Remark'
//                       className='form-control form-control-lg form-control-solid'
//                       value={props.values.remark}
//                       onChange={props.handleChange}
//                       onBlur={props.handleBlur}
//                       type='text'
//                       name='remark'
//                       autoComplete='off'
//                     />
//                     <div className='erro2' style={{color: 'red'}}>
//                       <ErrorMessage name='remark' />
//                     </div>
//                   </div>
//                 </div>

//                 {/* begin::close button */}
//                 <div className='modal-footer border-0'>
//                   <CustomTooltip title='Close form'>
//                     <button
//                       type='reset'
//                       onClick={() => cancel()}
//                       className='btn btn-light'
//                       data-kt-users-modal-action='cancel'
//                     >
//                       Close
//                     </button>
//                   </CustomTooltip>
//                   {/* end::close button */}

//                   {/* begin::create/update Button */}
//                   <CustomTooltip title='Submit form'>
//                     <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
//                       {itemIdForUpdate ? 'Update' : 'Create'}
//                     </button>
//                   </CustomTooltip>
//                   {/* end::create/update Button */}
//                 </div>
//               </div>
//             </Form>
//           </>
//         )}
//       </Formik>

//       {/* end::formik Add/Edit form */}
//     </>
//   )
// }

// export default GodownStockInwardsFormModal

import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, Key, useEffect, useRef, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import moment from 'moment'
import {ListPageData} from '../GodownStockInwardsContext'
import OfficeStockInwardsService from '../helperGodownStockInwards/ApiDataRequest'

type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  inwardDate: Yup.string().required('This field is required'),
  productId: Yup.number().required('This field is required'),
  quantity: Yup.string().required('This field is required'),
  // supplierId: Yup.string().required('This fied is required'),
})

const OfficeStockInwardsFormModal: FC<Props> = ({category}) => {
  const suggestionRef: any = useRef()

  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    setSuggestionUserText,
    getDataAllTypeProduct,
    getDataAllType,
    getDataAllTypeDeliveredBy,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    inwardNo: '',
    inwardDate: '',
    productId: '',
    quantity: '',
    supplierId: '',
    serialno: '',
    remark: '',
    supplierName: '',
  })

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        inwardNo: category.data?.inwardNo || '',
        inwardDate: moment(category.inwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        supplierId: category.data?.supplierId || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        inwardNo: category.data?.inwardNo || '',
        inwardDate: moment(category.inwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        supplierId: category.data?.supplierId || '',
        supplierName: category.data?.supplierName || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
      })
    }
  }, [itemIdForUpdate])

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

  useEffect(() => {}, [category, itemIdForUpdate])

  return (
    <>
      {/* begin::formik Add/Edit form */}

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchemaNewForm}
        onSubmit={async (values: any, {resetForm}) => {
          console.log('values', values)
          LoderActions(true)
          values.zoneId = +values.zoneId

          try {
            if (values.id) {
              // Edit Api Response
              let response = await OfficeStockInwardsService.editOfficeStockInwards(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/stocks/godown-stock-inwards')
              // toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')
            } else {
              let response = await OfficeStockInwardsService.postOfficeStockInwards(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/stocks/godown-stock-inwards')
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
            <div className='mt-4'></div>

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
                {/* begin: input name Filed */}
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold required'>Inward date </label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      value={props.values.inwardDate}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='inwardDate'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='inwardDate' />
                    </div>
                  </div>

                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold required'>Product</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('productId')}
                    >
                      <option value=''>Select Product Type</option>
                      {getDataAllTypeProduct.map((TypeData: any, index: Key | null | undefined) => {
                        return (
                          <option key={index} value={TypeData.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='productId' />
                    </div>
                  </div>

                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold required'>Quantity</label>
                    <input
                      placeholder='quantity'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={props.values.quantity}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='quantity'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='quantity' />
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='col'>
                      <label className='form-label fw-bold required'>Supplier name</label>
                      <input
                        placeholder='Supplier name'
                        className='form-control form-control-lg form-control-solid'
                        type='text'
                        value={props.values.supplierId}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        name='supplierId'
                        autoComplete='off'
                      />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='supplierId' />
                    </div>
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <label className='form-label fw-bold '>Serial no</label>
                  <textarea
                    className='form-control form-control-lg form-control-solid'
                    value={props.values.serialno}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name='serialno'
                    placeholder='Serial no'
                  ></textarea>
                   
                </div>

                <div className='col-12 col-lg-12'>
                  <div className='col'>
                    <label className='form-label fw-bold '>Remark</label>
                    <input
                      placeholder='Remark'
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.remark}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      type='text'
                      name='remark'
                      autoComplete='off'
                    />
                  </div>
                
                </div>
              </div>

              <div className='modal-footer border-0'>
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

      {/* end::formik Add/Edit form */}
    </>
  )
}

export default OfficeStockInwardsFormModal
