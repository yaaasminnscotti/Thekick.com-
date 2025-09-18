import Cabeçalho from '../../components/Cabeçalho'
import PostList from '../../components/Posts/PostList'

function Pagina() {
  return (
    <div className="min-h-screen bg-sky-100">
      {/* Cabeçalho */}
      <Cabeçalho />

      {/* Conteúdo principal */}
      <main className="p-6 flex justify-center">
        <div className="w-full max-w-2xl">
         
          <PostList />
        </div>
      </main>
    </div>
  );
}

export default Pagina;