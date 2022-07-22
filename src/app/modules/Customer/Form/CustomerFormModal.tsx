import {useFormik} from 'formik'
import React, {ElementType, useEffect, useState} from 'react'
import ImageSelect from '../../../../app/images/error-profile.svg'
import {ListPageData} from '../CustomerContext'
import * as Yup from 'yup'
import {customerFormType} from '../helperCustomer/ModelCustomer'
import { useRef } from 'react'

const validationSchema = Yup.object({
  Userid: Yup.string().required().label('UserName'),
  Contactno: Yup.string().min(10).max(10).required().label('This value is required.'),
  ZoneId: Yup.string().required().label('This value is required.'),
})

function CustomerFormModal() {
  let {zoneType} = ListPageData()

  const [initialValues, setInitialValues] = useState<customerFormType>({
    Middlename: '',
    CompanyName: '',
    Userid: '',
    ZoneId: '',
    Gstno: '',
    Contactno: '',
    Address: '',
    Remark: '',
    Description: '',
    IdproofImageFile: '',
    AddressproofImageFile: '',
    GstcerificateImageFile: '',
    CreatedBy: '',
    ModifyBy: '',
    IsMasterUser: false,
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
    },
  })

  const [idProofImage, setIdProofImage] = useState<any>(null)
  const [addressProofImage, setAddressProofImage] = useState<any>(null)
  const [gstCerificateImage, setGstCerificateImage] = useState<any>(null)




  let fetchFilePath=async(file:any)=>{
    const objectUrl = URL.createObjectURL(file[0])
    return objectUrl
  }
  
  

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
                  style={{backgroundImage: `url(${idProofImage?idProofImage:formik.values.IdproofImageFile || ImageSelect})`}}
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
                     onChange={async(e)=>{
                      if(!e.target.files){
                        return
                      }
                      let url = await fetchFilePath(e.target.files)
                      setIdProofImage(url)
                      formik.setFieldValue("IdproofImageFile",e.target.files)
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
                  style={{backgroundImage: `url(${addressProofImage?addressProofImage:formik.values.AddressproofImageFile || ImageSelect})`}}
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
                     onChange={async(e)=>{
                      if(!e.target.files){
                        return
                      }
                      let url = await fetchFilePath(e.target.files)
                      setAddressProofImage(url)
                      formik.setFieldValue("AddressproofImageFile",e.target.files)
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
                  style={{backgroundImage: `url(${gstCerificateImage?gstCerificateImage:formik.values.GstcerificateImageFile || ImageSelect})`}}
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
                     onChange={async(e)=>{
                      if(!e.target.files){
                        return
                      }
                      let url = await fetchFilePath(e.target.files)
                      setGstCerificateImage(url)
                      formik.setFieldValue("GstcerificateImageFile",e.target.files)
                     }}
                     onBlur={formik.handleBlur}
                     />
                  </label>

                  
                </div>
              </div>
              {/* First Name */}
              <div className='col-lg-4'>
                <label className='form-label fw-bold'>First Name</label>
                <input
                  placeholder='First name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                />
              </div>
              {/* Middle name */}
              <div className='col-lg-4'>
                <label className='form-label fw-bold'>Middle name</label>
                <input
                  placeholder='Middle name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  value={formik.values.Middlename}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Last Name */}
              <div className='col-lg-4'>
                <label className='form-label fw-bold'>Last Name</label>
                <input
                  placeholder='Last name'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                />
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
                  value={formik.values.Gstno}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            {/* Username */}
            <div className='row w-100 mx-0 mb-4 gy-4'>
              <div className='col-lg-3'>
                <label className='form-label fw-bold'>Username</label>
                <input
                  placeholder='Username'
                  name='Userid'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  autoComplete='off'
                  value={formik.values.Userid}
                  onChange={(e) => {
                    formik.handleChange(e)
                  }}
                  onBlur={(e) => {
                    formik.handleBlur(e)
                  }}
                />
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
                <label className='form-label fw-bold'>Mobile no.</label>
                <input
                  placeholder='Mobile no.'
                  className='form-control form-control-lg form-control-solid'
                  type='number'
                  autoComplete='off'
                />
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
                  />
                </div>
              </div>
              {/* Zone */}
              <div className='col-lg-3'>
                <div data-select2-id='select-zone'>
                  <label className='form-label fw-bold'>Zone</label>
                  <div data-select2-id='select-zone'>
                    <select
                      className='form-select form-select-solid'
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
              </div>
              {/* Address */}
              <div className='col-lg-12'>
                <label className='form-label fw-bold'>Address</label>
                <textarea
                  className='form-control form-control form-control-solid'
                  data-kt-autosize='true'
                  placeholder='Address here'
                  value={formik.values.Address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
              </div>
              {/* Remark */}
              <div className='col-lg-12'>
                <label className='form-label fw-bold'>Remark</label>
                <textarea
                  className='form-control form-control form-control-solid'
                  data-kt-autosize='true'
                  placeholder='Remark here'
                  value={formik.values.Remark}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
              </div>
            </div>
          </div>
          {/*  */}
          <button type='submit' className='btn btn-secondary'>
            Create
          </button>
        </div>
      </form>
    </>
  )
}

export default CustomerFormModal
