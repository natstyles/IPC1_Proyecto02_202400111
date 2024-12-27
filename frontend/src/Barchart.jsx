//LIBRERIAS
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Bar } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );
  
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
        text: 'Productos ordenados por precio',
        color: 'black',
        font: {
          size: 16,
        },
      },
    },
  };



function Barchart({productRows}) {

  //FUNCIÓN PARA GENERAR COLORES RANDOM PARA LOS GRÁFICOS
  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    //CONVERTIR LOS VALORES A FORMATO HEX
    const colorHex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    return colorHex;
  }
  
    // Datos para el gráfico de barras
    const barData = {
      labels: [],
      datasets: [
        {
          label: 'Mostrar / Ocultar gráfico',
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        },
      ],
    };

    //BUBBLE SORT PARA ORDENAR LOS PRODUCTOS POR PRECIO (MAYOR A MENOR)
    for (let i = 0; i < productRows.length; i++) {
      for (let j = 0; j < productRows.length - 1 - i; j++) {
        if (productRows[j].precio_producto < productRows[j + 1].precio_producto) {
          let aux = productRows[j];
          productRows[j] = productRows[j + 1];
          productRows[j + 1] = aux;
        }
      }
    }

    //CICLO FOR PARA RECORRER LOS PRODUCTOS Y AGREGARLOS
    for (let i = 0; i < productRows.length; i++) {
      const color = randomColor();

      barData.labels.push(productRows[i].nombre_producto);
      barData.datasets[0].data.push(productRows[i].precio_producto);
      barData.datasets[0].backgroundColor.push(color);
      barData.datasets[0].hoverBackgroundColor.push(color);
    }

    return(
      console.log('BarchartSSS', productRows),

        <Paper
        elevation={3}
        sx={{
          padding: 2,
          width: '80%',
          maxWidth: 600,
          textAlign: 'center',
          backgroundColor: '#ffffff',
          borderRadius: 2,
          marginTop: 4,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Gráfico de Barras
        </Typography>
        <Bar data={barData} options={chartOptions} />
      </Paper>
    )   
}

export default Barchart;