/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { InstallationWrapper } from '../../../_metronic/partials/widgets/tables/Installation/InstallationWrapper1'


const InstallationsPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <InstallationWrapper/>
      </div>
    </div>
  </>
)

const InstallationsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.INSTALLATIONS' })}</PageTitle>
      <InstallationsPage />
    </>
  )
}

export { InstallationsWrapper }
