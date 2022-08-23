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
      LoderActions(true)
      let response: any = await requestPasswords(values.username)
      try {
        toast.success(response.message)
        if (response.data.success == true) {
          LoderActions(false)
          toast.success(response.data.message)
          navigate('/auth')
        } else {
          LoderActions(false)
          toast.error(response.data.message)
        }
      } catch (error: any) {
        LoderActions(false)
        toast.error(error.data.data.message)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit}>
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'>Forgot Password ?</h1>
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
