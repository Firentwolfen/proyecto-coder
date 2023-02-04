import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import {
  collection,
  writeBatch,
  documentId,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { Formik } from "formik";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button, Container, Input, Divider, Typography } from "@mui/material";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .max(30, "Máximo 30 caracteres")
    .required("Este campo es requerido"),
  direccion: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(40, "Máximo 40 caracteres")
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("El email no es válido")
    .required("Este campo es obligatorio"),
});

const ariaLabel = { "aria-label": "description" };

const Checkout = () => {
  const { cart, totalCart, emptycart } = useCartContext();

  const [orderId, setOrderId] = useState(null);

  const createOrder = async (values) => {
    const orden = {
      cliente: values,
      items: cart,
      total: totalCart(),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");

    const outOfStock = [];

    const itemsRef = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((prod) => prod.id)
      )
    );

    const productos = await getDocs(itemsRef);

    productos.docs.forEach((doc) => {
      const item = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.cantidad,
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordersRef, orden)
          .then((doc) => {
            setOrderId(doc.id);
            emptycart();
          })
          .catch((error) => console.log(error));
      });
    } else {
      alert("Hay items sin stock");
    }
  };

  if (orderId) {
    return (

<Container maxWidth="xl">
        <Typography
          variant="h2"
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
         Tu compra ha sido exitosa
        </Typography>
        <Divider light />
        <Typography variant="body2" color="text.secondary">
        Tu código de orden es: {orderId}
            </Typography>
        <Link className="linknav" to="/">
          <Button variant="contained" startIcon={<NavigateBeforeIcon />}>
            Volver
          </Button>
        </Link>
      </Container>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
       <Typography
       marginY={3}
          variant="h2"
          noWrap
          component="a"
          sx={{
            display: { xs: "none", md: "flex" },
            fontWeight: 400,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
         Terminar tu compra
        </Typography>
      <Divider light />

      <Formik
        initialValues={{
          nombre: "",
          direccion: "",
          email: "",
        }}
        onSubmit={(values) => {
          // console.log(values)
          createOrder(values);
        }}
        validationSchema={schema}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Tu nombre"
              inputProps={ariaLabel}
              onChange={handleChange}
              type="text"
              name="nombre"
              value={values.nombre}
            />
            {errors.nombre && <p>{errors.nombre}</p>}
            <Input
              placeholder="Tu direccion"
              inputProps={ariaLabel}
              onChange={handleChange}
              type="text"
              name="direccion"
              value={values.direccion}
            />
            {errors.direccion && <p>{errors.direccion}</p>}
            <Input
              placeholder="Tu email"
              inputProps={ariaLabel}
              onChange={handleChange}
              type="email"
              name="email"
              value={values.email}
            />
            {errors.email && <p>{errors.email}</p>}
            <Button variant="contained" color='success' type='submit'>
         Enviar
        </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
