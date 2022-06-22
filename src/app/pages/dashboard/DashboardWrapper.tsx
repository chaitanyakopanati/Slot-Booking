/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget1,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
  TablesWidget5,
  TablesWidget6,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
  TablesWidget10,
  TablesWidget11,
  TablesWidget13,
  MixedWidget8,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <TablesWidget13 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
