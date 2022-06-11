
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import UsersWrapper from '../../modules/users/UsersWrapper'
import ComplaintTypesWrapper from '../../modules/complaint-types/Complaintlist/ComplaintTypesWrapper'
import FaultsWrapper from '../../modules/faults/FaultsWrapper'
import ZonesWrapper from '../../modules/zones/ZonesWrapper'
import MainPointsWrapper from '../../modules/main-points/MainPointsWrapper'
import CompaniesWrapper from '../../modules/companies/CompaniesWrapper'
import BanksWrapper from '../../modules/banks/BanksWrapper'
import ProductsWrapper from '../../modules/products/ProductsWrapper'
import PackagesWrapper from '../../modules/packages/PackagesWrapper'
import PackageCategoriesWrapper from '../../modules/package-categories/PackageCategoriesWrapper'



function MasterWrapper() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle>Users</PageTitle>
              <UsersWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='complaint-types'
          element={
            <>
              <PageTitle>Complaint Types</PageTitle>
              <ComplaintTypesWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='faults'
          element={
            <>
              <PageTitle>Faults</PageTitle>
              <FaultsWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='zones'
          element={
            <>
              <PageTitle>Zones</PageTitle>
              <ZonesWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='main-points'
          element={
            <>
              <PageTitle>Main Points</PageTitle>
              <MainPointsWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='companies'
          element={
            <>
              <PageTitle>Companies</PageTitle>
              <CompaniesWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='banks'
          element={
            <>
              <PageTitle>Banks</PageTitle>
              <BanksWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='products'
          element={
            <>
              <PageTitle>Products</PageTitle>
              <ProductsWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='packages'
          element={
            <>
              <PageTitle>Packages</PageTitle>
              <PackagesWrapper />
            </>
          }
        />
        {/*  */}

        <Route
          path='package-categories'
          element={
            <>
              <PageTitle>Package Categories</PageTitle>
              <PackageCategoriesWrapper />
            </>
          }
        />
        {/*  */}
      </Route>
      <Route index element={<Navigate to='/master/users' />} />
    </Routes >
  )
}

export default MasterWrapper