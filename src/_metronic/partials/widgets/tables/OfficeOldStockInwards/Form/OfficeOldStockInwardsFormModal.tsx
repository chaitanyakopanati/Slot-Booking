import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import moment from 'moment'
import OfficeStockInwardsService from '../helperOfficeStockInwards/ApiDataRequest'
import {ListPageData} from '../OfficeOldStockInwardsContext'

type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  inwardDate: Yup.string().required('This field is required'),
  productId: Yup.number().required('This field is required'),
  quantity: Yup.number().required('This field is required'),
  deliveredById: Yup.number().required('This fied is required'),
  zoneId: Yup.number().required('This fielld is required'),
  username: Yup.string().required('This field is required'),
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
    getUserNameData,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    inwardNo: '',
    inwardDate: '',
    productId: '',
    quantity: '',
    deliveredById: '',
    zoneId: '',
    serialno: '',
    remark: '',
    userId: '',
    username: '',
  })

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        inwardNo: category.data?.inwardNo || '',
        inwardDate: moment(category.data?.inwardDate).format('YYYY-MM-DD'),
        userId: category.data?.userId || '',
        productId: category.data?.productId || '',
        quantity: category.data?.quantity || '',
        deliveredById: category.data?.deliveredById || '',
        zoneId: category.data?.zoneId || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        inwardNo: category.data?.inwardNo || '',
        inwardDate: moment(category.data?.inwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || '',
        username: category.data?.username || '',
        userId: category.data?.userId || '',
        quantity: category.data?.quantity || '',
        deliveredById: category.data?.deliveredById || '',
        zoneId: category.data?.zoneId || '',
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
              let response = await OfficeStockInwardsService.editOfficeOldStockInwards(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/stocks/office-old-stock-inwards')
              toast.dismiss('1s')
            } else {
              let response = await OfficeStockInwardsService.postOfficeOldStockInwards(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/stocks/office-old-stock-inwards')
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
                  <div className=' col-md-3'>
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

                  <div className=' col-md-3'>
                    <label className='form-label fw-bold required'>Product</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('productId')}
                    >
                      <option value=''>Select Product</option>
                      {getDataAllTypeProduct.map((TypeData: any, index) => {
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

                  <div className=' col-md-3'>
                    <label className='form-label fw-bold required'>Zone </label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('zoneId')}
                    >
                      <option value='' disabled>
                        Select Zone
                      </option>
                      {getDataAllType.map((TypeData: any, index) => {
                        return (
                          <option key={index} value={TypeData.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='zoneId' />
                    </div>
                  </div>

                  <div className=' col-md-3'>
                    <label className='form-label fw-bold required'>Quantity</label>
                    <input
                      placeholder='quantity'
                      className='form-control form-control-lg form-control-solid'
                      type='number'
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

                  <div className='row w-100 mx-0 mb-4 gy-4' style={{position: 'relative'}}>
                    <div className='col-lg-6 col-12'>
                      <label className='form-label fw-bold required'>User Name</label>{' '}
                      <input
                        name='username'
                        placeholder='userName'
                        className='form-control form-control-lg form-control-solid'
                        value={props.values.username}
                        autoComplete='off'
                        onChange={(e) => {
                          setSuggestionUserText(e.target.value)
                          if (e.target.value) {
                            suggestionRef.current.style.display = 'block'
                          } else {
                            suggestionRef.current.style.display = 'none'
                          }
                          props.handleChange(e)
                        }}
                        onBlur={(e) => {
                          // suggestionRef.current.
                          var container = suggestionRef.current
                          document.addEventListener('click', function (event) {
                            if (suggestionRef.current) {
                              suggestionRef.current.style.display = 'none'
                            }
                            console.log(suggestionRef, '=====================-------===----==--')
                            document.removeEventListener('click', () => {})
                          })
                        }}
                      />
                      <div className='dropdown-menu suggestion-list' ref={suggestionRef}>
                        <ul>
                          {getUserNameData?.length > 0 &&
                            getUserNameData.map((user, index) => {
                              console.log('user', user)
                              return (
                                <li
                                  key={user.id}
                                  onClick={() => {
                                    props.setFieldValue('userId', user.id)
                                    props.setFieldValue('username', user.firstname)
                                  }}
                                >
                                  {user.firstname}
                                </li>
                              )
                            })}
                        </ul>
                      </div>
                      <div className='erro2' style={{color: 'red'}}>
                        <ErrorMessage name='username' />
                      </div>
                    </div>

                    <div className='col-md-6 col-12'>
                      <label className='form-label fw-bold required'>Delivered by</label>
                      <select
                        className='form-select form-select-solid'
                        {...props.getFieldProps('deliveredById')}
                      >
                        <option value='' disabled>
                          Select Delivered By
                        </option>
                        {getDataAllTypeDeliveredBy.map((TypeData, index) => {
                          return (
                            <option key={index} value={TypeData?.id}>
                              {TypeData?.fullName}
                            </option>
                          )
                        })}
                      </select>
                      <div className='erro2' style={{color: 'red'}}>
                        <ErrorMessage name='deliveredById' />
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <label className='form-label fw-bold '>Serial no</label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      value={props.values.serialno}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='serialno'
                      placeholder='Serial no'
                    />
                  </div>

                  <div className='col-12 col-lg-12'>
                    <div className='col'>
                      <label className='form-label fw-bold '>Remark</label>
                      <textarea
                        placeholder='Remark'
                        className='form-control form-control-lg form-control-solid'
                        value={props.values.remark}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        name='remark'
                        autoComplete='off'
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className='modal-footer border-0'>
                {/* begin::close button */}
                <CustomTooltip title='Close form'>
                  <button
                    type='reset'
                    onClick={() => navigation('/stocks/office-old-stock-inwards')}
                    className='btn btn-light'
                  >
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
