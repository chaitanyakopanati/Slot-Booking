/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, SetStateAction} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import ProfileSettingsFormModal from './Form/ProfileSettingsFormModal'

const ProfileSettingsPage: FC = () => (
  <div className='row gy-5 gx-xl-8'>
    <div className='col-xl-12'>
      <ProfileSettingsFormModal />
    </div>
  </div>
)

const ProfileSettingsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PROFILE.SETTINGS'})}</PageTitle>
      <ProfileSettingsPage />
    </>
  )
}

export {ProfileSettingsWrapper}
