import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import Table from '../Table';
ChartJS.register(CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend);
const DashboardComp = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
      },
      title: {
        display: false,
        
      },
    },
  };
const data = {
    labels : ["Januari","Ferbuari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
    datasets : [
        {
            label : "Data Pemasukan",
            data : [900000,500000,400000,700000,750000,600000,250000,550000,800000,780000,730000,830000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [
              "#586B90"
              ],
        },
        {
          label : "Data Pengeluaran",
          data : [90000,50000,100000,150000,75000,200000,0,95000,200000,250000,150000,300000],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: [
              'orange',

            ],
      },
    ]
}
  return (
    <div className='flex-column  pt-14 bg-slate-100'>
         <Bar options={options} data={data} />

         <Table />
    </div>
  )
}

export default DashboardComp