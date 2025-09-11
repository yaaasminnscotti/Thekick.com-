import Home from "./pages/pagina-inicial"
import Login from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Rotas(){
   return (
   <BrowserRouter>
      <Routes>
        {/* Página inicial (cabeçalho + botão) */}
        <Route path="/" element={<Home />} />

        {/* Página de cadastro */}
        <Route path="/login" element={<Login />} />

      </Routes>
</BrowserRouter>
)
}

export default Rotas

