import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const App = () => {
  const mockData = [
    { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
    { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
    { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
    { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
    { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
  ];

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setProductos(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const handleAddProduct = () => {
    if (nuevoProducto.nombre && nuevoProducto.precio && nuevoProducto.categoria) {
      setProductos([
        ...productos,
        {
          id: productos.length + 1,
          nombre: nuevoProducto.nombre,
          precio: parseFloat(nuevoProducto.precio),
          categoria: nuevoProducto.categoria,
        },
      ]);
      setNuevoProducto({ nombre: "", precio: "", categoria: "" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f8f3e7",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: 800,
          bgcolor: "#ffffff",
          borderRadius: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4, color: "#556b2f" }}
          >
            Gestión de Productos
          </Typography>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200 }}>
              <CircularProgress color="secondary" />
            </Box>
          ) : (
            <>
              {/* Tabla de productos */}
              <TableContainer
                component={Paper}
                sx={{
                  mb: 4,
                  borderRadius: 2,
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Table>
                  <TableHead sx={{ bgcolor: "#d1e7dd" }}>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Categoría</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productos.map((producto) => (
                      <TableRow key={producto.id}>
                        <TableCell>{producto.id}</TableCell>
                        <TableCell>{producto.nombre}</TableCell>
                        <TableCell>${producto.precio}</TableCell>
                        <TableCell>{producto.categoria}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Formulario de carga */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  label="Nombre"
                  name="nombre"
                  value={nuevoProducto.nombre}
                  onChange={handleInputChange}
                  size="small"
                  sx={{ bgcolor: "#fafafa", borderRadius: 2 }}
                />
                <TextField
                  label="Precio"
                  name="precio"
                  value={nuevoProducto.precio}
                  onChange={handleInputChange}
                  size="small"
                  type="number"
                  sx={{ bgcolor: "#fafafa", borderRadius: 2 }}
                />
                <TextField
                  label="Categoría"
                  name="categoria"
                  value={nuevoProducto.categoria}
                  onChange={handleInputChange}
                  size="small"
                  sx={{ bgcolor: "#fafafa", borderRadius: 2 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#87a96b",
                    color: "#ffffff",
                    ":hover": { bgcolor: "#6b8e23" },
                  }}
                  onClick={handleAddProduct}
                >
                  Agregar Producto
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;
