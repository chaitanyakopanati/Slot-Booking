import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { editCustomer, saveCustomer ,uploadImage} from '../helperCustomer/ApiDataRequest'
import ImageSelect from '../../../../app/images/error-profile.svg'
import { CustomTooltip } from '../../../routing/customtooltip'
import { useAuth } from '../../auth'
import * as Yup from 'yup'



const API_URL_DATA = process.env.REACT_APP_IMG_PATH

  const idProofPath: string = `${API_URL_DATA}Mediaupload/Customer/IDProof//`
  const gstProofPath: string = `${API_URL_DATA}MediaUpload/Customer/GSTCertificate//`
  const addressProofPath: string = `${API_URL_DATA}MediaUpload/Customer/AddressProof/`

  let validationSchemaNewForm = Yup.object({
    IdproofImageFile: Yup.string().required('Please Select IdProof '),
    AddressproofImageFile: Yup.string().required('Please Select Address Proof '),
    GstcerificateImageFile: Yup.string().required('Please Select Gst Proof '),
   
  })

export const CustomerFormImageUploadModal = () => {
  let {id} = useParams()
  const {auth} = useAuth()

  console.log("id",id);
  const navigate = useNavigate()
  const [initialValues, setInitialValues] = useState<any>({  
    IdproofImageFile: '',
  AddressproofImageFile: '',
  GstcerificateImageFile: ''
})

  useEffect(() => {
    setInitialValues({
    
      IdproofImageFile:  '',
      AddressproofImageFile:
        '',
      GstcerificateImageFile:
         '',
         Userid:id,
      CreatedBy: auth?.userId || '',
      IsMasterUser: false,
    })
  }, [])

  const [idProofImage, setIdProofImage] = useState<any>(null)
  const [addressProofImage, setAddressProofImage] = useState<any>(null)
  const [gstCerificateImage, setGstCerificateImage] = useState<any>(null)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchemaNewForm,
    onSubmit: async (values) => {

        let formData: any = new FormData()
        delete formData.CreatedBy
        Object.entries(values).forEach(([key, value]) => {
          if (value) formData.append(key, value as string)
        })
        !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
        delete formData.CreatedBy
        let response = await uploadImage(formData)
        if (response.success) {
          toast.success(response.message)
          navigate(`/forms/formsimgupload/${id}`)
        } else {
          toast.error(response.message)
        //   navigate(`/forms/formsimgupload/${id}`)
        }
      }

  })

  let fetchFilePath = async (file: any) => {
    const objectUrl = URL.createObjectURL(file[0])
    return objectUrl
  }
  const idProofImageUrl =async (filePath:any)=>{
    if(filePath[0].name.split('.')[1]=='pdf'){
      setIdProofImage('/media/icons/duotune/coding/pdfimg.png')
      console.log("111");
      
     }else if(filePath[0].name.split('.')[1]=='xl' || filePath[0].name.split('.')[1]=='xlsx' ||filePath[0].name.split('.')[1]=='xls'){
       setIdProofImage('/media/icons/duotune/coding/excelimage.png')
      }else if(filePath[0].name.split('.')[1]=='doc'){
       setIdProofImage('/media/icons/duotune/coding/docimage.png')
      }else {
        let url = await fetchFilePath(filePath)
        setIdProofImage(url)
      }
    
    }
  
    const addressProofImageUrl =async (filePath:any)=>{
    if(filePath[0].name.split('.')[1]=='pdf'){
      setAddressProofImage('/media/icons/duotune/coding/pdfimg.png')
      console.log("111");
      
     }else if(filePath[0].name.split('.')[1]=='xl' || filePath[0].name.split('.')[1]=='xlsx' ||filePath[0].name.split('.')[1]=='xls'){
      setAddressProofImage('/media/icons/duotune/coding/excelimage.png')
      }else if(filePath[0].name.split('.')[1]=='doc'){
        setAddressProofImage('/media/icons/duotune/coding/docimage.png')
      }else {
        let url = await fetchFilePath(filePath)
        setAddressProofImage(url)
      }
    
    }
  
    const gstProofImageUrl =async (filePath:any)=>{
    if(filePath[0].name.split('.')[1]=='pdf'){
      setGstCerificateImage('/media/icons/duotune/coding/pdfimg.png')
      console.log("111");
      
     }else if(filePath[0].name.split('.')[1]=='xl' || filePath[0].name.split('.')[1]=='xlsx' ||filePath[0].name.split('.')[1]=='xls'){
      setGstCerificateImage('/media/icons/duotune/coding/excelimage.png')
      }else if(filePath[0].name.split('.')[1]=='doc'){
        setGstCerificateImage('/media/icons/duotune/coding/docimage.png')
      }else {
        let url = await fetchFilePath(filePath)
        setGstCerificateImage(url)
        console.log("url",url);
        
      }
    
    }
  return (
<>
<form onSubmit={formik.handleSubmit}>
        <div className='d-flex flex-column me-n7 pe-7'>
          <div className='container-fluid p-0'>
              <div className='row w-100 mx-0 mb-4 gy-4'>

               <div className='col-lg-4 text-center'>
                  <div className='pb-5'>
                  <h5 className='m-0'>ID Proof</h5>
                  </div>
                  <div
                  className='image-input image-input-empty'
                  style={{
                    backgroundImage: `url(${
                      idProofImage ? idProofImage : ImageSelect
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
                      name='IdproofImageFile'
                      // accept='.png, .jpg, .jpeg .pdf'
                      accept='.png, .jpg, .jpeg ,.pdf,.xl,.xls,.xlsx,.doc'
                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        idProofImageUrl(e.target.files)
                        // let url = await fetchFilePath(e.target.files)
                        // setIdProofImage(url)
                        formik.setFieldValue('IdproofImageFile', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                  </div>
                  <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.IdproofImageFile && formik.errors.IdproofImageFile
                          ? formik.errors.IdproofImageFile
                          : null}
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
                        ?  addressProofImage
                        : ImageSelect
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
                      // accept='.png, .jpg, .jpeg'
                      accept='.png, .jpg, .jpeg ,.pdf,.xl,.xls,.xlsx,.doc'

                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        // let url = await fetchFilePath(e.target.files)
                        // setAddressProofImage(url)
                        addressProofImageUrl(e.target.files)
                        formik.setFieldValue('AddressproofImageFile', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
                <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.AddressproofImageFile && formik.errors.AddressproofImageFile
                          ? formik.errors.AddressproofImageFile
                          : null}
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
                        : ImageSelect
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
                      // accept='.png, .jpg, .jpeg'
                      accept='.png, .jpg, .jpeg ,.pdf,.xl,.xls,.xlsx,.doc'
                      onChange={async (e) => {
                        if (!e.target.files) {
                          return
                        }
                        gstProofImageUrl(e.target.files)
                        // let url = await fetchFilePath(e.target.files)
                        // setGstCerificateImage(url)
                        formik.setFieldValue('GstcerificateImageFile', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
                <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.GstcerificateImageFile && formik.errors.GstcerificateImageFile
                          ? formik.errors.GstcerificateImageFile
                          : null}
                      </div>
              </div>          
              </div>

              <div className='modal-footer'>
            <CustomTooltip title='Close Customer'>
              <button type='reset' onClick={() => navigate('/customers')} className='btn btn-light'>
                Close
              </button>
            </CustomTooltip>

            <CustomTooltip title='Submit Customer'>
              <button type='submit'  className='btn btn-primary'>
                Next
              </button>
            </CustomTooltip>
          </div>
          </div>

        </div>
      </form>
              </>


  )
}
