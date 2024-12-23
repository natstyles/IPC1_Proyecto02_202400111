import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Pie, Bar } from 'react-chartjs-2';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
      text: 'Título del Gráfico',
      color: 'black',
      font: {
        size: 16,
      },
    },
  },
};

// Datos para el gráfico Pie
const sampleData = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
    },
  ],
};

// Datos para el gráfico de barras
const barData = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      label: 'Valores ABCD',
      data: [15, 25, 35, 45],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
    },
  ],
};

// Datos para la tabla de productos
const productRows = [
  { id: '001', name: 'Karategui', price: 499.99, stock: 50, action: 'Eliminar' },
];

// Datos para la tabla de clientes
const clientRows = [
  { id: '001', name: 'Erwin', lastname: 'Vásquez', nit: 'C/F', age: 23 },
];

function Dashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: 4,
        backgroundColor: '#e3f2fd',
        minHeight: '80vh',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Título principal */}
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Cobra Kai - Dashboard
      </Typography>

      {/* Contenedor de tarjetas */}
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Tarjeta Crear Producto */}
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width: 300,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Crear producto
          </Typography>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={6}
            defaultValue='{"id_producto": "001", "nombre_producto": "Karategui", "precio_producto": 499.99, "stock_producto": 100}'
            variant="filled"
            fullWidth
          />
          <IconButton
            color="primary"
            aria-label="Añadir Producto"
            size="large"
            sx={{ marginTop: 2 }}
          >
            <AddCircleRoundedIcon fontSize="inherit" />
          </IconButton>
        </Paper>

        {/* Tarjeta Crear Cliente */}
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width: 300,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Crear cliente
          </Typography>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={6}
            defaultValue='{"id_cliente": "001", "nombre": "Sty", "apellido": "Less", "nit": "C/F", "edad": 18}'
            variant="filled"
            fullWidth
          />
          <IconButton
            color="primary"
            aria-label="Añadir Cliente"
            size="large"
            sx={{ marginTop: 2 }}
          >
            <AddCircleRoundedIcon fontSize="inherit" />
          </IconButton>
        </Paper>
      </Box>

      {/* Gráfico Pie */}
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

      {/* Gráfico de Barras */}
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

      {/* Tabla de Productos */}
      <Typography variant="h5" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        Productos
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2, width: '90%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>
                  <Button
                    color="error"
                    size="small"
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Tabla de Clientes */}
      <Typography variant="h5" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        Clientes
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2, width: '90%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>NIT</TableCell>
              <TableCell>Edad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.nit}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
