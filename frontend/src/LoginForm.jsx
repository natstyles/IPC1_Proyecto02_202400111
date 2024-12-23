import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit =  (event) => {
    event.preventDefault();

    const user = event.target[0].value;
    const password = event.target[1].value;

    const data = {user, pass:password};
    console.log(data);

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9fafc',
      }}
    >
      {/* Título */}
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>
        Cobra Kai Dojo - Inicio de Sesión
      </h2>

    <form onSubmit={handleSubmit}>
          {/* Nombre de usuario */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Nombre de usuario"
          variant="standard"
        />
      </Box>

      {/* Contraseña */}
      <FormControl sx={{ width: '100%' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Botón de inicio de sesión */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: '100%', marginTop: 2 }}
      >
        Iniciar Sesión
      </Button>
    </form>
    </Box>
  );
}

export default LoginForm;
