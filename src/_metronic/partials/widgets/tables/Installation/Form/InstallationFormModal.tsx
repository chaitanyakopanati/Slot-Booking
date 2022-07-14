import {Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
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
  installerid: Yup.string().required('This field is required'),
  cablelength: Yup.string().required('This fied is required'),
  cabletypeid: Yup.string().required('This fied is required'),
  zonepointid: Yup.number().required('This field is required'),
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
  const suggestionRef :any = useRef()
  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    statusData,
    getUserByRole,
    getInstallations,
    getMainPoint,
    getcableTypeData,
    setSuggestionUserText,
    getUserNameData
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()

  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    cablelength: '',
    remark: '',
    status: '',
    iptype: '',
    isnotifyinstaller: false,
    accesspointip: '',
    stationip: '',
    stationname: '',
    stationMac: '',
    installerid: '',
    zonepointid: '',
    cabletypeid: '',
    userid: '',
    connectiontype: '',
  })

  useEffect(() => {

    setInitialValues({
      ...category,
      id: category.data?.id,
      status: category.data?.status || '',
      installerid: category.data?.installerid || '',
      zonepointid: category.data?.zonepointid || '',
      cabletypeid: category.data?.cabletypeid || '',
      cablelength: category.data?.cablelength || '',
      iptype: category.data?.iptype || '',
      accesspointip: category.data?.accesspointip || '',
      remark: category.data?.remark || '',
      stationip: category.data?.stationip || '',
      stationname: category.data?.stationname || '',
      stationMac: category.data?.stationMac || '',
      connectiontype: category.data?.connectiontype || '',
      isnotifyinstaller: category.data?.isnotifyinstaller || false,
    })
  }, [itemIdForUpdate])

  useEffect(() => {
    if(getUserNameData.length===0){
      suggestionRef.current.style.display="none"
    }
    
    
  }, [getUserNameData])

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
        onSubmit={async (values: any, {resetForm}) => {
          console.log('values', values)
          LoderActions(true)

          values.iptype =  values.iptype.toString();
          values.connectiontype=  values.connectiontype.toString();
          values.status=values.status.toString();
          try {
            if (values.id) {
              console.log(values.id, 'idddddddddddddd')
              console.log('editdivyesh', values)
              // Edit Api Response
              let response = await InstallationsService.editInstallations(values)
              console.log('Edit User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(`Data Updated Successfully`)
              }
              navigation('/installations')
             

             
            } else {
              console.log('divyesh', values)

              let response = await InstallationsService.postInstallations(values)
              console.log('Add User*****************', response)

              if (response.success === false) {
                toast.error(response.message)
              } else {
                toast.success(` Data Added Successfully`)
              }
              toast.dismiss('1s')
              navigation('/installations')
            
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
                      <div className='col-lg-3' style={{position:'relative'}}>
                        <label className='form-label fw-bold required'>User Name</label>{' '}
                        <input
                          name="userid"
                          placeholder='userName'
                          className='form-control form-control-lg form-control-solid auto-complete-input'
                          value={props.values.userid}
                          onChange={(e)=>{
                            setSuggestionUserText(e.target.value)
                            if(e.target.value){
                              suggestionRef.current.style.display="block"
                            }else{
                              suggestionRef.current.style.display="none"
                            }
                            props.handleChange(e)
                          }}
                          onBlur={(e)=>{
                            // suggestionRef.current.
                            var container = suggestionRef.current;
                              document.addEventListener('click', function( event ) {
                                if (container !== event.target && !container.contains(event.target)) {    
                                }else{
                                }
                                suggestionRef.current.style.display="none"
                                document.removeEventListener('click',()=>{})
                              });
                            
                          }}
                        />
                        <div className='dropdown-menu suggestion-list' ref={suggestionRef}>
                          <ul>
                            {getUserNameData?.length>0 && getUserNameData.map((user,index)=>{
                              console.log("user",user)
                              return <li key={user.id} onClick={()=>{
                                props.setFieldValue('userid',user.firstname)
                              }}>{user.firstname}</li>
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Installer</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('installerid')}
                        >
                          <option value='' disabled>
                            Select Installer Type
                          </option>
                          {getInstallations.map((TypeData: any, index: number) => {
                            return (
                              <option key={index} value={TypeData.id}>
                                {TypeData?.username}
                              </option>
                            )
                          })}
                        </select>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='installerid' />
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Main point</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('zonepointid')}
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
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='zonepointid' />
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Connection Type</label>
                        <select
                          className='form-select form-select-solid'
                          {...props.getFieldProps('connectiontype')}
                        >
                          <option value='' disabled>
                            Select Connection Type
                          </option>
                          <option value='1'>Cable</option>
                          <option value='2'>Wireless</option>
                        </select>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='connectiontype' />
                        </div>
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
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='cabletypeid' />
                        </div>
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
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='cablelength' />
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>IP type</label>
                        <select
                          className='form-select form-select-solid'
                          value={props.values.iptype}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          name='iptype'
                        >
                          <option value='' disabled>
                            Select IP Type
                          </option>
                          <option value='1'>Dynamic</option>
                          <option value='2'>Static</option>
                        </select>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='iptype' />
                        </div>
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
                        <label className='form-label fw-bold required'>status</label>
                        <select
                          className='form-select form-select-solid'
                          value={props.values.status}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          name='status'
                        >
                          <option value='' disabled>
                            Select status Type
                          </option>
                          <option value='1'>Pending</option>
                          <option value='2'>Done</option>
                        </select>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='status' />
                        </div>
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
                            value={props.values.isnotifyinstaller}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            name='isnotifyinstaller'
                            checked={props.values.installerid !== '' ? true : false}
                          />
                          <label className='form-check-label'>Installer</label>
                        </div>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='isnotifyinstaller' />
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
