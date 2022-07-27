import {ErrorMessage, Form, Formik, useFormikContext} from 'formik'
import {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import * as Yup from 'yup'
import {KTSVG} from '../../../../_metronic/helpers'
import {useAuth} from '../../../modules/auth/core/Auth'
import {useLoader} from '../../../modules/loader/LoaderContext'
import Profileservice from './ApiDatarequestProfile'
import showPwdImg from '../../../../app/images/eye-fill.svg'
import hidePwdImg from '../../../../app/images/eye-slash-fill.svg'

const ProfileSettingsFormModal: FC = () => {
  const [userId, setUserId] = useState()
  const navigation = useNavigate()
  const [setUser, setUserDetail] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    zoneId: '',
    roleId: '',
    modifyby: 1,
    status: '1',
    id: '',
  })

  const [userPswd, setUserPsw] = useState({
    password: '',
    confirmPassword: '',
  })

  const [isRevealPwd, setIsRevealPwd] = useState(false)
  const [isRevealConfPwd, setIsRevealConfPwd] = useState(false)

  const {auth} = useAuth()
  let {LoderActions} = useLoader()
  const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)

  useEffect(() => {
    console.log('auth', auth?.userId)
    if (auth) {
      GetUserTypeByIdAllData(auth.userId)
    }
  }, [])

  // useEffect(() => {
  //   if (userId) {
  //     console.log('userId:', userId)
  //   }
  // }, [userId])

  useEffect(() => {
    if (setUser) {
      console.log('setUser', setUser)
    }
  }, [setUser])

  const GetUserTypeByIdAllData: any = async (userId: number) => {
    let response = await Profileservice.GetUserTypeById(userId)
    // console.log(response, 'papppppppppppppp')
    setUserId(response.data)
    setUserDetail({
      // id: response.data?.id,
      firstname: response.data?.firstname,
      lastname: response.data?.lastname,
      username: response.data?.username,
      email: response.data?.email,
      phone: response.data?.phone,
      zoneId: response.data?.zoneId,
      roleId: response.data?.roleId,
      modifyby: 1,
      status: '1',
      id: response.data?.id,
    })
    setUserPsw({
      password: '',
      confirmPassword: '',
    })
  }

  useEffect(() => {
    console.log('userPswd', userPswd)
  }, [userPswd])

  return (
    <>
      <Formik
        initialValues={setUser}
        enableReinitialize={true}
        validationSchema={Yup.object({
          username: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          firstname: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          lastname: Yup.string()
            .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
            .required('This field is required'),
          email: Yup.string().email('Invalid email format').required('This field is required'),
          phone: Yup.string()
            .min(10, 'Invalid Phone Number')
            .matches(/^[0-9]{0,10}$/, 'Invalid Phone Number')
            .required('This field is required'),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          console.log('values++++++++++++++++++++++++++++++++++++++', values)
          LoderActions(true)

          try {
            // Edit Api Response
            let response = await Profileservice.editUser(values)
            console.log('Edit User*****************', response)

            if (response.success === false) {
              toast.error(response.message)
            } else {
              // toast.success(`Data Updated Successfully`)
              toast.success(response.message)
            }
            navigation('/master/users')
            toast.dismiss('1s')
          } catch (error: any) {
            console.log(error, 'error')
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => {
          // console.log('props.values:', props.values)
          return (
            <Form onSubmit={props.handleSubmit}>
              <div className='row gy-5 gx-xl-8'>
                <div className='col-xl-12'>
                  <div className='card mb-5 mb-xl-10 card-xxl-stretch'>
                    <div className='card-header border-0 cursor-pointer'>
                      <div className='card-title w-100 m-0 d-flex justify-content-between'>
                        <h3 className='fw-bolder m-0'>Profile Details</h3>
                        <div className='ms-3'>
                          <a
                            // href='#'
                            className=' btn-sm btn-flex btn btn-secondary btn-active-primary fw-bold'
                            data-bs-toggle='modal'
                            data-bs-target='#edit-password-modal'
                          >
                            <span className='svg-icon svg-icon-gray-500 me-1'>
                              <KTSVG
                                path='/media/icons/duotune/art/art005.svg'
                                className='svg-icon-3'
                              />
                            </span>
                            Change password
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id='kt_account_settings_profile_details' className='collapse show'>
                      {/* <form id='kt_account_profile_details_form' className='form'> */}
                      <div className='card-body border-top p-9'>
                        <div className='row mb-6'>
                          <div className='col-lg-12'>
                            <div className='row'>
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold required'>First Name:</label>
                                <input
                                  name='firstname'
                                  placeholder='First name'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.firstname}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  type='text'
                                  autoComplete='off'
                                />
                                <div className='erro2' style={{color: 'red'}}>
                                  <ErrorMessage name='firstname' />
                                </div>
                              </div>

                              <div className='col-lg-6'>
                                <label className='form-label fw-bold required'>Last Name:</label>
                                <input
                                  name='lastname'
                                  placeholder='Last name'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.lastname}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  type='text'
                                  autoComplete='off'
                                />
                                <div className='erro2' style={{color: 'red'}}>
                                  <ErrorMessage name='lastname' />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='row mb-6'>
                          <div className='col-lg-12'>
                            <div className='row'>
                              <div className='col-lg-6'>
                                <label className='form-label fw-bold required'>Username :</label>
                                <input
                                  name='username'
                                  placeholder='username'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.username}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  type='text'
                                  autoComplete='off'
                                  disabled
                                />
                                <div className='erro2' style={{color: 'red'}}>
                                  <ErrorMessage name='username' />
                                </div>
                              </div>

                              <div className='col-lg-6'>
                                <label className='form-label fw-bold required'>Email :</label>
                                <input
                                  name='email'
                                  placeholder='email'
                                  className='form-control form-control-lg form-control-solid'
                                  value={props.values.email}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  type='text'
                                  autoComplete='off'
                                  disabled
                                />
                                <div className='erro2' style={{color: 'red'}}>
                                  <ErrorMessage name='email' />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-lg-12'>
                            <label className='form-label fw-bold required'>Mobile no:</label>
                            <input
                              name='phone'
                              placeholder='Mobile no.'
                              className='form-control form-control-lg form-control-solid'
                              type='text'
                              value={props.values.phone}
                              onChange={(e) => {
                                if (e.target.value > String(9999999999)) {
                                  return
                                }
                                props.handleChange(e)
                              }}
                              onBlur={props.handleBlur}
                              autoComplete='off'
                            />
                            <div className='erro2' style={{color: 'red'}}>
                              <ErrorMessage name='phone' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='card-footer d-flex justify-content-end py-6 px-9'>
                        <button
                          type='reset'
                          // onClick={navigator(-1)}
                          onClick={() => navigation('/master/users')}
                          className='btn btn-light btn-active-light-primary me-2'
                        >
                          Discard
                        </button>
                        <button type='submit' className='btn btn-primary'>
                          Save Changes
                        </button>
                      </div>
                      {/* <input type='hidden' />
                      <div></div> */}
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>

      {/* Edit password::Modal */}
      <Formik
        initialValues={userPswd}
        // enableReinitialize={true}
        validationSchema={Yup.object({
          password: Yup.string()
            .label('Password')
            .required('This field is required')
            .min(8, 'Seems a bit short(Min 8 characters)...')
            .max(24, 'Please try a shorter password(Max 24 characters)...')
            .matches(
              passwordRegExp,
              'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special character'
            ),
          confirmPassword: Yup.string()
            .required('This field is required')
            .when('password', {
              is: (val: any) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
            }),
        })}
        onSubmit={async (values: any, {resetForm}) => {
          console.log('values++++++++++++++++++++++++++++++++++++++', values)
          let userCredentials = {userName: setUser['username'], password: values['password']}
          LoderActions(true)

          try {
            // Edit Api Response
            let response = await Profileservice.editPassword(userCredentials)
            console.log('Edit User*****************', response)

            if (response.success === false) {
              toast.error(response.message)
            } else {
              // toast.success(`Data Updated Successfully`)
              toast.success(response.message)
            }
            navigation('/profile-settings')
            resetForm({})

            toast.dismiss('1s')
          } catch (error: any) {
            console.log(error, 'error')
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => (
          <Form className='form' onSubmit={props.handleSubmit}>
            <div className='modal fade' id='edit-password-modal'>
              <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <div className='d-flex align-items-center'>
                      <div
                        className='btn btn-icon btn-sm btn-active-light-primary me-5'
                        role='button'
                        onClick={() => {
                          props.setErrors({})
                          props.resetForm()
                        }}
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      >
                        <span className='svg-icon svg-icon-2x'>
                          <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                        </span>
                      </div>
                      <h5 className='modal-title'>Change password</h5>
                    </div>

                    <div
                      className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                      role='button'
                      onClick={() => {
                        props.setErrors({})
                        props.resetForm()
                      }}
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    >
                      <span className='svg-icon svg-icon-2x'>
                        <KTSVG path='/media/icons/duotune/arrows/arr088.svg' />
                      </span>
                    </div>
                  </div>

                  <div className='modal-body'>
                    <div className='container-fluid p-0'>
                      {/* <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Current password:</label>
                    <input
                      placeholder='Current password'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div> */}

                      <div className='row w-100 mx-0 mb-4 gy-4'>
                        <div className='col'>
                          <label className='form-label fw-bold'>New password:</label>
                          <div className='d-flex flex-stack mb-2 position-relative'>
                            <input
                              placeholder='New password'
                              className='form-control form-control-lg form-control-solid'
                              type={isRevealPwd ? 'text' : 'password'}
                              value={props.values.password}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              name='password'
                              autoComplete='off'
                            />
                            <img
                              style={{position: 'absolute', right: '15px'}}
                              title={isRevealPwd ? 'Hide password' : 'Show password'}
                              src={isRevealPwd ? hidePwdImg : showPwdImg}
                              onClick={() => setIsRevealPwd((prevState) => !prevState)}
                            />
                          </div>
                        </div>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='password' />
                        </div>
                      </div>

                      <div className='row w-100 mx-0 mb-4 gy-4'>
                        <div className='col'>
                          <label className='form-label fw-bold'>Confirm password:</label>
                          <div className='d-flex flex-stack mb-2 position-relative'>
                            <input
                              placeholder='Confirm password'
                              className='form-control form-control-lg form-control-solid'
                              value={props.values.confirmPassword}
                              onChange={props.handleChange}
                              name='confirmPassword'
                              onBlur={props.handleBlur}
                              type={isRevealConfPwd ? 'text' : 'password'}
                              autoComplete='off'
                            />
                            <img
                              style={{position: 'absolute', right: '15px'}}
                              title={isRevealConfPwd ? 'Hide password' : 'Show password'}
                              src={isRevealConfPwd ? hidePwdImg : showPwdImg}
                              onClick={() => setIsRevealConfPwd((prevState) => !prevState)}
                            />
                          </div>
                        </div>
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='confirmPassword' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      data-bs-dismiss={
                        Object.keys(props.errors).length === 0 &&
                        props.values.password !== '' &&
                        props.values.confirmPassword !== ''
                          ? 'modal'
                          : 'xyz'
                      }
                    >
                      Update
                    </button>
                    {/* <button
                      type='button'
                      onClick={() => {
                        props.resetForm()
                      }}
                      data-bs-dismiss='modal'
                    >
                      Hello
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* Edit password::Modal */}
    </>
  )
}

export default ProfileSettingsFormModal
