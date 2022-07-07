import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {ListPageData} from '../InstallationContext'
import InstallationsService from '../helperInstallation/ApiDatarequest'

type Props = {
  category: any
}

let validationSchemaNewForm = Yup.object({
  userName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  userid: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  installerName: Yup.string().required('This field is required'),
  InstallationId: Yup.string().required('This field is required'),
  cablelength: Yup.string().required('This fied is required'),
  cabletypeName: Yup.string().required('This fied is required'),
  cabletypeid: Yup.string().required('This fied is required'),
  mainpointName: Yup.string().required('This field is required'),
  mainpointid: Yup.string().required('This field is required'),
  remark: Yup.string().required('This field is required'),
  status: Yup.string().required('This field is required'),
  iptype: Yup.string().required('This field is required'),
  accesspointip: Yup.string().required('This field is required'),
  stationip: Yup.string().required('This field is required'),
  stationname: Yup.string().required('This field is required'),
  stationMac: Yup.string().required('This field is required'),
  connectiontype: Yup.string().required('This field is required'),
})

let validationSchemaEditForm = Yup.object({
  userName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  userid: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
    .required('This field is required'),
  installerName: Yup.string().required('This field is required'),
  InstallationId: Yup.string().required('This field is required'),
  cablelength: Yup.string().required('This fied is required'),
  cabletypeName: Yup.string().required('This fied is required'),
  cabletypeid: Yup.string().required('This fied is required'),
  mainpointName: Yup.string().required('This field is required'),
  mainpointid: Yup.string().required('This field is required'),
  remark: Yup.string().required('This field is required'),
  status: Yup.string().required('This field is required'),
  iptype: Yup.string().required('This field is required'),
  accesspointip: Yup.string().required('This field is required'),
  stationip: Yup.string().required('This field is required'),
  stationname: Yup.string().required('This field is required'),
  stationMac: Yup.string().required('This field is required'),
  connectiontype: Yup.string().required('This field is required'),
})

const InstallationFormModal: FC<Props> = ({category}) => {
  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    statusData,
    getUserByRole,
    getInstallations,
    getMainPoint,
    getcableTypeData,
    getUserNameData,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    userName: '',
    installerName: '',
    mainpointName: '',
    cabletypeName: '',
    cablelength: '',
    remark: '',
    status: '',
    iptype: '',
    isnotifyinstaller: false,
    accesspointip: '',
    stationip: '',
    stationname: '',
    stationMac: '',
    InstallationId: '',
    mainpointid: '',
    cabletypeid: '',
    userid: '',
    connectiontype: '',
    connectiontypeId: '',
  })

  useEffect(() => {
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category.data?.id,
        userName: category.data?.userName || '',
        userid: category.data?.userid || '',
        installerName: category.data?.installerName || '',
        InstallationId: category.data?.InstallationId || '',
        mainpointName: category.data?.mainpointName || '',
        mainpointid: category.data?.mainpointid || '',
        cabletypeName: category.data?.cabletypeName || '',
        cabletypeid: category.data?.cabletypeid || '',
        cablelength: category.data?.cablelength || '',
        status: category.data?.status || '',
        iptype: category.data?.iptype || '',
        accesspointip: category.data?.accesspointip || '',
        remark: category.data?.remark || '',
        stationip: category.data?.stationip || '',
        stationname: category.data?.stationname || '',
        stationMac: category.data?.stationMac || '',
        connectiontype: category.data?.connectiontype || '',
        connectiontypeId: category.data?.connectiontypeId || '',
        isnotifyinstaller: category.data?.isnotifyinstaller || false,
      })
    } else {
      setInitialValues({
        ...category,
        id: category.data?.id,
        status: category.data?.status || '',
        installerName: category.data?.installerName || '',
        InstallationId: category.data?.InstallationId || '',
        mainpointName: category.data?.mainpointName || '',
        mainpointid: category.data?.mainpointid || '',
        cabletypeName: category.data?.cabletypeName || '',
        cabletypeid: category.data?.cabletypeid || '',
        cablelength: category.data?.cablelength || '',
        userName: category.data?.userName || '',
        userid: category.data?.userid || '',
        iptype: category.data?.iptype || '',
        accesspointip: category.data?.accesspointip || '',
        remark: category.data?.remark || '',
        stationip: category.data?.stationip || '',
        stationname: category.data?.stationname || '',
        stationMac: category.data?.stationMac || '',
        connectiontype: category.data?.connectiontype || '',
        connectiontypeId: category.data?.connectiontypeId || '',
        isnotifyinstaller: category.data?.isnotifyinstaller || false,
      })
    }
  }, [itemIdForUpdate])

  useEffect(() => {
    console.log('StatusData', statusData)
  }, [statusData, getUserByRole])

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

          try {
            if (values.id) {
              // Edit Api Response
              let response = await InstallationsService.editInstallations(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/installations')
              // toast.success(` Data Updated Successfully`)
              toast.dismiss('1s')

              resetForm({})
              cancel()
            } else {
              let response = await InstallationsService.postInstallations(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/installations')
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
                  {' '}
                  <div className='container-fluid p-0'>
                    {' '}
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      {' '}
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold required'>User Name</label>{' '}
                        <input
                          placeholder='userName'
                          className='form-control form-control-lg form-control-solid'
                          {...props.getFieldProps('userid')}
                          // value={props.values.userName}
                          onChange={(e) => {
                            e.preventDefault()
                            console.log(e.target.value)
                            props.handleChange(e)
                          }}
                          onBlur={props.handleBlur}
                          // type='text'
                          // name='userName'
                          // autoComplete='off'
                        />
                        {getUserNameData.map((TypeData: any, index) => {
                          console.log(TypeData, 'TypeData=====+++')

                          return (
                            <option key={index} value={TypeData.id}>
                              {TypeData?.userName}
                            </option>
                          )
                        })}
                         <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='userName' />
                        </div>
                     </div> 
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Installer</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('InstallationId')}
                        >
                          <option value='' disabled>
                            Select Installer Type
                          </option>
                          {getInstallations.map((TypeData: any, index) => {
                            return (
                              <option key={index} value={TypeData.id}>
                                {TypeData?.username}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Main point</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('mainpointid')}
                        >
                          <option value='' disabled>
                            Select MainPoint Type
                          </option>
                          {getMainPoint.map((TypeData: any, index) => {
                            return (
                              <option key={index} value={TypeData.id}>
                                {TypeData?.name}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Connection Type</label>
                        <select className='form-select form-select-solid'
                          //  value={props.values.connectiontypeId}
                          //  onChange={props.handleChange}
                          //  onBlur={props.handleBlur}
                          //  name='connectiontype'
                          {...props.getFieldProps('connectiontypeId')}
                        >
                          <option value=''>Select Connection Type</option>
                          <option value='1'>Cable</option>
                          <option value='2'>Wireless</option>
                        </select>
                      </div>
                    </div>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Cable type</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('cabletypeid')}
                        >
                          <option value=''>Select Cable Type</option>
                          {getcableTypeData.map((TypeData: any, index) => {
                            return (
                              <option key={index} value={TypeData.id}>
                                {TypeData?.name}
                              </option>
                            )
                          })}
                        </select>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Cable length</label>
                        <div className='input-group'>
                          <span className='input-group-text border-0'>m</span>
                          <input
                            type='number'
                            value={props.values.cablelength}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            name='cablelength'
                            autoComplete='off'
                            className='form-control form-control-solid'
                          />
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>IP type</label>
                        <select className='form-select form-select-solid'
                           value={props.values.iptype}
                           onChange={props.handleChange}
                           onBlur={props.handleBlur}
                           name='iptype'
                        >
                          <option value=''>Select IP Type</option>
                          <option value='1'>Dynamic</option>
                          <option value='2'>Static</option>
                        </select>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Acces point IP</label>
                        <input
                          placeholder='access point ip'
                          className='form-control form-control-lg form-control-solid'
                          value={props.values.accesspointip}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          type='text'
                          name='accesspointip'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='accesspointip' />
                        </div>
                      </div>
                    </div>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold required'>Station IP</label>
                        <input
                          placeholder='Station IP'
                          className='form-control form-control-lg form-control-solid'
                          value={props.values.stationip}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          type='text'
                          name='stationip'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='stationip' />
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold required'>Station Name</label>
                        <input
                          placeholder='Station Name'
                          className='form-control form-control-lg form-control-solid'
                          value={props.values.stationname}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          type='text'
                          name='stationname'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='stationname' />
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold required'>Station MAC</label>
                        <input
                          placeholder='Station MAC'
                          className='form-control form-control-lg form-control-solid'
                          value={props.values.stationMac}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          type='text'
                          name='stationMac'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='stationMac' />
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold required'>Status</label>
                        <select className='form-select form-select-solid'
                           value={props.values.status}
                           onChange={props.handleChange}
                           onBlur={props.handleBlur}
                           name='status'
                        >
                          <option value=''>Select Status Type</option>
                          <option value='1'>Pending</option>
                          <option value='2'>Done</option>
                        </select>
                      </div>
                    </div>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
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
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col'>
                        <label className='form-label fw-bold'>Notification</label>
                        <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                          <input
                            className='form-check-input h-20px w-30px'
                            type='checkbox'
                            value=''
                            id='flexSwitch20x30'
                          />
                          <label className='form-check-label'>Installer</label>
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

export default InstallationFormModal

// import { KTSVG } from "../../../../../helpers";

// const  InstallationFormModal = () =>{
//   return(
//     <>
//          {/* begin::create form Modal */}
//    <div className='modal fade' id='create-installation-modal'>
//    <div className='modal-dialog modal-dialog-centered modal-xl mw-md-600px'>
//      <div className='modal-content'>
//        <div className='modal-header'>
//          <h5 className='modal-title'>Create Installation</h5>
//          <div
//            className='btn btn-icon btn-sm btn-active-light-primary ms-2'
//            data-bs-dismiss='modal'
//            aria-label='Close'
//          >
//            <span className='svg-icon svg-icon-2x'>
//              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-3' />
//            </span>
//          </div>
//        </div>

//        <div className='modal-body'>
//          <div className='container-fluid p-0'>
//            <div className='row w-100 mx-0 mb-4 gy-4'>
//              <div className='col-lg-3'>
//                <label className='form-label fw-bold required'>Username</label>
//                <input
//                  className='form-control form-control-lg form-control-solid'
//                  type='text'
//                  autoComplete='off'
//                />
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>Installer</label>
//                <select className='form-select form-select-solid'>
//                  <option value='1'></option>
//                  <option value='2'>Amit</option>
//                  <option value='3'>Ajay</option>
//                </select>
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>Main point</label>
//                <select className='form-select form-select-solid'>
//                  <option value='1'></option>
//                  <option value='2'>Not described</option>
//                  <option value='3'>Angel Square</option>
//                  <option value='4'>Anjani Sayan</option>
//                </select>
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>Connection Type</label>
//                <select className='form-select form-select-solid'>
//                  <option value='1'></option>
//                  <option value='2'>Not described</option>
//                  <option value='3'>Cable</option>
//                  <option value='4'>Wireless</option>
//                </select>
//              </div>
//            </div>

//            <div className='row w-100 mx-0 mb-4 gy-4'>
//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>Cable type</label>
//                <select className='form-select form-select-solid'>
//                  <option value='1'></option>
//                  <option value='2'>2 pair - Single coating</option>
//                  <option value='3'>2 pair - Double coating</option>
//                </select>
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>Cable length</label>
//                <div className='input-group'>
//                  <span className='input-group-text border-0'>m</span>
//                  <input type='number' className='form-control form-control-solid' />
//                </div>
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>IP type</label>
//                <select className='form-select form-select-solid'>
//                  <option value='1'></option>
//                  <option value='2'>Dynamic</option>
//                  <option value='3'>Static</option>
//                </select>
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold'>Acces point IP</label>
//                <input
//                  className='form-control form-control-lg form-control-solid'
//                  type='text'
//                  autoComplete='off'
//                />
//              </div>
//            </div>

//            <div className='row w-100 mx-0 mb-4 gy-4'>
//              <div className='col-lg-3'>
//                <label className='form-label fw-bold required'>Station IP</label>
//                <input
//                  className='form-control form-control-lg form-control-solid'
//                  type='text'
//                  autoComplete='off'
//                />
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold required'>Station Name</label>
//                <input
//                  className='form-control form-control-lg form-control-solid'
//                  type='text'
//                  autoComplete='off'
//                />
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold required'>Station MAC</label>
//                <input
//                  className='form-control form-control-lg form-control-solid'
//                  type='text'
//                  autoComplete='off'
//                />
//              </div>

//              <div className='col-lg-3'>
//                <label className='form-label fw-bold required'>Station Name</label>
//                <select className='form-select form-select-solid'>
//                  <option value='1'></option>
//                  <option value='2'>Pending</option>
//                  <option value='3'>Done</option>
//                </select>
//              </div>
//            </div>

//            <div className='row w-100 mx-0 mb-4 gy-4'>
//              <div className='col'>
//                <label className='form-label fw-bold required'>Remark</label>
//                <input
//                  className='form-control form-control-lg form-control-solid'
//                  type='text'
//                  autoComplete='off'
//                  placeholder='Remark'
//                />
//              </div>
//            </div>

//            <div className='row w-100 mx-0 mb-4 gy-4'>
//              <div className='col'>
//                <label className='form-label fw-bold'>Notification</label>
//                <div className='form-check form-switch form-check-custom form-check-solid me-10'>
//                  <input
//                    className='form-check-input h-20px w-30px'
//                    type='checkbox'
//                    value=''
//                    id='flexSwitch20x30'
//                  />
//                  <label className='form-check-label'>Installer</label>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>

//        <div className='modal-footer'>
//          <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
//            Close
//          </button>
//          <button type='button' className='btn btn-primary'>
//            Create
//          </button>
//        </div>
//      </div>
//    </div>
//  </div>
//  {/* end::create form Modal */}
//     </>
//   )
// }
// export default InstallationFormModal
