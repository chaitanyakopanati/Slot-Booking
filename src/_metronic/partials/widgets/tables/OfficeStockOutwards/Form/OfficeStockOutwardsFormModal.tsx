import {Formik, ErrorMessage, useFormik} from 'formik'
import {FC, useEffect, useRef, useState} from 'react'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {ListPageData} from '../OfficeStockOutwardsContext'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import OfficeStockOutwardsViewService from '../helperOfficeStockOutwards/ApiDataRequest'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import moment from 'moment'

type formik = {
  category: any
}

const UserFormModal: FC<formik> = ({category}) => {
  const suggestionRef: any = useRef()

  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    getDataAllTypeTechnician,
    setSuggestionUserText,
    getDataAllTypeProduct,
    getDataAllType,
    getUserNameData,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const [validationForm, setvalidationForm] = useState<any>()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    userId: '',
    username: '',
    outwardDate: '',
    productId: '',
    quantity: '',
    zoneId: '',
    reason: '',
    technicianId: '',
    serialno: '',
    remark: '',
  })
  const [getProductZoneQuntity, setGetProductZoneQuntity] = useState(null)

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        outwardDate: moment(category.data?.outwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        zoneId: category.data?.zoneId || '',
        userId: category.data?.userId || '',
        reason: category.data?.reason || '',
        technicianId: category.data?.technicianId || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        outwardDate: moment(category.data?.outwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        zoneId: category.data?.zoneId || '',
        username: category.data?.username || '',
        userId: category.data?.userId || '',
        reason: category.data?.reason || '',
        technicianId: category.data?.technicianId || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
      })
    }
  }, [itemIdForUpdate])

  // useEffect(() => {
  //   if (itemIdForUpdate === 'add') {
  //     setvalidationForm({
  //       validationSchema: Yup.object({
  //         outwardDate: Yup.string().required('This field is required'),
  //         productId: Yup.number().required('This field is required'),
  //         quantity: Yup.number()
  //           .max(QuntityData)
  //           .required('This field is required'),
  //         zoneId: Yup.number().required('This fielld is required'),
  //         technicianId: Yup.string().required('This field is required'),
  //         reason: Yup.string().required('This field is required'),
  //         userId: Yup.number().required('This field is required'),
  //       }),
  //     })
  //   } else {
  //     setvalidationForm({
  //       validationSchema: Yup.object({
  //         outwardDate: Yup.string().required('This field is required'),
  //         productId: Yup.number().required('This field is required'),
  //         quantity: Yup.number()
  //           .max(QuntityData + EditQuntityData)
  //           .required('This field is required'),
  //         zoneId: Yup.number().required('This fielld is required'),
  //         technicianId: Yup.string().required('This field is required'),
  //         reason: Yup.string().required('This field is required'),
  //         userId: Yup.number().required('This field is required'),
  //       }),
  //     })
  //   }
  // }, [itemIdForUpdate])

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

  var QuntityData: any = getProductZoneQuntity
  console.log(QuntityData, 'QuntityData')

  var EditQuntityData: any = category.data?.quantity
  console.log(EditQuntityData, 'EditQuntityDataEditQuntityData')

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationForm,
    onSubmit: async (values: any, {resetForm}) => {
      LoderActions(true)
      values.zoneId = +values.zoneId
      try {
        if (values.id) {
          // Edit Api Response
          let response = await OfficeStockOutwardsViewService.editOfficeStockOutwards(values)
          console.log('Edit User*****************', response)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(`Data Updated Successfully`)
          }
          navigation('/stocks/office-stock-outwards')
          toast.dismiss('1s')
        } else {
          let response = await OfficeStockOutwardsViewService.postOfficeStockOutwards(values)
          console.log('Add User*****************', response)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(` Data Added Successfully`)
          }
          toast.dismiss('1s')
          navigation('/stocks/office-stock-outwards')
        }
      } catch (error: any) {
        console.log(error, 'error')
        toast.error(error.data.message)
      } finally {
        LoderActions(false)
      }
    },
  })

  useEffect(() => {
    if ((formik.values.productId, formik.values.zoneId)) {
      const ProductZoneAllData = async () => {
        let payload = await OfficeStockOutwardsViewService.getProductZoneQuntityTypes(
          formik.values.productId,
          formik.values.zoneId
        )
        console.log(payload, 'payloadpayload')
        if (payload.success == true) {
          LoderActions(false)
          setGetProductZoneQuntity(payload?.data)
          console.log(payload.data, 'getProductZoneQuntityName')
        }
      }
      // formik.setFieldValue('quantity',10)

      ProductZoneAllData()
    }
  }, [formik.values.productId, formik.values.zoneId])

  return (
    <>
      {/* begin::formik Add/Edit form */}
      <div className='mt-4'>
        <form
          id='kt_modal_add_user_form'
          onKeyDown={onKeyDown}
          className='form'
          onSubmit={formik.handleSubmit}
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
              <div className='col-md-3'>
                <label className='form-label fw-bold required'>Outward date </label>
                <input
                  className='form-control form-control-lg form-control-solid'
                  type='date'
                  value={formik.values.outwardDate || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='outwardDate'
                  autoComplete='off'
                />
                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.outwardDate && formik.errors.outwardDate
                    ? formik.errors.outwardDate
                    : null}
                </div>
              </div>

              <div className=' col-md-3'>
                <label className='form-label fw-bold required'>Product</label>
                <select
                  className='form-select form-select-solid'
                  {...formik.getFieldProps('productId')}
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
                  {formik.touched.productId && formik.errors.productId
                    ? formik.errors.productId
                    : null}
                </div>
              </div>

              <div className=' col-md-3'>
                <label className='form-label fw-bold required'>Zone </label>
                <select
                  className='form-select form-select-solid'
                  {...formik.getFieldProps('zoneId')}
                >
                  <option value='' disabled>
                    Select Zone
                  </option>
                  {getDataAllType.map((TypeData: any, index) => {
                    //

                    return (
                      <option key={index} value={TypeData.id}>
                        {TypeData?.name}
                      </option>
                    )
                  })}
                </select>
                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.zoneId && formik.errors.zoneId ? formik.errors.zoneId : null}
                </div>
              </div>

              <div className=' col-md-3'>
                <label className='form-label fw-bold required'>Quantity</label>
                {
                  <label
                    className='form-label fw-bold'
                    style={{
                      color: 'blue',
                    }}
                  >
                    {getProductZoneQuntity != null
                      ? `(${getProductZoneQuntity} Quantity Available)`
                      : ''}
                  </label>
                }
                <input
                  placeholder='quantity'
                  className='form-control form-control-lg form-control-solid'
                  type='number'
                  value={formik.values.quantity || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='quantity'
                  autoComplete='off'
                />

                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.quantity && formik.errors.quantity
                    ? formik.errors.quantity
                    : null}
                </div>
              </div>
            </div>

            <div className='row w-100 mx-0 mb-4 gy-4' style={{position: 'relative'}}>
              <div className='col-lg-6 col-12'>
                <label className='form-label fw-bold required'>User Name</label>{' '}
                <input
                  name='username'
                  placeholder='userName'
                  className='form-control form-control-lg form-control-solid'
                  value={formik.values.username || ''}
                  autoComplete='off'
                  onChange={(e) => {
                    setSuggestionUserText(e.target.value)
                    if (e.target.value) {
                      suggestionRef.current.style.display = 'block'
                    } else {
                      suggestionRef.current.style.display = 'none'
                      console.log('Elseeeeeee__________________________', suggestionRef)
                    }
                    formik.handleChange(e)
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
                              formik.setFieldValue('userId', user.id)
                              formik.setFieldValue('username', user.firstname)
                            }}
                          >
                            {user.firstname}
                          </li>
                        )
                      })}
                  </ul>
                </div>
                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.userId && formik.errors.userId ? formik.errors.userId : null}
                </div>
              </div>

              <div className='col-md-6 col-12'>
                <label className='form-label fw-bold required'>Reason</label>
                <input
                  placeholder='reason'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  value={formik.values.reason || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='reason'
                  autoComplete='off'
                />
              </div>
              <div className='erro2' style={{color: 'red'}}>
                {formik.touched.reason && formik.errors.reason ? formik.errors.reason : null}
              </div>

              <div className='col-lg-12'>
                <label className='form-label fw-bold required'>Technician</label>
                <select
                  className='form-select form-select-solid'
                  {...formik.getFieldProps('technicianId')}
                >
                  <option value='' disabled>
                    All
                  </option>
                  {getDataAllTypeTechnician.map((TypeData, index) => {
                    return (
                      <option key={index} value={TypeData?.id}>
                        {TypeData?.fullName}
                      </option>
                    )
                  })}
                </select>
                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.technicianId && formik.errors.technicianId
                    ? formik.errors.technicianId
                    : null}
                </div>
              </div>

              <div className='col-12 '>
                <label className='form-label fw-bold'>Serial no</label>
                <textarea
                  className='form-control form-control form-control-solid'
                  value={formik.values.serialno || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='serialno'
                  placeholder='Serial no'
                ></textarea>
                <div className='erro2' style={{color: 'red'}}></div>
              </div>

              <div className='col-12 col-lg-12'>
                <div className='col'>
                  <label className='form-label fw-bold'>Remark</label>
                  <input
                    placeholder='Remark'
                    className='form-control form-control-lg form-control-solid'
                    value={formik.values.remark || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type='text'
                    name='remark'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    {/* <ErrorMessage name='remark' /> */}
                    {formik.touched.remark && formik.errors.remark ? formik.errors.remark : null}
                  </div>
                </div>
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
        </form>
      </div>
      {/* end::formik Add/Edit form */}
    </>
  )
}

export default UserFormModal
