import { ImageList, ImageListItem } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import logo from '../assets/Logo_PokeMartFan.png';
import yoshi from '../assets/yoshidascoffee.png';
import macro from '../assets/Macro_Cosmos_logo.webp';
import Boltund from '../assets/densoku.png';
import CorviTaxi from '../assets/galartaxi.png';
import GalarMin from '../assets/Galarminerals.webp';
import Altru from '../assets/jqediww6vtlke2ovueb4.webp';


const ItemListContainer = ({gretting}) => {
 const itemData=[
{img: yoshi, title: "Cafeteria yoshida"},
{img: macro, title: "MacroCosmos Inc." },
{img: Boltund, title: "Boltund Express Package" },
{img: CorviTaxi, title: "Corviknight Taxis" },
{img: GalarMin, title: "Galar Minerals" },
{img: Altru, title: "Altru Inc." },
//{img: "../assets/Logo_MC_Brokerage.webp", title: "PokeJobs Inc."},
//{img: "../assets/Logo_Team_Flare.webp", title: "Flare Labs." },
//{img: "../assets/Devon.jpg", title: "Devon Corporation"},
//{img: "../assets/Pokego.jpg", title: "Pokemon Go" },
//{img: "../assets/lacostepoke.png", title: "Lacostpoke" },
//{img: "../assets/netease_logo.webp", title: "netease_logo" },
//{img: "../assets/machmotors.png", title: "mach_motors" },
//{img: "../assets/Mawlie Comp.jpg", title: "Mawlie_corp" },
//{img: "../assets/silph_co_horizontal_by_biochao_dezuczw-fullview.png", title: "silph_logo" },
 ]

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

export default ItemListContainer;