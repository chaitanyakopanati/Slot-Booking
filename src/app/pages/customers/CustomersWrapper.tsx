/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import TablesWidget12 from '../../../_metronic/partials/widgets/tables/Customer/TablesWidget12'



const CustomersPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <TablesWidget12 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const CustomersWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.CUSTOMERS' })}</PageTitle>
      <CustomersPage />
    </>
  )
}

export { CustomersWrapper }
