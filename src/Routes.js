import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import MainLayout from './layout/MainLayout'
import Region from './regions/Region'
import AddRegion from './regions/AddRegion'
import EditRegion from './regions/EditRegion'
import Employee from './Employee/Employee'
import AddEmployee from './Employee/AddEmployee'

export default function Routes() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <Region /> },
            { path: 'region/new', element: <AddRegion /> },
            { path: 'region/edit', element: <EditRegion /> },
            { path: 'employee', element: <Employee /> },
            { path: 'employee/new', element: <AddEmployee /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}
