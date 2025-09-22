import Cabeçalho from '../../components/Cabeçalho'
import Post from '../../components/Posts/Post';

function Pagina() {
  return (
    <div className="min-h-screen bg-sky-100">
      {/* Cabeçalho */}
      <Cabeçalho />

      {/* Conteúdo principal */}
      <Post/>
    </div>
  );
}

export default Pagina;