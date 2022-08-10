/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, SetStateAction} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {useAuth} from '../../modules/auth'
const DashboardPage: FC = () => (
   
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        {/* <TablesWidget13 className='card-xxl-stretch mb-5 mb-xl-8' /> */}
      </div>
    </div>
  </>
)


const DashboardWrapper: FC = () => {
  const intl = useIntl()
  const {currentUser,auth} = useAuth()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id:`welcome ${auth?.username}`})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
