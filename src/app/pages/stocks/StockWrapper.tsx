import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import OfficeStockInwardsWrapper from '../../modules/office-stock-inwards/OfficeStockInwardsWrapper'
import OfficeStockOutwardsWrapper from '../../modules/office-stock-outwords/OfficeStockOutwardsWrapper'
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
              <OfficeStockInwardsWrapper/>
            </>
          }
        />
        {/*  */}
        <Route
          path='office-stock-outwards'
          element={
            <>
              <PageTitle>Office stock Outwards</PageTitle>
              <OfficeStockOutwardsWrapper/>
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