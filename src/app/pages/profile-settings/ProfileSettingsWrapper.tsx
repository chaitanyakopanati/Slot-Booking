/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  TablesWidget12,
} from '../../../_metronic/partials/widgets'

const ProfileSettingsPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        {/* <TablesWidget12 className='card-xxl-stretch mb-5 mb-xl-8' /> */}

        <div className='card mb-5 mb-xl-10 card-xxl-stretch'>
          <div className='card-header border-0 cursor-pointer'>
            <div className='card-title m-0'>
              <h3 className='fw-bolder m-0'>Profile Details</h3>
            </div>
          </div>
          <div id="kt_account_settings_profile_details" className='collapse show'>
            <form id="kt_account_profile_details_form" className='form'>
              <div className='card-body border-top p-9'>
                {/* <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
                  <div className='col-lg-8'>
                    <div className='image-input image-input-outline' data-kt-image-input="true" style={{ backgroundImage: "url('/metronic8/demo1/assets/media/svg/avatars/blank.svg')" }}>
                      <div className='image-input-wrapper w-125px h-125px' style={{ backgroundImage: "url(/metronic8/demo1/assets/media/avatars/300-1.jpg)" }}>
                      </div>
                      <label className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow' data-kt-image-input-action="change" >
                        <i className='bi bi-pencil-fill fs-7'></i>
                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                        <input type="hidden" name="avatar_remove" />
                      </label>
                      <span className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow' data-kt-image-input-action="remove">
                        <i className='bi bi-x fs-2'></i>
                      </span>
                    </div>
                    <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
                  </div>
                </div> */}
                <div className='row mb-6'>
                  <label className='col-lg-3 col-form-label required fw-bold fs-6'>Full Name</label>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <input type="text" name="fname" className='form-control form-control-lg form-control-solid mb-3 mb-lg-0' placeholder="First name" />
                      </div>
                      <div className='col-lg-6 '>
                        <input type="text" name="lname" className='form-control form-control-lg form-control-solid' placeholder="Last name" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-3 col-form-label required fw-bold fs-6'>
                    <span>Username</span>
                  </label>
                  <div className='col-lg-9'>
                    <input type="text" name="username" className='form-control form-control-lg form-control-solid' placeholder="Username" />
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-3 col-form-label required fw-bold fs-6'>
                    <span>Email</span>
                  </label>
                  <div className='col-lg-9'>
                    <input type="email" name="email" className='form-control form-control-lg form-control-solid' placeholder="Email" />
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-3 col-form-label required fw-bold fs-6'>
                    <span>Contact Phone</span>
                  </label>
                  <div className='col-lg-9'>
                    <input type="tel" name="phone" className='form-control form-control-lg form-control-solid' placeholder="Phone number" />
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-3 col-form-label required fw-bold fs-6'>Communication</label>
                  <div className='col-lg-9'>
                    <div className='d-flex align-items-center mt-3'>

                      <label className='form-check form-check-inline form-check-solid me-5'>
                        <input className='form-check-input' name="communication[]" type="checkbox" value="1" />
                        <span className='fw-bold ps-2 fs-6'>Email</span>
                      </label>

                      <label className='form-check form-check-inline form-check-solid'>
                        <input className='form-check-input' name="communication[]" type="checkbox" value="2" />
                        <span className='fw-bold ps-2 fs-6'>Phone</span>
                      </label>

                    </div>
                  </div>
                </div>
                
              </div>
              <div className='card-footer d-flex justify-content-end py-6 px-9'>
                <button type="reset" className='btn btn-light btn-active-light-primary me-2'>Discard</button>
                <button type="submit" className='btn btn-primary' id="kt_account_profile_details_submit">Save Changes</button>
              </div>
              <input type="hidden" /><div></div></form>
          </div>
        </div>
      </div>
    </div>
  </>
)

const ProfileSettingsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'PROFILE.SETTINGS' })}</PageTitle>
      <ProfileSettingsPage />
    </>
  )
}

export { ProfileSettingsWrapper }
