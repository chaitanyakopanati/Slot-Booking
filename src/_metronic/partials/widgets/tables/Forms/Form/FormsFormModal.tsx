import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {ListPageData} from '../FormsContext'
import Inquiriesservice from '../helperForms/ApiDataRequest'

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

const FormsFormModal: FC<Props> = ({category}) => {
  const {setItemIdForUpdate, itemIdForUpdate, getUserByRole} = ListPageData()
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
              let response = await Inquiriesservice.editForms(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/forms')
              toast.dismiss('1s')

              resetForm({})
              cancel()
            } else {
              let response = await Inquiriesservice.postForms(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/forms')
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
                      <div className='col-md-3 d-flex flex-column align-items-center justify-content-center'>
                        <div
                          className='image-input image-input-outline mx-auto'
                          data-kt-image-input='true'
                          style={{
                            backgroundImage:
                              "url('/metronic8/demo1/assets/media/svg/avatars/blank.svg')",
                          }}
                        >
                          <div
                            className='image-input-wrapper w-125px h-125px'
                            style={{
                              backgroundImage:
                                'url(/metronic8/demo1/assets/media/avatars/300-1.jpg)',
                            }}
                          ></div>
                          <label
                            className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                            data-kt-image-input-action='change'
                          >
                            <i className='bi bi-pencil-fill fs-7'></i>
                            <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                            <input type='hidden' name='avatar_remove' />
                          </label>
                          <span
                            className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                            data-kt-image-input-action='remove'
                          >
                            <i className='bi bi-x fs-2'></i>
                          </span>
                        </div>
                        <div className='form-text'>Choose an image</div>
                      </div>

                      <div className='col-md-9'>
                        <div className='row mb-6'>
                          <div className='col-md-3'>
                            <label className='form-label fw-bold '>Username</label>
                            <input
                              className='form-control form-control-lg form-control-solid'
                              type='text'
                              placeholder='UserName'
                              autoComplete='off'
                            />
                          </div>
                          <div className='col-md-3'>
                            <label className='form-label fw-bold '>Form no.</label>
                            <input
                              className='form-control form-control-lg form-control-solid'
                              type='text'
                              placeholder='Form No.'
                              autoComplete='off'
                            />
                          </div>
                          <div className='col-md-3'>
                            <label className='form-label fw-bold '>Form date</label>
                            <input
                              className='form-control form-control-lg form-control-solid'
                              type='date'
                              placeholder='Form date'
                              autoComplete='off'
                            />
                          </div>
                          <div className='col-md-3'>
                            <label className='form-label fw-bold '>Form type</label>
                            <select className='form-select form-select-solid'>
                              <option value='1'></option>
                              <option value='2'>New`</option>
                              <option value='3'>Renew</option>
                            </select>
                          </div>
                        </div>

                        <div className='row mb-6 gy-4'>
                          <div className='col-md-4'>
                            <label className='form-label fw-bold '>Sales Executive</label>
                            <select className='form-select form-select-solid'>
                              <option value='1'></option>
                              <option value='2'>Ajay Sulin</option>
                              <option value='3'>Amit soni</option>
                            </select>
                          </div>

                          <div className='col-md-4'>
                            <label className='form-label fw-bold '>Comapny</label>
                            <select className='form-select form-select-solid'>
                              <option value='1'></option>
                              <option value='2'>Earth</option>
                              <option value='3'>Softnet</option>
                            </select>
                          </div>

                          <div className='col-md-4'>
                            <label className='form-label fw-bold'>Package category</label>
                            <select className='form-select form-select-solid'>
                              <option value='1'></option>
                              <option value='2'>Broadband</option>
                              <option value='3'>Cancel</option>
                            </select>
                          </div>
                        </div>

                        <div className='row mb-6'>
                          <div className='col-md-4'>
                            <label className='form-label fw-bold'>Package type</label>
                            <select className='form-select form-select-solid'>
                              <option value='1'></option>
                              <option value='2'>Limited</option>
                              <option value='3'>Unlimited</option>
                            </select>
                          </div>

                          <div className='col-md-4'>
                            <label className='form-label fw-bold'>Package Name</label>
                            <select className='form-select form-select-solid'>
                              <option value='1'></option>
                              <option value='2'>1-2mbps</option>
                              <option value='3'>1000gb</option>
                            </select>
                          </div>

                          <div className='col-md-4'>
                            <label className='form-label fw-bold'>Package Validity</label>
                            <div className='input-group'>
                              {/* <div className='input-group-prepend'> */}
                              <span className='input-group-text border-0'>Month</span>
                              {/* </div> */}
                              <input
                                type='number'
                                className='form-control form-control-solid'
                                placeholder='Package validity'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Package Cost</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number'
                           className='form-control form-control-solid'
                           placeholder='Package Cost'
                            />
                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Installation cost</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number'
                           className='form-control form-control-solid' 
                            placeholder='Installation cost'
                           />
                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Other Cost</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number' 
                          placeholder='Other Cost'
                          className='form-control form-control-solid' 
                          />
                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Discount</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number'
                          placeholder='Discount'
                           className='form-control form-control-solid'
                            />
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>GST Amount</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number'
                          placeholder='GST Amount'
                           className='form-control form-control-solid'
                            />
                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Total Amount</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number' 
                          placeholder='Total Amount'
                          className='form-control form-control-solid' />

                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Cash Amount</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number'
                           placeholder='Cash Amount'
                          className='form-control form-control-solid' />
                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Cheque Amount</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number' 
                           placeholder='Cheque Amount'
                          className='form-control form-control-solid' />
                        </div>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Remaining Amount</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>₹</span>
                          <input type='number'
                            placeholder='Remaining Amount'
                          className='form-control form-control-solid' />
                        </div>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Bank Name</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Axis</option>
                          <option value='3'>HDFC</option>
                        </select>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Cheque no.</label>
                        <input type='number' 
                         placeholder='Cheque no'
                        className='form-control form-control-solid' />
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Cheque date</label>
                        <input type='date'
                         placeholder='Cheque date'
                        className='form-control form-control-solid' />
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Reciever</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Ajay</option>
                          <option value='3'>Amit</option>
                        </select>
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Activation date</label>
                        <input type='date' 
                         placeholder='Activation date'
                        className='form-control form-control-solid' />
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Expiry date</label>
                        <input type='date' 
                         placeholder='Expiry date'
                        className='form-control form-control-solid' />
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>IP Type</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Dynmaic</option>
                          <option value='3'>Static</option>
                        </select>
                      </div>
                    </div>

                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Note</label>
                        <input type='text' 
                         placeholder='Note'
                        className='form-control form-control-solid' />
                      </div>

                      <div className='col-md-3'>
                        <label className='form-label fw-bold'>Third party</label>
                        <input type='text' 
                         placeholder='Third party'
                        className='form-control form-control-solid' />
                      </div>

                      <div className='col-md-4'>
                        <label className='form-label fw-bold'>Remark</label>
                        <input type='text' placeholder='Remark' className='form-control form-control-solid' />
                      </div>

                      <div className='col-md-2'>
                        <label className='form-label fw-bold'>Form submit</label>
                        <select className='form-select form-select-solid'>
                          <option value='1'></option>
                          <option value='2'>Done</option>
                          <option value='3'>Pending</option>
                          <option value='4'>Cancel</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='modal-body'>
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

                      <div className='col-lg-4'>
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
                      </div>

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
                </div> */}
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

export default FormsFormModal
