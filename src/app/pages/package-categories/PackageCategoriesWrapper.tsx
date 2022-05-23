/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  TablesWidget13,
} from '../../../_metronic/partials/widgets'

const PackageCategoriesPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <TablesWidget13 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const PackageCategoriesWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.PACKAGE.CATEGORIES' })}</PageTitle>
      <PackageCategoriesPage />
    </>
  )
}

export { PackageCategoriesWrapper }
