import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({ cantidad, setCantidad, max, onAdd }) => {
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  return (
    <div>
      <Button
        onClick={handleRestar}
        variant="outlined"
        disabled={cantidad === 1}
      >
        -
      </Button>

      <Typography variant="caption" display="block" gutterBottom>
      {cantidad}
      </Typography>

      <Button
        onClick={handleSumar}
        variant="outlined"
        disabled={cantidad === max}
      >
        +
      </Button>

      <Button
        onClick={onAdd}
        variant="outlined"
        startIcon={<AddShoppingCartIcon/>}
        >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
