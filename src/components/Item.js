import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Item = ( {name, image, description, price, category, id} ) => {

    return (
        <div>
 <Card sx={{ minWidth:200 }}>
      <CardMedia
        sx={{ height: 300, objectPosition:'top' }}
        image={image}
        title={name}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Precio: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
        Categoría: {category}
        </Typography>
      </CardContent>
      <CardActions>
            <Link className="linknav" to={`/item/${id}`}> 
            <Button variant="contained" startIcon={<NavigateNextIcon />}> Ver mas </Button>
            </Link>
      </CardActions>
    </Card>






        </div>
    )
}

export default Item