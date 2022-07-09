/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, SetStateAction } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import OfficeStockInwardslistWrapper1 from '../../../_metronic/partials/widgets/tables/OfficeStockInwards/OfficeStockInwardslistWrapper1'

const ComplaintTypesPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'> 
        <OfficeStockInwardslistWrapper1/>
      </div>
    </div>
  </>
)

const ComplaintTypesWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.COMPLAINT.TYPES1' })}</PageTitle>
      <ComplaintTypesPage />
    </>
  )
}





export { ComplaintTypesWrapper }
