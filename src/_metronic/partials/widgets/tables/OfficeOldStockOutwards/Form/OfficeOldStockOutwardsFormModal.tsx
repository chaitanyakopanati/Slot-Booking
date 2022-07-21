import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import moment from 'moment'
import { useLoader } from '../../../../../../app/modules/loader/LoaderContext'
import { ListPageData } from '../OfficeOldStockOutwardsContext'
import OfficeStockOutwardsViewService from '../helperOfficeOldStockOutwards/ApiDataRequest'

type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  outwardDate: Yup.string().required('This field is required'),
  productId: Yup.number().required('This field is required'),
  quantity: Yup.number().required('This field is required'),
  zoneId: Yup.number().required('This fielld is required'),
  technicianId: Yup.string().required('This field is required'),
  reason: Yup.string().required('This field is required'),
  // userid: Yup.number().required('This field is required'),
})

const UserFormModal: FC<Props> = ({category}) => {
  // const navigation = useNavigate()
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
    userid: '',
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

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        outwardDate: moment(category.outwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        zoneId: category.data?.zoneId || '',
        userid: category.data?.userid || '',
        reason: category.data?.reason || '',
        technicianId: category.data?.technicianId || '',
        serialno: category.data?.serialno || '',
        remark: category.data?.remark || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id || '',
        outwardDate: moment(category.outwardDate).format('YYYY-MM-DD'),
        productId: category.data?.productId || 0,
        quantity: category.data?.quantity || '',
        zoneId: category.data?.zoneId || '',
        userid: category.data?.userid || '',
        username: category.data?.username || '',
        reason: category.data?.reason || '',
        technicianId: category.data?.technicianId || '',
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
              let response = await OfficeStockOutwardsViewService.editOfficeOldStockOutwards(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/stocks/office-old-stock-outwards')
              // toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')
            } else {
              let response = await OfficeStockOutwardsViewService.postOfficeOldStockOutwards(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/stocks/office-old-stock-outwards')
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
                  <div className='col-md-6 col-12'>
                    <label className='form-label fw-bold required'>Outward date </label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='date'
                      value={props.values.outwardDate}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='outwardDate'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='outwardDate' />
                    </div>
                  </div>

                  <div className=' col-md-6 col-12'>
                    <label className='form-label fw-bold required'>Product</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('productId')}
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
                    <label className='form-label fw-bold required'>Technician</label>
                    <select
                      className='form-select form-select-solid'
                      {...props.getFieldProps('technicianId')}
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
                      <ErrorMessage name='technicianId' />
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <div className='col-lg-12' style={{position: 'relative'}}>
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
                          if (container !== event.target && !container.contains(event.target)) {
                          } else {
                          }
                          suggestionRef.current.style.display = 'none'
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
                                  props.setFieldValue('userid', user.id)
                                  props.setFieldValue('username', user.firstname)
                                }}
                              >
                                {user.firstname}
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>

                  <div className='col-12'>
                    <label className='form-label fw-bold required'>Reason</label>
                    <input
                      placeholder='reason'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      value={props.values.reason}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name='reason'
                      autoComplete='off'
                    />
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='reason' />
                  </div>
                </div>

                <div className=' col-12'>
                  <label className='form-label fw-bold required'>Zone </label>
                  <select
                    className='form-select form-select-solid'
                    {...props.getFieldProps('zoneId')}
                  >
                    <option value='' disabled>
                      Select Zone Type
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
                    <ErrorMessage name='zoneId' />
                  </div>
                </div>

                <div className='col-12 '>
                  <label className='form-label fw-bold required'>Serial no</label>
                  <textarea
                    className='form-control form-control form-control-solid'
                    value={props.values.serialno}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name='serialno'
                    placeholder='Serial no'
                  ></textarea>
                  <div className='erro2' style={{color: 'red'}}>
                    <ErrorMessage name='serialno' />
                  </div>
                </div>

                <div className='col-12 col-lg-12'>
                  <div className='col'>
                    <label className='form-label fw-bold required'>Remark</label>
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
                    <div className='erro2' style={{color: 'red'}}>
                      <ErrorMessage name='remark' />
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
            </Form>
          </>
        )}
      </Formik>

      {/* end::formik Add/Edit form */}
    </>
  )
}

export default UserFormModal
