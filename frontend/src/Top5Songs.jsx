import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  
  )
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: "white",
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Las 5 Canciones Mas Reproducidas',
        color: "white",
        font: {
          size: 16
        }
  
      }
    }
  };
  
export default function Top5Songs({Listdata}){
  const data = {
    labels: Listdata.map((item) => item.name),
    datasets: [
      {
        data: Listdata.map((item) => item.playCount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#FF6344', '#FF6344', '#FF6344', '#FF6344', '#FF6344'],
        images: Listdata.map((item) => item.photo),
      },
    ],
  };

  return (
    <Doughnut data={data} options={options} />
    
  );
};


