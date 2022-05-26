
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import UsersWrapper from '../../modules/users/UsersWrapper'


function MasterWrapper() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle>Users</PageTitle>
              <UsersWrapper/>
            </>
          }
        />
        
        {/*  */}
      </Route>
      <Route index element={<Navigate to='/master/users' />} />
    </Routes>
  )
}

export default MasterWrapper