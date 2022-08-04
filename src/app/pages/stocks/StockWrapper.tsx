import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import OfficeStockInwardsWrapper from '../../modules/office-stock-inwards/OfficeStockInwardsWrapper'
import OfficeStockOutwardsWrapper from '../../modules/office-stock-outwords/OfficeStockOutwardsWrapper'
import OfficeOldStockOutwardsWrapper from '../../modules/office-old-stock-outwards/OfficeOldStockOutwardsWrapper'
import GodownStockInwardsWrapper from '../../modules/godown-stock-inwards/GodownStockInwardsWrapper'
import GodownStockAvailabilityWrapper from '../../modules/godown-stock-availability/GodownStockAvailabilityWrapper'
import OfficeStockAvailabilityWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockAvailability/OfficeStockAvailabilityWrapper'
import OfficeOldstockinwardWrapper from '../../../_metronic/partials/widgets/tables/OfficeOldStockInwards/OfficeOldstockinwardWrapper'
import OfficeOldStockAvailabilityWrapper from '../../../_metronic/partials/widgets/tables/OfficeOldStockAvailability/OfficeOldStockAvailabilityWrapper'
import OfficeStockOutwardsFormWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockOutwards/Form/OfficeStockOutwardsFormWrapper'
import OfficeStockOutwardsViewWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockOutwards/Form/OfficeStockOutwardsViewWrapper'
import OfficeStockInwardsFormWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockInwards/Form/OfficeStockInwardsFormWrapper'
import OfficeStockInwardsViewWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockInwards/Form/OfficeStockInwardsViewWrapper'
import OfficeOldStockInwardsFormWrapper from '../../../_metronic/partials/widgets/tables/OfficeOldStockInwards/Form/OfficeOldStockInwardsFormWrapper'
import OfficeOldStockInwardsViewWrapper from '../../../_metronic/partials/widgets/tables/OfficeOldStockInwards/Form/OfficeOldStockInwardsViewWrapper'
import OfficeOldStockOutwardsFormWrapper from '../../../_metronic/partials/widgets/tables/OfficeOldStockOutwards/Form/OfficeOldStockOutwardsFormWrapper'
import OfficeOldStockOutwardsViewWrapper from '../../../_metronic/partials/widgets/tables/OfficeOldStockOutwards/Form/OfficeOldStockOutwardsViewWrapper'
import GodownStockInwardsFormWrapper from '../../../_metronic/partials/widgets/tables/GodownStockInwards/Form/GodownStockInwardsFormWrapper'
import GodownStockInwardsViewWrapper from '../../../_metronic/partials/widgets/tables/GodownStockInwards/Form/GodownStockInwardsViewWrapper'

// import OfficeStockW from '../../modules/office-stock-inwards/OfficeStockInwardsWrapper'

function StockWrapper() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='office-stock-inwards'
          element={
            <>
              <PageTitle>Office Stock Inwards</PageTitle>
              <OfficeStockInwardsWrapper />
            </>
          }
        />
        <Route
          path='office-stock-inwards/inwardsform/:id'
          element={
            <>
              <PageTitle>Office Stock Inwards Form</PageTitle>
              <OfficeStockInwardsFormWrapper />
            </>
          }
        />
        <Route
          path='office-stock-inwards/office-stock-inwardsviewform/:id'
          element={
            <>
              <PageTitle>View Office Stock Inward</PageTitle>
              <OfficeStockInwardsViewWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='office-stock-outwards'
          element={
            <>
              <PageTitle>Office Stock Outwards</PageTitle>
              <OfficeStockOutwardsWrapper />
            </>
          }
        />
        <Route
          path='office-stock-outwards/form/:id'
          element={
            <>
              <PageTitle>Office Stock Outward Form</PageTitle>
              <OfficeStockOutwardsFormWrapper />
            </>
          }
        />
        <Route
          path='office-stock-outwards/office-stock-outwardsviewform/:id'
          element={
            <>
              <PageTitle>View Office Stock Outward </PageTitle>
              <OfficeStockOutwardsViewWrapper />
            </>
          }
        />

        {/*  */}
        <Route
          path='office-stock-availability'
          element={
            <>
              <PageTitle>Office Stock Availability</PageTitle>
              <OfficeStockAvailabilityWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-old-stock-inwards'
          element={
            <>
              <PageTitle>Office Old Stock Inwards</PageTitle>
              <OfficeOldstockinwardWrapper />
            </>
          }
        />
        <Route
          path='office-old-stock-inwards/inwardsOldform/:id'
          element={
            <>
              <PageTitle>Office Old Stock Inward Form</PageTitle>
              <OfficeOldStockInwardsFormWrapper />
            </>
          }
        />
        <Route
          path='office-old-stock-inwards/office-stock-inwardsOldviewform/:id'
          element={
            <>
              <PageTitle>View Office Old Stock Inward </PageTitle>
              <OfficeOldStockInwardsViewWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-old-stock-outwards'
          element={
            <>
              <PageTitle>Office Old Stock Outwards</PageTitle>
              <OfficeOldStockOutwardsWrapper />
            </>
          }
        />
        <Route
          path='office-old-stock-outwards/OutwardsOldform/:id'
          element={
            <>
              <PageTitle>Office Old Stock Outward Form</PageTitle>
              <OfficeOldStockOutwardsFormWrapper />
            </>
          }
        />
        <Route
          path='office-old-stock-outwards/office-stock-OutwardsOldviewform/:id'
          element={
            <>
              <PageTitle>View Office Old Stock Outward</PageTitle>
              <OfficeOldStockOutwardsViewWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-old-stock-availability'
          element={
            <>
              <PageTitle>Office Old Stock Availability</PageTitle>
              <OfficeOldStockAvailabilityWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='godown-stock-inwards'
          element={
            <>
              <PageTitle>Godown Stock Inwards</PageTitle>
              <GodownStockInwardsWrapper />
            </>
          }
        />
        <Route
          path='godown-stock-inwards/godownInwardsform/:id'
          element={
            <>
              <PageTitle>Godown Stock Inward Form</PageTitle>
              <GodownStockInwardsFormWrapper />
            </>
          }
        />
        <Route
          path='godown-stock-inwards/godown-stock-inwardsviewform/:id'
          element={
            <>
              <PageTitle>View Godown Stock Inward</PageTitle>
              <GodownStockInwardsViewWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='godown-stock-availability'
          element={
            <>
              <PageTitle>Godown Stock Availability</PageTitle>
              <GodownStockAvailabilityWrapper />
            </>
          }
        />
        {/*  */}
      </Route>
      <Route index element={<Navigate to='/stocks/office-stock-inwards' />} />
    </Routes>
  )
}

export default StockWrapper
