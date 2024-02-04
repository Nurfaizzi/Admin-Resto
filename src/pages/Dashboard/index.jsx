import React from 'react'
import DashboardComp from '../../components/dashboardcomp'
import Navbar from '../../components/navbar'
import Table from '../../components/Table'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
    <DashboardComp />
    {/* <Table /> */}
    </div>
  )
}

export default Dashboard