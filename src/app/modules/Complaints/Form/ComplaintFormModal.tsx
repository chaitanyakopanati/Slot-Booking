import {FC} from 'react'
import {useRef} from 'react'
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import {ListPageData} from '../ComplaintContext'
import {toast} from 'react-toastify'
import ComplaintsViewService from '../helperComplaint/ApiDataRequest'
import {useNavigate} from 'react-router-dom'
import {CustomTooltip} from '../../../../app/routing/customtooltip'
import * as Yup from 'yup'
import {useLocation} from 'react-router-dom'
import {useAuth} from '../../auth'
import moment from 'moment'
import {KTSVG} from '../../../../_metronic/helpers'

type Props = {
  category: any
}
const ComplaintFormModal: FC<Props> = ({category}) => {
  const {setSuggestionUserText, getUserNameData, pageNo, pageSize} = ListPageData()
  const {auth} = useAuth()

  let validationSchemaNewForm = Yup.object({
    username: Yup.string().required('This field is required'),
    userId: Yup.number().required('Entered User Name Does Not Exist'),
    status: Yup.number().required('This field is required'),
  })

  let validationSchemaTechRoleNewForm = Yup.object({
    username: Yup.string().required('This field is required'),
    userId: Yup.number().required('Entered User Name Does Not Exist'),
    status: Yup.number().required('This field is required'),
    description: Yup.string().required('This field is required'),
    faultid: Yup.number().required('This field is required'),
  })

  const navigate = useNavigate()

  const suggestionRef: any = useRef()

  var regex = new RegExp('^[a-zA-Z0-9]+$')

  const [initialValues, setInitialValues] = useState<any>({
    id: '',
    complainttypeid: '',
    username: '',
    description: '',
    status: '',
    remark: '',
    assigntechnicianid: '',
    faultid: '',
    isnotifytechinician: '',
    isnotifycustomer: false,
    CreatedBy: '',
    ModifyBy: '',
  })

  const [complaintData, setComplaintData] = useState([])

  var currentTime: any = moment(new Date())

  const {
    itemIdForUpdate,
    getDataAllTypeTechnician,
    getDataAllTypeComplaint,
    DataGetAllTypeComplaint,
    DataGetAllFault,
    getDataAllFault,
    DataGetAllTypeTechnician,
  } = ListPageData()

  useEffect(() => {
    DataGetAllTypeComplaint()
    DataGetAllFault()
    DataGetAllTypeTechnician()
  }, [])

  const getDataByUserId = async () => {
    try {
      let payload: any = await ComplaintsViewService.GetComplaintsByUserId(category?.userId)
      if (payload.success == true) {
        setComplaintData(payload.data)
      }
    } catch (error) {
    } finally {
    }
  }

  useEffect(() => {
    getDataByUserId()
  }, [category])

  useEffect(() => {
    if (itemIdForUpdate === 'add' && category.username && category.userId) {
      setInitialValues({
        ...category,
        id: category?.id || '',
        complainttypeid: category?.complaintTypeId || 0,
        username: category?.username || '',
        userId: category?.userId || '',
        description: category?.description || '',
        status: category?.statusId || '',
        assigntechnicianid: category?.assignTechnicianId || '',
        faultid: category?.faultId || '',
        isnotifycustomer: category?.isnotifycustomer || false,
        remark: category?.remark || '',
        isnotifytechinician: category?.isnotifytechinician || false,
        CreatedBy: auth?.userId || '',
      })
    }
    if (itemIdForUpdate === 'add') {
      setInitialValues({
        ...category,
        id: category?.id || '',
        complainttypeid: category?.complaintTypeId || 0,
        username: category?.username || '',
        userId: category?.userId || '',
        description: category?.description || '',
        status: category?.statusId || '',
        assigntechnicianid: category?.assignTechnicianId || '',
        faultid: category?.faultId || '',
        isnotifycustomer: category?.isnotifycustomer || false,
        remark: category?.remark || '',
        isnotifytechinician: category?.isnotifytechinician || false,
        CreatedBy: auth?.userId || '',
      })
    } else {
      setInitialValues({
        ...category,
        id: category?.id || '',
        complainttypeid: category?.complaintTypeId || 0,
        username: category?.username || '',
        userId: category?.userId || '',
        description: category?.description || '',
        status: category?.statusId || '',
        assigntechnicianid: category?.assignTechnicianId || '',
        faultid: category?.faultId || '',
        isnotifycustomer: category?.isnotifycustomer || false,
        remark: category?.remark || '',
        isnotifytechinician: category?.isnotifytechinician || false,
        ModifyBy: auth?.userId || '',
      })
    }
  }, [itemIdForUpdate, category])

  const cancel = (withRefresh?: boolean) => {
    navigate('/complaint')
  }

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault()
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,

    validationSchema: auth?.roleId == 7 ? validationSchemaTechRoleNewForm : validationSchemaNewForm,
    onSubmit: async (values: any, {resetForm}) => {
      values.complainttypeid = +values.complainttypeid
      values.assigntechnicianid = +values.assigntechnicianid
      // values.faultid = +values.faultid
      values.status = +values.status
      values.userId = +values.userId

      try {
        if (values.id) {
          // Edit Api Response
          // debugger
          let response = await ComplaintsViewService.editComplaints(values)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
          }
          navigate('/complaint')
          toast.dismiss('1s')
        } else {
          let response = await ComplaintsViewService.postComplaint(values)

          if (response.success === false) {
            toast.error(response.message)
          } else {
            toast.success(response.message)
          }
          toast.dismiss('1s')
          navigate('/complaint')
        }
      } catch (error: any) {
        toast.error(error.data.message)
      } finally {
      }
    },
  })

  const DataWiseIndex: any = (pageNo - 1) * pageSize

  const setBackgrondColour = (row: any) => {
    if (
      currentTime.diff(moment(row?.createdDate), 'hours') >= 24 &&
      row.statusName === 'Unsolved'
    ) {
      return `#f5c6cb`
    } else if (row.statusName === 'Unsolved') {
      return `#b8daff`
    } else {
      return ''
    }
  }

  return (
    <>
      <div>
        <form
          id='kt_modal_add_user_form'
          onKeyDown={onKeyDown}
          className='form'
          onSubmit={formik.handleSubmit}
        >
          <div className='modal-body'>
            {' '}
            <div className='container-fluid p-0'>
              {' '}
              <div className='card'>
                <div className='d-flex align-items-center'>
                  <div
                    className='btn btn-icon btn-sm btn-active-light-primary me-5'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  >
                    <span className='svg-icon svg-icon-2x' onClick={() => navigate('/complaint')}>
                      <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                    </span>
                  </div>
                  <h2 className='modal-title fw-bolder'>
                    {itemIdForUpdate === 'add' ? 'Create Complaint' : 'Edit Complaint'}
                  </h2>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4 mt-2'>
                  <div className='col-lg-6'>
                    <div className='row w-100 mx-0 mb-4 gy-4'>
                      <div className='col-12' style={{position: 'relative'}}>
                        <div className='col-lg-12'>
                          <label className='form-label fw-bold required'>User Name</label>{' '}
                          <input
                            name='username'
                            placeholder='User Name'
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
                                if (
                                  container !== event.target &&
                                  !container.contains(event.target)
                                ) {
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
                                  return (
                                    <li
                                      key={user.id}
                                      onClick={() => {
                                        formik.setFieldValue('userId', user.id)
                                        formik.setFieldValue('username', user.username)
                                      }}
                                    >
                                      {user.username}
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
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <label className='form-label fw-bold'>Complaint Type</label>
                    <div data-select2-id='select-role'>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('complainttypeid')}
                      >
                        <option>Select Complaint Type</option>
                        {getDataAllTypeComplaint.map((complaintData: any, index) => {
                          return (
                            <option key={index} value={complaintData.id}>
                              {complaintData?.name}
                            </option>
                          )
                        })}
                      </select>
                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.complainttypeid && formik.errors.complainttypeid
                          ? formik.errors.complainttypeid
                          : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-2 gy-4'>
                  <div className='col-lg-12'>
                    <label
                      className={
                        auth?.roleId == 7 ? 'form-label fw-bold required' : 'form-label fw-bold'
                      }
                    >
                      Description
                    </label>
                    <textarea
                      name='description'
                      value={formik.values.description || ''}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className='form-control form-control-lg form-control-solid'
                      data-kt-autosize='true'
                      placeholder='Description'
                    ></textarea>
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                    {formik.touched.description && formik.errors.description
                      ? formik.errors.description
                      : null}
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-4'>
                    <label className='form-label fw-bold'>Assign to</label>
                    <div data-select2-id='select-zone'>
                      <select
                        className='form-select form-select-solid'
                        {...formik.getFieldProps('assigntechnicianid')}
                      >
                        <option value=''>Select Techanician</option>
                        {getDataAllTypeTechnician.map((getDataAllTypeTechnician: any, index) => {
                          return (
                            <option key={index} value={getDataAllTypeTechnician.id}>
                              {getDataAllTypeTechnician?.fullName}
                            </option>
                          )
                        })}
                      </select>

                      <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.assigntechnicianid && formik.errors.assigntechnicianid
                          ? formik.errors.assigntechnicianid
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-zone'>
                      <label className='form-label fw-bold required'>Status</label>
                      <div data-select2-id='select-zone'>
                        <select
                          className='form-select form-select-solid'
                          {...formik.getFieldProps('status')}
                        >
                          <option>Select Status</option>
                          {auth?.roleId !== 7 ? <option value='1'>Pending</option> : ''}
                          {auth?.roleId !== 7 ? <option value='2'>Done</option> : ''}
                          <option value='3'>Partially Done</option>
                        </select>
                        <div className='erro2' style={{color: 'red'}}>
                          {formik.touched.status && formik.errors.status
                            ? formik.errors.status
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div data-select2-id='select-role'>
                      <label
                        className={
                          auth?.roleId == 7 ? 'form-label fw-bold required' : 'form-label fw-bold'
                        }
                      >
                        Fault
                      </label>
                      <div data-select2-id='select-role'>
                        <select
                          className='form-select form-select-solid'
                          {...formik.getFieldProps('faultid')}
                        >
                          <option>Select Fault</option>
                          {getDataAllFault.map((fauitData: any, index) => {
                            return (
                              <option key={index} value={fauitData.id}>
                                {fauitData?.name}
                              </option>
                            )
                          })}
                        </select>
                        <div className='erro2' style={{color: 'red'}}>
                          {formik.touched.faultid && formik.errors.faultid
                            ? formik.errors.faultid
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12 '>
                    <label className='form-label fw-bold'>Remark:</label>
                    <input
                      value={formik.values.remark || ''}
                      name='remark'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Remark'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                    <div className='erro2' style={{color: 'red'}}>
                      {formik.touched.remark && formik.errors.remark ? formik.errors.remark : null}
                    </div>
                  </div>
                </div>
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col-lg-12'>
                    <label className='form-label fw-bold'>Notification</label>
                    <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                      <input
                        className='form-check-input h-20px w-30px'
                        type='checkbox'
                        name='isnotifytechinician'
                        value={formik.values.isnotifytechinician || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={
                          formik.values.assigntechnicianid !== '' &&
                          (formik.values.status == '' || formik.values.status == '1')
                            ? true
                            : false
                        }
                        id='flexSwitch20x30'
                      />
                      <label className='form-check-label'>Technician</label>
                    </div>
                    <div className='form-check form-switch form-check-custom form-check-solid me-10 mt-3'>
                      <input
                        className='form-check-input h-20px w-30px'
                        type='checkbox'
                        name='isnotifycustomer'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value=''
                        id='flexSwitch20x30'
                      />
                      <label className='form-check-label'>Customer</label>
                    </div>
                  </div>
                </div>

                <div className='modal-footer'>
                  <CustomTooltip title='Close form'>
                    <button
                      type='reset'
                      onClick={() => navigate('/complaint')}
                      className='btn btn-light'
                    >
                      Close
                    </button>
                  </CustomTooltip>

                  <CustomTooltip title='Submit form'>
                    <button type='submit' className='btn btn-primary'>
                      {itemIdForUpdate === 'add' ? 'Create' : 'Update'}
                    </button>
                  </CustomTooltip>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </form>
      </div>

      {itemIdForUpdate === 'add' && category.username && category.userId ? (
        <div className='table-responsive d-none d-lg-block'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0 mt-4 table-rounded border thead-light'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted  bg-dark'>
                <th className='max-w-60px min-w-40px rounded-start ps-4'>Complaint no.</th>
                <th className='max-w-60px '>Username</th>
                <th className='min-w-150px'>Name</th>
                <th className='min-w-200px'>Address</th>
                <th className='min-w-150px'>Package category</th>
                <th className='min-w-200px'>Complaint type</th>
                <th className='min-w-150px'>Assign to</th>
                <th className='min-w-150px'>Status</th>
                <th className='min-w-150px'>Complaint date</th>
                {/* <th className='min-w-150px rounded-end'>Actions</th> */}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {complaintData.length > 0 ? (
                complaintData?.map((row: any, index: number) => {
                  return (
                    <tr
                      key={DataWiseIndex + index + 1}
                      className={
                        currentTime.diff(moment(row?.createdDate), 'hours') >= 24 &&
                        row.statusName === 'Unsolved'
                          ? 'p-3 mb-2 text-white'
                          : '' || row.statusName === 'Unsolved'
                          ? 'p-3 mb-2 text-white'
                          : ''
                      }
                      style={{
                        backgroundColor: setBackgrondColour(row),
                      }}
                    >
                      <td>
                        <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                          {DataWiseIndex + index + 1}
                        </div>
                      </td>
                      {/* begin:: Name Input */}
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex justify-content-start flex-column'>
                            <div className='text-dark fw-bold  fs-6'>
                              {row?.username ? row?.username : '-'}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className='text-dark fw-bold  fs-6'>{row.name || '-'}</td>

                      <td className='text-dark fw-bold  fs-6'>{row.address || '-'}</td>

                      <td className='text-dark fw-bold  fs-6'>{row.packageCategorieName || '-'}</td>

                      <td className='text-dark fw-bold  fs-6'>{row.complaintTypeName || '-'}</td>

                      <td className='text-dark fw-bold  fs-6'>{row.assignTechnicianName || '-'}</td>
                      <td className='text-dark fw-bold  fs-6'>{row.statusName || '-'}</td>

                      <td className='text-dark fw-bold  fs-6'>
                        {' '}
                        {moment(row?.createdDate).format('DD-MMMM-YYYY, h:mm:ss a') || '-'}
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={8}>
                    <div className='text-dark fw-bolder fs-6 ps-4 text-center'>
                      No data available in table
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ComplaintFormModal
