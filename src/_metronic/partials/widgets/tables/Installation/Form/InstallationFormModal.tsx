import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../../../app/routing/customtooltip'
import {useLoader} from '../../../../../../app/modules/loader/LoaderContext'
import {ListPageData} from '../InstallationContext'
import InstallationsService from '../helperInstallation/ApiDatarequest'
import {useFormik} from 'formik'
import {useLocation} from 'react-router-dom'
import {useAuth} from '../../../../../../app/modules/auth'

type Props = {
  category: any
}
let validationSchemaNewForm = Yup.object({
  userName: Yup.string().required('This field is required'),
  userid: Yup.number().required('Entered User Name Does Not Exist'),
})

const InstallationFormModal: FC<Props> = ({category}) => {
  const suggestionRef: any = useRef()
  const {
    setItemIdForUpdate,
    itemIdForUpdate,
    getInstallations,
    getMainPoint,
    getcableTypeData,
    setSuggestionUserText,
    getUserNameData,
    DataGetAllTypegetWirelessTypes,
    getDataAllTypeWireless,
  } = ListPageData()
  let {LoderActions} = useLoader()
  const navigation = useNavigate()
  const location: any = useLocation()

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
    userName: '',
    wirelessTypeId: '',
  })

  useEffect(() => {
    DataGetAllTypegetWirelessTypes()
  }, [])

  useEffect(() => {
    if (itemIdForUpdate == 'add' && category.data.userName && category.data.userid) {
      setInitialValues({
        ...category,
        id: category?.data?.id,
        status: category.data?.status || '',
        installerid: category.data?.installerid || '',
        zonepointid: category.data?.zonepointid || '',
        cabletypeid: category.data?.cabletypeid || '',
        cablelength: category.data?.cablelength || '',
        iptype: category.data?.iptype || '',
        userid: category?.data?.userid || '',
        userName: category?.data?.userName || '',
        accesspointip: category.data?.accesspointip || '',
        remark: category.data?.remark || '',
        stationip: category.data?.stationip || '',
        stationname: category.data?.stationname || '',
        stationMac: category.data?.stationMac || '',
        connectiontype: category.data?.connectiontype || '',
        isnotifyinstaller: category.data?.isnotifyinstaller || false,
        createdbyId: auth?.userId,
        wirelessTypeId: category?.data?.wirelessTypeId || '',
      })
    }
    if (itemIdForUpdate == 'add') {
      setInitialValues({
        ...category,
        id: category?.data?.id,
        status: category.data?.status || '',
        installerid: category.data?.installerid || '',
        zonepointid: category.data?.zonepointid || '',
        cabletypeid: category.data?.cabletypeid || '',
        cablelength: category.data?.cablelength || '',
        iptype: category.data?.iptype || '',
        userid: category?.data?.userid || '',
        userName: category?.data?.userName || '',
        accesspointip: category.data?.accesspointip || '',
        remark: category.data?.remark || '',
        stationip: category.data?.stationip || '',
        stationname: category.data?.stationname || '',
        stationMac: category.data?.stationMac || '',
        connectiontype: category.data?.connectiontype || '',
        isnotifyinstaller: category.data?.isnotifyinstaller || false,
        createdbyId: auth?.userId,
        wirelessTypeId: category?.data?.wirelessTypeId || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category?.data?.id,
        status: '' + category?.data?.status || '',
        installerid: category?.data?.installerid || '',
        zonepointid: category?.data?.zonepointid || '',
        cabletypeid: category?.data?.cabletypeid || '',
        cablelength: category?.data?.cablelength || '',
        iptype: category?.data?.iptype || '',
        userid: +category?.data?.userid || '',
        userName: category?.data?.userName || '',
        accesspointip: category?.data?.accesspointip || '',
        remark: category?.data?.remark || '',
        stationip: category?.data?.stationip || '',
        stationname: category?.data?.stationname || '',
        stationMac: category?.data?.stationMac || '',
        connectiontype: category?.data?.connectiontype || '',
        isnotifyinstaller: category?.data?.isnotifyinstaller || false,
        modifyby: auth?.userId,
        wirelessTypeId: category?.data?.wirelessTypeId || '',
      })
    }
  }, [itemIdForUpdate, category])

  useEffect(() => {
    if (getUserNameData.length === 0) {
      suggestionRef.current.style.display = 'none'
    }
  }, [getUserNameData])

  const {auth} = useAuth()

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchemaNewForm,
    onSubmit: async (values: any, {resetForm}) => {
      LoderActions(true)
      values.zoneId = +values.zoneId
      values.cabletypeid = +values.cabletypeid
      values.installerid = +values.installerid
      values.zonepointid = +values.zonepointid
      values.connectiontype = '' + values.connectiontype

      values.isnotifyinstaller = values.installerid != 0 ? true : false

      try {
        if (values.id) {
          // Edit Api Response
          let response = await InstallationsService.editInstallations(values)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
          }
          navigation('/installations')
          toast.dismiss('1s')
        } else {
          let response = await InstallationsService.postInstallations(values)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
          }
          toast.dismiss('1s')
          navigation('/installations')
        }
      } catch (error: any) {
        toast.error(error.data.message)
      } finally {
        LoderActions(false)
      }
    },
  })

  var regex = new RegExp('^[0-9.]+$')
 

  return (
    <>
      <Form
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
          <div className='modal-body'>
            {' '}
            <div className='container-fluid p-0'>
            

              {' '}
              <div className='row w-100 mx-0 mb-4 gy-4' style={{position: 'relative'}}>
                <div className='col-lg-3 col-12'>
                  <label className='form-label fw-bold required'>User Name</label>{' '}
                  <input
                    name='userName'
                    placeholder='User Name'
                    className='form-control form-control-lg form-control-solid'
                    value={formik.values.userName || ''}
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
                                formik.setFieldValue('userid', user.id)
                                formik.setFieldValue('userName', user.username)
                              }}
                            >
                              {user.username}
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.userName && formik.errors.userName
                      ? formik.errors.userName
                      : null}
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.userName &&
                    !formik.errors.userName &&
                    formik.touched.userid &&
                    formik.errors.userid
                      ? formik.errors.userid
                      : null}
                  </div>
                </div>

                <div className='col-lg-3'>
                  <label className='form-label fw-bold'>Installer</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('installerid')}
                  >
                    <option value=''>Select Installer</option>
                    {getInstallations.map((TypeData: any, index: number) => {
                      return (
                        <option key={index} value={TypeData.id}>
                          {TypeData?.fullName}
                        </option>
                      )
                    })}
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.installerid && formik.errors.installerid
                      ? formik.errors.installerid
                      : null}
                  </div>
                </div>
                <div className='col-lg-3'>
                  <label className='form-label fw-bold'>Main Point</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('zonepointid')}
                  >
                    <option value=''>Select Main Point</option>
                    {getMainPoint.map((TypeData: any, index) => {
                      return (
                        <option key={index} value={TypeData.id}>
                          {TypeData?.name}
                        </option>
                      )
                    })}
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.zonepointid && formik.errors.zonepointid
                      ? formik.errors.zonepointid
                      : null}
                  </div>
                </div>
                <div className='col-lg-3'>
                  <label className='form-label fw-bold'>Connection Type</label>
                  <select
                    className='form-select form-select-solid'
                    {...formik.getFieldProps('connectiontype')}
                  >
                    <option value=''>Select Connection Type</option>
                    <option value='1'>Cable</option>
                    <option value='2'>Wireless</option>
                    <option value='3'>Fibre</option>
                    <option value='4'>Other</option>
                  </select>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.connectiontype && formik.errors.connectiontype
                      ? formik.errors.connectiontype
                      : null}
                  </div>
                </div>
                {formik.values.connectiontype == 2 ? (
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Wireless Type</label>
                    <select
                      className='form-select form-select-solid'
                      {...formik.getFieldProps('wirelessTypeId')}
                    >
                      <option value=''>Select Wireless Type</option>
                      {getDataAllTypeWireless.map((TypeData: any, index) => {
                        return (
                          <option key={index} value={TypeData.id}>
                            {TypeData?.name}
                          </option>
                        )
                      })}
                    </select>
                    <div className='erro2' style={{color: 'red'}}>
                      {formik.touched.connectiontype && formik.errors.connectiontype
                        ? formik.errors.connectiontype
                        : null}
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={formik.values.connectiontype !== 2 ? 'row w-100 mx-0 mb-4 gy-4' : ''}>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Cable Type</label>
                    <select
                      className='form-select form-select-solid'
                      {...formik.getFieldProps('cabletypeid')}
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
                      {formik.touched.cabletypeid && formik.errors.cabletypeid
                        ? formik.errors.cabletypeid
                        : null}
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Cable Length</label>
                    <div className='input-group'>
                      <span className='input-group-text border-0'>m</span>
                      <input
                        placeholder='Access point ip'
                        className='form-control form-control-lg form-control-solid'
                        value={formik.values.cablelength}
                        onChange={(e) => {
                          if (e.target.value.length <= 10) {
                            formik.handleChange(e)
                          }
                        }}
                        onBlur={formik.handleBlur}
                        type='number'
                        name='cablelength'
                        autoComplete='off'
                      />
                    </div>
                    <div className='erro2' style={{color: 'red'}}>
                      {formik.touched.cablelength && formik.errors.cablelength
                        ? formik.errors.cablelength
                        : null}
                    </div>
                  </div>

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>IP Type</label>
                    <select
                      className='form-select form-select-solid'
                      value={formik.values.iptype}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='iptype'
                    >
                      <option value=''>Select IP Type</option>
                      <option value='1'>Dynamic</option>
                      <option value='2'>Static</option>
                    </select>
                    <div className='erro2' style={{color: 'red'}}>
                      {formik.touched.iptype && formik.errors.iptype ? formik.errors.iptype : null}
                    </div>
                  </div>
                  {formik.values.connectiontype == 2 ? (
                    <div className='col-lg-3'>
                      <label className='form-label fw-bold'>Access Point IP</label>
                      <input
                        placeholder='Access Point IP'
                        className='form-control form-control-lg form-control-solid'
                        value={formik.values.accesspointip}
                        onChange={(e) => {
                          if (e.target.value.length == 0 || e.target.value.match(regex)) {
                            return formik.handleChange(e)
                          }
                          return
                        }}
                        onBlur={formik.handleBlur}
                        type='sting'
                        name='accesspointip'
                        autoComplete='off'
                      />
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.accesspointip && formik.errors.accesspointip
                          ? formik.errors.accesspointip
                          : null}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  {formik.values.connectiontype == 2 ? (
                    <>
                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Station IP</label>
                        <input
                          placeholder='Station IP'
                          className='form-control form-control-lg form-control-solid'
                          value={formik.values.stationip}
                          onChange={(e) => {
                            if (e.target.value.length == 0 || e.target.value.match(regex)) {
                              return formik.handleChange(e)
                            }
                          }}
                          onBlur={formik.handleBlur}
                          type='sting'
                          name='stationip'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          {formik.touched.stationip && formik.errors.stationip
                            ? formik.errors.stationip
                            : null}
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Access Point Name</label>
                        <input
                          placeholder='Access Point Name'
                          className='form-control form-control-lg form-control-solid'
                          value={formik.values.stationname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type='text'
                          name='stationname'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          {formik.touched.stationname && formik.errors.stationname
                            ? formik.errors.stationname
                            : null}
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <label className='form-label fw-bold'>Station MAC</label>
                        <input
                          placeholder='Station MAC'
                          className='form-control form-control-lg form-control-solid'
                          value={formik.values.stationMac}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type='text'
                          name='stationMac'
                          autoComplete='off'
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          {formik.touched.stationMac && formik.errors.stationMac
                            ? formik.errors.stationMac
                            : null}
                        </div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}

                  <div className='col-lg-3'>
                    <label className='form-label fw-bold'>Status</label>
                    <select
                      className='form-select form-select-solid'
                      value={formik.values.status}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='status'
                    >
                      <option value=''>Select Status Type</option>
                      {auth?.roleId !== 7 ? <option value='1'>Pending</option> : ''}
                      {auth?.roleId !== 7 ? <option value='2'>Done</option> : ''}
                      <option value='3'>Partially Done</option>
                    </select>
                    <div className='erro2' style={{color: 'red'}}>
                      {formik.touched.status && formik.errors.status ? formik.errors.status : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className='row w-100 mx-0 mb-4 gy-4'>
                <div className='col'>
                  <label className='form-label fw-bold'>Remark</label>
                  <input
                    placeholder='Remark'
                    className='form-control form-control-lg form-control-solid'
                    value={formik.values.remark}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type='text'
                    name='remark'
                    autoComplete='off'
                  />
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.remark && formik.errors.remark ? formik.errors.remark : null}
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
                      value={formik.values.isnotifyinstaller}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='isnotifyinstaller'
                      checked={formik.values.installerid !== '' ? true : false}
                    />
                    <label className='form-check-label'>Installer</label>
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.isnotifyinstaller && formik.errors.isnotifyinstaller
                      ? formik.errors.isnotifyinstaller
                      : null}
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
              onClick={() => navigation('/installations')}
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
  )
}

export default InstallationFormModal
