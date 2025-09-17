import Pagina from "./pages/pagina-inicial"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Perfil from "./pages/Perfil"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Rotas(){
   return (
   <BrowserRouter>
      <Routes>
        {/* Página inicial (cabeçalho + botão) */}
        <Route path="/" element={<Pagina />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

         {/* Página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

         {/* Página de perfil */}
        <Route path="/perfil" element={<Perfil />} />


      </Routes>
</BrowserRouter>
)
}

export default Rotas

