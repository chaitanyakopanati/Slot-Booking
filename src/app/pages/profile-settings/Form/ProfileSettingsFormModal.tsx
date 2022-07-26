import {ErrorMessage, Form, Formik} from 'formik'
import React, {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import * as Yup from 'yup'
import {KTSVG} from '../../../../_metronic/helpers'
import {useAuth} from '../../../modules/auth/core/Auth'
import {useLoader} from '../../../modules/loader/LoaderContext'
import Profileservice from './ApiDatarequestProfile'
import {ID} from './ModelProfile'

const ProfileSettingsFormModal: FC = () => {
  const [userId, setUserId] = useState()
  const navigation = useNavigate()
  const [userId1, setUserId1] = useState({
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
  })
  const {auth} = useAuth()
  let {LoderActions} = useLoader()

  useEffect(() => {
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
    if (userId1) {
      console.log('userId1', userId1)
    }
  }, [userId1])

  const GetUserTypeByIdAllData: any = async (userId: number) => {
    let response = await Profileservice.GetUserTypeById(userId)
    // console.log(response, 'papppppppppppppp')
    setUserId(response.data)
    setUserId1({
      id: response.data?.id,
      firstname: response.data?.firstname,
      lastname: response.data?.lastname,
      username: response.data?.username,
      email: response.data?.email,
      phone: response.data?.phone,
    })
  }

  return (
    <>
      <Formik
        initialValues={userId1}
        enableReinitialize={true}
        validationSchema={Yup.object({
          name: Yup.string()
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
          console.log('values', values)
          LoderActions(true)

          try {
            // Edit Api Response
            let response = await Profileservice.editUser(values)
            console.log('Edit User*****************', response)

            if (response.success === false) {
              toast.error(response.message)
            } else {
              toast.success(`Data Updated Successfully`)
              toast.success(response.message)
            }
            navigation('/master/users')
            toast.dismiss('1s')

            resetForm({})
          } catch (error: any) {
            console.log(error, 'error')
            toast.error(error.data.message)
          } finally {
            LoderActions(false)
          }
        }}
      >
        {(props) => {
          console.log('props.values:', props.values)
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
                            href='#'
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
                            Edit password
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id='kt_account_settings_profile_details' className='collapse show'>
                      <form id='kt_account_profile_details_form' className='form'>
                        <div className='card-body border-top p-9'>
                          <div className='row mb-6'>
                            <div className='col-lg-12'>
                              <div className='row'>
                                <div className='col-lg-6'>
                                  <label className='form-label fw-bold required'>First Name:</label>
                                  <input
                                    placeholder='First name'
                                    className='form-control form-control-lg form-control-solid'
                                    value={props.values.firstname}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    type='text'
                                    name='firstname'
                                    autoComplete='off'
                                  />
                                  <div className='erro2' style={{color: 'red'}}>
                                    <ErrorMessage name='firstname' />
                                  </div>
                                </div>

                                <div className='col-lg-6'>
                                  <label className='form-label fw-bold required'>Last Name:</label>
                                  <input
                                    placeholder='Last name'
                                    className='form-control form-control-lg form-control-solid'
                                    value={props.values.lastname}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    type='text'
                                    name='lastname'
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
                                    placeholder='username'
                                    className='form-control form-control-lg form-control-solid'
                                    value={props.values.username}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    type='text'
                                    name='username'
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
                                    placeholder='email'
                                    className='form-control form-control-lg form-control-solid'
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    type='text'
                                    name='email'
                                    autoComplete='off'
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
                                placeholder='Mobile no.'
                                className='form-control form-control-lg form-control-solid'
                                type='number'
                                value={props.values.phone}
                                onChange={(e) => {
                                  if (+e.target.value > 9999999999) {
                                    return
                                  }
                                  props.handleChange(e)
                                }}
                                onBlur={props.handleBlur}
                                name='phone'
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
                        <input type='hidden' />
                        <div></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>

      {/* Edit password::Modal */}
      <div className='modal fade' id='edit-password-modal'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='d-flex align-items-center'>
                <div
                  className='btn btn-icon btn-sm btn-active-light-primary me-5'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span className='svg-icon svg-icon-2x'>
                    <KTSVG path='/media/icons/duotune/arrows/arr022.svg' />
                  </span>
                </div>
                <h5 className='modal-title'>Edit password</h5>
              </div>

              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
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
                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Current password:</label>
                    <input
                      placeholder='Current password'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold'>New password:</label>
                    <input
                      placeholder='New password'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>

                <div className='row w-100 mx-0 mb-4 gy-4'>
                  <div className='col'>
                    <label className='form-label fw-bold'>Confirm password:</label>
                    <input
                      placeholder='Confirm password'
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>
                <div className='row w-100 mx-0 mt-4 gy-4'>
                  <div className='col'>
                    <div className='form-check form-check-solid me-5 mb-0'>
                      <input className='form-check-input' type='checkbox' />
                      <label className='form-label m-0'>Show password</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit password::Modal */}
    </>
  )
}

export default ProfileSettingsFormModal
