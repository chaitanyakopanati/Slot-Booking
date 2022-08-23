// import React, {useState} from 'react'
// import * as Yup from 'yup'
// import clsx from 'clsx'
// import {Link, useNavigate} from 'react-router-dom'
// import {useFormik} from 'formik'
// import {requestPassword} from '../core/_requests'
// import {toast} from 'react-toastify'
// import {CustomTooltip} from '../../../routing/customtooltip'

// const initialValues = {
//   username: '',
// }

// const forgotPasswordSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Wrong email format')

//     .required('Email is required'),
// })

// export function ForgotPassword() {
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()
//   const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: forgotPasswordSchema,
//     onSubmit: (values, {setStatus, setSubmitting}) => {
//       console.log('kkkk')

//       setLoading(true)
//       setHasErrors(undefined)
//       toast.success('Data Successfully')
//       setTimeout(() => {
//         requestPassword(values.username)
//           .then(({data: {result}}) => {
//             setHasErrors(false)
//             setLoading(false)
//           })
//           .catch(() => {
//             setHasErrors(true)
//             setLoading(false)
//             toast.error('Wrong UserName')
//             setSubmitting(false)
//             setStatus('The login detail is incorrect')
//           })
//       }, 1000)
//     },
//   })

//   return (
//     <>
//       <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit}>
//         <div className='text-center mb-10'>
//           <h1 className='text-dark mb-3'>Forgot Password ?</h1>
//           {/* <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div> */}
//         </div>

//         <div className='fv-row mb-10'>
//           <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
//           <input
//             type='email'
//             placeholder=''
//             autoComplete='off'
//             {...formik.getFieldProps('username')}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             className={clsx(
//               'form-control form-control-lg form-control-solid',
//               {'is-invalid': formik.touched.username && formik.errors.username},
//               {
//                 'is-valid': formik.touched.username && !formik.errors.username,
//               }
//             )}
//           />
//           {formik.touched.username && formik.errors.username && (
//             <div className='fv-plugins-message-container'>
//               <div className='fv-help-block'>
//                 <span role='alert' style={{color: 'red'}}>
//                   {formik.errors.username}
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
//           <button
//             type='submit'
//             id='kt_password_reset_submit'
//             className='btn btn-lg btn-primary fw-bolder me-4'
//           >
//             <span className='indicator-label'>Submit</span>
//           </button>
//           <Link to='/auth/login'>
//             <button
//               type='button'
//               id='kt_login_password_reset_form_cancel_button'
//               className='btn btn-lg btn-secondary fw-bolder'
//             >
//               Cancel
//             </button>
//           </Link>{' '}
//         </div> */}

//         <div className='modal-footer'>
//           <CustomTooltip title='Close form'>
//             <button type='reset' onClick={() => navigate('/auth/login')} className='btn btn-light'>
//               Close
//             </button>
//           </CustomTooltip>

//           <CustomTooltip title='Submit form'>
//             <button type='submit' className='btn btn-primary'>
//               Submit
//             </button>
//           </CustomTooltip>
//         </div>
//       </form>
//     </>
//   )
// }

import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword, requestPasswords} from '../core/_requests'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'
import {error} from 'console'
import {useLoader} from '../../loader/LoaderContext'

const initialValues = {
  username: '',
}

const forgotPasswordSchema = Yup.object().shape({
  username: Yup.string().email('Wrong email format').required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  let {LoderActions} = useLoader()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      console.log('ggg')

      console.log('kkkk')

      LoderActions(true)

      // setHasErrors(undefined)
      // toast.success('Data Successfully')
      // toast.success(payload.message)

      // setTimeout(() => {
      //   requestPasswords(values.username)
      //     .then(({data: {result}}) => {
      //       debugger
      //       setHasErrors(false)
      //       // setLoading(false)
      //       if (result.status == true) {
      //         toast.success(result.message)
      //         console.log('ppp', result.message)
      //       } else {
      //         toast.error(result.message)
      //       }
      //       setLoading(false)
      //     })
      //     .catch(() => {
      //       setHasErrors(true)
      //       setLoading(false)
      //       // toast.error('Wrong UserName')
      //       // toast.error(error.result.message)

      //       setSubmitting(false)
      //       setStatus('The login detail is incorrect')
      //     })
      // })

      // setTimeout(() => {
      // .then(({data: {result}}) => {
      // debugger
      // setHasErrors(false)
      // setLoading(false)
      let response: any = await requestPasswords(values.username)
      console.log(response, 'result11111111111111111111')
      try {
        // LoderActions(false)
        toast.success(response.message)
        console.log(response, 'result222222222222222222222222222222')
        if (response.data.success == true) {
          LoderActions(false)

          toast.success(response.data.message)
          console.log('ppp', response.data.message)
          navigate('/auth')
        } else {
          LoderActions(false)
          console.log('milind')

          toast.error(response.data.message)
        }
      } catch (error: any) {
        console.log('jjjjjjjjj')

        console.log(error, 'raghuggggggggg')
        LoderActions(false)
        toast.error(error.data.data.message)
      }
      // })
    },
  })

  // const formik = useFormik({
  //   initialValues: initialValues,

  //   validationSchema: forgotPasswordSchema,
  //   onSubmit: async (values: any, {resetForm}) => {
  //     debugger
  //     console.log('ccccc', values.username)
  //     console.log('kkkddddd')

  //     try {
  //       let response = requestPassword(values.username)
  //       console.log('Add User*****************', response)

  //       toast.dismiss('1s')
  //     } catch (error: any) {
  //       console.log(error, 'error')
  //       toast.error(error.data.message)
  //     }
  //   },
  // })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit}>
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>Forgot Password ?</h1>
          {/* <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div> */}
        </div>

        <div className='fv-row mb-10'>
          <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
          <input
            type='email'
            placeholder=''
            autoComplete='off'
            {...formik.getFieldProps('username')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {'is-invalid': formik.touched.username && formik.errors.username},
              {
                'is-valid': formik.touched.username && !formik.errors.username,
              }
            )}
          />
          {formik.touched.username && formik.errors.username && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert' style={{color: 'red'}}>
                  {formik.errors.username}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
          <CustomTooltip title='Submit form'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </CustomTooltip>
          <Link to='/auth/login'>
            <button
              type='button'
              id='kt_login_password_reset_form_cancel_button'
              className='btn btn-lg btn-secondary fw-bolder'
            >
              Cancel
            </button>
          </Link>{' '}
        </div>
      </form>
    </>
  )
}
