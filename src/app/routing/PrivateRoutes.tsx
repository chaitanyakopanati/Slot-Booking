import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import CustomersWrapper from '../modules/Customer/CustomersWrapper'
import {ComplaintTypesWrapper} from '../pages/complaint-types/ComplaintTypesWrapper'
import {ProfileSettingsWrapper} from '../pages/profile-settings/ProfileSettingsWrapper'
import {FormsWrapper} from '../pages/forms/FormsWrapper'
import {InstallationsWrapper} from '../pages/installations/InstallationsWrapper'
import {InquiriesWrapper} from '../pages/inquiries/InquiriesWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import MasterWrapper from '../pages/master/MasterWrapper'
import {PageTitle} from '../../_metronic/layout/core'
import InquiriesFormWrapper from '../../_metronic/partials/widgets/tables/Inquiries/Form/InquiriesFormWrapper'
import InquiriesViewWrapper from '../../_metronic/partials/widgets/tables/Inquiries/Form/InquiriesViewWrapper'
import InstallationFormWrapper from '../../_metronic/partials/widgets/tables/Installation/Form/InstallationFormWrapper'
import InstallationViewWrapper from '../../_metronic/partials/widgets/tables/Installation/Form/InstallationViewWrapper'
import ComplaintWrapper from '../modules/Complaints/ComplaintWrapper'
import ComplaintFormModal from '../modules/Complaints/Form/ComplaintFormModal'
import ComplaintFormWrapper from '../modules/Complaints/Form/ComplaintFormWrapper'
import ComplaintViewWrapper from '../modules/Complaints/Form/ComplaintViewWrapper'
import FormsFormWrapper from '../../_metronic/partials/widgets/tables/Forms/Form/FormsFormWrapper'
import FormViewWrapper from '../../_metronic/partials/widgets/tables/Forms/Form/FormViewWrapper'
import CustomerFormWrapper from '../modules/Customer/Form/CustomerFormWrapper'
import CustomerViewWrapper from '../modules/Customer/Form/CustomerViewWrapper'
// import CustomerFormViewModal from '../modules/Customer/Coustomerlist/Table/CustomerFormViewModal'

const PrivateRoutes = () => {
  const StockWrapper = lazy(() => import('../pages/stocks/StockWrapper'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/complaint' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />

        <Route path='complaint' element={<ComplaintWrapper />} />
        <Route path='complaint/complaintviewform/:id' element={<ComplaintViewWrapper />} />
        <Route
          path='complaint/complaintform/:id'
          element={
            <>
              <PageTitle>Complaint Form</PageTitle>
              {/* <ComplaintFormWrapper /> */}
              <ComplaintFormWrapper />
            </>
          }
        />

        {/* <Route
          path='complaint/complaintform/:id&name'
          element={
            <>
              <PageTitle>Complaint Form</PageTitle>
              <ComplaintFormWrapper />
            </>
          }
        /> */}

        <Route path='customers' element={<CustomersWrapper />} />
        <Route path='customers/customerviewform/:id' element={<CustomerViewWrapper />} />

        <Route
          path='customers/customersform/:id'
          element={
            <>
              <PageTitle>Customer Form</PageTitle>
              <CustomerFormWrapper />
              {/* <CustomerFormModal /> */}
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

        <Route
          path='forms/formsform/:id'
          element={
            <>
              <PageTitle>Form</PageTitle>
              <FormsFormWrapper />
            </>
          }
        />
        <Route
          path='forms/formsviewform/:id'
          element={
            <>
              <PageTitle>View Form</PageTitle>
              <FormViewWrapper />
            </>
          }
        />

        <Route path='installations' element={<InstallationsWrapper />} />
        <Route
          path='installations/installationsform/:id'
          element={
            <>
              <PageTitle>Installation Form</PageTitle>
              <InstallationFormWrapper />
            </>
          }
        />
        <Route
          path='installations/installationsviewform/:id'
          element={
            <>
              <PageTitle>View Installation</PageTitle>
              <InstallationViewWrapper />
            </>
          }
        />
        <Route path='inquiries' element={<InquiriesWrapper />} />
        <Route
          path='inquiries/inquiriesform/:id'
          element={
            <>
              <PageTitle>Inquirie Form</PageTitle>
              <InquiriesFormWrapper />
            </>
          }
        />
        <Route
          path='inquiries/inquiriesviewform/:id'
          element={
            <>
              <PageTitle>View Inquirie</PageTitle>
              <InquiriesViewWrapper />
            </>
          }
        />
        {/* <Route path='*' element={<Navigate to='/error/404' />} /> */}
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
