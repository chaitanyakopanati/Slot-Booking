import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FC, useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Inquiriesservice from '../helperInquiries/ApiDataRequest'
import { CustomTooltip } from '../../../../../../app/routing/customtooltip'
import { ListPageData } from '../InquiriesContext'
import { useLoader } from '../../../../../../app/modules/loader/LoaderContext'
import { useAuth } from '../../../../../../app/modules/auth'


type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  address: Yup.string().required('This field is required'),
  contactno: Yup.string()
    .min(10, 'Invalid Phone Number')
    .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
    .required('This field is required'),
  // salesexecutiveId: Yup.string().required('This fielld is required'),
  statusId: Yup.number().required('This fielld is required'),
  description: Yup.string().required('This field is required'),
  remark: Yup.string().required('This field is required'),
  area: Yup.string().required('This field is required'),
  username: Yup.string().when('statusId', {
    is: (statusId: any) => statusId == 4 || statusId == 5,
    then: Yup.string().required('This field is required'),
  }),

//   userId: Yup.number().when('statusId', {
//     is: (statusId: any) => statusId == 4 || statusId == 5,
//     then: Yup.number().required('Entered User Name Does Not Exist'),
//   }),
// })


userId: Yup.number().when('statusId' , {
  is: (statusId: any,username:any) => (statusId == 5 && username =='') || statusId == 4,
  then: Yup.number().required('Entered User Name Does Not Exist'),
}),

})

let validationSchemaEditForm = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  address: Yup.string().required('This field is required'),
  contactno: Yup.string()
    .min(10, 'Invalid Phone Number')
    .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
    .required('This field is required'),
  statusId: Yup.number().required('This fied is required'),
  // salesexecutiveId: Yup.string().required('This fied is required'),
  description: Yup.string().required('This field is required'),
  remark: Yup.string().required('This field is required'),
  area: Yup.string().required('This field is required'),
})

const InquiriesFormModal: FC<Props> = ({ category }) => {
  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    statusData,
    getUserByRole,
    DataGetAllTypeStatus,
    setSuggestionUserText,
    getUserNameData,
    getSalesExcutiveData,
    setGetSalesExcutiveData,
    DataGetAllsalesExcutive,
  } = ListPageData()
  let { LoderActions } = useLoader()
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
    area: '',
    OfficeNoHomeNo: '',
    ResidencyName: '',
  })

  useEffect(() => {
    DataGetAllsalesExcutive()
  }, [])

  const [status, setStatus] = useState<any>('')

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id,
        name: category.data?.name || '',
        address: category.data?.address || '',
        area: category.data?.area || '',
        contactno: category.data?.contactno || '',
        statusId: category.data?.statusId || '',
        status: category.data?.status || '',
        username: category.data?.username || '',
        salesexecutiveId: category.data?.salesexecutiveId || '',
        description: category.data?.description || '',
        remark: category.data?.remark || '',
        isnotify: category.data?.isnotify || false,
        createdbyId: auth?.userId,
        userId: category.data?.userId || '',
        OfficeNoHomeNo: category.data?.OfficeNoHomeNo || '',
        ResidencyName: category.data?.ResidencyName || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id,
        name: category.data?.name || '',
        address: category.data?.address || '',
        area: category.data?.area || '',
        contactno: category.data?.contactno || '',
        statusId: category.data?.statusId || '',
        userId: category.data?.userId || '',
        status: category.data?.status || '',
        username: category.data?.username || '',
        salesexecutiveId: category.data?.salesexecutiveId || '',
        description: category.data?.description || '',
        remark: category.data?.remark || '',
        isnotify: category.data?.isnotify || false,
        modifybyId: auth?.userId,
        OfficeNoHomeNo: category.data?.OfficeNoHomeNo || '',
        ResidencyName: category.data?.ResidencyName || '',
      })
    }
  }, [itemIdForUpdate])

  const suggestionRef: any = useRef()

  const { auth } = useAuth()

  useEffect(() => {
    DataGetAllTypeStatus()
  }, [])

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

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchemaNewForm}
        onSubmit={async (values: any, { resetForm }) => {
          values.salesexecutiveId = +values.salesexecutiveId
          values.statusId = +values.statusId
          values.isnotify = values.statusId == 2 ? true : false
          if (values.statusId == 5 && !values.userId ) {
            navigation('/customers/customersform/new')
            localStorage.setItem('userName',values.username)
          }else{
            LoderActions(true)

          try {
            if (values.id) {
              // Edit Api Response
              let response = await Inquiriesservice.editInquiries(values)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(response.message)
                if (values.statusId == 5) {
                  navigation(`/customers/customersformimgupload/${values.userId}`)
                } else {
                  navigation('/inquiries')
                }
              }
              // navigation('/inquiries')
              toast.dismiss('1s')
              resetForm({})
              cancel()
            } else {
              let response = await Inquiriesservice.postInquiries(values)
              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(response.message)
              }
              toast.dismiss('1s')
              navigation('/inquiries')
              resetForm({})
              cancel()
            }
          } catch (error: any) {
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
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
                          onChange={(e) => {
                            if (e.target.value.length <= 20) {
                              props.handleChange(e)
                            }
                          }}
                          onBlur={props.handleBlur}
                          type='text'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='name' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <label className='form-label fw-bold required'>Office no / Home no</label>
                        <input
                          placeholder='Office no'
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                          name='OfficeNoHomeNo'
                          value={props.values.OfficeNoHomeNo}
                          onChange={(e) => {
                            props.handleChange(e)
                          }}
                          onBlur={props.handleBlur}
                        />
                      </div>{' '}
                      <div className='col-lg-4'>
                        <label className='form-label fw-bold required'>Residency</label>
                        <input
                          placeholder='Residency'
                          className='form-control form-control-lg form-control-solid'
                          type='text'
                          autoComplete='off'
                          name='ResidencyName'
                          value={props.values.ResidencyName}
                          onChange={(e) => {
                            props.handleChange(e)
                          }}
                          onBlur={props.handleBlur}
                        />
                      </div>{' '}
                      <div className='col-lg-4'>
                        <label className='form-label fw-bold required'>Area</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          name='area'
                          value={props.values.area}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Area'
                          autoComplete='off'
                        ></input>
                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='area' />
                        </div>
                      </div>
                      <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold required'>Address</label>
                        <textarea
                          className='form-control form-control form-control-solid'
                          name='address'
                          value={props.values.address}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Address here'
                        ></textarea>
                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='address' />
                        </div>
                      </div>
                      {/* <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold required'>Area</label>
                        <input
                          className='form-control form-control-lg form-control-solid'
                          name='area'
                          value={props.values.area}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Area'
                          autoComplete='off'
                        ></input>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='area' />
                        </div>
                      </div> */}
                    </div>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-4'>
                        <label className='form-label fw-bold required required'>Contact no.</label>
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
                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='contactno' />
                        </div>
                      </div>

                      <div className='col-lg-4'>
                        <label className='form-label fw-bold required'>Status</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('statusId')}
                        // onChange={() => setStatus(props.values.statusId)}
                        >
                          <option> Select Status</option>
                          {/* <option value=''>Select Status Type</option> */}
                          {statusData?.map((row, index) => {
                            return (
                              <option key={index} value={row?.id}>
                                {row.status}
                              </option>
                            )
                          })}
                        </select>

                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='statusId' />
                        </div>
                      </div>

                      {props.values.statusId == '4' || props.values.statusId == '5' ? (
                        <div className='col-lg-4'>
                          <div className='row w-100 mx-0 mb-4 gy-4'>
                            <div className='col-12' style={{ position: 'relative' }}>
                              <div className='col-lg-12'>
                                <label className='form-label fw-bold required'>User Name</label>{' '}
                                <input
                                  name='username'
                                  placeholder='User Name'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.username || ''}
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
                                      if (
                                        container !== event.target &&
                                        !container.contains(event.target)
                                      ) {
                                      } else {
                                      }
                                      suggestionRef.current.style.display = 'none'
                                      document.removeEventListener('click', () => { })
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
                                              props.setFieldValue('userId', user.id)
                                              props.setFieldValue('username', user.username)
                                            }}
                                          >
                                            {user.username}
                                          </li>
                                        )
                                      })}
                                  </ul>
                                </div>
                                <div className='erro2' style={{ color: 'red' }}>
                                  {props.touched.username && props.errors.username
                                    ? props.errors.username
                                    : null}
                                </div>
                                <div className='erro2' style={{ color: 'red' }}>
                                  {props.touched.username &&
                                    !props.errors.username &&
                                    props.touched.userId &&
                                    props.errors.userId
                                    ? props.errors.userId
                                    : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}

                      <div className='col-lg-4'>
                        <label className='form-label fw-bold'>Sales executive</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('salesexecutiveId')}
                        >
                          <option value=''>Select Sales executive</option>
                          {getSalesExcutiveData?.map((row, index) => {
                            return (
                              <option key={index} value={row?.id}>
                                {row.fullName}
                              </option>
                            )
                          })}
                        </select>
                        {/* <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='salesexecutiveId' />
                        </div> */}
                      </div>

                      <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold required'>Description Plan</label>
                        <textarea
                          className='form-control form-control form-control-solid'
                          name='description'
                          value={props.values.description}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Description Plan here'
                        ></textarea>
                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='description' />
                        </div>
                      </div>

                      <div className='col-12 col-lg-12'>
                        <label className='form-label fw-bold required'>Remark</label>
                        <textarea
                          className='form-control form-control form-control-solid'
                          name='remark'
                          value={props.values.remark}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          data-kt-autosize='true'
                          placeholder='Remark here'
                        ></textarea>
                        <div className='erro2' style={{ color: 'red' }}>
                          <ErrorMessage name='remark' />
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col'>
                        <label className='form-label fw-bold required'>Notification</label>
                        <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                          <input
                            className='form-check-input h-20px w-30px'
                            type='checkbox'
                            value={props.values.isnotify}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            name='isnotify'
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
                  <button
                    type='reset'
                    onClick={() => navigation('/inquiries')}
                    className='btn btn-light'
                  >
                    Close
                  </button>
                </CustomTooltip>
                {/* end::close button */}
                {/* begin::create/update Button */}
                {(props.values.statusId == '5' && itemIdForUpdate != 'add') ?
                  <CustomTooltip title='Submit form'>
                    <button type='submit' className='btn btn-primary'>
                      Next
                    </button>
                  </CustomTooltip>

                  :
                  <CustomTooltip title='Submit form'>
                    <button type='submit' className='btn btn-primary'>
                      {itemIdForUpdate !== 'add' ? 'Update' : 'Create'}
                    </button>
                  </CustomTooltip>
                }
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}

export default InquiriesFormModal
