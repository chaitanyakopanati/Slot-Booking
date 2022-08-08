// import React, {useState} from 'react'
// import * as Yup from 'yup'
// import clsx from 'clsx'
// import {Link} from 'react-router-dom'
// import {useFormik} from 'formik'
// import {requestPassword} from '../core/_requests'
// import {toast} from 'react-toastify'

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
//         {/* <div className='text-center mb-10'>
//           <h1 className='text-dark mb-3'>Forgot Password ?</h1>x
//           <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div>
//         </div> */}

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

//         <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
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
//         </div>
//       </form>
//     </>
//   )
// }

import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import {toast} from 'react-toastify'
import {CustomTooltip} from '../../../routing/customtooltip'

const initialValues = {
  username: '',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')

    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  // const formik = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: forgotPasswordSchema,
  //   onSubmit: (values, {setStatus, setSubmitting}) => {
  //     console.log('kkkk')

  //     setLoading(true)
  //     setHasErrors(undefined)
  //     toast.success('Data Successfully')
  //     setTimeout(() => {
  //       requestPassword(values.username)
  //         .then(({data: {result}}) => {
  //           setHasErrors(false)
  //           setLoading(false)
  //         })
  //         .catch(() => {
  //           setHasErrors(true)
  //           setLoading(false)
  //           toast.error('Wrong UserName')
  //           setSubmitting(false)
  //           setStatus('The login detail is incorrect')
  //         })
  //     }, 1000)
  //   },
  // })

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: forgotPasswordSchema,
    onSubmit: async (values: any, {resetForm}) => {
      console.log('ccccc', values.username)
      console.log('kkkddddd')

      try {
        let response = requestPassword(values.username)
        console.log('Add User*****************', response)

        toast.dismiss('1s')
      } catch (error: any) {
        console.log(error, 'error')
        toast.error(error.data.message)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit}>
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>Forgot Password ?</h1>x
          <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div>
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
          {/* <button
            type='submit'
            id='kt_password_reset_submit'
            className='btn btn-lg btn-primary fw-bolder me-4'
          >
            <span className='indicator-label'>Submit</span>
          </button> */}
          {/* <CustomTooltip title='Submit form'>
                    <button type='submit' className='btn btn-primary'>
                      {itemIdForUpdate === 'add' ? 'Create' : 'Update'}
                    </button>
                  </CustomTooltip> */}
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
