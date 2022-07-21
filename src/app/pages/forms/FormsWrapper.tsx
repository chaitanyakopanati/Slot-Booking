/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import FormWrapper from '../../../_metronic/partials/widgets/tables/Forms/FormWrapper'

const FormsPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <FormWrapper />
      </div>
    </div>
  </>
)

const FormsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.FORMS' })}</PageTitle>
      <FormsPage />
    </>
  )
}

export { FormsWrapper }
