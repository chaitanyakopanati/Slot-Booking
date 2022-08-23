/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {getUserByToken, login} from '../core/_requests'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'
import {toast} from 'react-toastify'
import showPwdImg from '../../../images/eye-fill.svg'
import hidePwdImg from '../../../images/eye-slash-fill.svg'

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
  rememberMe: false,
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {auth, saveAuth, setCurrentUser} = useAuth()
  const [isRevealPwd, setIsRevealPwd] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth, status} = await login(values.username, values.password)
        if (auth && status == 200) {
          if (formik.values.rememberMe) {
            setCookie()
          }
        }
        saveAuth(auth)
        toast.success('Sign in Successfully')
      } catch (error) {
        let {data}: any = error
        if (data.message) {
          setStatus(data.message)
          toast.error(data.message)
        } else {
          toast.error(data.message)
          setStatus('The registration details is incorrect')
        }
        saveAuth(undefined)
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    const getCookie = (cookieName: string) => {
      var name = cookieName + '='
      var decodeCookie = decodeURIComponent(document.cookie)
      var ca = decodeCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }

    const getCookieData = () => {
      let user = getCookie('userName')
      let pswd = getCookie('passWord')

      formik.setFieldValue('username', user)
      formik.setFieldValue('password', pswd)
    }
    getCookieData()
  }, [])

  const setCookie = () => {
    var username = formik.values.username
    var password = formik.values.password

    document.cookie = 'userName=' + username + ';path=http://localhost:3011/'
    document.cookie = 'passWord=' + password + ';path=http://localhost:3011/'
  }

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to Softnet CRM</h1>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Username</label>
        <input
          placeholder='Username'
          {...formik.getFieldProps('username')}
          className={clsx(
            'form-control form-control-lg form-control-solid'
            // {'is-invalid': formik.touched.username && formik.errors.username},
            // {
            //   'is-valid': formik.touched.username && !formik.errors.username,
            // }
          )}
          type='username'
          name='username'
          autoComplete='off'
        />
        {formik.touched.username && formik.errors.username && (
          <div className='fv-plugins-message-container'>
            <span role='alert' style={{color: 'red'}}>
              {formik.errors.username}
            </span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      <div className='fv-row mb-5'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
          </div>
        </div>
        <div className='d-flex flex-stack mb-2 position-relative'>
          <input
            type={isRevealPwd ? 'text' : 'password'}
            autoComplete='off'
            placeholder='password'
            {...formik.getFieldProps('password')}
            className={clsx('form-control form-control-lg form-control-solid')}
          />
          <img
            style={{position: 'absolute', right: '15px'}}
            title={isRevealPwd ? 'Hide password' : 'Show password'}
            src={isRevealPwd ? hidePwdImg : showPwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert' style={{color: 'red'}}>
                {formik.errors.password}
              </span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex flex-stack mb-2'>
          <div className='form-check form-check-solid me-5 mb-0'>
            <input
              className='form-check-input'
              type='checkbox'
              name='rememberMe'
              onChange={formik.handleChange}
            />
            <label className='form-label m-0'>Remember me</label>
          </div>
          {/* begin::Link */}
          <Link
            to='/auth/forgot-password'
            className=' fs-6 fw-bolder'
            style={{marginLeft: '5px', color: '#6c757d'}}
          >
            Forgot Password ?
          </Link>
          {/* end::Link */}
        </div>
        {/* </div> */}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Sign In</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  )
}
