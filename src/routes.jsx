import Home from "./pages/pagina-inicial"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Rotas(){
   return (
   <BrowserRouter>
      <Routes>
        {/* Página inicial (cabeçalho + botão) */}
        <Route path="/" element={<Home />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

         {/* Página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />



      </Routes>
</BrowserRouter>
)
}

export default Rotas

