import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import Inquiriesservice from '../helperInquiries/ApiDataRequest'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {ListPageData} from '../InquiriesContext'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'

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

const InquiriesFormModal: FC<Props> = ({category}) => {
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
                      <div className='col-lg-4'>
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

export default InquiriesFormModal
