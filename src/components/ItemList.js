import Item from "./Item";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";

const ItemList = ({ productos, nombrepagina }) => {

  useEffect(() => {
    document.title = nombrepagina;
  }, [nombrepagina]);


  return (
    <>
      <div>
        <Typography
          gutterBottom
          variant="h3"
          sx={{ display: "flex", justifyContent: "center"}}
          component="div"
        >
          Nuestros Productos
        </Typography>
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
          <Grid item xs={12}>
            <Grid sx={{ display: 'grid', p: 1.5, justifyContent: 'space-around', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3,}} container>
              {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
              ))}
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default ItemList;
