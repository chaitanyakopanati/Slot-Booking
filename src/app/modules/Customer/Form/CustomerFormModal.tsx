import {useFormik} from 'formik'
import React, {ElementType, useEffect, useState} from 'react'
import ImageSelect from '../../../../app/images/error-profile.svg'
import {ListPageData} from '../CustomerContext'
import * as Yup from 'yup'
import {customerFormType, formInitialValues} from '../helperCustomer/ModelCustomer'
import {useRef} from 'react'
import {editCustomer, saveCustomer} from '../helperCustomer/ApiDataRequest'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useAuth} from '../../auth'
import {CustomTooltip} from '../../../routing/customtooltip'

interface customerProps {
  customerById: any
}

function CustomerFormModal({customerById}: customerProps) {
  const {auth} = useAuth()
  const navigate = useNavigate()
  const suggestionRef: any = useRef()
  const {customer, fetchUsetByRoleNameWithSearch} = ListPageData()
  // const GSTINFORMAT_REGEX: any =
  //   '[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}'

  const validationSchema = Yup.object({
    Userid: Yup.string().when(['UserName'], {
      is: (UserName: any) => !UserName,
      then: Yup.string().required().label('UserName'),
    }),
    MobileNo: Yup.string().min(10).max(10).required().label('MobileNo'),
    Contactno: Yup.string().min(10).max(10).label('Contactno'),
    ZoneId: Yup.string().required().label('Zone'),
    Email: Yup.string().email('Must be a valid email').max(255),
    Address: Yup.string().required().label('Address'),
    FirstName: Yup.string().required().label('FirstName'),
    LastName: Yup.string().required().label('LastName'),
    Middlename: Yup.string().required().label('Middlename'),
    // Gstno: Yup.string().required(GSTINFORMAT_REGEX).label('Gstno'),
  })
  const API_URL_DATA = process.env.REACT_APP_IMG_PATH

  const idProofPath: string = `${API_URL_DATA}Mediaupload/Customer/IDProof//`
  const gstProofPath: string = `${API_URL_DATA}MediaUpload/Customer/GSTCertificate//`
  const addressProofPath: string = `${API_URL_DATA}MediaUpload/Customer/AddressProof/`

  let {zoneType} = ListPageData()

  const [initialValues, setInitialValues] = useState<customerFormType>(formInitialValues)

  useEffect(() => {
    console.log('customerById', customerById)

    setInitialValues({
      Id: customerById.id || null,
      UserName: customerById.userName || '',
      FirstName: customerById.firstName || '',
      LastName: customerById.lastName || '',
      Email: customerById.email || '',
      MobileNo: customerById.mobileNo || '',
      Middlename: customerById.middlename || '',
      CompanyName: customerById.companyName || '',
      Userid: customerById.userid || '',
      ZoneId: customerById.zoneId || '',
      Gstno: customerById.gstno || '',
      Contactno: customerById.contactno || '',
      Address: customerById.address || '',
      Remark: customerById.remark || '',
      Description: '',
      IdproofImageFile: customerById?.docNameIdProof ? customerById?.docNameIdProof : '',
      AddressproofImageFile: customerById?.docNameAddressproofImage
        ? customerById?.docNameAddressproofImage
        : '',
      GstcerificateImageFile: customerById?.docNameGstcerificateImage
        ? customerById?.docNameGstcerificateImage
        : '',
      CreatedBy: auth?.userId || '',
      ModifyBy: auth?.userId || '',
      IsMasterUser: false,
    })
  }, [customerById])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.Id) {
        let formData: any = new FormData()
        console.log('kkk', formData)

        delete formData.CreatedBy

        Object.entries(values).forEach(([key, value]) => {
          if (value) formData.append(key, value as string)
        })
        !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
        delete formData.CreatedBy

        let response = await editCustomer(formData)
        if (response.success) {
          toast.success(response.message)
          navigate('/customers')
        } else {
          toast.error(response.message)
        }
      } else {
        let formData: any = new FormData()
        delete formData.ModifyBy
        console.log('kkk', formData)

        Object.entries(values).forEach(([key, value]) => {
          if (value) formData.append(key, value as string)
        })
        !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
        delete formData.ModifyBy

        let response = await saveCustomer(formData)
        if (response.success) {
          toast.success(response.message)
          navigate('/customers')
        } else {
          toast.error(response.message)
        }
      }
    },
  })

  const [idProofImage, setIdProofImage] = useState<any>(null)
  const [addressProofImage, setAddressProofImage] = useState<any>(null)
  const [gstCerificateImage, setGstCerificateImage] = useState<any>(null)

  let fetchFilePath = async (file: any) => {
    const objectUrl = URL.createObjectURL(file[0])
    return objectUrl
  }

  useEffect(() => {
    fetchUsetByRoleNameWithSearch(formik.values.UserName)
  }, [formik.values.UserName])

  return (
    <>
      <div className='mt-4'></div>
      <form onSubmit={formik.handleSubmit}>
        <div className='d-flex flex-column me-n7 pe-7'>
          <div className='container-fluid p-0'>
            <div className='row w-100 mx-0 mb-4 gy-4'>
              {/* idProof */}
              <div className='col-lg-4 text-center'>
                <div className='pb-5'>
                  <h5 className='m-0'>ID Proof</h5>
                </div>
                <div
                  className='image-input image-input-empty'
                  style={{
                    backgroundImage: `url(${
                      idProofImage ? idProofImage : customerById.idproofImage || ImageSelect
                    })`,
                  }}
                  // style={{
                  //   backgroundImage: idProofPath
                  //     ? `url("${idProofPath}${formik?.values?.IdproofImageFile}")`
                  //     : ImageSelect,
                  // }}
                >
                  <div className='image-input-wrapper w-125px h-125px'></div>

                  <label
                    className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='change'
                    data-bs-toggle='tooltip'
                    data-bs-dismiss='click'
                    title='Change avatar'
                  >
                    <i className='bi bi-pencil-fill fs-7'></i>
                    <input
                      type='file'
                      name='IdproofImageFile'
                      accept='.png, .jpg, .jpeg'
                      // value={`${idProofPath}${formik?.values?.IdproofImageFile}`}
                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        let url = await fetchFilePath(e.target.files)
                        setIdProofImage(url)
                        formik.setFieldValue('IdproofImageFile', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className='col-lg-4 text-center'>
                <div className='pb-5'>
                  <h5 className='m-0'>Address Proof</h5>
                </div>
                <div
                  className='image-input image-input-empty'
                  data-kt-image-input='true'
                  style={{
                    backgroundImage: `url(${
                      addressProofImage
                        ? addressProofImage
                        : customerById.addressproofImage || ImageSelect
                    })`,
                  }}
                >
                  <div className='image-input-wrapper w-125px h-125px'></div>

                  <label
                    className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='change'
                    data-bs-toggle='tooltip'
                    data-bs-dismiss='click'
                    title='Change avatar'
                  >
                    <i className='bi bi-pencil-fill fs-7'></i>

                    <input
                      type='file'
                      name='AddressproofImageFile'
                      accept='.png, .jpg, .jpeg'
                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        let url = await fetchFilePath(e.target.files)
                        setAddressProofImage(url)
                        formik.setFieldValue('AddressproofImageFile', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
              </div>
              {/* gst Certificate */}
              <div className='col-lg-4 text-center'>
                <div className='pb-5'>
                  <h5 className='m-0'>GST Certificate</h5>
                </div>
                <div
                  className='image-input image-input-empty'
                  data-kt-image-input='true'
                  style={{
                    backgroundImage: `url(${
                      gstCerificateImage
                        ? gstCerificateImage
                        : customerById.gstcerificateImage || ImageSelect
                    })`,
                  }}
                >
                  <div className='image-input-wrapper w-125px h-125px'></div>

                  <label
                    className='btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow'
                    data-kt-image-input-action='change'
                    data-bs-toggle='tooltip'
                    data-bs-dismiss='click'
                    title='Change avatar'
                  >
                    <i className='bi bi-pencil-fill fs-7'></i>
                    <input
                      type='file'
                      name='GstcerificateImageFile'
                      accept='.png, .jpg, .jpeg'
                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        let url = await fetchFilePath(e.target.files)
                        setGstCerificateImage(url)
                        formik.setFieldValue('GstcerificateImageFile', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
              </div>
              {/* First Name */}
              <div className='col-lg-4'>
                <label className='form-label fw-bold required'>First Name</label>
                <input
                  placeholder='First name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  name='FirstName'
                  value={formik.values.FirstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.FirstName && formik.errors.FirstName && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.FirstName}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Middle name */}
              <div className='col-lg-4'>
                <label className='form-label fw-bold required'>Middle name</label>
                <input
                  placeholder='Middle name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  name='Middlename'
                  value={formik.values.Middlename}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Middlename && formik.errors.Middlename && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.Middlename}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Last Name */}
              <div className='col-lg-4'>
                <label className='form-label fw-bold required'>Last Name</label>
                <input
                  placeholder='Last name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  name='LastName'
                  value={formik.values.LastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.LastName && formik.errors.LastName && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.LastName}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Company name */}
            <div className='row w-100 mx-0 mb-4 gy-4'>
              <div className='col-lg-6'>
                <label className='form-label fw-bold'>Company name</label>
                <input
                  placeholder='Company name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  name='CompanyName'
                  value={formik.values.CompanyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* GST no. */}
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>GST no.</label>
                <input
                  placeholder='GST no.'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  name='Gstno'
                  value={formik.values.Gstno}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email */}
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Email</label>
                <input
                  placeholder='Email'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  name='Email'
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Email && formik.errors.Email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.Email}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Username */}
            <div className='row w-100 mx-0 mb-4 gy-4'>
              {/*  */}
              <div className='col-lg-3'>
                <label className='form-label fw-bold required'>Username</label>
                <input
                  placeholder='Username'
                  name='UserName'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  value={formik.values.UserName}
                  onChange={(e) => {
                    formik.setFieldValue('IsMasterUser', false)
                    if (e.target.value) {
                      suggestionRef.current.style.display = 'block'
                    } else {
                      suggestionRef.current.style.display = 'none'
                    }
                    formik.handleChange(e)
                  }}
                  onBlur={(e) => {
                    var container = suggestionRef.current
                    document.addEventListener('click', function (event) {
                      suggestionRef.current.style.display = 'none'
                      document.removeEventListener('click', () => {
                        suggestionRef.current.style.display = 'none'
                        document.removeEventListener('click', () => {})
                      })
                    })
                    formik.handleBlur(e)
                  }}
                />
                <div className='dropdown-menu suggestion-list' ref={suggestionRef}>
                  <ul>
                    {customer?.length > 0 &&
                      customer.map((user, index) => {
                        return (
                          <li
                            key={user.id}
                            onClick={() => {
                              console.log('user*****', user)
                              // IsMasterUser
                              formik.setFieldValue('IsMasterUser', true)
                              formik.setFieldValue('Userid', user.id)
                              formik.setFieldValue('UserName', user.firstname)
                            }}
                          >
                            {user.firstname}
                          </li>
                        )
                      })}
                  </ul>
                </div>
                {formik.touched.Userid && formik.errors.Userid && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.Userid}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile no. */}
              <div className='col-lg-3'>
                <label className='form-label fw-bold required'>Mobile no.</label>
                <input
                  placeholder='Mobile no.'
                  className='form-control form-control-lg form-control-solid'
                  type='number'
                  autoComplete='off'
                  name='MobileNo'
                  value={formik.values.MobileNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.MobileNo && formik.errors.MobileNo && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.MobileNo}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Contact no. */}
              <div className='col-lg-3'>
                <div data-select2-id='select-role'>
                  <label className='form-label fw-bold'>Contact no.</label>
                  <input
                    placeholder='Contact no.'
                    className='form-control form-control-lg form-control-solid'
                    type='number'
                    autoComplete='off'
                    name='Contactno'
                    value={formik.values.Contactno}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.MobileNo && formik.errors.MobileNo && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert' style={{color: 'red'}}>
                          {formik.errors.Contactno}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Zone */}
              <div className='col-lg-3'>
                <div data-select2-id='select-zone'>
                  <label className='form-label fw-bold required'>Zone</label>
                  <div data-select2-id='select-zone'>
                    <select
                      className='form-select form-select-solid'
                      name='ZoneId'
                      value={formik.values.ZoneId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value=''>Select Zone</option>
                      {zoneType.map((zone) => {
                        return (
                          <option key={zone.id} value={zone.id}>
                            {zone.name}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                {formik.touched.ZoneId && formik.errors.ZoneId && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.ZoneId}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Address */}
              <div className='col-lg-12'>
                <label className='form-label fw-bold'>Address</label>
                <textarea
                  className='form-control form-control form-control-solid'
                  data-kt-autosize='true'
                  placeholder='Address here'
                  name='Address'
                  value={formik.values.Address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.Address && formik.errors.Address && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert' style={{color: 'red'}}>
                        {formik.errors.Address}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Remark */}
              <div className='col-lg-12'>
                <label className='form-label fw-bold'>Remark</label>
                <textarea
                  className='form-control form-control form-control-solid'
                  data-kt-autosize='true'
                  placeholder='Remark here'
                  name='Remark'
                  value={formik.values.Remark}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
              </div>
            </div>
          </div>
          {/*  */}

          <div className='modal-footer'>
            <CustomTooltip title='Close form'>
              <button type='reset' onClick={() => navigate('/customers')} className='btn btn-light'>
                Close
              </button>
            </CustomTooltip>

            <CustomTooltip title='Submit form'>
              <button type='submit' className='btn btn-primary'>
                {formik.values.Id ? 'Update' : 'Create'}
              </button>
            </CustomTooltip>
          </div>
        </div>
      </form>
    </>
  )
}

export default CustomerFormModal
