import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import {toast} from 'react-toastify'

const initialValues = {
  username: 'admin',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    // .min(3, 'Minimum 3 symbols')
    // .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      toast.success('Data Successfully')
      setTimeout(() => {
        requestPassword(values.username)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            toast.error('Wrong UserName')
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <>
      <form
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
        noValidate
        id='kt_login_password_reset_form'
        onSubmit={formik.handleSubmit}
      >
        <div className='text-center mb-10'>
          {/* begin::Title */}
          <h1 className='text-dark mb-3'>Forgot Password ?</h1>
          {/* end::Title */}

          {/* begin::Link */}
          <div className='text-gray-400 fw-bold fs-4'>Enter your email to reset your password.</div>
          {/* end::Link */}
        </div>

        <div className='fv-row mb-10'>
          <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
          <input
            type='email'
            placeholder=''
            autoComplete='off'
            {...formik.getFieldProps('email')}
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
        {/* end::Form group */}

        <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
          <button
            type='submit'
            id='kt_password_reset_submit'
            className='btn btn-lg btn-primary fw-bolder me-4'
          >
            <span className='indicator-label'>Submit</span>
          </button>
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
        {/* end::Form group */}
      </form>
    </>
  )
}
