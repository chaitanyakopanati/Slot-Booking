import {useFormik} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import moment from 'moment'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {ListPageData} from '../OfficeOldStockOutwardsContext'
import OfficeStockOutwardsViewService from '../helperOfficeOldStockOutwards/ApiDataRequest'
import {useAuth} from '../../../../../../app/modules/auth'

type Props = {
  category: any
}

const OfficeOldStockOutwardsFormModal: FC<Props> = ({category}) => {
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
  const {auth} = useAuth()

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
        createdbyId: auth?.userId,
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        outwardDate: moment(category.data?.outwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        zoneId: category.data?.zoneId || '',
        userId: category.data?.userId || '',
        username: category.data?.username || '',
        reason: category.data?.reason || '',
        technicianId: category.data?.technicianId || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
        modifyById: auth?.userId,
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

  var QuntityData: any = getProductZoneQuntity

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: Yup.object({
      outwardDate: Yup.string().required('This field is required'),
      productId: Yup.number().required('This field is required'),
      quantity: Yup.number().max(QuntityData).required('This field is required'),
      zoneId: Yup.number().required('This fielld is required'),
      technicianId: Yup.string().required('This field is required'),
      reason: Yup.string().required('This field is required'),
      // username: Yup.string().required('This field is required'),

      username: Yup.string().required('This field is required'),
      userId: Yup.number().required('Entered User Name Does Not Exist'),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      LoderActions(true)
      values.zoneId = +values.zoneId
      try {
        if (values.id) {
          // Edit Api Response
          let response = await OfficeStockOutwardsViewService.editOfficeOldStockOutwards(values)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            // toast.success(`Data Updated Successfully`)
            toast.success(response.message)
          }
          navigation('/stocks/office-old-stock-outwards')
          toast.dismiss('1s')
        } else {
          let response = await OfficeStockOutwardsViewService.postOfficeOldStockOutwards(values)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            // toast.success(` Data Added Successfully`)
            toast.success(response.message)
          }
          toast.dismiss('1s')
          navigation('/stocks/office-old-stock-outwards')
        }
      } catch (error: any) {
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
        if (payload.success == true) {
          LoderActions(false)
          setGetProductZoneQuntity(payload?.data)
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
            className='d-flex flex-column scroll-y me-n7 pe-7 px-3'
            id='kt_modal_add_user_scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_modal_add_user_header'
            data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
            data-kt-scroll-offset='300px'
          >
            {/* begin: input name Filed */}
            <div className='row w-100 mb-4 gy-4'>
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
                  <option value=''>Select Product Type</option>
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
                  <option value=''>Select Zone Type</option>
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
                  onChange={(e) => {
                    if (+e.target.value >= 0) {
                      formik.handleChange(e)
                    }
                  }}
                  // onChange={formik.handleChange}
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

            <div className=' w-100 mx-0 mb-4 gy-4' style={{position: 'relative'}}>
              <div className='col-lg-4 col-12'>
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
                      document.removeEventListener('click', () => {})
                    })
                  }}
                />
                <div className='dropdown-menu suggestion-list' ref={suggestionRef}>
                  <ul>
                    {getUserNameData?.length > 0 &&
                      getUserNameData.map((user, index) => {
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
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : null}
                </div>
                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.username &&
                  !formik.errors.username &&
                  formik.touched.userId &&
                  formik.errors.userId
                    ? formik.errors.userId
                    : null}
                </div>
              </div>

              <div className='col-lg-4 col-12'>
                <label className='form-label fw-bold required'>Technician</label>
                <select
                  className='form-select form-select-solid'
                  {...formik.getFieldProps('technicianId')}
                >
                  <option value=''>All</option>
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

              <div className='col-lg-4 col-12 '>
                <label className='form-label fw-bold'>Serial no</label>
                <input
                  className='form-control form-control form-control-solid'
                  value={formik.values.serialno || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='serialno'
                  placeholder='Serial no'
                  autoComplete='off'
                />
                <div className='erro2' style={{color: 'red'}}></div>
              </div>

              <div className='col-lg-6 col-12'>
                <label className='form-label fw-bold required'>Reason</label>
                <textarea
                  placeholder='reason'
                  className='form-control form-control-lg form-control-solid'
                  value={formik.values.reason || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='reason'
                  autoComplete='off'
                ></textarea>
                <div className='erro2' style={{color: 'red'}}>
                  {formik.touched.reason && formik.errors.reason ? formik.errors.reason : null}
                </div>
              </div>

              <div className='col-lg-6 col-12'>
                <div className='col'>
                  <label className='form-label fw-bold'>Remark</label>
                  <textarea
                    placeholder='Remark'
                    className='form-control form-control-lg form-control-solid'
                    value={formik.values.remark || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name='remark'
                    autoComplete='off'
                  ></textarea>
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
              <button
                type='reset'
                onClick={() => navigation('/stocks/office-old-stock-outwards')}
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
        </form>
      </div>
      {/* end::formik Add/Edit form */}
    </>
  )
}

export default OfficeOldStockOutwardsFormModal
