//LIBRERIAS
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Pie } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
  
  // Configuración de opciones comunes para gráficos
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Gráfica de clientes en base a su edad',
        color: 'black',
        font: {
          size: 16,
        },
      },
    },
  };
  
function piechart({clientRows}){
    //CONTAMOS CUANTOS HAY DE MAYOR Y MENOR DE EDAD
    let mayor = 0;
    let menor = 0;
    for (let i = 0; i < clientRows.length; i++) {
        if (clientRows[i].mayor_edad) {
          mayor++;
        } else {
          menor++;
        }
      }
    
    // Datos para el gráfico Pie
    const sampleData = {
        labels: ['Mayores', 'Menores'],
        datasets: [
        {
            data: [mayor, menor],
            backgroundColor: ['#FF6384', '#36A2EB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
        ],
    };  




    return(
        console.log("SKIBIDIROW", clientRows),

      <Paper
      elevation={3}
      sx={{
        padding: 2,
        width: '80%',
        maxWidth: 400,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        marginTop: 4,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Gráfico Pie
      </Typography>
      <Pie data={sampleData} options={chartOptions} />
    </Paper>
    )
}

export default piechart;