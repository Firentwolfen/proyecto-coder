import Item from "./Item"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ItemList = ( {productos} ) => {

    return (
        <div>

<Typography gutterBottom variant="h3" component="div">
        Nuestros Productos
        </Typography>
<Box sx={{ flexGrow: 1 }}>
<Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
        { productos.map((prod) => <Item key={prod.id} {...prod}/>)}
        </Grid>
      </Grid>
    </Grid>
    </Box>

          {/* 
          <h2>Nuestros productos</h2>
            <hr/>

            <section>
                { productos.map((prod) => <Item key={prod.id} {...prod}/>)}
            </section>*/}
        </div>
    )
}

export default ItemList