import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {CustomersWrapper} from '../pages/customers/CustomersWrapper'
import {ComplaintTypesWrapper} from '../pages/complaint-types/ComplaintTypesWrapper'
import {ProfileSettingsWrapper} from '../pages/profile-settings/ProfileSettingsWrapper'
import {FormsWrapper} from '../pages/forms/FormsWrapper'
import {InstallationsWrapper} from '../pages/installations/InstallationsWrapper'
import {InquiriesWrapper} from '../pages/inquiries/InquiriesWrapper'

import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import MasterWrapper from '../pages/master/MasterWrapper'
import { PageTitle } from '../../_metronic/layout/core'
import CustomerFormWrapper from '../../_metronic/partials/widgets/tables/Customer/Form/CustomerFormWrapper'
import CustomerFormModal from '../../_metronic/partials/widgets/tables/Customer/Form/CustomerFormModal'


const PrivateRoutes = () => {
  const StockWrapper = lazy(() => import('../pages/stocks/StockWrapper'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='customers' element={<CustomersWrapper />} />
        <Route
          path='customers/form/:id'
          element={
            <>
              <PageTitle>Add Customer</PageTitle>
              {/* <CustomerFormWrapper /> */}
              <CustomerFormModal/>
            </>
          }
        />
        <Route path='complaint-types' element={<ComplaintTypesWrapper />} />
        <Route
          path='stocks/*'
          element={
            <SuspensedView>
              <StockWrapper />
            </SuspensedView>
          
          }
        />
        {/*  */}
        <Route
          path='master/*'
          element={
            <SuspensedView>
              <MasterWrapper />
            </SuspensedView>
          
          }
        />
        <Route path='profile-settings' element={<ProfileSettingsWrapper />} />
        <Route path='forms' element={<FormsWrapper />} />
        <Route path='installations' element={<InstallationsWrapper />} />
        <Route path='inquiries' element={<InquiriesWrapper />} />

        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
