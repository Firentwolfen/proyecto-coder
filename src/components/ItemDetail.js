import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ItemDetail = ({
  id,
  name,
  stock,
  category,
  image,
  description,
  price,
}) => {
  
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  const { agregarAlCarrito, isInCart } = useCartContext()

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {
    const item = {
        id,
        name,
        stock,
        category,
        image,
        description,
        price,
        cantidad
    }

    agregarAlCarrito(item)
}

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar src={image} alt={name} sx={{ width: 500, height: 500 }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: {price}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Categoría: {category}
            </Typography>
          </CardContent>
          <CardActions>
          <Button
              onClick={handleVolver}
              variant="contained"
              startIcon={<NavigateBeforeIcon />}
            >
              Volver
            </Button>
        
          </CardActions>
          { stock <= 20 && <h5>Últimas unidades disponibles!</h5> }
          {
    !isInCart(id)
        ? <ItemCount 
                cantidad={cantidad}
                setCantidad={setCantidad}
                max={stock}
                onAdd={handleAgregar}
            />
        : <Link className="linknav" to="/checkout">
        <Button variant="contained" color="warning"
        startIcon={<ShoppingCartCheckoutIcon />}>
        Terminar mi compra
        </Button>
      </Link>
}
        </Card>
      

      </Stack>
    </div>
  );
};

export default ItemDetail;
