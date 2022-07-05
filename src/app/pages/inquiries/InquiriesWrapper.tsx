/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import InquiriesWrapper1 from '../../../_metronic/partials/widgets/tables/Inquiries/InquiriesWrapper1'

const InquiriesPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <InquiriesWrapper1  />
      </div>
    </div>
  </>
)

const InquiriesWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.INQUIRIES' })}</PageTitle>
      <InquiriesPage />
    </>
  )
}

export { InquiriesWrapper }
