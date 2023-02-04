import { Link } from 'react-router-dom'
import { useLoginContext } from '../context/LoginContext'
import useForm from '../hooks/useForm'
import { Button, Divider, Input, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';

const LoginScreen = () => {
    const { login, user, loading, googleLogin } = useLoginContext()
    
    const { values, handleInputChange } = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(values)
    }

    return (
        <div className='login-screen'>
        <div className='login'>
            <Typography
       marginY={3}
          variant="h2"
          noWrap
          component="a"
        >
         Login
        </Typography>
      <Divider light />
                <form onSubmit={handleSubmit}>
                <Input
              placeholder="email"
              onChange={handleInputChange}
              type="email"
              name="email"
              value={values.email}
            />
                    <Input
              placeholder="contraseña"
              type='password'
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
            />  
                   <Button variant="text" color="primary" disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</Button>     
                   {user.error && <p className='error'>{user.error}</p>}
                </form>
                <Button variant="contained" color="primary" endIcon={<GoogleIcon/>} onClick={googleLogin}>Ingresar con google</Button>
                <Divider light />
                <Link className ='logus' to="/register">Registrarme</Link>
            </div>
        </div>
    )
}

export default LoginScreen