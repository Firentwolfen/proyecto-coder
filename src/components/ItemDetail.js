import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const ItemDetail = ( {id, name, stock, category, image, description, price} ) => {
   
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>

<Stack direction="row" spacing={2}>
    <Avatar
        src={image} alt={name}
        sx={{ width: 500, height: 500 }}
      />

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
      <Button onClick={handleVolver} variant="contained" endIcon={<NavigateBeforeIcon />}>
       Volver
      </Button>
      </CardActions>
    </Card>

    </Stack>
           
        </div>
    )
}

export default ItemDetail