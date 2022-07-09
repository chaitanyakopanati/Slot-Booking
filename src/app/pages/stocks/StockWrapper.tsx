import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import OfficeStockAvailabilityWrapper from '../../modules/office-stock-availability/OfficeStockAvailabilityWrapper'
import OfficeStockInwardsWrapper from '../../modules/office-stock-inwards/OfficeStockInwardsWrapper'
import OfficeStockOutwardsWrapper from '../../modules/office-stock-outwords/OfficeStockOutwardsWrapper'
import OfficeOldStockInwardsWrapper from '../../modules/office-old-stock-inwards/OfficeOldStockInwardsWrapper'
import OfficeOldStockOutwardsWrapper from '../../modules/office-old-stock-outwards/OfficeOldStockOutwardsWrapper'
import OfficeOldStockAvailabilityWrapper from '../../modules/office-old-stock-availability/OfficeOldStockAvailabilityWrapper'
import GodownStockInwardsWrapper from '../../modules/godown-stock-inwards/GodownStockInwardsWrapper'
import GodownStockAvailabilityWrapper from '../../modules/godown-stock-availability/GodownStockAvailabilityWrapper'
import OfficeStockInwardsFormWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockInwards/Form/OfficeStockInwardsFormWrapper'
import OfficeStockInwardsViewWrapper from '../../../_metronic/partials/widgets/tables/OfficeStockInwards/Form/OfficeStockInwardsViewWrapper'
// import OfficeStockW from '../../modules/office-stock-inwards/OfficeStockInwardsWrapper'

function StockWrapper() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='office-stock-inwards'
          element={
            <>
              <PageTitle>Office stock Inwards</PageTitle>
              <OfficeStockInwardsWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-stock-inwards/form/:id'
          element={
            <>
              <PageTitle>User Form</PageTitle>
              <OfficeStockInwardsFormWrapper />
            </>
          }
        />
        <Route
          path='office-stock-inwards/viewform/:id'
          element={
            <>
              <PageTitle>View office-stock-inwards</PageTitle>
              <OfficeStockInwardsViewWrapper />
            </>
          }
        />
        <Route
          path='office-stock-outwards'
          element={
            <>
              <PageTitle>Office stock Outwards</PageTitle>
              <OfficeStockOutwardsWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-stock-availability'
          element={
            <>
              <PageTitle>Office stock Availability</PageTitle>
              <OfficeStockAvailabilityWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-old-stock-inwards'
          element={
            <>
              <PageTitle>Office old stock inwards</PageTitle>
              <OfficeOldStockInwardsWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-old-stock-outwards'
          element={
            <>
              <PageTitle>Office old stock Outwards</PageTitle>
              <OfficeOldStockOutwardsWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='office-old-stock-availability'
          element={
            <>
              <PageTitle>Office old stock Availability</PageTitle>
              <OfficeOldStockAvailabilityWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='godown-stock-inwards'
          element={
            <>
              <PageTitle>Godown stock Inwards</PageTitle>
              <GodownStockInwardsWrapper />
            </>
          }
        />
        {/*  */}
        <Route
          path='godown-stock-availability'
          element={
            <>
              <PageTitle>Godown stock Availability</PageTitle>
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
