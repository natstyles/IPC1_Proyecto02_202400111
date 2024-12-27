import Piechart from './Piechart';
import Barchart from './Barchart';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Dashboard() {

  // Datos para la tabla de productos
  const[productRows, setProductRows] = React.useState([]); 

  //Datos para la tabla clientes
  const[clientRows, setClientRows] = React.useState([]);

  //FUNCIÓN PARA LLAMAR DATOS DE LA TABLA DE PRODUCTOS
  function callProducts(){
    fetch('http://localhost:3000/getProducts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('GETPRODUCS:', data);
      setProductRows(data);
    })
  }

  //FUNCIÓN PARA LLAMAR DATOS DE LA TABLA DE CLIENTES
  function callClients(){
    fetch('http://localhost:3000/getUsers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('GETCLIENTS:', data);
      setClientRows(data);

      console.log(clientRows);
    })
  }  

  //INGRESANDO VALORES DEL FORM DE PRODUCTOS
  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    try{
      const jsonObject = JSON.parse(e.target[0].value);

      console.log(jsonObject);

      fetch('http://localhost:3000/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObject),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        callProducts();
      })
      .catch((error) => {
        console.error('Error:', error);
      });      
    }catch(e){
      console.log(e);
    } 
  }

  //INGRESANDO VALORES DEL FORM DE CLIENTES
  const handleSubmitCreateClient = (e) => {
    e.preventDefault();
    try{
      const jsonObject = JSON.parse(e.target[0].value);

      console.log(jsonObject);

      fetch('http://localhost:3000/createClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObject),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        callClients();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    }catch(e){
      console.log(e);
    } 
  }

  //FUNCIÓN PARA ELIMINAR PRODUCTOS
  const HandleDeleteProduct = (e) => {
    e.preventDefault();
    try{
      const data = {"id_producto": e.target.value};


      //FETCH PARA ELIMINAR PRODUCTOS EN http://localhost:3000/deleteProduct
      fetch('http://localhost:3000/deleteProduct', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('BARRITA ELIMINADA:', data);
        callProducts();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }catch(e){
      console.log(e);
    }
  }
  
  return (
    //RENDER CUANDO SE HAGA ALGUN CAMBIO EN LA PAGINA (ACTUALIZAR)
    React.useEffect(() => {
      callProducts();
      callClients();
    },[]),

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
        <form onSubmit={handleSubmitCreateProduct} method="post">
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
              label="Productos en formato JSON"
              multiline
              rows={6}
              defaultValue='{"id_producto": "001", "nombre_producto": "Karategui", "precio_producto": 499.99, "stock_producto": 100}'
              variant="filled"
              fullWidth
            />
            <IconButton
              type='submit'
              color="primary"
              aria-label="Añadir Producto"
              size="large"
              sx={{ marginTop: 2 }}
            >
              <AddCircleRoundedIcon fontSize="inherit" />
            </IconButton>
          </Paper>
        </form>

        {/* Tarjeta Crear Cliente */}
        <form onSubmit={handleSubmitCreateClient} method="post">
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
            type='submit'
            color="primary"
            aria-label="Añadir Cliente"
            size="large"
            sx={{ marginTop: 2 }}
          >
            <AddCircleRoundedIcon fontSize="inherit" />
          </IconButton>
        </Paper>
        </form>
      </Box>

      {/* Gráfico de Pie */}
      <Piechart clientRows = {clientRows} />

      {/* Gráfico de Barras */}
      <Barchart productRows = {productRows}/>

      {/* Tabla de Productos */}
      <Typography variant="h5" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        Productos
      </Typography>
      <TableContainer id="1" component={Paper} sx={{ marginTop: 2, width: '90%' }}>
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
            {productRows.length !== 0 &&
              productRows.map((row) => (
                <TableRow key={row.id_producto}>
                  <TableCell>{row.id_producto}</TableCell>
                  <TableCell>{row.nombre_producto}</TableCell>
                  <TableCell>{row.precio_producto}</TableCell>
                  <TableCell>{row.stock_producto}</TableCell>
                  <TableCell>
                    <Button
                      color="error"
                      size="small"
                      value = {row.id_producto}
                      onClick={HandleDeleteProduct}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
            
          </TableBody>
        </Table>
      </TableContainer>

      {/* Tabla de Clientes */}
      <Typography variant="h5" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        Clientes
      </Typography>
      <TableContainer id="2" component={Paper} sx={{ marginTop: 2, width: '90%' }}>
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
            {clientRows.length !== 0 &&
              clientRows.map((row) => (
                <TableRow key={row.id_cliente}>
                  <TableCell>{row.id_cliente}</TableCell>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.apellido}</TableCell>
                  <TableCell>{row.nit}</TableCell>
                  <TableCell>{row.edad}</TableCell>
                </TableRow>
              ))
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;