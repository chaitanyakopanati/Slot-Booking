import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {UsersWrapper} from '../pages/users/UsersWrapper'
import {ComplaintTypesWrapper} from '../pages/complaint-types/ComplaintTypesWrapper'
import {FaultsWrapper} from '../pages/faults/FaultsWrapper'
import {ZonesWrapper} from '../pages/zones/ZonesWrapper'
import {MainPointsWrapper} from '../pages/main-points/MainPointsWrapper'
import {CompaniesWrapper} from '../pages/companies/CompaniesWrapper'
import {BanksWrapper} from '../pages/banks/BanksWrapper'
import {ProductsWrapper} from '../pages/products/ProductsWrapper'
import {PackagesWrapper} from '../pages/packages/PackagesWrapper'
import {PackageCategoriesWrapper} from '../pages/package-categories/PackageCategoriesWrapper'
import {ProfileSettingsWrapper} from '../pages/profile-settings/ProfileSettingsWrapper'

import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='users' element={<UsersWrapper />} />
        <Route path='complaint-types' element={<ComplaintTypesWrapper />} />
        <Route path='faults' element={<FaultsWrapper />} />
        <Route path='zones' element={<ZonesWrapper />} />
        <Route path='main-points' element={<MainPointsWrapper />} />
        <Route path='companies' element={<CompaniesWrapper />} />
        <Route path='banks' element={<BanksWrapper />} />
        <Route path='products' element={<ProductsWrapper />} />
        <Route path='packages' element={<PackagesWrapper />} />
        <Route path='package-categories' element={<PackageCategoriesWrapper />} />
        <Route path='profile-settings' element={<ProfileSettingsWrapper />} />

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
