import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import { Button, Divider, Input, Typography } from "@mui/material";

const RegisterScreen = () => {
  const { user, loading, register } = useLoginContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(values);
  };

  return (
    <div className="login-screen">
      <div className="login">
        <Typography marginY={3} variant="h2" noWrap component="a">
          Register
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
            type="password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />

          <Button variant="text" color="primary" disabled={loading}>
            {loading ? "Cargando..." : "Ingresar"}
          </Button>
          {user.error && <p className="error">{user.error}</p>}
        </form>
        <Link className="logus" to="/login">
          Ya estoy registrado
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
