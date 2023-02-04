import { ImageList, ImageListItem } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import logo from '../assets/Logo_PokeMartFan.png';
import yoshi from '../assets/yoshidascoffee.png';
import macro from '../assets/Macro_Cosmos_logo.webp';
import Boltund from '../assets/densoku.png';
import CorviTaxi from '../assets/galartaxi.png';
import GalarMin from '../assets/Galarminerals.webp';
import Altru from '../assets/jqediww6vtlke2ovueb4.webp';


const Home = ({gretting}) => {
 const itemData=[
{img: yoshi, title: "Cafeteria yoshida"},
{img: macro, title: "MacroCosmos Inc." },
{img: Boltund, title: "Boltund Express Package" },
{img: CorviTaxi, title: "Corviknight Taxis" },
{img: GalarMin, title: "Galar Minerals" },
{img: Altru, title: "Altru Inc." },
 ]

 useEffect(() => {
  document.title = 'Inicio PokeMart';
}, []);

  return (
    <div>
<Container maxWidth="sm">
    <img src={logo} alt="Logo_PokeMartFan" />
            <h1>
            {gretting} Somos la Empresa mas grande de todo el mundo en la venta de productos de Pokemon llevada por y para fans.
            </h1>
            <p> Estas empresas nos Respaldan : </p>
<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
   
</Container>



    </div>
  )
}

export default Home;