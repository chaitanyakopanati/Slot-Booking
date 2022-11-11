import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import {FC, useEffect, useRef, useState} from 'react'
import { Form, useFormik } from 'formik'
import ImageSelect from '../../../../../../app/images/error-profile.svg'
import { toast } from 'react-toastify'
import Inquiriesservice from '../helperForms/ApiDataRequest'
import { CustomTooltip } from '../../../../../../app/routing/customtooltip'
import { useAuth } from '../../../../../../app/modules/auth'


const API_URL_DATA = process.env.REACT_APP_IMG_PATH
let validationSchemaNewForm = Yup.object({
    FormDocument: Yup.string().required('Please Select FormDocument'),
   
  })
const idProofPath: string = `${API_URL_DATA}MediaUpload/Form/`
export const FromsImageUploadModal = () => {
    const navigation = useNavigate()
    let {id} = useParams()
    const {auth} = useAuth()


    const [initialValues, setInitialValues] = useState<any>({
      
        FormDocument:'',
      userId:id,
      IsMasterUser:false,
      CreatedBy: auth?.userId || '',
    })

  const [idProofImage, setIdProofImage] = useState<any>(null)
  let fetchFilePath = async (file: any) => {
    const objectUrl = URL.createObjectURL(file[0])
    return objectUrl
  }

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: initialValues,
//     // validationSchema: validationSchemaNewForm,
//     onSubmit: async (values: any, {resetForm}) => {
      
// console.log("values",values);

//       LoderActions(true)
    

//       try {
//         if (values.id) {
//           // Edit Api Response
//           let formData: any = new FormData()
//           delete formData.ModifyBy
//           Object.entries(values).forEach(([key, value]) => {
//             if (value) formData.append(key, value as string)
//           })
//           !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
//           delete formData.ModifyBy
//           console.log(`formData`,formData )
//           let response: any = await Inquiriesservice.editForms(formData)
//           if (response.success === false) {
//             toast.error(response.message)
//           } else {
//             toast.success(response.message)
//           }
//           navigation('/forms')
//           toast.dismiss('1s')
//         } else {
//           let formData: any = new FormData()
//           delete formData.CreatedBy
//           Object.entries(values).forEach(([key, value]) => {
//             if (value) formData.append(key, value as string)
//           })
//           !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
//           delete formData.CreatedBy
//           console.log(`formData`,formData )

//           let response: any = await Inquiriesservice.postForms(formData)
//           if (response.success === false) {
//             toast.error(response.message)
//           } else {
//             toast.success(response.message)
//           }
//           toast.dismiss('1s')
//           navigation('/forms')
//         }
//       } catch (error: any) {
//         toast.error(error.data.message)
//       }
//       let remark:any=''
//       // if (values.formtype == '4' && !values.id) {
//       if (values.formtype == '4' ) {
//       try {
//           let res = await Inquiriesservice.ValidateUserById(values.userid)
//           if (res.success === false) {

//             // toast.error(res.message)
//             try {
//               let response = await Inquiriesservice.postInstallations(values)
    
//               if (response.success === false) {
//                 toast.error(response.message)
//                 } else {
//                 toast.success(response.message)
//               }
//               toast.dismiss('1s')
//             } catch (error: any) {
//               toast.error(error.data.message)
//             }
//             } else {
//             // toast.success(response.message)
//              try {
//               let response = await Inquiriesservice.GetInstallationsTypeById(res.installationId)
    
//               if (response.success === false) {
//                 toast.error(response.message)
//               } else {
//                 toast.success(response.message)
//                 if( response.data.userName ){
//                   remark +=`userName = ${response.data.userName},`
//                 }          
//                 if( response.data.installerName ){                 
//                   remark +=`installerName = ${response.data.installerName},`
//                 }  
//                  if( response.data.connectiontypeName ){
//                   remark +=`connectiontypeName = ${response.data.connectiontypeName},`
//                 }  
//                 if( response.data.cabletypeName ){
//                  remark +=`cabletypeName = ${response.data.cabletypeName},`
//                 }
//                 if( response.data.accesspointip ){
//                   remark +=`accesspointip = ${response.data.accesspointip},`
//                 } 
//                 if( response.data.cablelength ){
//                   remark +=`cablelength = ${response.data.cablelength},`
//                 } 
//                 if(response.data.iptypeName){
//                   remark +=`iptypeName = ${response.data.iptypeName},`
//                 }   
              
//               toast.dismiss('1s')
//             } 
//             // catch (error: any) {
//             //   toast.error(error.data.message)
//             // }
//             try {
//               let response = await Inquiriesservice.postInstallations(values,remark,res.installationId)
    
//               if (response.success === false) {
//                 toast.error(response.message)
//                 } else {
//                 toast.success(response.message)
//               }
//               toast.dismiss('1s')
//             } catch (error: any) {
//               toast.error(error.data.message)
//             }

//           }
//         //   toast.dismiss('1s')
//         }
//         //  catch (error: any) {
//         //   toast.error(error.data.message)
//         // }
//       }
//     },
//   })


const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchemaNewForm,
    onSubmit: async (values: any) => {
      
      console.log("values",values);

    //   LoderActions(true)
      let formData: any = new FormData()
    //   delete formData.CreatedBy
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value as string)
      })
      !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
    //   delete formData.CreatedBy
      let response = await Inquiriesservice.formUploadImage(formData)
      if (response.success) {
        toast.success(response.message)
        navigation('/inquiries')
      } else {
        toast.error(response.message)
      //   navigate(`/forms/formsimgupload/${id}`)
      }
    

    //   try {
    //     if (values.id) {
    //       // Edit Api Response
    //       let formData: any = new FormData()
    //       delete formData.ModifyBy
    //       Object.entries(values).forEach(([key, value]) => {
    //         if (value) formData.append(key, value as string)
    //       })
    //       !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
    //       delete formData.ModifyBy
    //       console.log(`formData`,formData )
    //       let response: any = await Inquiriesservice.editForms(formData)
    //       if (response.success === false) {
    //         toast.error(response.message)
    //       } else {
    //         toast.success(response.message)
    //       }
    //       navigation('/forms')
    //       toast.dismiss('1s')
    //     } else {
    //       let formData: any = new FormData()
    //       delete formData.CreatedBy
    //       Object.entries(values).forEach(([key, value]) => {
    //         if (value) formData.append(key, value as string)
    //       })
    //       !values.IsMasterUser && formData.append('IsMasterUser', values.IsMasterUser)
    //       delete formData.CreatedBy
    //       console.log(`formData`,formData )

    //       let response: any = await Inquiriesservice.postForms(formData)
    //       if (response.success === false) {
    //         toast.error(response.message)
    //       } else {
    //         toast.success(response.message)
    //       }
    //       toast.dismiss('1s')
    //       navigation('/forms')
    //     }
    //   } catch (error: any) {
    //     toast.error(error.data.message)
    //   }
      // if (values.formtype == '4' && !values.id) {
    //   if (values.formtype == '4' ) {
    //   try {
    //       let res = await Inquiriesservice.ValidateUserById(values.userid)
    //       if (res.success === false) {

    //         // toast.error(res.message)
    //         try {
    //           let response = await Inquiriesservice.postInstallations(values)
    
    //           if (response.success === false) {
    //             toast.error(response.message)
    //             } else {
    //             toast.success(response.message)
    //           }
    //           toast.dismiss('1s')
    //         } catch (error: any) {
    //           toast.error(error.data.message)
    //         }
    //         } else {
    //         // toast.success(response.message)
    //          try {
    //           let response = await Inquiriesservice.GetInstallationsTypeById(res.installationId)
    
    //           if (response.success === false) {
    //             toast.error(response.message)
    //           } else {
    //             toast.success(response.message)
    //             if( response.data.userName ){
    //               remark +=`userName = ${response.data.userName},`
    //             }          
    //             if( response.data.installerName ){                 
    //               remark +=`installerName = ${response.data.installerName},`
    //             }  
    //              if( response.data.connectiontypeName ){
    //               remark +=`connectiontypeName = ${response.data.connectiontypeName},`
    //             }  
    //             if( response.data.cabletypeName ){
    //              remark +=`cabletypeName = ${response.data.cabletypeName},`
    //             }
    //             if( response.data.accesspointip ){
    //               remark +=`accesspointip = ${response.data.accesspointip},`
    //             } 
    //             if( response.data.cablelength ){
    //               remark +=`cablelength = ${response.data.cablelength},`
    //             } 
    //             if(response.data.iptypeName){
    //               remark +=`iptypeName = ${response.data.iptypeName},`
    //             }   
              
    //           toast.dismiss('1s')
    //         } 
    //         try {
    //           let response = await Inquiriesservice.postInstallations(values,remark,res.installationId)
    
    //           if (response.success === false) {
    //             toast.error(response.message)
    //             } else {
    //             toast.success(response.message)
    //           }
    //           toast.dismiss('1s')
    //         } catch (error: any) {
    //           toast.error(error.data.message)
    //         }

    //       }
    //         }
    //     }
    //   }
  }
})

const idProofImageUrl =async (filePath:any)=>{
    console.log("filePath",filePath[0].name.split('.')[1]);
    
  
  
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
   return (
    <>
      <form
        onSubmit={formik.handleSubmit}
      >
         <div className='pb-5'>
                  <h5 className='m-0'>Form Document</h5>
                </div>
                <div
                  className='image-input image-input-empty'
                  style={{
                    backgroundImage: `url(${
                      idProofImage ? idProofImage :  ImageSelect
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
                      name='FormDocument'
                    //   value={formik?.values?.FormDocument || ''}
                      accept='.png, .jpg, .jpeg ,.pdf,.xl,.xls,.xlsx,.doc'
                      onChange={async (e) => {
                        if (!e?.target?.files) {
                          return
                        }
                        idProofImageUrl(e.target.files)
                        // let url = await fetchFilePath(e?.target?.files)
                        // setIdProofImage(url)
                        formik.setFieldValue('FormDocument', e.target.files[0])
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </label>
                </div>
                <div className='erro2' style={{color: 'red'}}>
                        {formik.touched.FormDocument && formik.errors.FormDocument
                          ? formik.errors.FormDocument
                          : null}
                      </div>

                
                <div className='modal-footer border-0 pb-0 pt-0'>
          {/* begin::close button */}
          <CustomTooltip title='Close form'>
            <button type='reset' onClick={() => navigation('/forms')} className='btn btn-light'>
              Close
            </button>
          </CustomTooltip>
          {/* end::close button */}

          {/* begin::create/update Button */}
          <CustomTooltip title='Submit form'>
            <button type='submit' className='btn btn-primary'>
            Submit
            </button>
          </CustomTooltip>
          {/* end::create/update Button */}
        </div>
      </form>
    </>
  )
}
function LoderActions(arg0: boolean) {
    throw new Error('Function not implemented.')
}



