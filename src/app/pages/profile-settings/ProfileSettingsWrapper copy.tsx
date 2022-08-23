/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, SetStateAction, useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {ErrorMessage, Formik} from 'formik'
import * as Yup from 'yup'
import Userservice from '../../modules/users/helperUser/ApiDatarequestUser'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

type Props = {
  category: any
}

const ProfileSettingsPage: FC<Props> = ({category}) => (
  <>
    <Formik
      initialValues={{
        ...category,
        id: category.data?.id,
        firstname: category.data?.firstname || '',
        lastname: category.data?.lastname || '',
        username: category.data?.username || '',
        email: category.data?.email || '',
        phone: category.data?.phone || '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, 'Only alphabets are allowed for this field ')
          .required('This field is required'),
      })}
      onSubmit={async (values: any, {resetForm}) => {
        LoderActions(true)

        try {
          if (values.id) {
            // Edit Api Response
            let response = await Userservice.editUser(values)

            if (response.success === false) {
              toast.error(response.message)
            } else {
              toast.success(`Data Updated Successfully`)
            }

            toast.dismiss('1s')

            resetForm({})
          }
        } catch (error: any) {
          toast.error(error.data.message)
        } finally {
          LoderActions(false)
        }
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
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
                        />
                        <div className='erro2' style={{color: 'red'}}>
                          <ErrorMessage name='username' />
                        </div>
                      </div>

                      <div className='row mb-6'>
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
                      <button type='reset' className='btn btn-light btn-active-light-primary me-2'>
                        Discard
                      </button>
                      <button
                        type='submit'
                        className='btn btn-primary'
                        id='kt_account_profile_details_submit'
                      >
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
        </form>
      )}
    </Formik>
  </>
)

const ProfileSettingsWrapper: FC = () => {
  const intl = useIntl()
  const navigator = useNavigate()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PROFILE.SETTINGS'})}</PageTitle>
      <ProfileSettingsPage category={undefined} />
    </>
  )
}

export {ProfileSettingsWrapper}
function LoderActions(arg0: boolean) {
  throw new Error('Function not implemented.')
}
