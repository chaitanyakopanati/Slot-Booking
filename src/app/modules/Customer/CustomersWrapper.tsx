/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { KTCard } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import CustomerHeader from './Coustomerlist/Table/CustomerHeader'
import Customerpagination from './Coustomerlist/Table/Customerpagination'
import CustomerTable from './Coustomerlist/Table/CustomerTable'
import { CustomerContext } from './CustomerContext'

const CustomersPage: FC = () => {
  return (
    <div className='overflow-hidden'>
      <KTCard className='ms-5 me-5'>
        {/* begin:: Header Component */}
        <CustomerHeader />
        {/* end:: Header Component */}

        {/* begin:: Table Component */}
        <CustomerTable />
        {/* end:: Table Component */}
      </KTCard>
      {/* begin:: Table-Pagination Component */}
      <Customerpagination />
      {/* end:: Table-Pagination Component */}
    </div>
  )
}

const CustomersWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <CustomerContext>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.CUSTOMERS' })}</PageTitle>
        <CustomersPage />
      </CustomerContext>
    </>
  )
}

export default CustomersWrapper
