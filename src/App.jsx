import React from "react";
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Product from "./pages/Product";
import Products from "./pages/Products"; 
import Register from "./pages/Register"; 
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Asegúrate de que la ruta de importación sea correcta
import PublicRoute from './components/PublicRoute/PublicRoute'; // Asegúrate de que la ruta de importación sea correcta
import { UserProvider } from './components/UserContext/UserContext'; // Asegúrate de que la ruta de importación sea correcta
import Text from "./components/Text/Text";

const App = () => {
  return (
    <>
      <Text>hola</Text>
    </>
  );
};

export default App;
