import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";

const Cart = () => {
  const { cart, emptycart, totalCart, removerItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container maxWidth="xl">
        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            mb: 3,
            mt: 3,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          No hay nada en el carro de compra. Por Favor selecciona un producto.
        </Typography>
        <Link className="linknav" to="/">
          <Button variant="contained" startIcon={<NavigateBeforeIcon />}>
            Volver
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        noWrap
        component="a"
        sx={{
          mr: 2,
          mb: 3,
          mt: 3,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Tu Compra.
      </Typography>

      <Grid
        sx={{
          display: "grid",
          p: 1.5,
          justifyContent: "space-around",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}
        container
      >
        {cart.map((item) => (
          <div key={item.id}>
            <Typography variant="h4" noWrap component="a">
              {item.name}
            </Typography>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.price * item.cantidad}</p>
            <Button
              onClick={() => removerItem(item.id)}
              variant="contained"
              color="error"
              startIcon={<DeleteForeverIcon />}
            ></Button>
            <hr />
          </div>
        ))}
      </Grid>
<div>
      <Typography variant="h4" noWrap component="a" sx={{
            mr: 2,
            mb: 3,
            mt: 3,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 200,
            color: "inherit",
            textDecoration: "none",
          }}>
      Total: ${totalCart()}
      </Typography>
  
            <Button
              sx={{ display: { xs: "none", md: "flex" }}}
              onClick={emptycart}
              variant="contained"
              color="error"
              startIcon={<RemoveShoppingCartIcon />}>Vaciar carrito</Button>

      <Link className="linknav" to="/checkout">
          <Button variant="contained" color="warning"
          startIcon={<ShoppingCartCheckoutIcon />}>
          Terminar mi compra
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Cart;
