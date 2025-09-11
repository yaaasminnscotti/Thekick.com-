import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecalho from "./pages/Cabecalho";
import Botao from "./pages/Botao";
import Cadastro from "./pages/Cadastro"; 
import "./index.css";

function Home() {
  return (
    <>
      <Cabecalho />
      <Botao />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página inicial (cabeçalho + botão) */}
        <Route path="/" element={<Home />} />

        {/* Página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
